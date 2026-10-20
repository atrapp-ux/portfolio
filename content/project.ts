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
 * `/projects/[id]`. `summary` is the quote on the card and on that page.
 * `eyebrow` is the grey line above the quote. `stats` is the facts bar
 * on the project page. `textImages` is the text-and-image blocks.
 * The first entry sits under the stats bar. Later entries use the same
 * block and sit under the Research section. `imageTexts` is the
 * image-and-text blocks under the first text-and-image block.
 * Set `showTitle` to false, or leave `title` empty, to hide the header.
 * Leave `image.src` empty for the gray placeholder.
 * `research` is the tabbed section under those blocks. Add a tab by
 * appending to `tabs`. A tab can use `paragraphs` (with an optional
 * `aside`) or `columns` (image, heading, and underlined leads).
 * `cta.href` is unused.
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

type ProjectFields = {
  title: string;
  summary: string;
  problem: { label: string; body: string };
  timeline: { label: string; body: string };
  platform: { label: string; body: string };
  impactLabel: string;
  impacts: { title: string; body: string; arrow: ProjectArrow }[];
  image: ProjectImage;
  eyebrow: string;
  stats: { label: string; value: string }[];
  textImages: {
    title: string;
    sections: { label: string; body: string }[];
    image: { src: string; alt: string };
  }[];
  imageTexts: {
    showTitle: boolean;
    title: string;
    sections: { label: string; body?: string; items?: string[] }[];
    image: { src: string; alt: string };
  }[];
  research: {
    title: string;
    tabs: {
      id: string;
      label: string;
      paragraphs?: { lead?: string; text: string }[];
      aside?: { src: string; alt: string };
      columns?: {
        image: { src: string; alt: string };
        heading: string;
        items: { lead: string; text: string }[];
      }[];
    }[];
  };
  cta: { label: string; href: string };
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
  eyebrow: "Lead product designer | Owned Research → Shipping | HR/ATS assessment platform",
  stats: [
    { label: "PRODUCT TPYE", value: "B2B SaaS" },
    { label: "WORKFLOW", value: "Agile, Skrum" },
    { label: "TIMELINE", value: "1.5 months" },
    { label: "TEAM STRUCTURE", value: "Prod. Manager, Tech Lead, Lead Designer, 4 devs" },
  ],
  textImages: [
    {
      title: "The Context.",
      sections: [
        {
          label: "The Company",
          body: "Online application/assessments platform to assess skills in potential candidates both fairly and without bias.",
        },
        {
          label: "The Problem",
          body: "With the candidate pools growing and the proliferation of access to AI tools, test score averages were increasing exponentially, causing hiring teams to fear cheating and lose confidence in our product. AI proofing was not an option as AI tools changed daily, but we needed a fast way to regain user confidence and improve on-growing fears around AI usage among candidates.",
        },
      ],
      image: { src: "", alt: "" },
    },
    {
      title: "The Approach.",
      sections: [
        {
          label: "The Direction",
          body: "Replace this with how the team responded to the research.",
        },
        {
          label: "The Constraint",
          body: "Replace this with the limit that shaped the solution.",
        },
      ],
      image: { src: "", alt: "" },
    },
  ],
  imageTexts: [
    {
      showTitle: false,
      title: "",
      sections: [
        {
          label: "GOALS AND EXPECTED OUTCOME",
          items: [
            "Increase trust in our online assessment despite fear of AI cheating",
            "Release a solution that still respects candidates’ privacy and security during testing",
            "Lean solution required - low of devs and cost",
            "Reduce churn on customers using this paid test add-on (10% of our MRR)",
            "Improve confidence in users before the beginning of grad-scheme season (september-november)",
          ],
        },
      ],
      image: { src: "", alt: "" },
    },
  ],
  research: {
    title: "The Research.",
    tabs: [
      {
        id: "desktop-research",
        label: "Desktop research",
        paragraphs: [
          {
            text: "Competitors relied heavily on screen recording online tests and using AI to determine AI usage on tests and answers.",
          },
          {
            text: "Solutions were facial recognition, eye tracking, ID certification, recording user screens, and real time alerts for screen activity or suspicious movements and actions.",
          },
          {
            text: "Other solutions focused less on tracking and more on deterring which aligned more with our values.",
          },
          {
            lead: "Analogous solutions: ",
            text: "Building Trust (tax signatures, ID snapshots), blocking triggers (Netflix blocking screenshots or screen recording), Action flags (“Looks like you’re using a VPN”)",
          },
        ],
        aside: { src: "", alt: "" },
      },
      {
        id: "user-interviews",
        label: "User interviews",
        columns: [
          {
            image: { src: "/research/tired-professional.png", alt: "" },
            heading: "Hiring teams",
            items: [
              {
                lead: "Overwhelmed",
                text: " with high volume roles - candidate-dense pool",
              },
              {
                lead: "Harder to select candidate",
                text: " - Assessment scores higher than average",
              },
              {
                lead: "Fear",
                text: " that AI is masking real candidates’ skills and levels",
              },
              {
                lead: "Overworked",
                text: " - No time to verify all tests and answers and check AI usage",
              },
            ],
          },
          {
            image: { src: "/research/stressed-candidate.png", alt: "" },
            heading: "Candidates",
            items: [
              {
                lead: "Tired",
                text: " - applications becoming increasingly longer and requiring more work as the jobs become far and few between",
              },
              {
                lead: "Fear",
                text: " that AI will grade them rather than humans",
              },
              {
                lead: "Mistrusting",
                text: " - more platforms using surveillance and tracking, making applying more draining and scary",
              },
            ],
          },
        ],
      },
    ],
  },
  cta: {
    label: "View Project",
    href: "",
  },
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
