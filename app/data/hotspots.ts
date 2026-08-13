import type { HotspotConfig } from "../types/portfolio";

export const aucklandBackground = {
  // Replace this file with your final Auckland aerial image, or point this
  // value at a new file you add under public/images.
  src: "/images/auckland-main.jpg",
  alt: "Auckland skyline across the harbour with Sky Tower and central city buildings",
};

export const hotspots: HotspotConfig[] = [
  {
    id: "career",
    title: "Career",
    location: "Sky Tower",
    x: 26.4,
    y: 45.6,
    zoom: 2.45,
    pan: { x: 20, y: -16 },
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
    location: "Vero Centre",
    x: 38.8,
    y: 60.8,
    zoom: 2.2,
    pan: { x: 8, y: -20 },
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
    id: "about",
    title: "About Me",
    location: "PWC Tower",
    x: 53.6,
    y: 59.2,
    zoom: 2.15,
    pan: { x: -10, y: -19 },
    content: {
      eyebrow: "Based in Auckland",
      title: "A pragmatic frontend engineer with a product mindset",
      summary:
        "Placeholder content for your story: why Auckland matters, how you approach software, and what you bring to teams building real products.",
      highlights: [
        "Passionate about building clear, useful interfaces for real-world problems.",
        "Comfortable moving between product thinking and implementation detail.",
        "Focused on clean code, performance, mentoring, and sustainable delivery.",
      ],
      technologies: ["Frontend architecture", "Mentoring", "Performance"],
    },
  },
  {
    id: "community",
    title: "Volunteer Work",
    location: "Port cranes",
    x: 68.2,
    y: 65.2,
    zoom: 2.05,
    pan: { x: -27, y: -22 },
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
  {
    id: "contact",
    title: "Contact",
    location: "Harbour edge",
    x: 43.8,
    y: 81.2,
    zoom: 1.85,
    pan: { x: 0, y: -30 },
    content: {
      eyebrow: "Let us connect",
      title: "Available for frontend and software engineering conversations",
      summary:
        "Placeholder contact content. Add your preferred email, LinkedIn, GitHub, and any hiring context when you are ready.",
      highlights: [
        "Senior Software Engineer with 7+ years experience.",
        "React, TypeScript, JavaScript, Next.js, Node.js, Azure, and GCP.",
        "Interested in product-focused teams and frontend platform work.",
      ],
      technologies: ["Auckland", "Remote-friendly", "Frontend"],
    },
  },
];
