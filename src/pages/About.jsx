import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import CV from "../assets/CV_Omar_Zguit.pdf";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto overflow-hidden p-2"
    >
      {/* ================= En-tête du profil ================= */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Photo de profil */}
          <div className="flex justify-center md:justify-start shrink-0">
            <img
              src={profile}
              alt="Omar Zguit"
              className="w-28 h-28 rounded-full object-cover border-2 border-gray-600"
            />
          </div>

          {/* Nom + Localisation */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white">Omar Zguit</h1>

            <p className="text-blue-400 font-medium mt-1">
              Développeur Full-Stack Junior
            </p>

            <div className="flex items-center justify-center md:justify-start gap-1 mt-2 text-gray-400">
              <CiLocationOn size={20} />
              <span>Maroc, Tinghir</span>
            </div>
          </div>

          {/* Réseaux sociaux + CV */}
          <div className="flex flex-col items-center md:items-end gap-3 m-3">
            {/* Réseaux sociaux */}
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

            {/* Télécharger le CV */}
            <a
              href={CV}
              download="CV-Omar-Zguit.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition"
            >
              <FaDownload size={14} />
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>

      {/* ================= À propos de moi ================= */}
      <section className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">À propos de moi</h2>

        <p className="text-gray-300 leading-7 max-w-3xl">
          Je suis un développeur Full-Stack Junior titulaire d'un diplôme de
          l'OFPPT. J'ai des connaissances et des compétences pratiques qui me
          permettent de créer des applications web, du Frontend au Backend. Je
          continue à apprendre et à améliorer mes compétences, car le
          développement web évolue constamment avec l'apparition de nouvelles
          technologies et de nouveaux outils. Je me concentre sur la maîtrise
          des concepts fondamentaux tout en découvrant les technologies modernes
          à travers des projets pratiques.
        </p>
      </section>

      {/* ================= Expérience ================= */}
      <section className="px-6 pb-6">
        <h2 className="text-2xl font-bold text-white mb-5">Expérience</h2>

        <div className="space-y-6">
          {/* Expérience 1 */}
          <div className="border-l-2 border-blue-500 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-white">
                Développeur Full-Stack Junior
              </h3>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              Projets personnels & développement
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              Développement d'applications web full-stack et acquisition d'une
              expérience pratique avec React, Laravel et MySQL.
            </p>
          </div>

          {/* Expérience 2 */}
          <div className="border-l-2 border-gray-600 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-white">
                Développement Web
              </h3>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              Apprentissage & développement
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              Création d'interfaces responsives, travail avec des API et des
              bases de données, utilisation de Git et GitHub pour le contrôle de
              version, et découverte des outils et pratiques modernes de
              développement.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Formation ================= */}
      <section className="px-6 pb-6">
        <h2 className="text-2xl font-bold text-white mb-5">Formation</h2>

        <div className="space-y-6">
          {/* Formation 1 */}
          <div className="border-l-2 border-blue-500 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-white">
                Développement Digital
              </h3>

              <span className="text-sm text-gray-500">Diplôme</span>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              OFPPT — Développement Digital
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              Obtention d'un diplôme professionnel en Développement Digital,
              avec une formation en développement Frontend et Backend.
              Développement de{" "}
              <Link
                to="/skills"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                compétences
              </Link>{" "}
              pratiques permettant de réaliser différents{" "}
              <Link
                to="/projects"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                projets
              </Link>{" "}
              durant ma formation.
            </p>
          </div>

          {/* Formation 2 */}
          <div className="border-l-2 border-gray-600 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-white">
                Autoformation
              </h3>
            </div>

            <p className="text-blue-400 text-sm mt-1">
              Apprentissage continu & exploration
            </p>

            <p className="text-gray-300 mt-3 leading-6">
              Apprentissage continu et exploration du Développement Digital, de
              l'Intelligence Artificielle, des technologies modernes et de
              nouveaux outils de développement afin d'élargir mes connaissances
              et de rester à jour dans l'évolution de l'écosystème
              technologique.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
