// Post-build step for GitHub Pages.
//
// 1. dist/404.html: a copy of the app, so unknown paths still render the "not found" page.
// 2. A real dist/<route>.html for every app route, with that route's title, description and
//    canonical URL, so direct visits and search engines get HTTP 200 instead of the 404 fallback.
// 3. dist/sitemap.xml and dist/robots.txt listing those routes.

import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { labs, projects } from "../src/data.js";

const site = "https://salbotics.uk";
const distDir = join(process.cwd(), "dist");
const indexPath = join(distDir, "index.html");

if (!existsSync(indexPath)) {
  throw new Error("Cannot create GitHub Pages fallback because dist/index.html is missing.");
}

copyFileSync(indexPath, join(distDir, "404.html"));

// Notes: read slugs and titles from the published module (it imports images, so it can't be
// imported in Node). Drafts are never listed.
const publishedSource = readFileSync(join(process.cwd(), "src/note-content/published.js"), "utf8");
const notes = [
  ...publishedSource.matchAll(/slug: "([^"]+)",[\s\S]*?number: "([^"]+)",[\s\S]*?title: "([^"]+)",/g),
].map(([, slug, number, title]) => ({ slug, number, title }));

const routes = [
  { path: "/" },
  {
    path: "/projects",
    title: "Engineering Projects | Muhamad Solehuddin",
    description:
      "Selected engineering projects by Muhamad Solehuddin: a public PLC troubleshooting lab, OPC UA and IIoT condition assessment, signal and routing studies, PLC and vision verification, AI-assisted engineering workflow, and a deployed factory energy system.",
  },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    title: `${project.title} | Muhamad Solehuddin`,
    description: project.summary,
  })),
  { path: "/labs", title: "Open Labs | Salbotics Engineering Lab", description: labs.intro },
];
if (notes.length) {
  routes.push({
    path: "/notes",
    title: "Engineering Notes | Salbotics Engineering Lab",
    description: "Short write-ups of what my design checks found, why it matters, and what I changed.",
  });
  for (const note of notes) {
    routes.push({
      path: `/notes/${note.slug}`,
      title: `${note.number}: ${note.title} | Salbotics Engineering Notes`,
      description: `${note.title} An engineering note from Salbotics, with its evidence label and limits.`,
    });
  }
}

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const template = readFileSync(indexPath, "utf8");

function replaceOnce(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`index.html is missing ${pattern}`);
  return html.replace(pattern, replacement);
}

for (const route of routes) {
  if (route.path === "/") continue;
  const url = `${site}${route.path}`;
  const title = escapeAttr(route.title);
  const description = escapeAttr(route.description);
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = replaceOnce(html, /(<meta\s+name="description"\s+content=")[^"]*"/, `$1${description}"`);
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*"/, `$1${url}"`);
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*"/, `$1${url}"`);
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*"/, `$1${title}"`);
  html = replaceOnce(html, /(<meta name="twitter:title" content=")[^"]*"/, `$1${title}"`);
  html = replaceOnce(html, /(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${description}"`);
  html = replaceOnce(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*"/, `$1${description}"`);
  // /labs -> dist/labs.html. GitHub Pages serves it at the clean URL with HTTP 200; a folder with
  // index.html would add a redirect to /labs/ instead.
  const parts = route.path.split("/").filter(Boolean);
  const dir = join(distDir, ...parts.slice(0, -1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${parts.at(-1)}.html`), html);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  routes.map((route) => `  <url><loc>${site}${route.path}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
  "\n</urlset>\n";
writeFileSync(join(distDir, "sitemap.xml"), sitemap);
writeFileSync(join(distDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);

console.log(`404.html, ${routes.length - 1} route pages, sitemap.xml and robots.txt written.`);
