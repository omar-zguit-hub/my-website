const projectFiles = [
  {
    name: "explorer.projects",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "HousTalib.jsx",
        type: "file",
        language: "JavaScript",
      },
      {
        name: "MayaSol.jsx",
        type: "file",
        language: "JavaScript",
      },
      {
        name: "TaskManager.jsx",
        type: "file",
        language: "JavaScript",
      },
      {
        name: "Weather.jsx",
        type: "file",
        language: "JavaScript",
      },
      {
        name: "Tic-Tac-Toe.jsx",
        type: "file",
        language: "JavaScript",
      },
      {
        name: "explorer.assets",
        type: "folder",
        children: [
          { name: "img-1.png", type: "file" },
          { name: "img-2.png", type: "file" },
          { name: "img-3.png", type: "file" },
          { name: "img-4.png", type: "file" },
          { name: "img-5.png", type: "file" },
        ],
      },
    ],
  },
];

const skillsFiles = [
  {
    name: "explorer.skills",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "explorer.frontend",
        type: "folder",
        isOpen: true,
        children: [
          { name: "HTML.html", type: "file", language: "html" },
          { name: "CSS.css", type: "file", language: "css" },
          { name: "JavaScript.js", type: "file", language: "javascript" },
          { name: "MaterialUI.jsx", type: "file", language: "javascript" },
          { name: "Bootstrap.css", type: "file", language: "css" },
          { name: "React.jsx", type: "file", language: "javascript" },
          { name: "Tailwind.css", type: "file", language: "css" },
        ],
      },
      {
        name: "explorer.backend",
        type: "folder",
        isOpen: true,
        children: [
          { name: "Python.py", type: "file", language: "python" },
          { name: "PHP.php", type: "file", language: "php" },
          { name: "Laravel.php", type: "file", language: "php" },
          { name: "Express.js", type: "file", language: "javascript" },
        ],
      },
      {
        name: "explorer.database",
        type: "folder",
        isOpen: true,
        children: [
          { name: "MySQL.sql", type: "file", language: "sql" },
          { name: "MongoDB.js", type: "file", language: "javascript" },
        ],
      },
      {
        name: "explorer.tools",
        type: "folder",
        isOpen: true,
        children: [
          { name: "VSCode.code", type: "file", language: "code" },
          { name: "Git.git", type: "file", language: "git" },
          { name: "GitHub.md", type: "file", language: "markdown" },
          { name: "Postman.json", type: "file", language: "json" },
          { name: "Docker.yml", type: "file", language: "yaml" },
          { name: "WordPress.php", type: "file", language: "php" },
        ],
      },
    ],
  },
];

const aboutFiles = [
  {
    name: "explorer.about",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "explorer.profile",
        type: "file",
        language: "markdown",
      },
      {
        name: "explorer.experience",
        type: "file",
        language: "json",
      },
      {
        name: "explorer.education",
        type: "file",
        language: "markdown",
      },
      {
        name: "explorer.documents",
        type: "folder",
        children: [{ name: "CV.pdf", type: "file" }],
      },
    ],
  },
];

const homeFiles = [
  {
    name: "explorer.home",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "explorer.profileFile",
        type: "file",
        language: "javascript",
      },
      {
        name: "explorer.projectsFile",
        type: "file",
        language: "javascript",
      },
      {
        name: "explorer.skillsFile",
        type: "file",
        language: "javascript",
      },
      {
        name: "explorer.principleFile",
        type: "file",
        language: "javascript",
      },
    ],
  },
];

const contactFiles = [
  {
    name: "explorer.contact",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "explorer.contactForm",
        type: "file",
        language: "JavaScript",
      },
      {
        name: "explorer.contactInfo",
        type: "file",
        language: "json",
      },
    ],
  },
];

export const getFileStructure = (path) => {
  switch (path) {
    case "/":
      return homeFiles;
    case "/projects":
      return projectFiles;
    case "/skills":
      return skillsFiles;
    case "/about":
      return aboutFiles;
    case "/contact":
      return contactFiles;
    default:
      if (path.startsWith("/project/")) {
        return projectFiles;
      }

      return homeFiles;
  }
};
