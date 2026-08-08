import { File, Mail, Code, User } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useState } from "react";
function Sidebar() {
  const [activeTab, setActiveTab] = useState("projects");
  const sideBarItems = [
    { id: "projects", label: "Projects", icon: <File size={24} /> },
    { id: "skills", label: "Skills", icon: <Code size={24} /> },
    { id: "about", label: "About", icon: <User size={24} /> },
    { id: "contact", label: "Contact", icon: <Mail size={24} /> },
  ];
  return (
    <div className="w-16 bg-gray-800 h-screen flex flex-col py-4 items-center">
      {sideBarItems.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab(item.id)}
          className={`p-3 mb-2 rounded-lg ${activeTab === item.id ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
        >
          {item.icon}
        </motion.button>
      ))}
      <div className="mt-auto">
        <motion.a
          href="https://github.com/omar-zguit-hub"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="p-3 text-gray-400 hover:text-white block mb-2"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/omar-zguit-97377533a/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="p-3 text-gray-400 hover:text-white block mb-2"
        >
          <FaLinkedin size={24} />
        </motion.a>
      </div>
    </div>
  );
}

export default Sidebar;
