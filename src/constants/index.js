import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  java,
  springboot,
  postgresql,
  cpp,
  postman,
  realestate,
  calculator,
  portfolio_preview,
  ecommerce_preview,
  quizmaker_preview,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Spring Boot Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Problem Solving (DSA)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Java", "C", "C++"],
  },
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend Development",
    skills: ["Spring Boot", "Spring Data JPA", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Visual Studio Code", "IntelliJ IDEA", "Git", "GitHub", "Postman"],
  },
];

const experiences = [
  {
    title: "Software Development Intern (Backend Lead)",
    company_name: "Infosys Springboard",
    icon: backend,
    iconBg: "#1d1836",
    date: "Two-Month Program",
    points: [
      "Led backend architecture and engineering for the Real Estate Due Diligence Application, supporting property verification and investment workflows.",
      "Developed robust RESTful APIs using Java, Spring Boot, Spring Data JPA, and PostgreSQL.",
      "Implemented secure JWT authentication and Role-Based Access Control (RBAC) across User, Investor, and Admin roles.",
      "Engineered backend data models and workflows for property risk evaluation, verification records, and ROI analysis.",
      "Collaborated closely with frontend developers to deliver seamless API integration with React web interfaces.",
    ],
  },
];


const projects = [
  {
    name: "Real Estate Due Diligence Application",
    description:
      "A property due diligence application for evaluating property information and supporting verification workflows. Led backend architecture with Spring Boot, PostgreSQL, JWT authentication, and Role-Based Access Control (RBAC).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "spring-data-jpa",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "jwt-rbac",
        color: "orange-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "",
    live_demo_link: "https://realestate-due-diligence.vercel.app/",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "My personal developer portfolio, using React and the original portfolio source-code foundation, presenting verified education, internship experience, skills, and interactive 3D elements.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: portfolio_preview,
    source_code_link: "https://github.com/swarajpakhale",
    live_demo_link: "",
  },
  {
    name: "E-Commerce Website",
    description:
      "A responsive e-commerce web application featuring product catalog browsing, cart management, and structured data handling for shopping workflows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce_preview,
    source_code_link: "",
    live_demo_link: "",
  },
  {
    name: "Quiz Maker Application",
    description:
      "An interactive quiz maker web application designed for creating, taking, and reviewing custom multiple-choice quizzes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
    ],
    image: quizmaker_preview,
    source_code_link: "",
    live_demo_link: "",
  },
  {
    name: "Interactive Web Calculator",
    description:
      "A responsive web calculator for performing mathematical computations with clear button layouts and keyboard support.",
    tags: [
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/swarajpakhale/swarajpakhale.calculator-project",
    live_demo_link: "https://swarajpakhale.github.io/swarajpakhale.calculator-project/index2.html",
  },
];

