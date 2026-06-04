// Animated SVG vignettes, kept verbatim from the bentenstudios.com/salbotics reference.
// These are pure SVG + SMIL + CSS-keyframe illustrations (no JS). They are injected as raw
// markup (see <Scene> in App.jsx) so the animations stay byte-for-byte faithful and the
// <figure class="scene"> remains a direct grid child of its row.

export const scenes = {
  // Hero: machine → sensor → broker → database → dashboard
  pipeline: `
<figure class="scene vg" aria-label="Illustration of an industrial telemetry pipeline: factory machines feeding sensor data through an edge node and message broker into a database and live dashboard.">
  <div class="scene-head">
    <span class="dot" style="background: var(--amber);"></span>
    <span class="dot" style="background: var(--teal);"></span>
    <span>telemetry.pipeline · sensor → broker → database → dashboard</span>
  </div>
  <svg viewBox="0 0 1200 360" role="img" aria-hidden="true">
    <line x1="0" y1="296" x2="1200" y2="296" stroke="oklch(82% 0.012 90)" stroke-width="1.5"/>
    <g stroke="oklch(88% 0.01 90)" stroke-width="1">
      <line x1="120" y1="296" x2="90" y2="356"/><line x1="340" y1="296" x2="322" y2="356"/>
      <line x1="560" y1="296" x2="552" y2="356"/><line x1="780" y1="296" x2="788" y2="356"/>
      <line x1="1000" y1="296" x2="1022" y2="356"/>
    </g>
    <g>
      <rect x="62" y="180" width="126" height="116" rx="6" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
      <rect x="74" y="194" width="58" height="44" rx="4" fill="oklch(98% 0.005 90)" stroke="oklch(80% 0.012 90)"/>
      <line x1="103" y1="194" x2="103" y2="218" stroke="oklch(50% 0.03 262)" stroke-width="3"/>
      <rect x="96" y="218" width="14" height="9" rx="2" fill="oklch(50% 0.03 262)"/>
      <rect x="86" y="231" width="34" height="5" rx="2" fill="oklch(75% 0.015 262)"/>
      <rect x="144" y="194" width="32" height="56" rx="3" fill="oklch(96% 0.007 90)" stroke="oklch(80% 0.012 90)"/>
      <circle class="blink" cx="160" cy="206" r="3.2" fill="oklch(56% 0.095 185)"/>
      <circle cx="160" cy="218" r="3.2" fill="oklch(74% 0.145 75)"/>
      <text x="125" y="172" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">CNC-04</text>
    </g>
    <g>
      <rect x="240" y="172" width="84" height="124" rx="5" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
      <rect x="250" y="184" width="64" height="38" rx="3" fill="oklch(98% 0.005 90)" stroke="oklch(80% 0.012 90)"/>
      <g stroke="oklch(50% 0.04 262)" stroke-width="1.3">
        <line x1="258" y1="188" x2="258" y2="218"/><line x1="306" y1="188" x2="306" y2="218"/>
        <line x1="258" y1="196" x2="306" y2="196"/><line x1="258" y1="205" x2="306" y2="205"/><line x1="258" y1="214" x2="306" y2="214"/>
      </g>
      <rect x="266" y="193" width="7" height="6" fill="oklch(56% 0.095 185)"/>
      <rect x="288" y="202" width="7" height="6" fill="oklch(74% 0.145 75)"/>
      <g fill="oklch(85% 0.01 90)">
        <rect x="250" y="230" width="13" height="8" rx="1"/><rect x="267" y="230" width="13" height="8" rx="1"/>
        <rect x="284" y="230" width="13" height="8" rx="1"/><rect x="301" y="230" width="13" height="8" rx="1"/>
      </g>
      <circle class="blink" cx="308" cy="250" r="2.8" fill="oklch(56% 0.095 185)"/>
      <rect x="250" y="258" width="64" height="26" rx="2" fill="oklch(96% 0.007 90)"/>
      <text x="282" y="164" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">PLC · Modbus</text>
    </g>
    <g>
      <rect x="392" y="206" width="70" height="44" rx="5" fill="oklch(93% 0.02 185)" stroke="oklch(56% 0.095 185)"/>
      <g fill="oklch(98% 0.005 90)" stroke="oklch(70% 0.04 185)">
        <rect x="400" y="214" width="13" height="9" rx="1.5"/><rect x="417" y="214" width="13" height="9" rx="1.5"/>
        <rect x="434" y="214" width="19" height="11" rx="1.5"/>
      </g>
      <g fill="oklch(74% 0.145 75)">
        <rect x="400" y="231" width="5" height="5"/><rect x="408" y="231" width="5" height="5"/>
      </g>
      <circle class="blink" cx="452" cy="238" r="2.8" fill="oklch(56% 0.095 185)"/>
      <text x="427" y="198" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">edge node</text>
      <text x="427" y="268" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.082 190)">modbus → mqtt</text>
    </g>
    <g>
      <rect x="540" y="164" width="62" height="132" rx="5" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
      <g fill="oklch(98% 0.005 90)" stroke="oklch(80% 0.012 90)">
        <rect x="548" y="174" width="46" height="17" rx="2"/><rect x="548" y="197" width="46" height="17" rx="2"/>
        <rect x="548" y="220" width="46" height="17" rx="2"/><rect x="548" y="243" width="46" height="17" rx="2"/>
      </g>
      <circle class="blink" cx="556" cy="182" r="2.5" fill="oklch(56% 0.095 185)"/>
      <circle cx="556" cy="205" r="2.5" fill="oklch(56% 0.095 185)"/>
      <circle class="blink" cx="556" cy="228" r="2.5" fill="oklch(74% 0.145 75)"/>
      <circle cx="556" cy="251" r="2.5" fill="oklch(56% 0.095 185)"/>
      <text x="571" y="156" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">MQTT broker</text>
    </g>
    <g>
      <ellipse cx="700" cy="190" rx="38" ry="11" fill="oklch(96% 0.007 90)" stroke="oklch(70% 0.02 262)"/>
      <path d="M662 190 v72 a38 11 0 0 0 76 0 v-72" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
      <ellipse cx="700" cy="226" rx="38" ry="11" fill="none" stroke="oklch(80% 0.012 90)"/>
      <ellipse cx="700" cy="262" rx="38" ry="11" fill="none" stroke="oklch(80% 0.012 90)"/>
      <text x="700" y="158" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">time-series DB</text>
    </g>
    <g>
      <rect x="800" y="128" width="330" height="168" rx="8" fill="oklch(99.2% 0.003 90)" stroke="oklch(70% 0.02 262)"/>
      <rect x="800" y="128" width="330" height="24" rx="8" fill="oklch(94% 0.008 90)"/>
      <circle cx="816" cy="140" r="3.2" fill="oklch(74% 0.145 75)"/>
      <circle cx="828" cy="140" r="3.2" fill="oklch(56% 0.095 185)"/>
      <polyline points="818,262 850,242 880,252 912,222 944,232 976,204 1008,214 1040,188 1072,198 1104,176"
                fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <g fill="oklch(60% 0.04 262 / 0.55)">
        <rect x="820" y="172" width="10" height="24"/><rect x="836" y="164" width="10" height="32"/>
        <rect x="852" y="176" width="10" height="20"/><rect x="868" y="158" width="10" height="38"/>
      </g>
      <rect x="1006" y="160" width="106" height="20" rx="4" fill="oklch(96% 0.04 75)" stroke="oklch(74% 0.145 75)"/>
      <text x="1059" y="174" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(50% 0.11 70)">QUALITY HOLD</text>
      <text x="965" y="120" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">live dashboard</text>
    </g>
    <path id="flowpath" d="M 188 250 C 215 250 215 248 240 246 C 290 242 330 234 392 230 C 440 227 480 227 540 227 C 590 227 620 226 662 226 C 710 226 740 218 800 210"
          fill="none" stroke="oklch(56% 0.095 185 / 0.5)" stroke-width="2" stroke-dasharray="6 7"/>
    <circle class="pulse-dot" r="4" fill="oklch(56% 0.095 185)">
      <animateMotion dur="5.5s" repeatCount="indefinite"><mpath href="#flowpath"/></animateMotion>
    </circle>
    <circle class="pulse-dot" r="4" fill="oklch(74% 0.145 75)">
      <animateMotion dur="5.5s" begin="1.8s" repeatCount="indefinite"><mpath href="#flowpath"/></animateMotion>
    </circle>
    <circle class="pulse-dot" r="4" fill="oklch(28% 0.045 270)">
      <animateMotion dur="5.5s" begin="3.6s" repeatCount="indefinite"><mpath href="#flowpath"/></animateMotion>
    </circle>
  </svg>
</figure>`,

  // NEXUS aluminium line
  nexus: `
<figure class="scene vg" aria-label="Animated diagram of the NEXUS aluminium line: billets moving through casting, quench, and saw stations while the dashboard raises a quality hold.">
  <div class="scene-head">
    <span class="dot" style="background: var(--teal);"></span>
    <span>nexus.aluminium-line · decision support</span>
  </div>
  <svg viewBox="0 0 560 300" role="img" aria-hidden="true">
    <rect x="24" y="22" width="84" height="22" rx="4" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
    <text x="66" y="37" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.082 190)">LINE RUN</text>
    <rect class="blink" x="118" y="22" width="150" height="22" rx="4" fill="oklch(96% 0.04 75)" stroke="oklch(74% 0.145 75)"/>
    <text class="blink" x="193" y="37" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(50% 0.11 70)">QUALITY_HOLD_QUENCH</text>
    <polyline points="380,46 404,36 428,42 452,30 476,38 500,24 524,32"
              fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2" stroke-linecap="round"/>
    <g>
      <rect x="40" y="120" width="100" height="86" rx="6" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
      <rect x="56" y="136" width="68" height="36" rx="3" fill="oklch(98% 0.005 90)" stroke="oklch(80% 0.012 90)"/>
      <circle class="blink" cx="128" cy="132" r="3" fill="oklch(56% 0.095 185)"/>
      <text x="90" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">CAST</text>
    </g>
    <g>
      <rect x="230" y="120" width="100" height="86" rx="6" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
      <path d="M250 140 q8 12 0 24 M270 140 q8 12 0 24 M290 140 q8 12 0 24 M310 140 q8 12 0 24" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2" stroke-linecap="round"/>
      <circle class="blink" cx="318" cy="132" r="3" fill="oklch(74% 0.145 75)"/>
      <text x="280" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">QUENCH</text>
    </g>
    <g>
      <rect x="420" y="120" width="100" height="86" rx="6" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
      <circle cx="470" cy="158" r="20" fill="none" stroke="oklch(50% 0.03 262)" stroke-width="2.5"/>
      <circle cx="470" cy="158" r="20" fill="none" stroke="oklch(80% 0.012 90)" stroke-width="2.5" stroke-dasharray="4 6"/>
      <text x="470" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">SAW</text>
    </g>
    <line x1="30" y1="232" x2="530" y2="232" stroke="oklch(70% 0.02 262)" stroke-width="2"/>
    <g fill="oklch(85% 0.01 90)">
      <circle cx="70" cy="244" r="7"/><circle cx="150" cy="244" r="7"/><circle cx="230" cy="244" r="7"/>
      <circle cx="310" cy="244" r="7"/><circle cx="390" cy="244" r="7"/><circle cx="470" cy="244" r="7"/>
    </g>
    <rect class="billet" x="60" y="218" width="70" height="12" rx="3" fill="oklch(74% 0.145 75)"/>
    <text x="280" y="282" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">7 stations simulated · alerts to action board</text>
  </svg>
</figure>`,

  // Factory energy monitor
  energy: `
<figure class="scene vg" aria-label="Animated diagram of the factory energy monitor: a power meter needle moving while per-machine consumption bars rise and fall.">
  <div class="scene-head">
    <span class="dot" style="background: var(--amber);"></span>
    <span>factory.energy-monitor · RX380 meters</span>
  </div>
  <svg viewBox="0 0 560 300" role="img" aria-hidden="true">
    <path d="M 20 130 A 78 78 0 0 1 160 130" fill="none" stroke="oklch(88% 0.01 90)" stroke-width="10" stroke-linecap="round" transform="translate(0,-4)"/>
    <path d="M 20 130 A 78 78 0 0 1 90 48" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="10" stroke-linecap="round" transform="translate(0,-4)"/>
    <line class="needle" x1="90" y1="120" x2="90" y2="58" stroke="oklch(28% 0.045 270)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="90" cy="120" r="6" fill="oklch(28% 0.045 270)"/>
    <g font-family="IBM Plex Mono, monospace" font-size="15" text-anchor="middle">
      <text class="fade-a" x="90" y="158" fill="oklch(44% 0.082 190)">42.7 kW</text>
      <text class="fade-b" x="90" y="158" fill="oklch(50% 0.11 70)">61.3 kW</text>
    </g>
    <text x="90" y="182" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">zone 2 · live draw</text>
    <g>
      <line x1="230" y1="216" x2="540" y2="216" stroke="oklch(80% 0.012 90)"/>
      <rect class="bar-p" x="246" y="96" width="30" height="120" fill="oklch(56% 0.095 185 / 0.75)" style="animation-delay: 0s;"/>
      <rect class="bar-p" x="296" y="116" width="30" height="100" fill="oklch(56% 0.095 185 / 0.75)" style="animation-delay: 0.5s;"/>
      <rect class="bar-p" x="346" y="86" width="30" height="130" fill="oklch(74% 0.145 75 / 0.85)" style="animation-delay: 0.9s;"/>
      <rect class="bar-p" x="396" y="126" width="30" height="90" fill="oklch(56% 0.095 185 / 0.75)" style="animation-delay: 1.3s;"/>
      <rect class="bar-p" x="446" y="106" width="30" height="110" fill="oklch(56% 0.095 185 / 0.75)" style="animation-delay: 1.7s;"/>
      <rect class="bar-p" x="496" y="136" width="30" height="80" fill="oklch(56% 0.095 185 / 0.75)" style="animation-delay: 2.1s;"/>
      <g font-family="IBM Plex Mono, monospace" font-size="9.5" fill="oklch(44% 0.022 262)" text-anchor="middle">
        <text x="261" y="232">M01</text><text x="311" y="232">M02</text><text x="361" y="232">M07</text>
        <text x="411" y="232">M09</text><text x="461" y="232">M12</text><text x="511" y="232">M15</text>
      </g>
      <text x="385" y="70" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">kWh by machine · the bill, explained</text>
    </g>
    <text x="280" y="282" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">meter → Modbus → MQTT → dashboard</text>
  </svg>
</figure>`,

  // Edge telemetry platform
  edge: `
<figure class="scene vg" aria-label="Animated diagram of the edge telemetry platform: service pods scaling up beside an API node with passing health checks.">
  <div class="scene-head">
    <span class="dot" style="background: var(--teal);"></span>
    <span>edge.telemetry-platform · scale + health</span>
  </div>
  <svg viewBox="0 0 560 300" role="img" aria-hidden="true">
    <rect x="50" y="106" width="120" height="88" rx="8" fill="oklch(93% 0.02 185)" stroke="oklch(56% 0.095 185)"/>
    <text x="110" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="oklch(44% 0.082 190)">FastAPI</text>
    <text x="110" y="160" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">:8000</text>
    <circle class="blink" cx="158" cy="118" r="3" fill="oklch(56% 0.095 185)"/>
    <g stroke="oklch(56% 0.095 185 / 0.5)" stroke-width="1.6" stroke-dasharray="5 6" fill="none">
      <path d="M170 130 C 220 120 240 92 286 84"/>
      <path d="M170 150 C 225 150 245 150 286 150"/>
      <path d="M170 170 C 220 180 240 208 286 216"/>
    </g>
    <g class="pod" style="animation-delay: 0s;">
      <rect x="290" y="58" width="104" height="52" rx="7" fill="oklch(99.2% 0.003 90)" stroke="oklch(70% 0.02 262)"/>
      <text x="342" y="80" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(28% 0.045 270)">pod · worker-1</text>
      <circle cx="306" cy="96" r="3" fill="oklch(56% 0.095 185)"/>
      <text x="348" y="100" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.082 190)">healthy</text>
    </g>
    <g class="pod" style="animation-delay: 1.4s;">
      <rect x="290" y="124" width="104" height="52" rx="7" fill="oklch(99.2% 0.003 90)" stroke="oklch(70% 0.02 262)"/>
      <text x="342" y="146" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(28% 0.045 270)">pod · worker-2</text>
      <circle cx="306" cy="162" r="3" fill="oklch(56% 0.095 185)"/>
      <text x="348" y="166" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.082 190)">healthy</text>
    </g>
    <g class="pod" style="animation-delay: 2.8s;">
      <rect x="290" y="190" width="104" height="52" rx="7" fill="oklch(99.2% 0.003 90)" stroke="oklch(70% 0.02 262)"/>
      <text x="342" y="212" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(28% 0.045 270)">pod · worker-3</text>
      <circle cx="306" cy="228" r="3" fill="oklch(56% 0.095 185)"/>
      <text x="348" y="232" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.082 190)">scaling</text>
    </g>
    <g>
      <ellipse cx="476" cy="106" rx="32" ry="9" fill="oklch(96% 0.007 90)" stroke="oklch(70% 0.02 262)"/>
      <path d="M444 106 v64 a32 9 0 0 0 64 0 v-64" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
      <text x="476" y="92" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">PostgreSQL</text>
      <rect x="436" y="206" width="84" height="20" rx="4" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
      <text class="blink" x="478" y="220" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.082 190)">probe 200 OK</text>
    </g>
    <text x="280" y="282" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">autoscaling · health probes · load-tested</text>
  </svg>
</figure>`,

  // File compressor
  compressor: `
<figure class="scene vg" aria-label="Animated diagram of the file compressor: a large document squeezing down to a small one with its size label dropping.">
  <div class="scene-head">
    <span class="dot" style="background: var(--amber);"></span>
    <span>salbotics.filecompressor · desktop + CLI</span>
  </div>
  <svg viewBox="0 0 560 300" role="img" aria-hidden="true">
    <g class="squeeze">
      <path d="M120 70 h70 l28 28 v118 h-98 z" fill="oklch(99.2% 0.003 90)" stroke="oklch(70% 0.02 262)" stroke-width="2"/>
      <path d="M190 70 v28 h28" fill="none" stroke="oklch(70% 0.02 262)" stroke-width="2"/>
      <g stroke="oklch(85% 0.01 90)" stroke-width="3" stroke-linecap="round">
        <line x1="136" y1="120" x2="200" y2="120"/><line x1="136" y1="140" x2="200" y2="140"/>
        <line x1="136" y1="160" x2="184" y2="160"/><line x1="136" y1="180" x2="196" y2="180"/>
      </g>
    </g>
    <text x="169" y="48" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="oklch(28% 0.045 270)">12.4 MB</text>
    <g stroke="oklch(56% 0.095 185)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <line x1="276" y1="146" x2="336" y2="146"/>
      <path d="M324 134 L336 146 L324 158"/>
    </g>
    <text x="306" y="130" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.082 190)">compress</text>
    <path d="M398 122 h46 l18 18 v76 h-64 z" fill="oklch(93% 0.02 185)" stroke="oklch(56% 0.095 185)" stroke-width="2"/>
    <path d="M444 122 v18 h18" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2"/>
    <g stroke="oklch(70% 0.05 185)" stroke-width="2.5" stroke-linecap="round">
      <line x1="410" y1="158" x2="450" y2="158"/><line x1="410" y1="172" x2="444" y2="172"/>
      <line x1="410" y1="186" x2="452" y2="186"/>
    </g>
    <g font-family="IBM Plex Mono, monospace" font-size="13" text-anchor="middle">
      <text class="fade-a" x="430" y="106" fill="oklch(44% 0.082 190)">1.1 MB</text>
      <text class="fade-b" x="430" y="106" fill="oklch(44% 0.082 190)">0.9 MB</text>
    </g>
    <text x="280" y="282" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">PDF + image batches · same quality, smaller files</text>
  </svg>
</figure>`,

  // ── LAYMAN EXPLAINERS (plain language, no jargon) ──────────────────

  // 1 · PRIMARY — messy operation → clear, measured picture
  messyToMeasured: `
<figure class="scene vg" aria-label="From a messy operation (scattered paper, chats, guesswork) to one clear, measured screen.">
  <div class="scene-head">
    <span class="dot" style="background: var(--amber);"></span>
    <span class="dot" style="background: var(--teal);"></span>
    <span>before → after · scattered work becomes a clear picture</span>
  </div>
  <svg viewBox="0 0 760 300" role="img" aria-hidden="true">
    <!-- LEFT: the messy "today" -->
    <g transform="rotate(-8 110 150)">
      <rect x="60" y="96" width="96" height="116" rx="4" fill="oklch(99.2% 0.003 90)" stroke="oklch(80% 0.012 90)"/>
      <g stroke="oklch(86% 0.01 90)" stroke-width="3" stroke-linecap="round"><line x1="74" y1="124" x2="142" y2="124"/><line x1="74" y1="142" x2="142" y2="142"/><line x1="74" y1="160" x2="120" y2="160"/></g>
    </g>
    <g transform="rotate(7 150 165)"><rect x="98" y="112" width="96" height="116" rx="4" fill="oklch(98% 0.005 90)" stroke="oklch(80% 0.012 90)"/></g>
    <g>
      <rect x="56" y="36" width="92" height="42" rx="10" fill="oklch(93% 0.02 185)" stroke="oklch(70% 0.04 185)"/>
      <path d="M82 78 l0 14 l16 -14 z" fill="oklch(93% 0.02 185)" stroke="oklch(70% 0.04 185)"/>
      <g stroke="oklch(56% 0.095 185)" stroke-width="3" stroke-linecap="round"><line x1="70" y1="52" x2="134" y2="52"/><line x1="70" y1="64" x2="112" y2="64"/></g>
    </g>
    <text class="blink" x="206" y="116" font-family="IBM Plex Mono, monospace" font-size="40" fill="oklch(74% 0.145 75)">?</text>
    <text x="132" y="262" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="oklch(44% 0.022 262)">today · paper, chats, guesswork</text>

    <!-- MIDDLE: make it visible -->
    <path id="flow-messy" d="M 236 150 C 330 150 380 150 526 150" fill="none" stroke="oklch(56% 0.095 185 / 0.5)" stroke-width="2" stroke-dasharray="6 7"/>
    <text x="382" y="134" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.082 190)">make it visible</text>
    <circle class="pulse-dot" r="4" fill="oklch(56% 0.095 185)"><animateMotion dur="4.5s" repeatCount="indefinite"><mpath href="#flow-messy"/></animateMotion></circle>
    <circle class="pulse-dot" r="4" fill="oklch(74% 0.145 75)"><animateMotion dur="4.5s" begin="1.5s" repeatCount="indefinite"><mpath href="#flow-messy"/></animateMotion></circle>

    <!-- RIGHT: one clear screen -->
    <g>
      <rect x="528" y="70" width="206" height="150" rx="8" fill="oklch(99.2% 0.003 90)" stroke="oklch(70% 0.02 262)"/>
      <rect x="528" y="70" width="206" height="22" rx="8" fill="oklch(94% 0.008 90)"/>
      <circle cx="542" cy="81" r="3" fill="oklch(74% 0.145 75)"/><circle cx="553" cy="81" r="3" fill="oklch(56% 0.095 185)"/>
      <polyline points="546,190 576,178 606,184 636,160 666,168 696,140 718,150" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <rect class="blink" x="616" y="104" width="106" height="20" rx="5" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
      <text class="blink" x="669" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.082 190)">ON TRACK</text>
      <text x="631" y="262" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="oklch(44% 0.022 262)">clear · one screen you trust</text>
    </g>
  </svg>
</figure>`,

  // 2 · the consultation as a simple 4-step map
  decisionMap: `
<figure class="scene vg" aria-label="The consultation as a simple four-step map: where you are, what to fix first, build or wait, spend wisely.">
  <div class="scene-head">
    <span class="dot" style="background: var(--teal);"></span>
    <span>the conversation · how / when / what — before you spend</span>
  </div>
  <svg viewBox="0 0 760 260" role="img" aria-hidden="true">
    <path id="flow-decision" d="M 70 150 C 180 90 230 90 320 130 C 410 170 470 170 560 120 C 620 88 660 92 700 120" fill="none" stroke="oklch(80% 0.012 90)" stroke-width="2" stroke-dasharray="2 8" stroke-linecap="round"/>
    <g font-family="IBM Plex Mono, monospace">
      <circle cx="70" cy="150" r="20" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
      <text x="70" y="156" text-anchor="middle" font-size="15" fill="oklch(44% 0.082 190)">1</text>
      <text x="70" y="196" text-anchor="middle" font-size="11" fill="oklch(44% 0.022 262)">where you</text>
      <text x="70" y="210" text-anchor="middle" font-size="11" fill="oklch(44% 0.022 262)">are now</text>
      <circle cx="320" cy="130" r="20" fill="oklch(96% 0.007 90)" stroke="oklch(70% 0.02 262)"/>
      <text x="320" y="136" text-anchor="middle" font-size="15" fill="oklch(28% 0.045 270)">2</text>
      <text x="320" y="176" text-anchor="middle" font-size="11" fill="oklch(44% 0.022 262)">what to</text>
      <text x="320" y="190" text-anchor="middle" font-size="11" fill="oklch(44% 0.022 262)">fix first</text>
      <circle cx="560" cy="120" r="20" fill="oklch(96% 0.007 90)" stroke="oklch(70% 0.02 262)"/>
      <text x="560" y="126" text-anchor="middle" font-size="15" fill="oklch(28% 0.045 270)">3</text>
      <text x="560" y="166" text-anchor="middle" font-size="11" fill="oklch(44% 0.022 262)">build now</text>
      <text x="560" y="180" text-anchor="middle" font-size="11" fill="oklch(44% 0.022 262)">or wait?</text>
      <circle cx="700" cy="120" r="20" fill="oklch(96% 0.04 75)" stroke="oklch(74% 0.145 75)"/>
      <text x="700" y="126" text-anchor="middle" font-size="15" fill="oklch(50% 0.11 70)">4</text>
      <text x="700" y="166" text-anchor="middle" font-size="11" fill="oklch(44% 0.022 262)">spend</text>
      <text x="700" y="180" text-anchor="middle" font-size="11" fill="oklch(44% 0.022 262)">wisely</text>
    </g>
    <circle class="pulse-dot" r="5" fill="oklch(56% 0.095 185)"><animateMotion dur="6s" repeatCount="indefinite"><mpath href="#flow-decision"/></animateMotion></circle>
  </svg>
</figure>`,

  // 3 · the invisible bill, made visible
  costOfNotMeasuring: `
<figure class="scene vg" aria-label="The cost of not measuring: a rising bill becomes visible as where the money actually goes.">
  <div class="scene-head">
    <span class="dot" style="background: var(--amber);"></span>
    <span>the invisible bill · made visible</span>
  </div>
  <svg viewBox="0 0 560 300" role="img" aria-hidden="true">
    <text x="120" y="58" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="oklch(44% 0.022 262)">your monthly bill</text>
    <g font-family="IBM Plex Mono, monospace" font-size="26" text-anchor="middle">
      <text class="fade-a" x="120" y="116" fill="oklch(44% 0.022 262)">RM 38k</text>
      <text class="fade-b" x="120" y="116" fill="oklch(50% 0.11 70)">RM 52k</text>
    </g>
    <g stroke="oklch(74% 0.145 75)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <line x1="120" y1="168" x2="120" y2="136"/><path d="M108 150 L120 134 L132 150"/>
    </g>
    <text x="120" y="196" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(50% 0.11 70)">rising · source unclear</text>
    <g stroke="oklch(56% 0.095 185)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="196" y1="150" x2="252" y2="150"/><path d="M240 138 L252 150 L240 162"/></g>
    <g>
      <line x1="290" y1="216" x2="540" y2="216" stroke="oklch(80% 0.012 90)"/>
      <rect class="bar-p" x="300" y="120" width="44" height="96" fill="oklch(56% 0.095 185 / 0.75)" style="animation-delay:0s"/>
      <rect class="bar-p" x="368" y="96" width="44" height="120" fill="oklch(74% 0.145 75 / 0.85)" style="animation-delay:0.6s"/>
      <rect class="bar-p" x="436" y="146" width="44" height="70" fill="oklch(56% 0.095 185 / 0.75)" style="animation-delay:1.1s"/>
      <g font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)" text-anchor="middle">
        <text x="322" y="234">one line</text><text x="390" y="234">night shift</text><text x="458" y="234">idle time</text>
      </g>
      <text x="400" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">where it actually goes</text>
    </g>
    <text x="280" y="278" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">you can't cut what you can't see</text>
  </svg>
</figure>`,

  // 4 · how it works, in three plain steps
  howItWorksSimple: `
<figure class="scene vg" aria-label="How it works in plain terms: your operation, a small sensor or existing data, and a screen you understand.">
  <div class="scene-head">
    <span class="dot" style="background: var(--teal);"></span>
    <span>how it works · no jargon</span>
  </div>
  <svg viewBox="0 0 720 230" role="img" aria-hidden="true">
    <g>
      <rect x="40" y="78" width="150" height="92" rx="8" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
      <path d="M70 150 v-30 l18 12 v-12 l18 12 v-12 l18 12 v30 z" fill="oklch(98% 0.005 90)" stroke="oklch(70% 0.02 262)"/>
      <rect x="120" y="120" width="40" height="30" rx="2" fill="oklch(96% 0.007 90)" stroke="oklch(80% 0.012 90)"/>
      <text x="115" y="190" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">your operation</text>
    </g>
    <g>
      <rect x="285" y="86" width="150" height="76" rx="8" fill="oklch(93% 0.02 185)" stroke="oklch(56% 0.095 185)"/>
      <circle class="blink" cx="312" cy="110" r="4" fill="oklch(56% 0.095 185)"/>
      <text x="362" y="114" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.082 190)">a small sensor</text>
      <text x="362" y="130" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.082 190)">or data you have</text>
      <text x="360" y="190" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">we connect it</text>
    </g>
    <g>
      <rect x="540" y="74" width="140" height="96" rx="10" fill="oklch(99.2% 0.003 90)" stroke="oklch(70% 0.02 262)"/>
      <rect x="556" y="88" width="108" height="58" rx="4" fill="oklch(96% 0.007 90)" stroke="oklch(80% 0.012 90)"/>
      <polyline points="564,138 586,126 608,132 630,114 656,120" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="610" y="190" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.022 262)">a screen you read</text>
    </g>
    <path id="flow-how" d="M 190 124 H 285" fill="none" stroke="oklch(56% 0.095 185 / 0.5)" stroke-width="2" stroke-dasharray="6 7"/>
    <path id="flow-how2" d="M 435 124 H 540" fill="none" stroke="oklch(56% 0.095 185 / 0.5)" stroke-width="2" stroke-dasharray="6 7"/>
    <circle class="pulse-dot" r="4" fill="oklch(56% 0.095 185)"><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#flow-how"/></animateMotion></circle>
    <circle class="pulse-dot" r="4" fill="oklch(74% 0.145 75)"><animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite"><mpath href="#flow-how2"/></animateMotion></circle>
  </svg>
</figure>`,
};
