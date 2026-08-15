import { X, Home, Code2, Zap, User, Mail } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa";
import { BsHouses } from "react-icons/bs";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MobileMenu({ menuOpen, setMenuOpen }) {
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems = [
    { id: "", label: "Home", icon: BsHouses },
    { id: "projects", label: "Projects", icon: FaLaptopCode },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/50"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-72 bg-gray-800 border-r border-zinc-700 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-zinc-700">
              <span className="text-sm uppercase tracking-wide text-gray-400">
                {t("explorer.title")}
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 text-gray-400 hover:text-white transition"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 py-4 px-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const path = item.id ? `/${item.id}` : "/";
                const isActive = location.pathname === path;

                return (
                  <motion.div key={item.id} whileHover={{ x: 4 }}>
                    <Link
                      to={path}
                      onClick={handleMenuItemClick}
                      className={`flex items-center gap-3 px-4 py-3 rounded transition ${
                        isActive
                          ? "bg-gray-700 text-blue-400 border-l-3 border-blue-600"
                          : "text-gray-400 hover:text-white hover:bg-gray-700"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
