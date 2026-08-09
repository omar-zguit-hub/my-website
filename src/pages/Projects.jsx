import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "motion/react";

function Projects() {
  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const renderProjects = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mx-auto max-w-5xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-700 rounded-full font-bold text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {p.githubUrl && (
                  <a
                    className="flex items-center text-gray-300 hover:text-blue-400"
                    href={p.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub size={16} className="mr-1" />
                    Code
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    className="flex items-center text-gray-300 hover:text-blue-400"
                    href={p.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      variants={contentVariants}
      className="flex-1 overflow-auto bg-gray-900 text-gray-100"
    >
      {renderProjects()}
    </motion.div>
  );
}

export default Projects;
