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
 * Set `blurb` to replace the card line under the title without changing
 * the project page quote.
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
 * `solutionPieces` is the three-column block under the later text-image
 * entries. Add a piece by appending to `pieces`.
 * `fullBleedImage` is the edge-to-edge photo under that. Set `src` to a
 * file in `public/`. Leave `src` empty for the gray placeholder.
 * `threeImages` is the row of three image slots under that photo.
 * The first slot is the wide one. Leave `src` empty for the gray placeholder.
 * `impactData` is the quote and stat row under those images. Add a stat
 * by appending to `stats`.
 * `quotes` is the quote blocks under that row, in order. `variant` is
 * `photo_quote`, `single`, or `multi`. Leave a photo `src` empty for the
 * gray circle. Add another column to `multi` by appending to `items`.
 * `imageRow` is the equal three-image row under the quote blocks.
 * Set `src` to a file in `public/` (the three screens live in
 * `public/image-row/`). Leave `src` empty for the gray placeholder.
 * Clicking a slot opens it.
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
  blurb?: string;
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
  solutionPieces: {
    title: string;
    pieces: { label: string; body: string }[];
  };
  fullBleedImage: { src: string; alt: string };
  threeImages: { src: string; alt: string }[];
  impactData: {
    quote: string;
    stats: { value: string; label: string }[];
  };
  quotes: (
    | {
        variant: "photo_quote";
        quote: string;
        attribution: string;
        image: { src: string; alt: string };
      }
    | {
        variant: "single";
        quote: string;
        attribution: string;
      }
    | {
        variant: "multi";
        items: { quote: string; attribution: string }[];
      }
  )[];
  imageRow: { src: string; alt: string }[];
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

const slot = (label = "Image placeholder"): ProjectImage => ({
  src: "",
  alt: "",
  label,
});

const projectTemplate: ProjectFields = {
  title: "Project Title",
  summary:
    "Increasing hiring team’s confidence in online testing in a world of AI while improving candidate experience to encourage authentic work.",
  problem: {
    label: "Problem",
    body: "Hiring managers saw a large increase in high scores for our online test, fearing AI cheating was behind it. This test feature made up 10% of our MRR and skill-based testing was a main USP.",
  },
  timeline: {
    label: "Timeline",
    body: "1.5\nmonths",
  },
  platform: {
    label: "Platform",
    body: "Desktop\nMobile",
  },
  impactLabel: "Solution impact",
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
    { label: "Product tpye", value: "B2B SaaS" },
    { label: "Workflow", value: "Agile, Skrum" },
    { label: "Timeline", value: "1.5 months" },
    { label: "Team structure", value: "Prod. Manager, Tech Lead, Lead Designer, 4 devs" },
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
      title: "The Idea, Constraints, & Challenges.",
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
          label: "Goals and expected outcome",
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
  solutionPieces: {
    title: "Solution pieces",
    pieces: [
      {
        label: "The Company",
        body: "Online application/assessments platform to assess skills in potential candidates both fairly and without bias.",
      },
      {
        label: "The Company",
        body: "Online application/assessments platform to assess skills in potential candidates both fairly and without bias.",
      },
      {
        label: "The Company",
        body: "Online application/assessments platform to assess skills in potential candidates both fairly and without bias.",
      },
    ],
  },
  fullBleedImage: {
    src: "/full-bleed/image-holder.jpg",
    alt: "Hands holding a seedling over dark soil",
  },
  threeImages: [
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
  ],
  impactData: {
    quote:
      "Increasing trust in our USP through online testing surveillance amidst an AI cheating fear across assessment platforms",
    stats: [
      { value: "-15%", label: "decrease in average test scores after release" },
      { value: "+10%", label: "increase in candidate experience post-testing" },
      {
        value: "+22%",
        label: "increase in MRR from test renewals and add-ons from new users",
      },
    ],
  },
  quotes: [
    {
      variant: "photo_quote",
      quote:
        "“Increasing trust in our USP through online testing surveillance amidst an AI cheating fear for online assessments”",
      attribution: "- Candidate Name, Post-rejection, 2026",
      image: { src: "", alt: "" },
    },
    {
      variant: "single",
      quote:
        "“Increasing trust in our USP through online testing surveillance amidst an AI cheating fear for online assessments”",
      attribution: "- Candidate Name, Post-rejection, 2026",
    },
    {
      variant: "multi",
      items: [
        {
          quote:
            "“Increasing trust in our USP through online testing surveillance amidst an AI cheating fear for online assessments”",
          attribution: "- Candidate Name, Post-rejection, 2026",
        },
        {
          quote:
            "“Increasing trust in our USP through online testing surveillance amidst an AI cheating fear for online assessments”",
          attribution: "- Candidate Name, Post-rejection, 2026",
        },
      ],
    },
  ],
  imageRow: [
    {
      src: "/image-row/screen-one.png",
      alt: "An application that cares about your candidate's success",
    },
    {
      src: "/image-row/screen-two.png",
      alt: "A centralized hub for tracking updates and tasks",
    },
    {
      src: "/image-row/screen-three.png",
      alt: "All appointments, resources, and tools in one place",
    },
  ],
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
  projectEntry("project-1", "imageRight", {
    title: "Candidate application that cares",
    image: {
      src: "/project-card/card-1-phone.png",
      alt: "Candidate application screen",
      label: "Image placeholder",
    },
    blurb:
      "Giving candidates a good end to end application experience during a classically painful, long, and repetitive process of job hunting while ensuring a fair and easy experience.",
    problem: {
      label: "Problem",
      body: "In 2024 the job market flooded with candidates while openings shrank. Candidates were exhausted, ghosted, and left guessing where they stood. Hiring teams were buried in applications and questions, and worried they couldn’t offer a fair experience at that scale.",
    },
    timeline: {
      label: "Timeline",
      body: "1 month design, 2 weeks build",
    },
    platform: {
      label: "Platform",
      body: "Desktop, Mobile",
    },
    impacts: [
      {
        title: "Candidate Ratings",
        body: "Candidate ratings post-application and post rejection increased by 10%, with ratings now generally averaging an 8.6 compared to before (avg. 7.3)",
        arrow: "up",
      },
      {
        title: "Reduction in support tickets",
        body: "Massive reduction in support time and cost dedicated to questions from candidates about job fit, requirements, and test accommodations. Tickets dropped from 100+ a month to about 20 average per month",
        arrow: "down",
      },
    ],
  }),
  projectEntry("project-2", "imageLeft"),
  projectEntry("project-3", "imageRight"),
  projectEntry("project-4", "imageLeft"),
];
