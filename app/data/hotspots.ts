import type { HotspotConfig } from "../types/portfolio";

export const aucklandBackground = {
  src: "/images/auckland-placeholder.png",
  alt: "Cinematic aerial placeholder image of Auckland harbour and city lights",
};

export const hotspots: HotspotConfig[] = [
  {
    id: "career",
    title: "Career",
    location: "CBD skyline",
    x: 64,
    y: 44,
    zoom: 2.45,
    pan: { x: -20, y: 2 },
    content: {
      eyebrow: "Senior Software Engineer",
      title: "Frontend architecture shaped by product outcomes",
      summary:
        "7+ years building reliable web products with React, TypeScript, JavaScript, Next.js, Node.js, Azure, and GCP. Placeholder content for now, ready for your real story.",
      highlights: [
        "Led frontend architecture decisions across complex product surfaces.",
        "Improved performance, accessibility, and delivery quality in production systems.",
        "Mentored engineers through pragmatic code review and pairing.",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Node.js", "Azure", "GCP"],
    },
  },
  {
    id: "projects",
    title: "Projects",
    location: "Wynyard Quarter",
    x: 49,
    y: 55,
    zoom: 2.2,
    pan: { x: 4, y: -9 },
    content: {
      eyebrow: "Product Engineering",
      title: "Interactive systems with clean, durable foundations",
      summary:
        "A future home for selected case studies: scalable interfaces, performance improvements, design-system work, and cloud-backed product features.",
      highlights: [
        "Built reusable component systems that made teams faster.",
        "Translated ambiguous product needs into maintainable technical paths.",
        "Balanced delivery speed with long-term code health.",
      ],
      technologies: ["Design systems", "Performance", "Cloud", "Testing"],
    },
  },
  {
    id: "community",
    title: "Community",
    location: "Harbour connections",
    x: 37,
    y: 42,
    zoom: 2.05,
    pan: { x: 18, y: 4 },
    content: {
      eyebrow: "Community & Volunteer Work",
      title: "Engineering that stays connected to people",
      summary:
        "Placeholder content for mentoring, community involvement, volunteering, meetups, knowledge sharing, and the human side of software delivery.",
      highlights: [
        "Supported peers through mentoring, onboarding, and technical guidance.",
        "Contributed time and energy to community-focused initiatives.",
        "Communicated complex ideas clearly across technical and nontechnical groups.",
      ],
      technologies: ["Mentoring", "Community", "Communication"],
    },
  },
];
