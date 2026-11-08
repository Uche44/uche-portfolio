// Portfolio data and content

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  tags: string[];
  github?: string;
  live?: string;
  demo?: string;
  featured?: boolean;
}

export interface Achievement {
  id: number;
  title: string;
  type: "hackathon" | "award" | "certification" | "open-source";
  placement?: string;
  project?: string;
  date: string;
  location?: string;
  description: string;
  link?: string;
  image?: string;
}

export interface SpeakingEngagement {
  id: number;
  talkTitle: string;
  event: string;
  date: string;
  location?: string;
  audienceSize?: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  videoUrl?: string;
  slidesUrl?: string;
  description?: string;
}

export const siteConfig = {
  name: "Perpetual Asogwa",
  title: "Fullstack Developer | Technical Writer",
  email: "perpetualuchechukwu808@gmail.com",
  phone: "+234 (913) 660-1904",
  location: "Enugu, Nigeria",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Uche44",
    linkedin: "https://linkedin.com/in/perpetual-asogwa",
    twitter: "https://twitter.com/perpetualuchec5",
    medium: "https://medium.com/@perpetualuchechukwu808",
    youtube: "https://www.youtube.com/@Perpetual_dev",
    instagram: "https://www.instagram.com/perpetualuc5/",
  },
};

export const navItems = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "about", label: "About Me", icon: "User" },
  { id: "recognition", label: "Recognition", icon: "Trophy" },
  { id: "portfolio", label: "Portfolio", icon: "Briefcase" },
  { id: "speaking", label: "Speaking", icon: "Mic" },
  { id: "blog", label: "Blog", icon: "FileText" },
  { id: "contact", label: "Contact", icon: "Mail" },
] as const;

export const heroHighlights = [
  "10+ Projects Shipped",
  "600+ GitHub Commits",
  "5 Articles Published",
  "1st Place, [Hackathon Name]",
];

export const currently = {
  building: "A reputation layer for the QIE ecosystem, plus this portfolio.",
  learning: "Systems design — writing up what I learn as I go.",
  openTo: "Fullstack and backend roles, contract work, and speaking slots.",
};

export const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with React, Next.js, and modern CSS frameworks.",
    icon: "Monitor",
  },
  {
    title: "Backend Development",
    description:
      "Designing and implementing scalable APIs with Python and it's frameworks.",
    icon: "Server",
  },
  {
    title: "Database Architecture",
    description:
      "Optimizing data storage and retrieval with PostgreSQL, MongoDB, and Redis.",
    icon: "Database",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, responsiveness, and scalability.",
    icon: "Zap",
  },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Done" },
  { value: 600, suffix: "+", label: "GitHub Commits" },
  { value: 5, suffix: "", label: "Articles Written" },
  { value: 30, suffix: "+", label: "Open Source Contributions" },
  // { value: 15, suffix: "K", label: "Lines of Code" },
];

