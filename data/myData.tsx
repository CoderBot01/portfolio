export const navItems = [
  { name: "About", link: "#About" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Certificates", link: "#Certificates" },
  { name: "Contact", link: "#contact" },
  {name:"Experiences", link:"#experience"},
];

export const skills = [
  {

    name: "Javascript",
  },
  {

    name: "React.js",
  },
  {

    name: "Next.js",
  },
  {
    name: "HTML5",
  },
  {

    name: "CSS3",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Python"
  }
];


export const words = [
  "A software developer specializing in Python, JavaScript, and web technologies like React.js and Next.js.",
  "I create secure, high-performance applications.",
  "My focus is on delivering seamless user experiences.",
  "I ensure robust backend functionality in every project."
];

export const projectData = [
  {
    description: "Tech stack: Javascript, Flask",
    title: "Complaint Management System",
    src: "/cms.jpg",
    ctaText: "View",
    ctaLink: "https://github.com/CoderBot01/COMPLAINT-MANAGEMENT-SYSTEM",
    content: () => {
      return (
        <p>
          Developed a system using HTML, CSS, and JavaScript for an intuitive user interface,
          with Python handling backend logic and SQL for database management,
          ensuring efficient complaint tracking and resolution.
        </p>
      );
    },
  },
  {
    description: "Tech stack: React Js, Node",
    title: "Placement Management System and Job Recommender Using Linkedin API",
    src: "/placement.jpg",
    ctaText: "View",
    ctaLink: "https://github.com/CoderBot01/Placement_Management_System",
    content: () => {
      return (
        <p>
          Built a full-stack application using React.js for the frontend,
          Node.js with Express.js for the backend, and PostgreSQL for data storage,
          streamlining placement activities and job matching.
        </p>
      );
    },
  },
  {
    description: "(Digital Marketing)",
    title: "YouTube Ad Campaign ",
    src: "/youtube.png",
    content: () => {
      return (
        <p>
          Designed and executed a targeted video ad campaign,
          optimizing performance through data-driven strategies to increase engagement and visibility on YouTube.
        </p>
      );
    },
  },
  {
    description: "Tech Stack: Next JS, Tailwind CSS",
    title: "My Portfolio",
    src: "/portfolio.png",
    ctaText: "View",
    ctaLink: "",
    content: () => {
      return (
        <p>
          "Developed a sleek and responsive personal portfolio website using Next.js and Tailwind CSS. The site showcases my projects and skills, offering a fast,
          user-friendly experience with modern design aesthetics.""
        </p>
      );
    },
  },

]