const certificates = [
  {
    name: "Infosys Springboard Internship 7.0 (B1)",
    issuer: "Infosys Springboard",
    date: "October 14, 2026",
    description:
      "Certificate of Completion for Internship 7.0 (B1) on Autonomous Property Research and Real Estate Risk Assessment Intelligence System (June 29, 2026 – August 31, 2026).",
    tags: [
      { name: "Infosys", color: "blue-text-gradient" },
      { name: "Internship-7.0", color: "green-text-gradient" },
      { name: "Real-Estate-Risk", color: "pink-text-gradient" },
    ],
    image: "/certificates/thumbnails/infosys-springboard-internship-7.png",
    credential_link: "/certificates/infosys-springboard-internship-7.pdf",
  },
  {
    name: "Getting Started with Generative AI",
    issuer: "IBM SkillsBuild",
    date: "March 16, 2026",
    description:
      "Foundational credential exploring generative AI architectures, large language models, prompt engineering, and enterprise AI transformation.",
    tags: [
      { name: "GenAI", color: "blue-text-gradient" },
      { name: "LLM", color: "green-text-gradient" },
      { name: "IBM", color: "pink-text-gradient" },
    ],
    image: "/certificates/thumbnails/ibm-getting-started-generative-ai.png",
    credential_link: "https://www.credly.com/go/WXse4Shn",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "March 16, 2026",
    description:
      "Comprehensive knowledge of Amazon Web Services cloud architecture, compute, storage, databases, networking, and cloud security governance.",
    tags: [
      { name: "AWS", color: "orange-text-gradient" },
      { name: "Cloud", color: "blue-text-gradient" },
      { name: "DevOps", color: "green-text-gradient" },
    ],
    image: "/certificates/thumbnails/aws-cloud-practitioner-essentials.png",
    credential_link: "/certificates/aws-cloud-practitioner-essentials.pdf",
  },
  {
    name: "Implementing Deep Learning: Optimized Deep Learning Applications",
    issuer: "Infosys Springboard",
    date: "March 20, 2026",
    description:
      "Implementation of deep neural networks, model optimization, transfer learning, and production deployment considerations.",
    tags: [
      { name: "Deep-Learning", color: "pink-text-gradient" },
      { name: "Neural-Nets", color: "blue-text-gradient" },
      { name: "Infosys", color: "green-text-gradient" },
    ],
    image: "/certificates/thumbnails/infosys-implementing-deep-learning.png",
    credential_link: "https://verify.onwingspan.com",
  },
  {
    name: "Getting Started in Google Analytics",
    issuer: "Coursera",
    date: "April 21, 2026",
    description:
      "Web data analytics, tracking user flows, event conversion measurement, and behavioral analytics configuration.",
    tags: [
      { name: "Analytics", color: "blue-text-gradient" },
      { name: "Google", color: "orange-text-gradient" },
      { name: "Metrics", color: "green-text-gradient" },
    ],
    image: "/certificates/thumbnails/coursera-google-analytics.png",
    credential_link: "https://coursera.org/verify/K4B3Y9R757N0",
  },
  {
    name: "Oracle Certified Foundations Associate — Oracle AI Foundations",
    issuer: "Oracle University",
    date: "March 18, 2026",
    description:
      "Knowledge of artificial intelligence concepts, machine learning fundamentals, and OCI AI cloud services.",
    tags: [
      { name: "Oracle", color: "pink-text-gradient" },
      { name: "AI-Foundations", color: "blue-text-gradient" },
      { name: "Cloud", color: "orange-text-gradient" },
    ],
    image: "/certificates/thumbnails/oracle-ai-foundations-associate.png",
    credential_link: "/certificates/oracle-ai-foundations-associate.pdf",
  },
  {
    name: "DSA Course in C++",
    issuer: "Coder Army",
    date: "March 30, 2026",
    description:
      "Rigorous training in Data Structures & Algorithms, recursion, dynamic programming, trees, and graph algorithms.",
    tags: [
      { name: "DSA", color: "green-text-gradient" },
      { name: "C++", color: "blue-text-gradient" },
      { name: "Algorithms", color: "purple-text-gradient" },
    ],
    image: "/certificates/thumbnails/coder-army-dsa-cpp.png",
    credential_link: "/certificates/coder-army-dsa-cpp.pdf",
  },
  {
    name: "Website Development Tutorial",
    issuer: "Infosys Springboard",
    date: "March 2026",
    description:
      "Hands-on web development foundations covering responsive interfaces, styling, and modern web application development.",
    tags: [
      { name: "WebDev", color: "blue-text-gradient" },
      { name: "Frontend", color: "green-text-gradient" },
      { name: "Infosys", color: "pink-text-gradient" },
    ],
    image: "/certificates/thumbnails/infosys-website-development-tutorial.png",
    credential_link: "/certificates/infosys-website-development-tutorial.pdf",
  },
  {
    name: "QuizOff 2026: India's Biggest AI Quiz",
    issuer: "CampusCrew / Unstop",
    date: "July 19, 2026",
    description:
      "National-level achievement in India's Biggest AI Quiz competition testing comprehensive artificial intelligence and computer science knowledge.",
    tags: [
      { name: "AI-Quiz", color: "blue-text-gradient" },
      { name: "Unstop", color: "pink-text-gradient" },
      { name: "Achievement", color: "green-text-gradient" },
    ],
    image: "/certificates/thumbnails/ibm-getting-started-generative-ai.png",
    credential_link: "https://unstop.com",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  certificates,
};
