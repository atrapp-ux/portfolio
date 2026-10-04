/**
 * Project cards. The homepage renders this list in order.
 *
 * Add a card: copy an entry and paste it into `projects`.
 * Reorder: move entries up or down in the array.
 * Image side: set `layout` to `imageRight` (placeholder on the right)
 * or `imageLeft` (placeholder on the left). On screens under 768px both
 * layouts use the slim stack, with the image on top.
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

export type ProjectLayout = "imageRight" | "imageLeft";

type ProjectFields = {
  title: string;
  summary: string;
  problem: { label: string; body: string };
  timeline: { label: string; body: string };
  platform: { label: string; body: string };
  impactLabel: string;
  impacts: { title: string; body: string; arrow: ProjectArrow }[];
  image: { src: string; alt: string; label: string };
  cta: { label: string; href: string };
};

export type ProjectCardContent = ProjectFields & {
  id: string;
  layout: ProjectLayout;
};

const projectTemplate: ProjectFields = {
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
};

export const projects: ProjectCardContent[] = [
  { id: "project-1", layout: "imageRight", ...projectTemplate },
  { id: "project-2", layout: "imageLeft", ...projectTemplate },
  { id: "project-3", layout: "imageRight", ...projectTemplate },
  { id: "project-4", layout: "imageLeft", ...projectTemplate },
];
