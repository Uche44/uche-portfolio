// Portfolio data and content
export const siteConfig = {
  name: "Perpetual Asogwa",
  title: "Fullstack Developer | Technical Writer",
  email: "perpetualuchechukwu808@gmail.com",
  phone: "+234 (913) 660-1904",
  location: "Enugu, Nigeria",
  social: {
    github: "https://github.com/Uche44",
    linkedin: "https://linkedin.com/in/perpetual-asogwa",
    twitter: "https://twitter.com/perpetualuchec5",
    medium: "https://medium.com/@perpetualuchechukwu808",
  },
};

export const navItems = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "about", label: "About Me", icon: "User" },
  { id: "blog", label: "Blog", icon: "FileText" },
  { id: "portfolio", label: "Portfolio", icon: "Briefcase" },
  { id: "testimonials", label: "Testimonials", icon: "MessageSquare" },
  { id: "contact", label: "Contact", icon: "Mail" },
] as const;

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
  // { value: 30, suffix: "+", label: "Technologies" },
  // { value: 15, suffix: "K", label: "Lines of Code" },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Browser's Same-Origin Policy",
    excerpt:
      "The Same-Origin Policy (SOP) is a fundamental security mechanism in web browsers that restricts how documents or scripts loaded from one origin can interact with resources from another origin. It is a critical concept for frontend developers to understand, as it governs how web applications can fetch and exchange data across different domains, protocols, and ports.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    date: "Dec 28, 2025",
    tags: ["Web Security", "Browser", "Same-Origin Policy"],
    readTime: "5 min read",
    url: "https://dev.to/perpetual_uche/the-browsers-same-origin-policy-k5g",
  },
  {
    id: 2,
    title: "Understanding Rest APIs",
    excerpt:
      "REST (Representational State Transfer) APIs are a standard way for applications to communicate with each other over the internet. They are widely used in web development for building scalable, maintainable, and easy-to-understand systems. In this article, we will explore what REST APIs are, how they work, and why they are so important in modern software development.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    date: "Dec 28, 2025",
    tags: ["Rest API", "Backend development", "Web Development"],
    readTime: "3 min read",
    url: "https://medium.com/@perpetualuchechukwu808/understanding-rest-apis-40a525a9fc96",
  },
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

export const projects = [
  {
    id: 1,
    title: "Google Developer Group on Campus Website",
    description:
      "A community website for Google Developer Group on Campus, University of Nigeria Nsukka (UNN)",
    image:
      "projects/gdg.png",
    category: "backend",
    tags: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "Fastapi",
      "PostgreSQL",
      "JWT",
    ],
    github: "https://github.com",
    live: "https://gdg-website-topaz-rho.vercel.app",
  },
  {
    id: 2,
    title: "Mentor Connect",
    description:
      "A mentorship platform for students and professionals",
    image:
      "projects/mentor.png",
    category: "fullstack",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "json server"
    ],
    github: "https://github.com/Uche44/MentorConnect",
    live: "https://mentor-connect-ochre-six.vercel.app/index.html",
  },
  {
    id: 3,
    title: "DialExperts",
    description:
      "A micro-consultation platform that connects users with verified experts across any field for short, pay-per-minute calls",
    image:
      "projects/dialexpert.png",
    category: "fullstack",
    tags: [
      "Nextjs",
      "Prisma",
      "PostgreSQL",
      "Tailwindcss",
      "Typescript",
      "JWT",
    ],

    github: "https://github.com/Uche44/dial-experts",
    live: "https://dial-experts-seven.vercel.app/",
  },
  {
    id: 4,
    title: "Stellar Agentpay Protocol",
    description:
      "A landing page for the stellar agentpay protocol that fully communicates their goals, services and values.",
    image:
      "projects/agent.png",
    category: "frontend",
    tags: ["Nextjs", "Typescript", "TailwindCSS"],
    github: "https://github.com/Uche44/stellar-agentpay-protocol",
    live: "https://agentpay-protocol-gamma.vercel.app/",
  },
  {
    id: 5,
    title: "UniTrack",
    description:
      "A university platform that streamlines final year project management, supervision and reporting between students, their supervisors and departmental admin.",
    image:
      "https://res.cloudinary.com/dcw1m1rak/image/upload/v1764149109/encode_-_Brave_11_12_2025_3_53_58_PM_yidokk.png",
    category: "fullstack",
    tags: [
      "React",
      "Typescript",
      "Django",
      "TailwindCSS",

      "PostgreSQL",
      "JWT",
      "Zustand",
    ],
    github: "https://github.com/Uche44/unitrack-frontend",
    live: "https://unitrack-two.vercel.app/",
  },
  {
    id: 6,
    title: "Task Management App",
    description:
      "A task management app with offline storage, helping you organize tasks and stay productive anytime.",
    image:
      "https://res.cloudinary.com/dcw1m1rak/image/upload/v1762256128/too-doo_vgdo0i.png",
    category: "frontend",
    tags: ["React", "Typescript", "TailwindCSS", "IndexedDb"],
    github: "https://github.com/Uche44/TooDoo",
    live: "https://too-doo-rouge.vercel.app/",
  },
  {
    id: 7,
    title: "Logicraft Landing Page",
    description:
      "A landing page for a cargo and shipment company that fully communicates their goals, services and values.",
    image:
      "https://res.cloudinary.com/dcw1m1rak/image/upload/v1764523090/Perpetual_A._-_Frontend_web_developer_-_Upwork_Freelancer_from_Suleja_Nigeria_-_Brave_10_29_2025_2_59_53_PM_k4oatf.png",
    category: "frontend",
    tags: ["React", "Tailwindcss"],
    github: "https://github.com/Uche44/logicraft",
    live: "https://logicraft-rho.vercel.app/",
  },
];

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
  // { id: "ai", label: "AI" },
] as const;
