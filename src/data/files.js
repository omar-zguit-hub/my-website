const projectFiles = [
  {
    name: "Projets",
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
        language: "javascript",
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
        name: "assets",
        type: "folder",
        children: [
          { name: "preview1.png", type: "file" },
          { name: "preview2.png", type: "file" },
          { name: "preview3.png", type: "file" },
          { name: "preview4.png", type: "file" },
          { name: "preview5.png", type: "file" },
        ],
      },
    ],
  },
];

const skillsFiles = [
  {
    name: "Compétences",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "Frontend",
        type: "folder",
        isOpen: true,
        children: [
          {
            name: "HTML.html",
            type: "file",
            language: "html",
          },
          {
            name: "CSS.css",
            type: "file",
            language: "css",
          },
          {
            name: "JavaScript.js",
            type: "file",
            language: "javascript",
          },
          {
            name: "MaterialUI.jsx",
            type: "file",
            language: "javascript",
          },
          {
            name: "Bootstrap.css",
            type: "file",
            language: "css",
          },
          {
            name: "React.jsx",
            type: "file",
            language: "javascript",
          },
          {
            name: "Tailwind.css",
            type: "file",
            language: "css",
          },
        ],
      },
      {
        name: "Backend",
        type: "folder",
        isOpen: true,
        children: [
          {
            name: "Python.py",
            type: "file",
            language: "python",
          },
          {
            name: "PHP.php",
            type: "file",
            language: "php",
          },
          {
            name: "Laravel.php",
            type: "file",
            language: "php",
          },
          {
            name: "Express.js",
            type: "file",
            language: "javascript",
          },
        ],
      },
      {
        name: "Base de données",
        type: "folder",
        isOpen: true,
        children: [
          {
            name: "MySQL.sql",
            type: "file",
            language: "sql",
          },
          {
            name: "MongoDB.js",
            type: "file",
            language: "javascript",
          },
        ],
      },
      {
        name: "Outils",
        type: "folder",
        isOpen: true,
        children: [
          {
            name: "VSCode.code",
            type: "file",
            language: "code",
          },
          {
            name: "Git.git",
            type: "file",
            language: "git",
          },
          {
            name: "GitHub.md",
            type: "file",
            language: "markdown",
          },
          {
            name: "Postman.json",
            type: "file",
            language: "json",
          },
          {
            name: "Docker.yml",
            type: "file",
            language: "yaml",
          },
          {
            name: "WordPress.php",
            type: "file",
            language: "php",
          },
        ],
      },
    ],
  },
];

const aboutFiles = [
  {
    name: "À propos",
    type: "folder",
    isOpen: true,
    children: [
      { name: "Profil.md", type: "file", language: "markdown" },
      { name: "Expérience.json", type: "file", language: "json" },
      { name: "Formation.md", type: "file", language: "markdown" },
      {
        name: "Documents",
        type: "folder",
        children: [
          { name: "CV.pdf", type: "file" },
        ],
      },
    ],
  },
];

const HomeFiles = [
  {
    name: "Accueil",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "profil.js",
        type: "file",
        language: "javascript",
      },
      {
        name: "projets.js",
        type: "file",
        language: "javascript",
      },
      {
        name: "compétences.js",
        type: "file",
        language: "javascript",
      },
      {
        name: "principe.js",
        type: "file",
        language: "javascript",
      },
    ],
  },
];

const contactFiles = [
  {
    name: "Contact",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "FormulaireContact.jsx",
        type: "file",
        language: "JavaScript",
      },
      {
        name: "InformationsContact.json",
        type: "file",
        language: "json",
      },
    ],
  },
];

export const getFileStructure = (path) => {
  switch (path) {
    case "/":
      return HomeFiles;
    case "/projects":
      return projectFiles;
    case "/skills":
      return skillsFiles;
    case "/about":
      return aboutFiles;
    case "/contact":
      return contactFiles;
    default:
      return HomeFiles;
  }
};