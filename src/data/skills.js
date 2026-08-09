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
      { name: "CSS", level: 76, icon: FaCss3Alt },
      { name: "JavaScript", level: 69, icon: IoLogoJavascript },
      { name: "Material UI", level: 69, icon: SiMui },
      { name: "Bootstrap", level: 55, icon: FaBootstrap },
      { name: "React", level: 75, icon: FaReact },
      { name: "Tailwind CSS", level: 55, icon: RiTailwindCssFill },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Python", level: 60, icon: FaPython },
      { name: "PHP", level: 65, icon: FaPhp },
      { name: "Laravel", level: 60, icon: FaLaravel },
      { name: "Express.js", level: 50, icon: FaNodeJs },
    ],
  },

  {
    category: "Database",
    items: [
      { name: "MySQL", level: 65, icon: SiMysql },
      { name: "MongoDB", level: 75, icon: DiMongodb },
    ],
  },

  {
    category: "Tools & Platforms",
    items: [
      { name: "VS Code", level: 85, icon: VscVscode },
      { name: "Git", level: 65, icon: SiGit },
      { name: "GitHub", level: 65, icon: SiGithub },
      { name: "Postman", level: 55, icon: SiPostman },
      { name: "Docker", level: 40, icon: FaDocker },
      { name: "WordPress", level: 40, icon: FaWordpress },
    ],
  },
];
