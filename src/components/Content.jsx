import { motion } from "motion/react";
import { Outlet } from "react-router-dom";

function Content() {
  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      className="flex-1 min-w-0 min-h-0 overflow-y-auto bg-gray-900 text-gray-100 pb-8 md:pb-4"
    >
      <Outlet />
    </motion.main>
  );
}

export default Content;
