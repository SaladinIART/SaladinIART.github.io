// Draft notes. This module is imported only in `npm run dev`; the production build drops it,
// so draft text never reaches salbotics.uk. To publish a note after review and owner approval,
// move it to published.js and set `published: true`.
//
// N-001 mirrors career-applications/findings-2026-11-17/notes/N-001-rocker-bogie-belly-lift.md
// (v1 draft, revision 4, 19 Nov 2026). Internal record codes stay in that private file, not here.

import n001Figure from "./img/n-001-explorer6-knee-lift.png";

export const draftNotes = [
  {
    slug: "rocker-bogie-belly-lift",
    number: "N-001",
    version: "v1 draft, revision 4",
    date: "2026-11-19",
    published: false,
    title: "Why add powered knees to a rocker-bogie rover?",
    project: "Salbotics Explorer 6 (six-wheel FYP rover)",
    evidence: "calculated",
    buildStatus: "Design study; no physical validation presented",
    tags: ["Mobile robots", "Mechanisms", "CAD"],
    shortAnswer:
      "Powered knees let this rover change body height relative to its wheels. The calculation predicts useful " +
      "movement, but also body pitch and a changing wheelbase; it does not demonstrate that the rover can free " +
      "itself from a ridge.",
    question: [
      "The Salbotics Explorer 6 is a six-wheel rocker-bogie design for university final-year projects. When a rover " +
        "is high-centred, its belly rests on an obstacle and wheel traction can be reduced.",
      "This study asks whether splitting each rocker into two moving arms can raise the belly while retaining wheel " +
        "contact in an idealised model.",
    ],
    figure: {
      src: n001Figure,
      alt:
        "Side view of the Explorer 6 rover CAD in three poses on flat ground: knees opened with the body 34.3 mm " +
        "lower, knees near mid-stroke for driving, and knees closed with the body 28.8 mm higher.",
      caption:
        "Explorer 6 rocker knees in three modelled poses on flat ground. Heights are at the rocker pivots. " +
        "Calculated geometry, not a demonstrated ridge recovery.",
    },
    method: [
      "Model: each rocker is split at its pivot into front and rear arms. Both sides move symmetrically; the " +
        "flat-ground calculation keeps the wheel axles at their prescribed heights.",
      "Actuator input: a 12 V feedback actuator with 50 mm stroke. The candidate's manufacturer specifies 200 N " +
        "maximum lifted force for the selected gearing; this is not measured capacity in the rover.",
      "Load: 8.570 kg of modelled parts plus 0.450 kg of assumed wiring and fasteners gives 9.020 kg, or 44.2 N per " +
        "side. The rover has not been weighed for this study.",
      "Force: a quasi-static moment balance about the rocker pivot, with the whole weight on the wheels. The model " +
        "simplifies mass distribution and omits joint friction and acceleration; its conservatism has not been " +
        "established for the assembled rover.",
      "Ridge case: a 150 mm ridge and assumed fixed 15 mm wheel sink offset put the initial floor on the ridge. The " +
        "study checks a 10 mm floor-rise target at sampled positions along the body. It does not model evolving soil " +
        "contact or recovery motion.",
    ],
    results: [
      { quantity: "Knee angle range", value: "−21.8° to +23.6°", label: "Calculated" },
      { quantity: "Height change at rocker pivots", value: "+28.8 mm raised; −34.3 mm lowered", label: "Calculated" },
      { quantity: "Body pitch at travel ends", value: "+7.1° raised; −7.9° lowered", label: "Calculated" },
      {
        quantity: "Wheelbase change from reference pose",
        value: "−34.6 mm raised; +24.7 mm lowered",
        label: "Calculated",
      },
      {
        quantity: "Largest actuator force over the knee range",
        value: "80.4 N, at the +23.6° end (supplier rating 200 N)",
        label: "Calculated",
      },
      { quantity: "Actuator stroke used", value: "47.9 mm of nominal 50 mm input", label: "Calculated" },
      {
        quantity: "Ridge clearance screen",
        value:
          "10 mm target met at sampled positions from approximately 28 mm forward of rear floor edge to front",
        label: "Calculated",
      },
    ],
    meaning: [
      "The force is highest at the end of the knee travel: 80.4 N at +23.6°, from a 0.1° sweep that includes both " +
        "ends of the range. An earlier 2° table stopped at +22.2° and reported 77.8 N; the source has been corrected. " +
        "This doesn't prove the mechanism's capacity, and the ratio to the actuator's catalogue maximum isn't a " +
        "verified safety factor.",
      "The body pitches as it rises, so pivot lift is not clearance everywhere under the floor. The ridge screen " +
        "samples positions rather than proving an exact obstacle boundary. Below 10 mm clearance does not " +
        "necessarily mean contact.",
      "The wheelbase changes by about 35 mm from the reference pose in one direction. Wheel motion must accommodate " +
        "that change to avoid imposing incompatible no-slip constraints. Geometry alone does not establish required " +
        "motor commands, traction or recovery success.",
    ],
    changes: [
      "One actuator between the two arms of each rocker provides adjustable geometry.",
      "A reference driving pose keeps the knees near mid-stroke.",
      "Track width changed from 474 to 484 mm to accommodate the revised pivot stack and moving-part clearance.",
    ],
    changesNote:
      "This study evaluates the knee mechanism. It does not establish that every belly-foot mechanism is " +
      "ineffective or that knees are the only possible solution.",
    limits: [
      "Mass, centre of mass, friction, actuator behaviour and ground interaction remain unverified on hardware.",
      "Nominal stroke leaves about 2.1 mm unused in total. Assembly tolerance and control stopping error need checking.",
      "The ridge screen does not prove clearance for an arbitrary ridge shape or successful drive-off.",
      "Repeated actuator duty, structural strength and coordinated wheel/knee control are outside this calculation.",
    ],
    nextTestIntro:
      "Before testing, agree setup, measurement uncertainty and acceptance limits. These are proposals, not an " +
      "approved hardware test procedure.",
    nextTest: [
      "Measure pivot height, floor clearance and pitch at reference and travel-end poses. Compare with predictions; " +
        "numerical acceptance tolerance remains to be agreed.",
      "Measure actuator load with a calibrated force instrument. Current logging may supplement it only after a " +
        "relevant current-to-force calibration.",
      "Define a controlled ridge-recovery test with recorded ridge geometry, load and ground conditions. Treat " +
        "measured clearance and successful drive-off as separate outcomes.",
    ],
    sources: [
      {
        label: "Actuonix L16 datasheet",
        href: "https://www.actuonix.com/assets/images/datasheets/ActuonixL16Datasheet.pdf",
        detail: "actuator specifications",
      },
      { label: "Project CAD and calculation files", detail: "not publicly released with this draft" },
    ],
    changelog: [
      "v1 draft, 18 Nov 2026: initial explanation prepared.",
      "Revision 2, 18 Nov 2026: corrected mass basis; qualified the force and ridge results; removed a universal " +
        "belly-foot claim, an unapproved test tolerance and internal identifiers.",
      "Revision 3, 19 Nov 2026: uses the product name Salbotics Explorer 6; largest actuator force corrected from " +
        "77.8 N to 80.4 N after review found the force sweep missed the end of the knee range.",
      "Revision 4, 19 Nov 2026: replacement figure with plain pose labels and no internal codes.",
    ],
  },
];
