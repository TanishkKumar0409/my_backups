import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaUsers,
  FaAward,
  FaCoffee,
  FaCertificate,
  FaTrophy,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  LuGitBranch,
  LuFileCode2,
  LuLayers,
  LuCpu,
  LuMonitor,
  LuCodepen,
  LuSmartphone,
  LuPalette,
  LuDatabase,
  LuServer,
  LuHeadphones,
  LuSearch,
  LuPenTool,
  LuCode,
  LuRocket,
  LuFigma,
} from "react-icons/lu";
import type { IconType } from "react-icons";

interface SocialLink {
  href: string;
  label: string;
  icon: IconType;
}

interface Skills {
  id: string;
  name: string;
  description: string;
  icon: IconType;
}

interface Tools {
  heading: string;
  name: string;
  text: string;
  type: string;
  icon: IconType;
}
interface Services {
  icon: IconType;
  id: string;
  title: string;
  description: string;
  features: string[];
}

interface WorkProcess {
  icon: IconType;
  id: number;
  title: string;
  color: string;
  description: string;
}

interface Projects {
  id: number;
  title: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  description: string;
}

interface Gallery {
  src: string;
  category: string;
}

interface Highlights {
  number: number;
  icon: IconType;
  label: String;
  color: string;
}
interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: String[];
  technologies: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
  gpa: String;
  location: string;
  highlights: string[];
  image: string;
}
interface Certification {
  icon: IconType;
  title: string;
  issuer: string;
  date: string;
  description: String;
  color: string;
  credentialId: string;
  validUntil: string;
}

interface Testimonials {
  name: string;
  position: string;
  image: string;
  content: string;
  rating: number;
}

interface FAQS {
  id: number;
  question: string;
  answer: string;
}

interface Contact {
  icon: IconType;
  label: string;
  value: string;
  color: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
}

interface UserDataType {
  name: string;
  role: string;
  bannerBio: string;
  socialLinks: SocialLink[];
  profile: string;
  resume: string;
  about: string[];
  aboutImg: string;
  skills: Skills[];
  tools: Tools[];
  services: Services[];
  workProcess: WorkProcess[];
  projects: Projects[];
  gallery: Gallery[];
  highlights: Highlights[];
  experience: Experience[];
  education: Education[];
  certification: Certification[];
  testimonials: Testimonials[];
  faqs: FAQS[];
  faqImg: string;
  contact: Contact[];
  blogs: BlogPost[];
}