export const blogPosts = [
  {
    id: 1,
    title:
      "I Asked My Agent for Notifications. It Gave Me a Server Cost Problem.",
    excerpt: "A dive in to Server Sent Events and a teeny bit of Polling",
    image: "/blog/sse.png",
    date: "Dec 28, 2025",
    tags: ["Software Engineering", "Server Sent Events", "Polling"],
    readTime: "5 min read",
    url: "https://medium.com/@perpetualuchechukwu808/i-asked-my-agent-for-notifications-it-gave-me-a-server-cost-problem-96b9ed257e04",
  },
  {
    id: 2,
    title: "The Browser's Same-Origin Policy",
    excerpt:
      "The Same-Origin Policy (SOP) is a fundamental security mechanism in web browsers that restricts how documents or scripts loaded from one origin can interact with resources from another origin. It is a critical concept for frontend developers to understand, as it governs how web applications can fetch and exchange data across different domains, protocols, and ports.",
    image: "/blog/sop.png",
    date: "Dec 28, 2025",
    tags: ["Web Security", "Browser", "Same-Origin Policy"],
    readTime: "5 min read",
    url: "https://dev.to/perpetual_uche/the-browsers-same-origin-policy-k5g",
  },
  // {
  //   id: 2,
  //   title: "Understanding Rest APIs",
  //   excerpt:
  //     "REST (Representational State Transfer) APIs are a standard way for applications to communicate with each other over the internet. They are widely used in web development for building scalable, maintainable, and easy-to-understand systems. In this article, we will explore what REST APIs are, how they work, and why they are so important in modern software development.",
  //   image:
  //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  //   date: "Dec 28, 2025",
  //   tags: ["Rest API", "Backend development", "Web Development"],
  //   readTime: "3 min read",
  //   url: "https://medium.com/@perpetualuchechukwu808/understanding-rest-apis-40a525a9fc96",
  // },
  {
    id: 3,
    title: "What I Learned Building a Caching Proxy Server from Scratch",
    excerpt:
      "Building a caching proxy server is a great way to learn about caching strategies and system design. It's a fun project that can help you understand how the web works under the hood.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    date: "March 10, 2026",
    tags: ["FastAPI", "Cache", "Systems Design", "Web Development"],
    readTime: "4 min read",
    url: "https://medium.com/@perpetualuchechukwu808/what-i-learned-building-a-caching-proxy-server-from-scratch-17a29deedb0f",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "MiriTankr",
    description:
      "A Digital Platform for Verified Water Delivery and Source Traceability in Enugu State",
    image: "/projects/miritankr.png",
    category: ["fullstack"],
    tags: [
      "Nextjs",
      "Fastapi",
      "PayStack",
      "Typescript",
      "Tailwindcss",
      "PostgreSQL",
      "JWT",
    ],
    featured: true,
    github: "https://github.com/Uche44/miritankr",
    live: "https://miritankr.vercel.app/",
    demo: "https://www.youtube.com/watch?v=Hy8oHXE292Y",
  },
  {
    id: 2,
    title: "UniTrack",
    description:
      "A university platform that streamlines final year project management, supervision and reporting between students, their supervisors and departmental admin.",
    image:
      "https://res.cloudinary.com/dcw1m1rak/image/upload/v1764149109/encode_-_Brave_11_12_2025_3_53_58_PM_yidokk.png",
    category: ["fullstack", "frontend", "backend"],
    tags: [
      "React",
      "Typescript",
      "Django",
      "TailwindCSS",

      "PostgreSQL",
      "JWT",
      "Zustand",
    ],
    featured: true,
    github: "https://github.com/Uche44/unitrack-frontend",
    live: "https://unitrack-two.vercel.app/",
  },
  {
    id: 3,
    title: "QIE Reputation",
    description: "A reputation and Talent Layer for the QIE Ecosystem",
    image: "/projects/qie.png",
    category: ["web3", "fullstack", "frontend", "backend"],
    tags: [
      "Nextjs",
      "Prisma",
      "Viem",
      "Typescript",
      "Tailwindcss",
      "PostgreSQL",
    ],
    featured: true,
    github: "https://github.com/Uche44/q-rep",
    live: "https://qie-reputation.vercel.app/",
    demo: "https://www.youtube.com/watch?v=rDCpcwx8W2k&t=195s",
  },
  {
    id: 4,
    title: "Mentor Connect",
    description: "A mentorship platform for students and professionals",
    image: "/projects/mentor.png",
    category: ["fullstack"],
    tags: ["HTML", "CSS", "Javascript", "json server"],
    github: "https://github.com/Uche44/MentorConnect",
    live: "https://mentor-connect-ochre-six.vercel.app/index.html",
  },
  {
    id: 5,
    title: "DialExperts",
    description:
      "A micro-consultation platform that connects users with verified experts across any field for short, pay-per-minute calls",
    image: "/projects/dialexpert.png",
    category: ["fullstack", "frontend", "backend", "web3"],
    tags: [
      "Nextjs",
      "Solana Wallet Adapter",
      "Prisma",
      "PostgreSQL",
      "Tailwindcss",
      "Typescript",
    ],

    github: "https://github.com/Uche44/dial-experts",
    live: "https://dial-experts-seven.vercel.app/",
    // demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Stellar Agentpay Protocol",
    description:
      "A landing page for the stellar agentpay protocol that fully communicates their goals, services and values.",
    image: "/projects/agent.png",
    category: ["frontend", "web3"],
    tags: ["Nextjs", "Typescript", "TailwindCSS"],
    github: "https://github.com/Uche44/stellar-agentpay-protocol",
    live: "https://agentpay-protocol-gamma.vercel.app/",
  },

  {
    id: 7,
    title: "Task Management App",
    description:
      "A task management app with offline storage, helping you organize tasks and stay productive anytime.",
    image:
      "https://res.cloudinary.com/dcw1m1rak/image/upload/v1762256128/too-doo_vgdo0i.png",
    category: ["frontend"],
    tags: ["React", "Typescript", "TailwindCSS", "IndexedDb"],
    github: "https://github.com/Uche44/TooDoo",
    live: "https://too-doo-rouge.vercel.app/",
  },
  {
    id: 8,
    title: "Logicraft Landing Page",
    description:
      "A landing page for a cargo and shipment company that fully communicates their goals, services and values.",
    image:
      "https://res.cloudinary.com/dcw1m1rak/image/upload/v1764523090/Perpetual_A._-_Frontend_web_developer_-_Upwork_Freelancer_from_Suleja_Nigeria_-_Brave_10_29_2025_2_59_53_PM_k4oatf.png",
    category: ["frontend"],
    tags: ["React", "Tailwindcss"],
    github: "https://github.com/Uche44/logicraft",
    live: "https://logicraft-rho.vercel.app/",
  },
];

