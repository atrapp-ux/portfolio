/**
 * Project cards. The homepage renders this list in order.
 *
 * Add a card: copy a `projectEntry(...)` line and paste it into `projects`.
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
 * Button: `cta.label` is the words on the card button. Clicking it opens
 * that card's detail overlay on the homepage. `cta.href` is not followed.
 *
 * Overlay copy: edit `detailTemplate` to change the case study on every
 * card. To give one card its own story, pass a `detail` override:
 *
 *   projectEntry("project-2", "imageLeft", {
 *     detail: { ...detailTemplate, headline: "A different case study" },
 *   })
 *
 * Nested fields (`company`, `goals`, `facts`, and so on) are shared until
 * you replace that object. Image slots stay empty until `src` is a file
 * in `public/`.
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

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProjectDetail = {
  hero: ProjectImage;
  role: string;
  headline: string;
  facts: { label: string; value: string }[];
  company: { title: string; body: string; image: ProjectImage };
  problem: { title: string; body: string };
  goals: {
    title: string;
    items: string[];
    chart: {
      series: { label: string; tone: "base" | "addon" }[];
      months: {
        label: string;
        mrr: string;
        addon: string;
        share: string;
        base: number;
        addonSize: number;
      }[];
    };
  };
  research: {
    title: string;
    sections: { title: string; body: string; image: ProjectImage }[];
  };
  ideas: {
    title: string;
    sketchCaption: string;
    sketch: ProjectImage;
    considerationsTitle: string;
    considerations: string;
  };
  solution: {
    title: string;
    approaches: string[];
    phones: ProjectImage[];
    desktop: ProjectImage;
  };
  impact: {
    title: string;
    stats: { value: string; body: string }[];
  };
  conclusion: {
    title: string;
    notes: { label: string; body: string }[];
    goalsTitle: string;
    goals: string[];
  };
};

type ProjectFields = {
  title: string;
  summary: string;
  problem: { label: string; body: string };
  timeline: { label: string; body: string };
  platform: { label: string; body: string };
  impactLabel: string;
  impacts: { title: string; body: string; arrow: ProjectArrow }[];
  image: ProjectImage;
  cta: { label: string; href: string };
  detail: ProjectDetail;
};

export type ProjectCardContent = ProjectFields & {
  id: string;
  layout: ProjectLayout;
};

const slot = (label = "IMAGE PLACEHOLDER"): ProjectImage => ({
  src: "",
  alt: "",
  label,
});

export const detailTemplate: ProjectDetail = {
  hero: slot(),
  role: "Lead product designer | Owned Research → Shipping | HR/ATS assessment platform",
  headline:
    "Increasing trust in our USP through online testing surveillance amidst an AI cheating fear for online assessments",
  facts: [
    { label: "PRODUCT TPYE", value: "B2B SaaS" },
    { label: "WORKFLOW", value: "Agile, Skrum" },
    { label: "TIMELINE", value: "1.5 months" },
    { label: "TEAM STRUCTURE", value: "Prod. Manager, Tech Lead, Lead Designer, 4 devs" },
  ],
  company: {
    title: "The Company",
    body: "Online application/assessments platform to assess skills in potential candidates both fairly and without bias.",
    image: slot(),
  },
  problem: {
    title: "The Problem",
    body: "Hiring managers saw a large increase in high scores for our online test, fearing AI cheating was behind it. This test feature made up 10% of our MRR and skill-based testing was a main USP. When the scores stopped looking trustworthy, teams lost confidence in the result.",
  },
  goals: {
    title: "GOALS AND EXPECTED OUTCOME",
    items: [
      "Rebuild trust in scores despite AI cheating",
      "Protect candidate privacy",
      "Stay lean and low cost",
      "Reduce churn on the paid add-on (10% of MRR)",
      "Restore confidence before grad-scheme season (September–November)",
    ],
    chart: {
      series: [
        { label: "Accounts with no extra paid test add-on", tone: "base" },
        { label: "Accounts with the assessment add-on (paid)", tone: "addon" },
      ],
      months: [
        { label: "June 2025", mrr: "89,000£", addon: "9,000£", share: "10%", base: 80, addonSize: 9 },
        { label: "July 2025", mrr: "99,105£", addon: "10,000£", share: "10%", base: 89, addonSize: 10 },
      ],
    },
  },
  research: {
    title: "The Research",
    sections: [
      {
        title: "Competitors",
        body: "Most competitor solutions were screen recording, facial recognition, eye tracking, or ID checks. They were expensive, invasive, and often collected more than a hiring team needed. The aim was to deter cheating, not to ship a surveillance product.",
        image: slot(),
      },
      {
        title: "Analogous solutions",
        body: "I looked at products that create accountability without constant recording: tax forms that ask for a signature, identity checks that take a snapshot, and streaming apps that block screenshots. The pattern was a visible signal at the moment of the action, not a hidden log of everything the person did.",
        image: slot(),
      },
    ],
  },
  ideas: {
    title: "The Ideas",
    sketchCaption: "Sketches hand-drawn by me.",
    sketch: slot(),
    considerationsTitle: "DESIGN CONSIDERATIONS FOR SOLUTION",
    considerations:
      "The product should create the sense of being watched without actually recording. Block the actions that make cheating easy. Do not start surveillance before the test. Warn in the moment instead of silently flagging, and keep the test timed so a warning has a cost.",
  },
  solution: {
    title: "The Solution",
    approaches: [
      "Use timely warnings and contextual flagging. An honesty statement sets the expectation before the test starts, and a warning appears only when a risky action happens.",
      "Show action-triggered warnings that do not actually collect cheating data — changing tabs or windows, screenshotting, copy and pasting. The warning is the deterrent. Nothing is stored as a cheating log.",
    ],
    phones: [slot(), slot(), slot(), slot()],
    desktop: slot(),
  },
  impact: {
    title: "The Impact",
    stats: [
      { value: "−15%", body: "decrease in average test scores after release" },
      { value: "+10%", body: "increase in candidate experience post-testing" },
      { value: "+22%", body: "increase in MRR from test renewals and add-ons from new users" },
    ],
  },
  conclusion: {
    title: "The Conclusion",
    notes: [
      {
        label: "The Company",
        body: "Online application/assessments platform to assess skills in potential candidates both fairly and without bias.",
      },
      {
        label: "The Problem",
        body: "AI-inflated scores were eroding trust in the assessment that carried 10% of MRR.",
      },
    ],
    goalsTitle: "Goals",
    goals: [
      "Rebuild trust in scores despite AI cheating",
      "Protect candidate privacy",
      "Stay lean and low cost",
      "Reduce churn on the paid add-on (10% of MRR)",
      "Restore confidence before grad-scheme season (September–November)",
    ],
  },
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
  image: slot(),
  cta: {
    label: "View Project",
    href: "",
  },
  detail: detailTemplate,
};

function projectEntry(
  id: string,
  layout: ProjectLayout,
  patch: Partial<ProjectFields> = {},
): ProjectCardContent {
  return {
    id,
    layout,
    ...structuredClone(projectTemplate),
    ...patch,
  };
}

export const projects: ProjectCardContent[] = [
  projectEntry("project-1", "imageRight"),
  projectEntry("project-2", "imageLeft"),
  projectEntry("project-3", "imageRight"),
  projectEntry("project-4", "imageLeft"),
];