const UserData: UserDataType = {
  profile:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  name: "Tanishk Kumar",
  role: "Full-Stack Developer",
  bannerBio:
    "I create beautiful, responsive web applications with modern technologies. Passionate about clean code, user experience, and innovative solutions.",
  resume: "/asdfj",
  socialLinks: [
    { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
    { icon: LuCodepen, href: "https://codepen.io/", label: "Codepen" },
  ],
  about: [
    "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. My journey started with a curiosity about how websites work, and ithas evolved into a career dedicated to crafting exceptional userexperiences.",
    " When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.",
  ],
  aboutImg:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop",
  skills: [
    {
      id: "git",
      name: "Git",
      icon: LuGitBranch,
      description:
        "Expert in version control workflow, repository management, and collaborative development",
    },
    {
      id: "html",
      name: "HTML",
      icon: LuFileCode2,
      description:
        "Creating semantic markup structure for accessible and SEO-friendly web applications",
    },
    {
      id: "css",
      name: "CSS",
      icon: LuLayers,
      description:
        "Building responsive layouts, animations, and modern design implementations",
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: LuCpu,
      description:
        "Developing interactive experiences with modern ES6+ features and frameworks",
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: LuCpu,
      description:
        "Developing interactive experiences with modern ES6+ features and frameworks",
    },
  ],
  tools: [
    {
      icon: LuCode,
      name: "VS Code",
      heading: "Visual Studio Code",
      text: "Primary code editor with extensive extensions for efficient development workflow.",
      type: "Code Editor",
    },
    {
      icon: LuDatabase,
      name: "Postman",
      heading: "API Testing",
      text: "Essential tool for testing, documenting, and debugging REST APIs and GraphQL endpoints.",
      type: "API Client",
    },
    {
      icon: LuGitBranch,
      name: "Git",
      heading: "Version Control",
      text: "Distributed version control system for tracking changes and collaborative development.",
      type: "Version Control",
    },
    {
      icon: LuFigma,
      name: "Figma",
      heading: "Design Tool",
      text: "Collaborative design platform for creating user interfaces and prototyping applications.",
      type: "Design",
    },
  ],
  services: [
    {
      id: "web",
      title: "Web Development",
      icon: LuMonitor,
      description:
        "Building responsive web apps with modern technologies and best practices for performance and accessibility.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: LuSmartphone,
      description:
        "Creating native and cross-platform mobile applications for iOS and Android devices.",
      features: [
        "React Native",
        "Native iOS/Android",
        "Offline Support",
        "Push Notifications",
      ],
    },
    {
      id: "ui",
      title: "UI/UX Design",
      icon: LuPalette,
      description:
        "Designing intuitive interfaces that create enjoyable and efficient user experiences.",
      features: [
        "User ReLusearch",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: LuDatabase,
      description:
        "Building robust Luserver-side solutions with scalable architectures and APIs.",
      features: [
        "API Design",
        "Database Modeling",
        "Authentication",
        "Performance Tuning",
      ],
    },
    {
      id: "devops",
      title: "DevOps & Deployment",
      icon: LuServer,
      description:
        "Streamlined deployment processes and continuous integration/deployment pipelines.",
      features: [
        "CI/CD Pipelines",
        "Containerization",
        "Cloud Hosting",
        "Infrastructure as Code",
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      icon: LuHeadphones,
      description:
        "Ongoing support and maintenance to keep your applications running smoothly.",
      features: [
        "Updates",
        "Performance Monitoring",
        "Bug Fixing",
        "Security Patching",
      ],
    },
  ],
  workProcess: [
    {
      id: 1,
      title: "Discovery & Planning",
      icon: LuSearch,
      color: "bg-orange-500",
      description:
        "I begin by understanding your business goals, target audience, and project requirements to establish a clear roadmap.",
    },
    {
      id: 2,
      title: "Design & Prototyping",
      icon: LuPenTool,
      color: "bg-purple-500",
      description:
        "Creating wireframes and interactive prototypes to visualize the solution before development begins.",
    },
    {
      id: 3,
      title: "Development",
      icon: LuCode,
      color: "bg-blue-500",
      description:
        "Building the application with clean, modular code using modern technologies and best practices.",
    },
    {
      id: 4,
      title: "Launch & Support",
      icon: LuRocket,
      color: "bg-green-500",
      description:
        "Deploying the application, providing training, ongoing maintenance, and technical support.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with React and Node.js",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "http://blayznxt.onrender.com",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Mobile-first task management application",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase"],
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Design System",
      description: "Comprehensive UI component library",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["Figma", "Storybook", "CSS"],
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      tags: ["Vue.js", "D3.js", "Python"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Cross-platform fitness tracking application",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Flutter", "Firebase", "Health API"],
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Responsive portfolio design and development",
      image:
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      tags: ["Figma", "React", "Tailwind"],
      liveUrl: "#",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      category: "web",
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      category: "web",
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "branding",
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      category: "design",
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      category: "design",
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      category: "branding",
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      category: "mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      category: "web",
    },
  ],
  highlights: [
    {
      icon: FaCode,
      number: 50,
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaUsers,
      number: 30,
      label: "Happy Clients",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaAward,
      number: 5,
      label: "Years Experience",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaCoffee,
      number: 1000,
      label: "Cups of Coffee",
      color: "from-orange-500 to-red-500",
    },
  ],
  experience: [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Lead developer for enterprise web applications, mentoring junior developers and implementing best practices.",
      achievements: [
        "Reduced application load time by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2020 - 2022",
      type: "Full-time",
      description:
        "Developed responsive web applications for various clients using React and modern frontend technologies.",
      achievements: [
        "Delivered 20+ client projects",
        "Improved SEO scores by 60%",
        "Built reusable component library",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Web Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2019 - 2020",
      type: "Full-time",
      description:
        "Full-stack development role building the company's main product from scratch.",
      achievements: [
        "Built MVP from ground up",
        "Implemented user authentication",
        "Optimized database queries",
      ],
      technologies: ["JavaScript", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Junior Developer",
      company: "Code Academy",
      location: "Boston, MA",
      period: "2018 - 2019",
      type: "Full-time",
      description:
        "Started my career learning modern web development practices and contributing to various projects.",
      achievements: [
        "Completed 100+ coding challenges",
        "Built first commercial website",
        "Learned React and Node.js",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ],
  education: [
    {
      degree: "Master of Computer Science",
      school: "University of Technology",
      period: "2016 - 2018",
      description:
        "Specialized in Software Engineering and Web Technologies with focus on modern development practices",
      gpa: "3.8/4.0",
      location: "San Francisco, CA",
      highlights: ["Magna Cum Laude", "Research Assistant", "Dean's List"],
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      period: "2012 - 2016",
      description:
        "Foundation in Computer Science fundamentals and programming with emphasis on algorithms and data structures",
      gpa: "3.6/4.0",
      location: "Los Angeles, CA",
      highlights: ["Summa Cum Laude", "CS Club President", "Hackathon Winner"],
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      period: "2012 - 2016",
      description:
        "Foundation in Computer Science fundamentals and programming with emphasis on algorithms and data structures",
      gpa: "3.6/4.0",
      location: "Los Angeles, CA",
      highlights: ["Summa Cum Laude", "CS Club President", "Hackathon Winner"],
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    },
  ],
  certification: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description:
        "Professional-level certification for designing distributed systems on AWS",
      icon: FaAward,
      color: "from-orange-500 to-red-500",
      credentialId: "AWS-SA-2023-001",
      validUntil: "2026",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      description:
        "Certification for building scalable applications on Google Cloud Platform",
      icon: FaTrophy,
      color: "from-blue-500 to-indigo-500",
      credentialId: "GCP-PD-2022-002",
      validUntil: "2025",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2022",
      description:
        "Advanced certification for React.js development and best practices",
      icon: FaCertificate,
      color: "from-cyan-500 to-blue-500",
      credentialId: "META-REACT-2022-003",
      validUntil: "2025",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      description: "Certification for MongoDB database design and development",
      icon: FaAward,
      color: "from-green-500 to-emerald-500",
      credentialId: "MONGO-DEV-2021-004",
      validUntil: "2024",
    },
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content:
        "Alex delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Product Manager, Digital Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content:
        "Working with Alex was a pleasure. He transformed our complex requirements into a beautiful, user-friendly application.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content:
        "The mobile app Alex developed for us has been a game-changer. Our user engagement increased by 200% after launch.",
      rating: 5,
    },
    {
      name: "David Thompson",
      position: "CTO, InnovateLab",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "Alex's full-stack expertise and problem-solving skills helped us launch our product ahead of schedule.",
      rating: 5,
    },
  ],
  faqImg:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  faqs: [
    {
      id: 1,
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern JavaScript frameworks like React, Vue.js, and Node.js. I also have experience with TypeScript, GraphQL, and various database technologies including MongoDB, PostgreSQL, and Firebase.",
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while more complex applications can take 2-6 months. I provide detailed timelines during the discovery and planning phase.",
    },
    {
      id: 3,
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, I offer ongoing maintenance and support packages to ensure your application continues to run smoothly after launch. This includes bug fixes, security updates, and performance optimization.",
    },
    {
      id: 4,
      question: "Can you work with my existing team?",
      answer:
        "Absolutely! I collaborate well with existing teams and can adapt to your workflow and development processes. I have experience working in various team structures and with different project management methodologies.",
    },
    {
      id: 5,
      question: "What is your development process?",
      answer:
        "My development process follows an agile approach with regular client check-ins. It includes discovery, design, development, testing, deployment, and post-launch support phases. I emphasize communication and transparency throughout.",
    },
    {
      id: 6,
      question: "Do you offer design services as well?",
      answer:
        "Yes, I provide UI/UX design services including wireframing, prototyping, and visual design. I focus on creating intuitive, user-friendly interfaces that provide an excellent user experience while meeting business objectives.",
    },
  ],
  contact: [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "tanishkk60@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+919557623131",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Dehradun Uttarakhand",
      color: "from-purple-500 to-pink-500",
    },
  ],
  blogs: [
    {
      slug: "getting-started-with-react",
      title: "Getting Started with React: A Beginner's Guide",
      excerpt:
        "Learn the basics of React and start building your first component-based application.",
      content:
        "# Getting Started with React\n\nReact is a popular JavaScript library for building user interfaces...",
      coverImage:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      date: "2024-03-15",
      category: "React",
    },
    {
      slug: "mastering-typescript",
      title: "Mastering TypeScript for Modern Web Development",
      excerpt:
        "Discover how TypeScript can improve your JavaScript development workflow.",
      content:
        "# Mastering TypeScript\n\nTypeScript adds static typing to JavaScript...",
      coverImage:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop",
      date: "2024-03-10",
      category: "TypeScript",
    },
  ],
};

export default UserData;
