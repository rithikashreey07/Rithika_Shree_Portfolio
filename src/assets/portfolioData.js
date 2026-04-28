export const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const contactLinks = [
  {
    label: "Email",
    value: "rithikashreey07@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rithikashreey07@gmail.com",
  },
  { label: "Phone", value: "+91 9344205572", href: "tel:+919344205572" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rithika-shree-yuvaraj-9862202a3",
    href: "https://www.linkedin.com/in/rithika-shree-yuvaraj-9862202a3/",
  },
  {
    label: "GitHub",
    value: "github.com/rithikashreey07",
    href: "https://github.com/rithikashreey07",
  },
];

export const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js"],
  Backend: ["Node.js", "Express.js"],
  Mobile: ["Flutter"],
  Database: ["MySQL", "MongoDB"],
  Tools: ["Git", "REST APIs", "Power BI"],
};

export const experience = {
  role: "Developer Intern - Greencodex Technologies",
  duration: "5 months",
  points: [
    "Built web and mobile applications using React.js and Flutter.",
    "Developed backend services using Node.js and MySQL.",
    "Created admin dashboards for monitoring.",
    "Improved application performance and usability.",
  ],
};

export const projects = [
  {
    title: "Smart Food Saver",
    type: "Mobile Application",
    impact: "Enables real-time food redistribution using role-based coordination.",
    problemSolution:
      "Food donors and NGOs often struggle with fragmented coordination. This system unifies donation, request, and volunteer assignment workflows in one role-based platform.",
    description: "Enables real-time food redistribution using role-based coordination.",
    features: [
      "Multi-role system: Admin, Donor, NGO, Volunteer",
      "Food donation and request workflows",
      "Volunteer assignment tracking",
      "Admin dashboard for monitoring",
    ],
    stack: ["Flutter", "Node.js / Firebase", "MySQL / Firestore"],
    github: "https://github.com/rithikashreey07",
    live: "https://github.com/rithikashreey07",
    image: "/projects/smart-food-saver.png",
  },
  {
    title: "Machine Repair Guide System",
    type: "Mobile + Web",
    impact: "Streamlines machine diagnosis workflows for technicians and administrators.",
    problemSolution:
      "Technicians need quick troubleshooting support while admins need control over procedures. This solution combines a Flutter technician app with a React admin dashboard.",
    description: "Streamlines machine diagnosis workflows for technicians and administrators.",
    features: [
      "Flutter mobile app for technicians",
      "React.js web dashboard for admin",
      "Step-by-step troubleshooting guidance",
      "Real-time data synchronization",
    ],
    stack: ["Flutter", "React.js", "Node.js", "MySQL"],
    github: "https://github.com/rithikashreey07",
    live: "https://github.com/rithikashreey07",
    image: "/projects/machine-repair.png",
  },
  {
    title: "Task Management System",
    type: "MERN Stack",
    impact: "Improves team productivity through secure task tracking and automation.",
    problemSolution:
      "Teams need a simple and secure way to track work. This MERN application provides authenticated task tracking with complete CRUD operations and API-driven architecture.",
    description: "Improves team productivity through secure task tracking and automation.",
    features: [
      "User authentication and authorization",
      "CRUD operations for tasks",
      "Responsive UI",
      "REST API integration",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/rithikashreey07",
    live: "https://github.com/rithikashreey07",
    image: "/projects/task-management.png",
  },
  {
    title: "Greencodex Technologies Landing Page",
    type: "Web Application",
    impact: "Built a responsive company website to improve digital presence and user engagement.",
    problemSolution:
      "The company needed a clear and responsive web presence. This landing page organizes services and calls-to-action into a lightweight, mobile-friendly experience.",
    description: "Built a responsive company website to improve digital presence and user engagement.",
    features: [
      "Responsive UI design using React.js and Tailwind CSS",
      "Structured sections: services, about, contact, call-to-action",
      "Optimized layout for mobile and desktop devices",
      "Clean navigation and user-friendly interface",
      "Performance-focused implementation",
    ],
    stack: ["React.js", "Tailwind CSS"],
    github: "https://github.com/rithikashreey07",
    live: "https://github.com/rithikashreey07",
    image: "/projects/greencodex-technologies.png",
  },
];
