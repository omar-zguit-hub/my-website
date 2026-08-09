import { motion } from "motion/react";
import { Outlet } from "react-router-dom";

function Content() {
  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 20 },
  };
  const renderPages = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6">
        <Outlet />
      </div>
    );
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      className="flex-1 overflow-auto bg-gray-900 text-gray-100"
    >
      {renderPages()}
    </motion.div>
  );
}

export default Content;
