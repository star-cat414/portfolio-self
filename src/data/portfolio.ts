/* ============================================================
   SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
   Edit this file to update the site. Placeholders marked [EDIT].
   ============================================================ */

export const profile = {
  name: "Aung Min Thein",
  firstName: "Aung Min Thein",
  title:
    "Information Technology Student | Software Developer | AI & Data Science Enthusiast",
  tagline: "Building real-world software with code, data & curiosity.",
  availability: "Open to Internship & Entry-Level Opportunities",
  location: "Your City, Your Country",
  email: "best48757@gmail.com",
  github: "https://github.com/star-cat414/",
  linkedin: "https://www.linkedin.com/in/aung-min-thein-bb33b83a3",
  photo: "/images/profile.jpg",
  intro: `I'm a final-year Information Technology student passionate about software development, artificial intelligence, and data science. I love turning ideas into real-world applications — from emotion-aware AI chat apps to full-stack mobile marketplaces — and I'm always learning, building, and shipping.`,
  cv: "/CV.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    `I am a final-year Information Technology student with a strong interest in software development, artificial intelligence, machine learning, data science, natural language processing, and modern web and mobile technologies.`,
    `I am driven by a genuine interest in solving real-world problems through technology. Whether it's building AI-powered applications or full-stack products, I enjoy taking an idea from concept to a working, polished product.`,
    `My goal is to become a professional IT and software developer. I focus on continuous learning and hands-on project development, and I'm ready to contribute to a team that values quality, collaboration, and growth.`,
  ],
  highlights: [
    "Final-year Information Technology student",
    "Software development, AI & data science focus",
    "Full-stack & mobile application builder",
    "Continuous learner & problem solver",
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "React",
      "React Native",
      "HTML",
      "CSS",
      "Tailwind CSS / NativeWind",
    ],
  },
  {
    title: "Backend & Database",
    icon: "🗄️",
    skills: ["Node.js", "Supabase", "REST APIs", "PostgreSQL"],
  },
  {
    title: "AI / Data Science",
    icon: "🧠",
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "Transformer Models",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  image: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  contribution: string;
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "AI-Powered Emotion-Aware Multilingual Chat Application",
    tagline: "An intelligent chat assistant that understands how you feel.",
    image: "/images/project-emo-chat.png",
    problem:
      "Standard chatbots respond the same way no matter how the user is feeling, and most only support a single language — making them feel robotic and impersonal.",
    solution:
      "Built a chat application that detects the emotion behind user messages and provides context-aware, empathetic conversational responses. It supports multiple languages, powered by NLP and transformer-based models.",
    technologies: ["Python", "Machine Learning", "NLP", "Transformer Models", "REST API"],
    features: [
      "Emotion detection from user messages",
      "Emotion-aware conversational responses",
      "Multi-language support",
      "Transformer-based NLP model",
    ],
    contribution:
      "Designed the emotion-detection pipeline, trained the NLP model, and integrated it with the chat interface.",
    github: "https://github.com/star-cat414/EmoChat",
    demo: "https://your-live-demo-link.com",
  },
  {
    name: "Second-Hand Marketplace Application",
    tagline: "A mobile marketplace for buying and selling pre-owned items.",
    image: "/images/project-second-market.png",
    problem:
      "Selling used items locally is scattered across groups and apps, with no easy way to list, discover, or trust a seller.",
    solution:
      "Built a full-stack mobile app where users can create listings, browse products, save favorites, view seller profiles, and exchange reviews and ratings — with authentication and cloud database integration.",
    technologies: ["React Native", "Expo", "TypeScript", "NativeWind", "Supabase"],
    features: [
      "Create & manage product listings",
      "Browse and search products",
      "Save favorite items",
      "Seller profiles with reviews & ratings",
      "Secure authentication & database integration",
    ],
    contribution:
      "Developed the frontend, implemented authentication flows, and connected the app to Supabase for real-time data.",
    github: "https://github.com/star-cat414/second-market",
    demo: "https://your-live-demo-link.com",
  },
  {
    name: "GoldSense AI",
    tagline: "AI-Powered Gold Price Prediction & Market Trend Analysis",
    image: "/images/goldsense-dashboard.png",
    problem:
      "Gold prices are notoriously volatile and hard to predict. Everyday investors lack accessible, data-driven tools to see forecasts and understand the market signals behind price movements.",
    solution:
      "Built a full-stack machine-learning web application that forecasts gold prices and analyzes market trends. A FastAPI backend trains and serves an XGBoost Regressor (production) alongside a Linear Regression baseline on 2,000 real daily records from Yahoo Finance, exposed through a polished Next.js dashboard with transparent model evaluation.",
    technologies: ["Python", "XGBoost", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    features: [
      "Gold price forecasts (3/7/30 days)",
      "Market trend analysis & statistics",
      "Model comparison & evaluation metrics",
      "Feature importance insights",
      "REST API with 10 endpoints",
    ],
    contribution:
      "Designed and built the ML pipeline, implemented the FastAPI backend with walk-forward evaluation, and developed the data visualization dashboard.",
    github: "https://github.com/star-cat414/goldsense-ai",
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  university: "University of Computer Studies (Taunggyi)",
  expected: "Expected Graduation: 2027",
  coursework: [
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Database Systems",
    "Operating Systems",
    "Software Engineering",
    "Web / Mobile Application Development",
  ],
};

export type Certification = {
  name: string;
  organization: string;
  completion: string;
  image: string;
  link: string;
};

export const certifications: Certification[] = [
  {
    name: "React Native",
    organization: "Online Course / Platform",
    completion: "Completed Certificate",
    image: "/images/certificates/react-native.jpg",
    link: "/images/certificates/react-native.jpg",
  },
  {
    name: "Git & GitHub",
    organization: "Online Course / Platform",
    completion: "Completed Certificate",
    image: "/images/certificates/git-github.jpg",
    link: "/images/certificates/git-github.jpg",
  },
  {
    name: "Web Development",
    organization: "Online Course / Platform",
    completion: "Completed Certificate",
    image: "/images/certificates/web-development.jpg",
    link: "/images/certificates/web-development.jpg",
  },
  {
    name: "Python (Intermediate)",
    organization: "Online Course / Platform",
    completion: "Completed Certificate",
    image: "/images/certificates/python-intermediate.jpg",
    link: "/images/certificates/python-intermediate.jpg",
  },
  {
    name: "Python (Introduction)",
    organization: "Online Course / Platform",
    completion: "Completed Certificate",
    image: "/images/certificates/python-intro.jpg",
    link: "/images/certificates/python-intro.jpg",
  },
  {
    name: "Prompt Engineering",
    organization: "Online Course / Platform",
    completion: "Completed Certificate",
    image: "/images/certificates/prompt-engineering.jpg",
    link: "/images/certificates/prompt-engineering.jpg",
  },
  {
    name: "AI Social Media Marketing",
    organization: "Online Course / Platform",
    completion: "Completed Certificate",
    image: "/images/certificates/ai-social-media-marketing.jpg",
    link: "/images/certificates/ai-social-media-marketing.jpg",
  },
  {
    name: "UI/UX Design",
    organization: "Online Course / Platform",
    completion: "Completed Certificate",
    image: "/images/certificates/ui-ux-design.jpg",
    link: "/images/certificates/ui-ux-design.jpg",
  },
  {
    name: "KBZPay",
    organization: "Workshop / Training",
    completion: "Completed Certificate",
    image: "/images/certificates/kbzpay.jpg",
    link: "/images/certificates/kbzpay.jpg",
  },
];

export type ExperienceItem = {
  role: string;
  context: string;
  period: string;
  points: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "KBZPay Mini App Developer",
    context: "Payment Mini App — [Project / Company]",
    period: "Placeholder",
    points: [
      "Built a KBZPay mini app feature, integrating mobile wallet payments into a real user flow.",
      "Implemented payment APIs and transaction handling, ensuring secure and reliable processing.",
      "Collaborated with stakeholders to translate requirements into a working mini app.",
    ],
  },
  {
    role: "Smart Q Booking System",
    context: "Full-Stack Booking Application",
    period: "Placeholder",
    points: [
      "Developed a smart queue booking system to streamline appointment and queue management.",
      "Designed the database schema and REST API for bookings, slots, and user management.",
      "Built a responsive interface with authentication and real-time booking updates.",
    ],
  },
  {
    role: "Academic Project Lead",
    context: "AI-Powered Emotion-Aware Chat Application",
    period: "Final Year Capstone",
    points: [
      "Led a team to design and build an NLP-powered chat application.",
      "Integrated transformer models for emotion detection.",
      "Documented architecture and presented to the faculty.",
    ],
  },
  {
    role: "Freelance / Team Projects",
    context: "Freelance & Collaboration",
    period: "Ongoing",
    points: [
      "Delivered small web and mobile projects for clients.",
      "Worked across the stack with React, Node.js, and Supabase.",
      "Practiced clean, maintainable, and well-tested code.",
    ],
  },
  {
    role: "Volunteer / Technical Activities",
    context: "Student Community",
    period: "Ongoing",
    points: [
      "Mentored peers in programming and modern web technologies.",
      "Organized and spoke at technical workshops.",
      "Contributed to open-source and student-run projects.",
    ],
  },
];

export const achievements = [
  "Dean's List / High Academic Achievement — placeholder",
  "Finalist, University Hackathon 2025 — placeholder",
  "Programming competition participant — placeholder",
  "Completed technical workshops & bootcamps — placeholder",
  "Built and deployed multiple production-ready projects",
  "Recognized for project quality and teamwork",
];

export const featuredRepos = [
  {
    name: "EmoChat",
    description: "AI chat app with emotion detection & multilingual support.",
    language: "Python",
    stars: 0,
  },
  {
    name: "second-market",
    description: "Full-stack mobile marketplace built with React Native & Supabase.",
    language: "TypeScript",
    stars: 0,
  },
  {
    name: "goldsense-ai",
    description: "AI-powered gold price prediction & market trend analysis full-stack ML app.",
    language: "Python",
    stars: 0,
  },
];