// PLACEHOLDER DATA — replace every entry before deploying.
// Rule: each entry needs a name, a date, and a link. Delete anything you cannot verify.
export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Wema Bank Hackaholics Startup Pitch Competition, Enugu Edition",
    type: "hackathon",
    placement: "1st Place, Women Led Category",
    project: "MiriTankr",
    date: "2026-10-16",
    location: "Enugu",
    description: "What you built inside the time limit and the outcome it earned.",
    link: "https://github.com/Uche44/miritankr",
  },
  {
    id: 2,
    title: "[Pitch or Demo Day Name]",
    type: "award",
    placement: "Runner-up",
    project: "QIE Reputation",
    date: "2026-05-09",
    location: "[City]",
    description: "Who gave the award and what won it.",
    link: "https://qie-reputation.vercel.app/",
  },
  {
    id: 3,
    title: "[Grant or Fellowship Name]",
    type: "award",
    placement: "Grant Recipient",
    date: "2026-01-20",
    description: "What the grant funded and what shipped as a result.",
  },
  {
    id: 4,
    title: "[Certification Name]",
    type: "certification",
    date: "2025-11-03",
    location: "[Issuer]",
    description: "What the credential covers.",
  },
  {
    id: 5,
    title: "[Certification Name]",
    type: "certification",
    date: "2025-09-12",
    location: "[Issuer]",
    description: "What the credential covers.",
  },
  {
    id: 6,
    title: "Open Source Contribution",
    type: "open-source",
    placement: "Merged PR",
    project: "[Repository]",
    date: "2025-06-14",
    description: "What the change did and why it was merged.",
    link: "https://github.com/Uche44",
  },
];

// PLACEHOLDER DATA — swap in real talks and photos from public/speaking/.
// Replace placeholder-N.webp with compressed WebP photos (long edge <= 1600px, under ~250KB).
// Add videoUrl once a recording is uploaded; entries without it open as images.
export const speakingEngagements: SpeakingEngagement[] = [
  {
    id: 1,
    talkTitle: "[Talk title]",
    event: "[Event name]",
    date: "2026-09-12",
    location: "[City]",
    audienceSize: "200+ attendees",
    image: "/speaking/placeholder-1.webp",
    imageAlt: "Speaking about [topic] at [event]",
    width: 1080,
    height: 1350,
    description: "One line on what the talk covered.",
  },
  {
    id: 2,
    talkTitle: "[Talk title]",
    event: "[Event name]",
    date: "2026-07-04",
    location: "[City]",
    image: "/speaking/placeholder-2.webp",
    imageAlt: "Answering questions after [talk] at [event]",
    width: 1600,
    height: 900,
    description: "One line on what the talk covered.",
  },
  {
    id: 3,
    talkTitle: "[Talk title]",
    event: "[Event name]",
    date: "2026-04-18",
    location: "[City]",
    audienceSize: "80+ attendees",
    image: "/speaking/placeholder-3.webp",
    imageAlt: "On stage during [talk] at [event]",
    width: 1080,
    height: 1080,
    description: "One line on what the talk covered.",
  },
  {
    id: 4,
    talkTitle: "[Talk title]",
    event: "[Event name]",
    date: "2026-02-22",
    location: "[City]",
    image: "/speaking/placeholder-4.webp",
    imageAlt: "Audience at [event] during the [talk] session",
    width: 1200,
    height: 1600,
    description: "One line on what the talk covered.",
  },
  {
    id: 5,
    talkTitle: "[Talk title]",
    event: "[Event name]",
    date: "2025-11-08",
    location: "[City]",
    image: "/speaking/placeholder-5.webp",
    imageAlt: "Panel discussion at [event]",
    width: 1600,
    height: 900,
    description: "One line on what the talk covered.",
  },
  {
    id: 6,
    talkTitle: "[Talk title]",
    event: "[Event name]",
    date: "2025-08-30",
    location: "[City]",
    image: "/speaking/placeholder-6.webp",
    imageAlt: "Hosting a workshop at [event]",
    width: 1080,
    height: 1350,
    description: "One line on what the talk covered.",
  },
];

// PLACEHOLDER — names and quotes are dummy data. Replace before enabling TestimonialsSection.
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at TechStart",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content:
      "Alex delivered exceptional work on our platform. His attention to detail and technical expertise made our project a success.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Park",
    role: "Product Manager at InnovateCo",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "Working with Alex was a game-changer. He understood our vision and translated it into a beautiful, functional product.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Founder at DesignHub",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "The best developer I've worked with. Clean code, great communication, and always delivers on time.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Miller",
    role: "Engineering Lead at ScaleUp",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "Alex's fullstack expertise helped us ship features 2x faster. Highly recommend for any complex project.",
    rating: 5,
  },
];

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Fullstack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "web3", label: "web3" },
] as const;
