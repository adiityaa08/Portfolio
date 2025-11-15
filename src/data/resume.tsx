import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Sathawane",
  initials: "AS",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer passionate about crafting user-friendly web solutions and writing clean, optimized code.",
  summary:
    "Hi, I’m Aditya — a Full Stack Developer whose coding journey began in my second year of college. I focus on building web applications while strengthening my problem-solving skills through data structures and algorithms, always striving to create efficient and impactful solutions.",
  avatarUrl: "/pfp.png",
  skills: [
    "C",
    "C++",
    "Java",
    "Javascript",
    "Typescript",
    "React.js",
    "DaisyUI",
    "Material UI",
    "Shadcn UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "HTML",
    "TailwindCSS",
    "Git",
    "GitHub",
    "Postman",
    "Linux",
    "MySQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: {
      name: "Email",
      url: "mailto:adityasathawane2003@gmail.com",
      icon: Icons.email,
      navbar: true,
    },
    phone: {
      name: "Phone",
      url: "tel:+918862071109",
      icon: Icons.phone,
      navbar: true,
    },
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adiityaa08",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya-sathawane08/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Leetcode:{
        name: "Leetcode",
        url: "https://leetcode.com/AdityaSathawane/",
        icon: Icons.leetcode,
        navbar: true,
      }
    },
  },
  

  work: [
    {
      company: "DNote",
      // href: "",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/Dnote.jpeg",
      start: "Sept 2025",
      end: "Oct 2025",
      description:
        "Contributed to Dnote’s platform by developing and optimizing full-stack features focused on efficient data handling and enhanced user experience",
    },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Shri Guru Gobind Singhji Institute of Engineering and Technology",
      href: "https://sggs.ac.in/",
      degree: "BTech in Electronics and Telecommunication",
      logoUrl: "/sggs.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "J. M. Patel College",
      href: "https://jmpatelcollege.com/",
      degree: "HSC (Science)",
      logoUrl: "/jmpc.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "St Pauls English High School",
      href: "",
      degree: "SSC (10th Grade)",
      logoUrl: "/stp.jpg",
      start: "2018",
      end: "2019",
    },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Nex-Chat",
      href: "https://nex-chat-y6mq.onrender.com/",
      dates: "May 2025 - June 2025",
      active: true,
      description:
      "Nex-Chat is a real-time MERN app with Socket.IO and Gemini AI, offering instant, secure, and responsive communication.",
        technologies: [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "Socket.IO",
          "Zustand",
          "DaisyUI",
          "Tailwind CSS",
          "Gemini AI",
        ],
        
      links: [
        {
          type: "Website",
          href: "https://nex-chat-y6mq.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Nex-Chat.png",
      video:
        "",
    },
    {
      title: "Resumind",
      href: "",
      dates: "August 2025 - Present",
      active: true,
      description:
        "Resumind is an AI-powered tool that analyzes and optimizes your resume for better job opportunities.",
        technologies: [
          "React",
          "React Router v7",
          "Zustand",
          "Tailwind CSS",
          "Puter.js",
          "Claude Sonnet 4",
        ],
        
      links: [
        {
          type: "Website",
          href: "https://resumemind-uz2j.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/resumind.png",
      video: "",
    },
    {
      title: " Automated Transparent College System ",
      href: "",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "An automated college system streamlines academic and administrative tasks with AI-driven efficiency and digital management.",
        technologies: [
          "React.js",
          "Redux",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
          "Nodemailer",
        ],
        
      links: [
        {
          type: "Source",
          href: "https://github.com/adiityaa08/HackFusion2.0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/college.png",
      video: "",
    },
    {
      title: "BiteFinder",
      href: "",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "A recipe finder app powered by TheMealDB API, enabling users to search, explore, and discover meals with a simple and responsive UI.",
        technologies: [
          "React.js",
          "JavaScript",
          "TailwindCSS",
          "Shadcn UI",
          "TheMealDB API",
        ],
        
      links: [
        {
          type: "Website",
          href: "https://recipe-finder-u5jm.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/reciepe.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "HacKfusion",
      dates: "February 21st - 23rd, 2025",
      location: "Nanded, Maharashtra",
      description:
        "Developed An automated college system streamlines academic and administrative tasks with AI-driven efficiency and digital management",
      image:
        "/hackfusion.jpg",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Code-O-Phile",
      dates: "June 12th - 12th, 2025",
      location: "Nagpur, Maharashtra",
      description:
        "Secured a rank of 147 out of 1.6k competitors in a coding contest where participants solve challenging problems, showcase skills, and compete under time pressure.",
      image:
        "/code-o-phile.jpg",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Leetcode",
      dates: "Aug - Present",
      location: "",
      description:
        "Solved 500+ LeetCode problems, achieved a contest rating of 1625, and ranked in the top 20% globally.",
      image:
        "/leetcode.png",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
