import { IoLogoJavascript } from "react-icons/io5";
import {
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPython,
  FaPhp,
  FaNodeJs,
  FaDocker,
  FaWordpress,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
import { SiMui, SiMysql, SiGit, SiGithub, SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 95, icon: FaHtml5 },
      { name: "CSS", level: 75, icon: FaCss3Alt },
      { name: "JavaScript", level: 70, icon: IoLogoJavascript },
      { name: "Material UI", level: 85, icon: SiMui },
      { name: "Bootstrap", level: 85, icon: FaBootstrap },
      { name: "React", level: 90, icon: FaReact },
      { name: "Tailwind CSS", level: 30, icon: RiTailwindCssFill },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Python", level: 60, icon: FaPython },
      { name: "PHP", level: 60, icon: FaPhp },
      { name: "Laravel", level: 60, icon: FaLaravel },
      { name: "Express.js", level: 45, icon: FaNodeJs },
    ],
  },

  {
    category: "Base de données",
    items: [
      { name: "MySQL", level: 65, icon: SiMysql },
      { name: "MongoDB", level: 75, icon: DiMongodb },
    ],
  },

  {
    category: "Outils & plateformes",
    items: [
      { name: "VS Code", level: 99, icon: VscVscode },
      { name: "Git", level: 95, icon: SiGit },
      { name: "GitHub", level: 75, icon: SiGithub },
      { name: "Postman", level: 85, icon: SiPostman },
      { name: "Docker", level: 30, icon: FaDocker },
      { name: "WordPress", level: 30, icon: FaWordpress },
    ],
  },
];
