export const HeroInfo = {
  id: "home",
  name: "Alyson Jan Urriza",
  work: "Web Developer",
  img: require("../images/alyson.png"),
  alt: "mypic",
  description:
    "I am passionate about Web development to create a positive impact in the world. I aspire to become a great Software Engineer.",
  buttonLabel: "RESUME",
};

export const AboutInfo = {
  id: "about",
  title: "ABOUT ME",
  img: require("../images/aboutImage.png"),
  alt: 'aboutme',
  description: `I'm a Backend Developer with almost 3 years of experience. I have a diverse set of skills ranging from front-end to back-end development. I love learning new technologies that can improve my set of skills and knowledge. Solving bugs bring out the best of my curiosity about Web development. I got my Bachelor degree in Information Technology at Southwestern University-PHINMA, Philippines. Below is a quick overview of my main  technical skill sets and technologies I use.`,
};

export const SkillsInfo = {
  id: "skills",
  title: "SKILLS",
  frontend: [
    {
      img: require("../images/html.png"),
      percentage: "60%",
      background: "#E44D26"
    },
    {
      img: require("../images/css.png"),
      percentage: "60%",
      background: "#2062AF"
    },
    {
      img: require("../images/js.png"),
      percentage: "80%",
      background: "#F0DB4F"
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
      background: "#80BD01"
    },
    {
      img: require("../images/graphql.png"),
      percentage: "70%",
      background: "#E10198",
    },
    {
      img: require("../images/mongo.png"),
      percentage: "60%",
      background: "#509747"
    },
    {
      img: require("../images/mysql.png"),
      percentage: "60%",
      background: "#3465A4"
    },
  ]
}

export const ProjectInfo = {
  id: "projects",
  title: "PROJECTS",
  projects: [
    {
      title: "Real Estate Website",
      description: "Users were able to see and inquire about properties with a content management system for the admin on the Real Estate Website. ",
      stack: ["HTML", "CSS", "BOOTSTRAP", "PHP", "mySQL"]
    },
    {
      title: "Salon Inventory System",
      description: "Developed a web application with two user interface employee and admin for a private salon that can record the service rendered and can automate employees commission and owner net sales.",
      stack: ["REACT", "EXPRESS", "NODE JS", "mongoDB"]
    },
    {
      title: "Barangay Online Inquiry",
      description: "Developed a mobile application for a community that can send complaints and see the latest announcement on the community.",
      stack: ["ANDROID STUDIO", "FIREBASE"]
    },
    // {
    //   title: "Election Analytics",
    //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   stack: ["APOLLO", "GRAPHQL", "NODE JS", "mongoDB"]
    // },
  ]
};

export const ContactInfo = {
  id: "contact",
  title: "GET IN TOUCH",
  email: "alysonjan@gmail.com",
  emailLogo: require("../images/email.png"),
  socials: [
    {
      img: require("../images/twitter.png"),
      alt: "twitter",
      link: "https://twitter.com/aly_urriza"
    },
    {
      img: require("../images/instagram.png"),
      alt: "instagram",
      link: "https://www.instagram.com/ajaxxalyson"
    },
    {
      img: require("../images/github.png"),
      alt: "github",
      link: "https://github.com/alysonjan"
    },
    {
      img: require("../images/linkedin.png"),
      alt: "linkedin",
      link: "https://www.linkedin.com/in/alyson-urriza"
    }
  ]
}