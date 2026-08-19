import { useEffect, useState } from "react";
import { getFileStructure } from "../data/files";
import FileTreeItem from "./explorer/FileTreeItem";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { MdOutlineLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Explorer = () => {
  const location = useLocation();
  const path = location.pathname;

  const [files, setFiles] = useState(getFileStructure(path));
  const [selectedFile, setSelectedFile] = useState(null);

  const { i18n, t } = useTranslation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFiles(getFileStructure(path));
    setSelectedFile(null);
  }, [path]);

  const toggleFolder = (targetItem) => {
    const updateFiles = (items) => {
      return items.map((item) => {
        if (item === targetItem) {
          return {
            ...item,
            isOpen: !item.isOpen,
          };
        }

        if (item.children) {
          return {
            ...item,
            children: updateFiles(item.children),
          };
        }

        return item;
      });
    };

    setFiles((currentFiles) => updateFiles(currentFiles));
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: i18n.language === "fr" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 h-screen overflow-y-auto w-55 pt-1 pb-6"
    >
      <div className="p-2">
        <div className="relative flex items-center justify-between mb-2 px-1">
          {/* Explorer */}
          <div className="text-sm uppercase tracking-wide text-gray-400">
            {t("explorer.title")}
          </div>

          {/* Language button */}
          <button
            type="button"
            onClick={() =>
              i18n.language === "ar"
                ? i18n.changeLanguage("fr")
                : i18n.changeLanguage("ar")
            }
            className="p-1 text-gray-400 rounded hover:bg-gray-700 hover:text-white transition cursor-pointer"
            aria-label={t("explorer.language")}
          >
            <MdOutlineLanguage size={18} />
          </button>
        </div>

        <div className="space-y-1">
          {files.map((file) => (
            <FileTreeItem
              key={file.name}
              item={file}
              level={0}
              onToggle={toggleFolder}
              onSelect={handleFileSelect}
              selectedFile={selectedFile}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Explorer;
