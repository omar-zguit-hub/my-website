import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function MobileHeader({
  menuOpen,
  setMenuOpen,
  showLanguages,
  setShowLanguages,
}) {
  const { i18n } = useTranslation();

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between bg-gray-900 border-b border-zinc-700 px-4">
      {/* Left: Hamburger Menu */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 text-gray-400 hover:text-white transition"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Center: Portfolio Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-300">
        portfolio
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-2">
        {/* GitHub */}
        <motion.a
          href="https://github.com/omar-zguit-hub"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-gray-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <FaGithub size={18} />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/omar-zguit-97377533a/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-gray-400 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={18} />
        </motion.a>

        {/* Language */}
        <div className="relative">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowLanguages(!showLanguages)}
            className="p-2 text-gray-400 hover:text-white transition"
            aria-label="Change language"
          >
            <MdOutlineLanguage size={18} />
          </motion.button>

          {/* Language Menu */}
          {showLanguages && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-12 z-50 w-32 rounded-md border border-gray-700 bg-[#252526] shadow-lg"
            >
              <button
                type="button"
                onClick={() => {
                  i18n.changeLanguage("fr");
                  setShowLanguages(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
              >
                Français
              </button>
              <button
                type="button"
                onClick={() => {
                  i18n.changeLanguage("ar");
                  setShowLanguages(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
              >
                العربية
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
