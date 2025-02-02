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
  img: require("../images/aboutImage.png"),
  alt: "aboutme",
  description: `Experienced Software Developer with nearly 3 years in the field and a total of almost 5
                years focused on web development. Skilled in creating and managing software systems,
                proficient in various platforms and languages. Familiar with modern tools and
                procedures, excelling in both independent and collaborative projects.`,
};

export const SkillsInfo = {
  id: "skills",
  title: "SKILLS",
  frontend: [
    {
      img: require("../images/html.png"),
      percentage: "60%",
      background: "#E44D26",
    },
    {
      img: require("../images/css.png"),
      percentage: "60%",
      background: "#2062AF",
    },
    {
      img: require("../images/js.png"),
      percentage: "80%",
      background: "#F0DB4F",
    },
    {
      img: require("../images/react.png"),
      percentage: "60%",
      background: "#05A5D1",
    },
  ],
  api: [
    {
      img: require("../images/axios.png"),
    },
    {
      img: require("../images/x.png"),
    },
  ],
  backend: [
    {
      img: require("../images/node.png"),
      percentage: "90%",
      background: "#80BD01",
    },
    {
      img: require("../images/graphql.png"),
      percentage: "70%",
      background: "#E10198",
    },
    {
      img: require("../images/php.png"),
      percentage: "60%",
      background: "#3465A4",
    },
    {
      img: require("../images/laravel.png"),
      percentage: "50%",
      background: "#3465A4",
    },
    {
      img: require("../images/nestjs.png"),
      percentage: "40%",
      background: "#3465A4",
    },
    {
      img: require("../images/mongo.png"),
      percentage: "60%",
      background: "#509747",
    },

    {
      img: require("../images/mysql.png"),
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
    {
      title: "Barangay Online Inquiry",
      description:
        "Developed a mobile application for a community that can send complaints and see the latest announcement on the community.",
      stack: ["ANDROID STUDIO", "FIREBASE"],
    },
    {
      title: "Election Analytics",
      description:
        "Ebisu is an engagement analytics app, it allows the users which at the moment some politicians to monitor voters engagement. in that way they will know which area they have strong number of supporters and which area they need to focus on campaining to gain more supporters.",
      stack: ["APOLLO", "GRAPHQL", "NODE JS", "mongoDB"],
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
