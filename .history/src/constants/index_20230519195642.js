import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analytics",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Node.js is an open-source, cross-platform JavaScript runtime that allows developers to execute JavaScript code outside of a web browser.",
      "Node.js's event-driven, non-blocking I/O model, which enables high-performance and scalable applications.",
    ],
  },
  {
    title: "NodeJs Developer",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
      "A Node.js developer is a skilled professional who specializes in utilizing the Node.js runtime environment to build efficient and scalable server-side applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mongodb Developer",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Maintaining web applications using MongoDB  and other related technologies.",
      "A MongoDB developer is a professional who specializes in working with MongoDB, a popular NoSQL database management system.",
      "MongoDB is known for its flexible and scalable document-oriented data model, making it suitable for handling large volumes of structured, semi-structured, and unstructured data.",
      "Perform CRUD (Create, Read, Update, Delete) operations on MongoDB documents, including inserting, querying, updating, and deleting data.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ajay is an exceptional senior and self-studious student. His dedication and commitment to learning are truly commendable.",
    name: "Afsha Akkalkot",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about development' success like Ajay does.",
    name: "Vedant Berge",
    // designation: "COO",
    // company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful , but Ajay proved me wrong.",
    name: "Lisa Wang",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NewsApp",
    description:
      "The news app built in ReactJS is a modern and dynamic application designed to provide users with a seamless and interactive news browsing experience. ReactJS, a popular JavaScript library for building user interfaces, offers a robust framework for creating highly responsive and efficient web applications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/NoobAjay/newsapp.git",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "The tic-tac-toe game built in ReactJS and Vite is a web-based implementation of the classic game that allows users to play against each other. ReactJS, a JavaScript library for building user interfaces, and Vite, a fast and lightweight development server, work together to create a smooth and efficient gaming experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "TicTacToeGame1.surge.sh",
  },
  {
    name: "TextUtils-text editor",
    description:
      "A text editor built in ReactJS is a powerful web application that allows users to create, edit, and format text documents. ReactJS, a popular JavaScript library for building user interfaces, provides the foundation for creating a dynamic and responsive text editing experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstarap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://theajay-texteditor.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
