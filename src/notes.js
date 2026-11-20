// Engineering notes: one finding per note, written up as a short engineering report.
//
// Publication gate: a note appears on the live site only when `published` is true.
// Set it only after the note has passed the 5-gate review in PUBLISHING_SYSTEM.md
// (truth, claim state, privacy and IP, safety, usefulness) and the owner has
// approved the exact text and picture. Drafts render only in `npm run dev`,
// with a draft banner, so they can be reviewed in the browser first.

import { draftNotes } from "./note-content/drafts";
import { publishedNotes } from "./note-content/published";

export const noteEvidenceLabels = {
  calculated: "Calculated",
  "cad-checked": "CAD-checked",
  simulated: "Simulated",
  "software-tested": "Software-tested",
  "bench-tested": "Bench-tested",
  measured: "Measured",
};

export const notesSection = {
  kicker: "Salbotics engineering notes",
  title: "Engineering notes: one finding, checked and explained.",
  sub:
    "Short write-ups of what my design checks found, why it matters, and what I changed. " +
    "Every result carries its evidence label, so calculated, simulated and measured work stay distinct. " +
    "When hardware is measured, the same note is updated and its label goes up.",
  licence:
    "Text and figures are licensed CC BY 4.0: reuse them freely, with credit to Salbotics / Muhamad Solehuddin.",
  licenceHref: "https://creativecommons.org/licenses/by/4.0/",
};

// Drafts are included only in dev. In a production build this branch is constant-false, so the
// drafts module is tree-shaken out of the bundle.
const allNotes = import.meta.env.DEV ? [...publishedNotes, ...draftNotes] : publishedNotes;

export const notes = allNotes;

export const getNoteBySlug = (slug) => notes.find((note) => note.slug === slug);
