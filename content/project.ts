/**
 * Project card copy and icons.
 * Edit this file to change the card. Layout and styles do not need to change.
 *
 * Arrows: set each impact's `arrow` to a key in `projectArrows`.
 * `down` is the pink arrow, `up` is the green arrow.
 * To use a different graphic, change that key's `src`.
 *
 * Image: set `image.src` to a path in `public/` (for example "/projects/cover.png").
 * Leave `src` empty to keep the white placeholder.
 *
 * Button: edit `cta.label` for the words on the button, and `cta.href` for
 * where it goes. Leave `href` empty until the project page exists.
 */

export const projectArrows = {
  down: {
    src: "/project-card/arrow-down.svg",
    rotation: -90,
  },
  up: {
    src: "/project-card/arrow-up.svg",
    rotation: 90,
  },
} as const;

export type ProjectArrow = keyof typeof projectArrows;

export const projectCard = {
  title: "Project Title",
  summary:
    "Increasing hiring team’s confidence in online testing in a world of AI while improving candidate experience to encourage authentic work.",
  problem: {
    label: "PROBLEM",
    body: "Hiring managers saw a large increase in high scores for our online test, fearing AI cheating was behind it. This test feature made up 10% of our MRR and skill-based testing was a main USP.",
  },
  timeline: {
    label: "TIMELINE",
    body: "1.5\nmonths",
  },
  platform: {
    label: "PLATFORM",
    body: "Desktop\nMobile",
  },
  impactLabel: "SOLUTION IMPACT",
  impacts: [
    {
      title: "Built user trust",
      body: "Inflated test scores returned to pre-AI scores baselines of 59% to 43%",
      arrow: "down",
    },
    {
      title: "Cost-efficient",
      body: "MVP fit budget and reduced potential tech cost by 20%",
      arrow: "down",
    },
    {
      title: "Improved sales",
      body: "Increase in second sales calls or upsells for the test add-on",
      arrow: "up",
    },
  ],
  image: {
    src: "",
    alt: "",
    label: "IMAGE PLACEHOLDER",
  },
  cta: {
    label: "View Project",
    href: "",
  },
} as const;
