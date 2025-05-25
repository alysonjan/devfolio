export const HeroInfo = {
  id: "home",
  name: "Alyson Jan Urriza",
  work: "Web Developer",
  img: require("../images/alyson.png"),
  alt: "mypic",
  description:
    "An enthusiastic Web Developer who is using the most modern technologies to make a positive impact on society. Committed to making valuable contributions and finding creative solutions to advance all business sectors.",
  buttonLabel: "RESUME",
};

export const AboutInfo = {
  id: "about",
  title: "ABOUT ME",
  img: require("../images/me2.png"),
  alt: "aboutme",
  description: `Experienced Software Developer with 3 years in the field and nearly 5 years of hands-on web
                development experience. Proficient in building and maintaining software systems across various
                platforms and programming languages.Strong foundation in software development principles, coupled
                with a deep understanding of modern tools, workflows, and best practices. Skilled in both independent
                and team-based environments. Adept at leveraging generative AI to enhance productivity and innovation
                in daily workflows, aligning with the latest technological trends while grounded in core development
                fundamentals.`,
};

export const SkillsInfo = {
  id: "skills",
  title: "SKILLS",
  frontend: [
    {
      img: require("../images/html.png"),
      alt: "HTML",
      percentage: "60%",
      background: "#E44D26",
    },
    {
      img: require("../images/css.png"),
      alt: "CSS",
      percentage: "60%",
      background: "#2062AF",
    },
    {
      img: require("../images/js.png"),
      alt: "JavaScript",
      percentage: "80%",
      background: "#F0DB4F",
    },
    {
      img: require("../images/react.png"),
      alt: "React",
      percentage: "60%",
      background: "#05A5D1",
    },
  ],
  api: [
    {
      img: require("../images/axios.png"),
      alt: "Axios",
    },
    {
      img: require("../images/x.png"),
      alt: "X API",
    },
  ],
  backend: [
    {
      img: require("../images/node.png"),
      alt: "Node.js",
      percentage: "90%",
      background: "#80BD01",
    },
    {
      img: require("../images/graphql.png"),
      alt: "GraphQL",
      percentage: "70%",
      background: "#E10198",
    },
    {
      img: require("../images/php.png"),
      alt: "PHP",
      percentage: "60%",
      background: "#3465A4",
    },
    {
      img: require("../images/laravel.png"),
      alt: "Laravel",
      percentage: "50%",
      background: "#3465A4",
    },
    {
      img: require("../images/nestjs.png"),
      alt: "NestJS",
      percentage: "40%",
      background: "#3465A4",
    },
    {
      img: require("../images/mongo.png"),
      alt: "MongoDB",
      percentage: "60%",
      background: "#509747",
    },
    {
      img: require("../images/mysql.png"),
      alt: "MySQL",
      percentage: "60%",
      background: "#3465A4",
    },
  ],
};

export const ProjectInfo = {
  id: "projects",
  title: "PROJECTS",
  projects: [
    {
      title: "Real Estate Website",
      description:
        "Users were able to see and inquire about properties with a content management system for the admin on the Real Estate Website. ",
      stack: ["HTML", "CSS", "BOOTSTRAP", "PHP", "mySQL"],
    },
    {
      title: "Salon Inventory System",
      description:
        "Developed a web application with two user interface employee and admin for a private salon that can record the service rendered and can automate employees commission and owner net sales.",
      stack: ["REACT", "EXPRESS", "NODE JS", "mongoDB"],
    },
    // {
    //   title: "Barangay Online Inquiry",
    //   description:
    //     "Developed a mobile application for a community that can send complaints and see the latest announcement on the community.",
    //   stack: ["ANDROID STUDIO", "FIREBASE"],
    // },
    {
      title: "School Clinic System",
      description:
        "Developed a web-based clinic management system for schools where students can view their medical history, request medical or physical examination certificates, and more. The system includes an admin panel that functions as a CRM for clinic staff to manage consultations, patient records, and clinic activities.",
      stack: ["NEXT.JS", "NODE.JS", "MYSQL"],
    },
    // {
    //   title: "Election Analytics",
    //   description:
    //     "Ebisu is an engagement analytics app, it allows the users which at the moment some politicians to monitor voters engagement. in that way they will know which area they have strong number of supporters and which area they need to focus on campaining to gain more supporters.",
    //   stack: ["APOLLO", "GRAPHQL", "NODE JS", "mongoDB"],
    // },
    {
      title: "Blood Donation & Request System",
      description:
        "Developed a web app for users to donate and request blood, with automatic matching and notifications. Includes an admin panel to manage requests, donors, and partner organizations.",
      stack: ["REACT / VITE.JS", "Express", "NODE.JS", "MYSQL"],
    },
  ],
};

export const ContactInfo = {
  id: "contact",
  title: "GET IN TOUCH",
  email: "alysonjan@gmail.com",
  emailLogo: require("../images/email.png"),
  socials: [
    {
      img: require("../images/github.png"),
      alt: "github",
      link: "https://github.com/alysonjan",
    },
    {
      img: require("../images/linkedin.png"),
      alt: "linkedin",
      link: "https://www.linkedin.com/in/alyson-urriza",
    },
  ],
};
