import { Mail, Code, User } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsHouses } from "react-icons/bs";

import { FaLaptopCode } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
function Sidebar({ setExplorerOpen }) {
  const location = useLocation();

  const handleSidebarClick = (path) => {
    if (location.pathname === path) {
      setExplorerOpen((prev) => !prev);
    } else {
      setExplorerOpen(true);
    }
  };

  const sideBarItems = [
    { id: "", label: "Home", icon: BsHouses },
    { id: "projects", label: "Projects", icon: FaLaptopCode },
    { id: "skills", label: "Skills", icon: Code },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];
  
  return (
    <div className="w-16 bg-gray-900 h-screen flex flex-col py-1 pb-4 items-center">
      {sideBarItems.map((item) => {
        const Icon = item.icon;
        const path = item.id ? `/${item.id}` : "/";
        const isActive = location.pathname === path;
        return (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={path}
              onClick={() => handleSidebarClick(path)}
              className={`p-3 mb-2  flex items-center justify-center
                ${
                  isActive
                    ? "border-l-3 border-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              <Icon size={24} />
            </Link>
          </motion.div>
        );
      })}
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
          className="p-3 text-gray-400 hover:text-white block mb-3"
        >
          <FaLinkedin size={24} />
        </motion.a>
      </div>
    </div>
  );
}

export default Sidebar;
