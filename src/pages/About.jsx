import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import profile from "../assets/profile.png";
import CV from "../assets/CV_Omar_Zguit.pdf";

function About() {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: i18n.language === "fr" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto overflow-hidden p-2"
    >
      {/* ================= Profile Header ================= */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-start shrink-0">
            <img
              src={profile}
              alt="Omar Zguit"
              className="w-28 h-28 rounded-full object-cover border-2 border-gray-600"
            />
          </div>

          {/* Name + Location */}
          <div
            className={`flex-1 text-center ${i18n.language === "fr" ? "md:text-left" : "md:text-right"}`}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {t("about.name")}
            </h1>

            <p className="text-sm md:text-base text-blue-400 font-medium mt-1">
              {t("about.role")}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-1 mt-2 text-gray-400">
              <CiLocationOn size={20} />
              <span>{t("about.location")}</span>
            </div>
          </div>

          {/* Social Media + CV */}
          <div className="flex flex-col items-center md:items-end gap-3 m-3">
            {/* Social Media */}
            <div className="flex gap-2">
              {/* GitHub */}
              <a
                href="https://github.com/omar-zguit-hub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition"
              >
                <FaGithub size={21} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/omar-zguit-97377533a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition"
              >
                <FaLinkedin size={21} />
              </a>

              {/* Email */}
              <a
                href="mailto:your.email@example.com"
                aria-label="Email"
                className="p-2.5 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition"
              >
                <CiMail size={23} />
              </a>
            </div>

            {/* Download CV */}
            <a
              href={CV}
              download="CV-Omar-Zguit.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition"
            >
              <FaDownload size={14} />
              {t("about.downloadCV")}
            </a>
          </div>
        </div>
      </div>

      {/* ================= About Me ================= */}
      <section className="p-2 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
          {t("about.aboutMe.title")}
        </h2>

        <p className="text-gray-300 leading-7 max-w-3xl">
          {t("about.aboutMe.description")}
        </p>
      </section>

      {/* ================= Experience ================= */}
      <section className="px-2 md:px-6 pb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-5">
          {t("about.experience.title")}
        </h2>

        <div className="space-y-6">
          {/* Experience 1 */}
          <div className="border-l-2 border-blue-500 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-base md:text-lg font-semibold text-white">
                {t("about.experience.fullstack.title")}
              </h3>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              {t("about.experience.fullstack.subtitle")}
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              {t("about.experience.fullstack.description")}
            </p>
          </div>

          {/* Experience 2 */}
          <div className="border-l-2 border-gray-600 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-base md:text-lg font-semibold text-white">
                {t("about.experience.web.title")}
              </h3>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              {t("about.experience.web.subtitle")}
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              {t("about.experience.web.description")}
            </p>
          </div>
        </div>
      </section>

      {/* ================= Education ================= */}
      <section className="px-2 md:px-6 pb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-5">
          {t("about.education.title")}
        </h2>

        <div className="space-y-6">
          {/* Education 1 */}
          <div className="border-l-2 border-blue-500 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-base md:text-lg font-semibold text-white">
                {t("about.education.digital.title")}
              </h3>

              <span className="text-sm text-gray-500">
                {t("about.education.digital.badge")}
              </span>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              {t("about.education.digital.subtitle")}
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              {t("about.education.digital.description")}{" "}
              <Link
                to="/projects"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                {t("about.links.projects")}
              </Link>{" "}
              {t("about.education.digital.descriptionMiddle")}{" "}
              <Link
                to="/skills"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                {t("about.links.skills")}
              </Link>{" "}
              {t("about.education.digital.descriptionEnd")}
            </p>
          </div>

          {/* Education 2 */}
          <div className="border-l-2 border-gray-600 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-base md:text-lg font-semibold text-white">
                {t("about.education.selfLearning.title")}
              </h3>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              {t("about.education.selfLearning.subtitle")}
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              {t("about.education.selfLearning.description")}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
