import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { motion } from "motion/react";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto bg-gray-800/60 border border-gray-700 rounded-xl overflow-hidden m-4"
    >
      {/* ================= Profile Header ================= */}
      {/* ================= Profile Header ================= */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex flex-col items-center text-center gap-6 md:flex-row md:text-left md:items-center">
          {/* Photo */}
          <div className="shrink-0">
            <div className="w-30 h-30 rounded-full bg-gray-700 border-2 border-blue-500 overflow-hidden">
              <img
                src={profile}
                alt="Omar Zguit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name + Location */}
          <div>
            <h1 className="text-3xl font-bold text-white">Omar Zguit</h1>

            <p className="text-blue-400 font-medium mt-1">
              Junior Full-Stack Developer
            </p>

            <div className="flex items-center justify-center md:justify-start gap-1 mt-2 text-gray-400">
              <CiLocationOn size={20} />
              <span>Morocco, Tinghir</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-row justify-center gap-3 mt-2 md:ml-auto md:mt-0">
            {/* GitHub */}
            <a
              href="https://github.com/omar-zguit-hub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition"
            >
              <FaGithub size={21} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/omar-zguit-97377533a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition"
            >
              <FaLinkedin size={21} />
            </a>

            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="p-2.5 rounded-lg bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition"
            >
              <CiMail size={23} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= About Me ================= */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>

        <p className="text-gray-300 leading-7 max-w-3xl">
          I'm a Junior Full-Stack Developer with a diploma from OFPPT. I have
          practical knowledge and skills that allow me to build web applications
          from Frontend to Backend. I'm still learning and improving my skills
          because web development is constantly changing, with new technologies
          and tools appearing all the time. I focus on building a strong
          foundation in the core concepts while learning modern technologies and
          improving my skills through practical projects.
        </p>
      </div>

      {/* ================= Experience ================= */}
      <div className="px-6 pb-6">
        <h2 className="text-2xl font-bold text-white mb-5">Experience</h2>

        <div className="space-y-6">
          {/* Experience 1 */}
          <div className="border-l-2 border-blue-500 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-white">
                Junior Full-Stack Developer
              </h3>

              <span className="text-sm text-gray-500">Current Focus</span>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              Personal Projects & Development
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              Building full-stack web applications and developing practical
              experience with React, Laravel and MySQL.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="border-l-2 border-gray-600 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-white">
                Web Development
              </h3>

              <span className="text-sm text-gray-500">Ongoing</span>
            </div>

            <p className="text-blue-400 text-sm mt-1">Learning & Building</p>

            <p className="text-gray-300 mt-3 leading-6">
              Creating responsive interfaces, working with APIs and databases,
              using Git and GitHub for version control, and exploring modern
              development tools and practices.
            </p>
          </div>
        </div>
      </div>

      {/* ================= Education ================= */}
      <div className="px-6 pb-6">
        <h2 className="text-2xl font-bold text-white mb-5">Education</h2>

        <div className="space-y-6">
          <div className="border-l-2 border-blue-500 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-white">
                Development Digital
              </h3>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              OFPPT — Digital Development
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              Earned a professional diploma in Digital Development, with
              training in front-end and back-end development. Developed
              practical{" "}
              <Link
                to="/skills"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <mark>
                  <em>skills</em>
                </mark>
              </Link>{" "}
              that allowed me to build and work on various{" "}
              <Link
                to="/projects"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <mark>
                  <em>projects</em>
                </mark>
              </Link>{" "}
              throughout my training.
            </p>
          </div>
          {/* 2 */}
          <div className="border-l-2 border-gray-600 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-white">
                Self-Learning
              </h3>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              Continuous Learning & Exploration
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              Continuously learning and exploring Digital Development,
              Artificial Intelligence, modern technologies, and new development
              tools to expand my knowledge and stay up to date with the evolving
              tech ecosystem.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
