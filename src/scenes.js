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

  // Selected projects (2026-10): objective → decision → result vignettes
  opcuaCondition: `
<figure class="scene vg" aria-label="Animated diagram of the NEXUS OPC UA study: a flat furnace temperature reading is classified as steady or frozen by checking whether the acquisition sequence advances, then passed through MQTT, the database, the API and Grafana.">
  <div class="scene-head">
    <span class="dot" style="background: var(--teal);"></span>
    <span>nexus.opcua · condition assessment</span>
  </div>
  <svg viewBox="0 0 560 300" role="img" aria-hidden="true">
    <rect x="24" y="18" width="92" height="22" rx="4" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
    <text x="70" y="33" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="oklch(44% 0.082 190)">READ-ONLY</text>
    <text x="74" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">FURNACE · OPC UA</text>
    <rect x="30" y="72" width="88" height="70" rx="6" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
    <path d="M48 132 q6 -12 0 -24 q-6 -12 0 -24 M74 132 q6 -12 0 -24 q-6 -12 0 -24 M100 132 q6 -12 0 -24 q-6 -12 0 -24" fill="none" stroke="oklch(74% 0.145 75)" stroke-width="2" stroke-linecap="round"/>
    <circle class="blink" cx="110" cy="80" r="3" fill="oklch(56% 0.095 185)"/>

    <text x="226" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">billet_temp_c</text>
    <rect x="140" y="72" width="172" height="70" rx="6" fill="oklch(99.2% 0.003 90)" stroke="oklch(88% 0.01 90)"/>
    <polyline points="150,118 170,112 190,104 210,98 230,96 250,96 270,96 290,96 302,96" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2" stroke-linecap="round"/>
    <text x="150" y="136" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.022 262)">value unchanged</text>
    <g font-family="IBM Plex Mono, monospace" font-size="9.5">
      <text class="fade-a" x="302" y="86" text-anchor="end" fill="oklch(44% 0.082 190)">seq 1042 → 1043</text>
      <text class="fade-b" x="302" y="86" text-anchor="end" fill="oklch(50% 0.11 70)">seq 1042 → 1042</text>
    </g>

    <text x="436" y="62" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">DIAGNOSIS</text>
    <rect x="336" y="72" width="200" height="104" rx="6" fill="oklch(99.2% 0.003 90)" stroke="oklch(70% 0.02 262)"/>
    <g font-family="IBM Plex Mono, monospace" font-size="10">
      <rect class="fade-a" x="346" y="80" width="180" height="20" rx="3" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
      <rect class="fade-b" x="346" y="102" width="180" height="20" rx="3" fill="oklch(96% 0.04 75)" stroke="oklch(74% 0.145 75)"/>
      <text x="356" y="94" fill="oklch(28% 0.045 270)">STEADY PROCESS</text>
      <text x="356" y="116" fill="oklch(28% 0.045 270)">FROZEN ACQUISITION</text>
      <text x="356" y="138" fill="oklch(44% 0.022 262)">BAD / UNCERTAIN SOURCE</text>
      <text x="356" y="160" fill="oklch(44% 0.022 262)">CONNECTION LOST</text>
    </g>

    <path id="opcflow" d="M60 222 H500" fill="none" stroke="oklch(70% 0.02 262)" stroke-width="1.5" stroke-dasharray="4 5"/>
    <circle class="pulse-dot" r="4" fill="oklch(56% 0.095 185)"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#opcflow"/></animateMotion></circle>
    <circle class="pulse-dot" r="4" fill="oklch(74% 0.145 75)"><animateMotion dur="4s" begin="2s" repeatCount="indefinite"><mpath href="#opcflow"/></animateMotion></circle>
    <g font-family="IBM Plex Mono, monospace" font-size="9.5" text-anchor="middle">
      <rect x="30" y="210" width="62" height="24" rx="4" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/><text x="61" y="226" fill="oklch(28% 0.045 270)">OPC UA</text>
      <rect x="132" y="210" width="62" height="24" rx="4" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/><text x="163" y="226" fill="oklch(28% 0.045 270)">MQTT</text>
      <rect x="234" y="210" width="80" height="24" rx="4" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/><text x="274" y="226" fill="oklch(28% 0.045 270)">TimescaleDB</text>
      <rect x="354" y="210" width="62" height="24" rx="4" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/><text x="385" y="226" fill="oklch(28% 0.045 270)">API</text>
      <rect x="456" y="210" width="74" height="24" rx="4" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/><text x="493" y="226" fill="oklch(44% 0.082 190)">Grafana</text>
    </g>
    <text x="280" y="256" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="oklch(44% 0.082 190)">62 cases pass · CI matched one sample to its exact DB row</text>
    <text x="280" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">same reading, four explanations · simulated furnace</text>
  </svg>
</figure>`,

  bocobotStudy: `
<figure class="scene vg" aria-label="Animated diagram of the BocoBot study: a line-following robot's synthetic sensor trace with a shift, spikes and a gap is labelled by condition, and a route is found on an invented warehouse graph.">
  <div class="scene-head">
    <span class="dot" style="background: var(--teal);"></span>
    <span>bocobot.study · signal → condition · graph → route</span>
  </div>
  <svg viewBox="0 0 560 300" role="img" aria-hidden="true">
    <text x="140" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">LINE SENSOR · SYNTHETIC</text>
    <path d="M30 70 C 90 40, 150 100, 250 60" fill="none" stroke="oklch(28% 0.045 270)" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
    <rect x="112" y="58" width="34" height="24" rx="6" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
    <circle cx="116" cy="84" r="5" fill="oklch(85% 0.01 90)" stroke="oklch(70% 0.02 262)"/><circle cx="142" cy="84" r="5" fill="oklch(85% 0.01 90)" stroke="oklch(70% 0.02 262)"/>
    <circle class="blink" cx="129" cy="66" r="3" fill="oklch(56% 0.095 185)"/>
    <rect x="24" y="104" width="232" height="96" rx="6" fill="oklch(99.2% 0.003 90)" stroke="oklch(88% 0.01 90)"/>
    <line x1="34" y1="152" x2="246" y2="152" stroke="oklch(88% 0.01 90)" stroke-dasharray="3 4"/>
    <polyline points="34,150 54,148 74,151 94,140 104,139 114,141" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2"/>
    <polyline points="114,141 124,118 132,142 152,140 160,182 168,140 176,139" fill="none" stroke="oklch(74% 0.145 75)" stroke-width="2"/>
    <polyline points="206,140 226,141 246,139" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2"/>
    <text x="191" y="128" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="oklch(44% 0.022 262)">gap</text>
    <g font-family="IBM Plex Mono, monospace" font-size="9.5">
      <rect x="34" y="210" width="68" height="20" rx="3" fill="oklch(96% 0.04 75)" stroke="oklch(74% 0.145 75)"/><text x="68" y="224" text-anchor="middle" fill="oklch(50% 0.11 70)">SHIFTED</text>
      <rect class="fade-a" x="110" y="210" width="62" height="20" rx="3" fill="oklch(96% 0.04 75)" stroke="oklch(74% 0.145 75)"/><text class="fade-a" x="141" y="224" text-anchor="middle" fill="oklch(50% 0.11 70)">SPIKY</text>
      <rect class="fade-b" x="110" y="210" width="90" height="20" rx="3" fill="oklch(96% 0.04 75)" stroke="oklch(74% 0.145 75)"/><text class="fade-b" x="155" y="224" text-anchor="middle" fill="oklch(50% 0.11 70)">INCOMPLETE</text>
    </g>
    <text x="140" y="250" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.022 262)">cause not claimed: bias and offset look identical</text>

    <text x="420" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">INVENTED WAREHOUSE GRAPH</text>
    <g stroke="oklch(85% 0.01 90)" stroke-width="2">
      <line x1="320" y1="70" x2="400" y2="70"/><line x1="400" y1="70" x2="500" y2="70"/>
      <line x1="320" y1="70" x2="320" y2="150"/><line x1="400" y1="70" x2="400" y2="150"/><line x1="500" y1="70" x2="500" y2="150"/>
      <line x1="320" y1="150" x2="400" y2="150"/><line x1="400" y1="150" x2="500" y2="150"/>
      <line x1="320" y1="150" x2="320" y2="210"/><line x1="500" y1="150" x2="500" y2="210"/><line x1="320" y1="210" x2="500" y2="210"/>
    </g>
    <path id="bocoroute" d="M320 70 H400 V150 H500 V210" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle class="pulse-dot" r="5" fill="oklch(74% 0.145 75)"><animateMotion dur="3.6s" repeatCount="indefinite"><mpath href="#bocoroute"/></animateMotion></circle>
    <g fill="oklch(99.2% 0.003 90)" stroke="oklch(28% 0.045 270)" stroke-width="2">
      <circle cx="320" cy="70" r="8"/><circle cx="400" cy="70" r="8"/><circle cx="500" cy="70" r="8"/>
      <circle cx="320" cy="150" r="8"/><circle cx="400" cy="150" r="8"/><circle cx="500" cy="150" r="8"/>
      <circle cx="320" cy="210" r="8"/><circle cx="500" cy="210" r="8"/>
    </g>
    <text x="298" y="56" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.082 190)">start</text>
    <text x="512" y="228" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.082 190)">goal</text>
    <g font-family="IBM Plex Mono, monospace" font-size="9.5" text-anchor="middle">
      <text class="fade-a" x="410" y="250" fill="oklch(44% 0.082 190)">Dijkstra cost = A* cost</text>
      <text class="fade-b" x="410" y="250" fill="oklch(44% 0.082 190)">256 / 256 pairs checked</text>
    </g>
    <text x="280" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">30 synthetic runs · 6 scenarios · 20 routing tests</text>
  </svg>
</figure>`,

  plcVision: `
<figure class="scene vg" aria-label="Animated diagram of two software checks: PLC training-model timing lanes for start, stop, emergency stop and motor output with 18 of 18 checks passing, and a QR frame being scanned with 5 of 5 payloads decoded.">
  <div class="scene-head">
    <span class="dot" style="background: var(--teal);"></span>
    <span>plc.sequence + vision.qr · bounded checks</span>
  </div>
  <svg viewBox="0 0 560 300" role="img" aria-hidden="true">
    <text x="158" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">PLC TRAINING MODEL · 4 TRACES</text>
    <rect x="24" y="46" width="268" height="168" rx="6" fill="oklch(99.2% 0.003 90)" stroke="oklch(88% 0.01 90)"/>
    <text x="34" y="74" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="oklch(44% 0.022 262)">START</text>
    <polyline points="96,74 112,74 112,62 128,62 128,74 280,74" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2" stroke-linejoin="round"/>
    <text x="34" y="108" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="oklch(44% 0.022 262)">STOP</text>
    <polyline points="96,108 196,108 196,96 210,96 210,108 280,108" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2" stroke-linejoin="round"/>
    <text x="34" y="142" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="oklch(44% 0.022 262)">E-STOP</text>
    <polyline points="96,142 236,142 236,130 254,130 254,142 280,142" fill="none" stroke="oklch(74% 0.145 75)" stroke-width="2" stroke-linejoin="round"/>
    <text x="34" y="176" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="oklch(44% 0.022 262)">MOTOR</text>
    <polyline points="96,176 120,176 120,164 196,164 196,176 236,176 236,176 254,176 254,164 280,164" fill="none" stroke="oklch(56% 0.095 185)" stroke-width="2" stroke-linejoin="round"/>
    <text x="34" y="204" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="oklch(50% 0.11 70)">auto-restart after E-STOP clears → flagged</text>
    <rect x="96" y="228" width="128" height="22" rx="4" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
    <circle class="blink" cx="108" cy="239" r="3" fill="oklch(56% 0.095 185)"/>
    <text x="164" y="243" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.082 190)">18 / 18 checks</text>

    <text x="424" y="34" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.022 262)">ASSET VISION · QR DECODE</text>
    <rect x="320" y="46" width="96" height="96" rx="4" fill="oklch(99.2% 0.003 90)" stroke="oklch(28% 0.045 270)" stroke-width="2"/>
    <g fill="oklch(28% 0.045 270)">
      <rect x="332" y="58" width="20" height="20"/><rect x="384" y="58" width="20" height="20"/><rect x="332" y="110" width="20" height="20"/>
      <rect x="360" y="60" width="8" height="8"/><rect x="362" y="84" width="8" height="8"/><rect x="376" y="92" width="8" height="8"/>
      <rect x="388" y="110" width="8" height="8"/><rect x="362" y="114" width="8" height="8"/><rect x="340" y="88" width="8" height="8"/>
    </g>
    <line class="scan" x1="322" y1="48" x2="414" y2="48" stroke="oklch(56% 0.095 185)" stroke-width="2" opacity="0.85"/>
    <g font-family="IBM Plex Mono, monospace" font-size="9.5" fill="oklch(28% 0.045 270)">
      <text x="436" y="62">AV-0001 ✓</text><text x="436" y="80">AV-0002 ✓</text><text x="436" y="98">AV-0003 ✓</text>
      <text x="436" y="116">AV-0004 ✓</text><text x="436" y="134">AV-0005 ✓</text>
    </g>
    <text x="368" y="160" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="oklch(44% 0.022 262)">clean synthetic frame</text>
    <rect x="360" y="228" width="128" height="22" rx="4" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
    <text x="424" y="243" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.082 190)">5 / 5 payloads</text>
    <text x="280" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">software model and synthetic frames · no physical PLC or camera</text>
  </svg>
</figure>`,

  aiWorkflow: `
<figure class="scene vg" aria-label="Animated diagram of the AI-assisted engineering workflow: a bounded brief goes to implementation, then independent review; changes requested loop back to implementation until the review marks the work complete.">
  <div class="scene-head">
    <span class="dot" style="background: var(--teal);"></span>
    <span>ai.workflow · brief → build → review → accept</span>
  </div>
  <svg viewBox="0 0 560 300" role="img" aria-hidden="true">
    <rect x="24" y="30" width="196" height="22" rx="4" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
    <text x="122" y="45" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.082 190)">failed checks kept on record</text>
    <path id="aiflow" d="M120 122 H440" fill="none" stroke="oklch(70% 0.02 262)" stroke-width="1.5" stroke-dasharray="4 5"/>
    <circle class="pulse-dot" r="4.5" fill="oklch(56% 0.095 185)"><animateMotion dur="4.4s" repeatCount="indefinite"><mpath href="#aiflow"/></animateMotion></circle>
    <path d="M330 158 C 316 196, 214 196, 200 158" fill="none" stroke="oklch(74% 0.145 75)" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M206 168 L200 156 L212 161" fill="none" stroke="oklch(74% 0.145 75)" stroke-width="2" stroke-linejoin="round"/>
    <text x="265" y="210" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(50% 0.11 70)">changes requested → fix → re-review</text>
    <text x="72" y="80" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.022 262)">01</text>
    <text x="200" y="80" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.022 262)">02</text>
    <text x="340" y="80" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.022 262)">03</text>
    <text x="488" y="80" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="oklch(44% 0.022 262)">04</text>
    <rect x="24" y="92" width="96" height="60" rx="6" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
    <text x="72" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(28% 0.045 270)">BRIEF</text>
    <text x="72" y="136" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="oklch(44% 0.022 262)">scope · criteria</text>
    <rect x="152" y="92" width="96" height="60" rx="6" fill="oklch(94% 0.008 90)" stroke="oklch(70% 0.02 262)"/>
    <text x="200" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(28% 0.045 270)">IMPLEMENT</text>
    <text x="200" y="136" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="oklch(44% 0.022 262)">Claude Code</text>
    <rect x="280" y="92" width="120" height="60" rx="6" fill="oklch(99.2% 0.003 90)" stroke="oklch(28% 0.045 270)" stroke-width="1.5"/>
    <text x="340" y="112" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(28% 0.045 270)">REVIEW</text>
    <text x="340" y="126" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="oklch(44% 0.022 262)">Codex · independent</text>
    <g font-family="IBM Plex Mono, monospace" font-size="8.5" text-anchor="middle">
      <rect class="fade-a" x="288" y="132" width="104" height="14" rx="3" fill="oklch(96% 0.04 75)" stroke="oklch(74% 0.145 75)"/>
      <text class="fade-a" x="340" y="142" fill="oklch(50% 0.11 70)">CHANGES_REQUESTED</text>
      <rect class="fade-b" x="300" y="132" width="80" height="14" rx="3" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
      <text class="fade-b" x="340" y="142" fill="oklch(44% 0.082 190)">COMPLETE</text>
    </g>
    <rect x="440" y="92" width="96" height="60" rx="6" fill="oklch(93% 0.025 185)" stroke="oklch(56% 0.095 185)"/>
    <text x="488" y="118" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="oklch(44% 0.082 190)">ACCEPT</text>
    <text x="488" y="136" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8.5" fill="oklch(44% 0.022 262)">my decision</text>
    <text x="280" y="250" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9.5" fill="oklch(28% 0.045 270)">one checkpoint at a time · return report · stop for review</text>
    <text x="280" y="284" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="oklch(44% 0.022 262)">nothing accepted on an agent's own say-so</text>
  </svg>
</figure>`,



  // ── LAYMAN EXPLAINERS (plain language, no jargon) ──────────────────



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
