import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  excel,
  powerbi,
  nodejs,
  python,
  MySQL,
  mongodb,
  git,
  Jira,
  SAP,
  WIZ,
  F5,
  TUI,
  sfsu,
  Mental,
  Heart,
  Career,
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
    title: "Business Analyst",
    icon: web,
  },
  {
    title: "Technical Project Manager",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Research Assistant",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "PowerBI",
    icon: powerbi,
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
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Jira",
    icon: Jira,
  },
  {
    name: "SAP",
    icon: SAP,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Wiz Developers",
    icon: WIZ,
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Created a robust blog platform with integrated analytical dashboards, enhancing data insights for user management.",
      "Improved system reliability by 50% through performance optimizations and SEO enhancements.",
    ],
  },
  {
    title: "Project Management Intern ",
    company_name: "F5 Systems",
    icon: F5,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Designed and deployed a customer facing Point-of-Sale system, reducing inventory discrepancies by 30%.",
      "Gained practical experience in project management for restaurant technology solutions by collaborating with stakeholders to gather requirements, supervising schedules and resources, and guaranteeing the timely and effective completion of the POS website.",
    ],
  },
  {
    title: "Full Stack Developer ",
    company_name: "TUI Group",
    icon: TUI,
    iconBg: "#383E56",
    date: "Dec 2023 - May 2024",
    points: [
      "Upgrading client's online application from VueJs 2 to VueJs 3.",
      "Received recognition for delivering work on time, resulting in a nearly 20% boost in the deployment process.",
      "Collaborated SonarQube as the primary application security tool, enhancing code quality and reliability; this initiative led to a 40% decrease in critical security vulnerabilities over the first six months post-launch. Increased test coverage for the entire application by around 40% in the Sonarqube reliability Software.",
    ],
  },
  {
    title: "Research & Teaching Assistant ",
    company_name: "San Francisco State University",
    icon: sfsu,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Collaborated with professor to design, develop and maintain a fintech website and implemented features that enhance user experience, ensure the site’s security and optimize performance by 40% .",
      "Assisted in conducting literature reviews, collecting and analyzing data and organizing research materials and prepare reports, summaries and presentations to support professor’s ongoing research projects. ",
      "Grading assignments and supervising the course IBUS 620 RESEARCH IN IBUS & GLOBAL MKT Fall 2024.",
      "Supervising a team of 4 to develop AI-powered chatbot using NLP, reducing manual effort by 30% in academic workflows and employing Agile project management to ensure timely delivering while meeting stakeholder expectations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "An exceptional team player with strong project management skills, Kunal consistently delivered innovative solutions while meeting deadlines and exceeding expectations.",
    name: "Brijesh Makwana",
    designation: "CEO",
    company: "F5 Systems",
    image: "https://content.jdmagicbox.com/v2/comp/vadodara/k8/0265px265.x265.101004115846.j7k8/catalogue/f5-systems-ajwa-road-vadodara-accounting-software-dealers-cBvwIwb3LI.jpg",
  },
  {
    testimonial:
      "Having Kunal on board changed everything. He made our team's work simpler and quicker by simplifying complicated procedures into effective, straightforward solutions.",
    name: "Manan Shah",
    designation: "Project Lead",
    company: "TUI Group",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQG5PhPvC0Adzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1659427830595?e=1741824000&v=beta&t=0j-hHcQ2VYD4wRpTpMcMmiy5uI_JNLY-LhXdzLdkPJc",
  },
  {
    testimonial:
      "In overseeing the project and offering insightful commentary on my findings, Kunal has demonstrated remarkable leadership and inventiveness!",
    name: "Dr. Bruce Heiman",
    designation: "Chairman of International Business Dept.",
    company: "San Francisco State University",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQF1JtT-FTewrw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516155885226?e=1741824000&v=beta&t=4g5O0IF8t_wi-ld2aq87t19hzMUS_N9P_s91wrY0Od0",
  },
];

const projects = [
  {
    name: "Health Prognosis: Predicting Disease & Analytics",
    description:
      "A Diabetes & heart disease prediction system leveraging advanced analytics and machine learning to identify risk factors and provide actionable insights.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "PowerBI",
        color: "pink-text-gradient",
      },
    ],
    image: Heart,
    source_code_link: "https://github.com/Preet2504/-Diabetes-and-Heart-Disease-Prediction-System",
  },
  {
    name: "Mental Health Hub",
    description:
      "A comprehensive mental health website built using the ERN stack, providing resources, self-assessment tools, and support for mental well-being.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tableau",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Mental,
    source_code_link: "https://github.com/kunalsheth1177/Mental-Health-Website-with-ERN",
  },
  {
    name: "CareerMatch",
    description:
      "CareerMatch is an NLP-powered platform that analyzes user inputs to recommend personalized career paths and opportunities, bridging skills with market demands.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Model-training",
        color: "pink-text-gradient",
      },
    ],
    image: Career,
    source_code_link: "https://github.com/nishisuratia/CareerMatch-NLP",
  },
];

export { services, technologies, experiences, testimonials,projects };
