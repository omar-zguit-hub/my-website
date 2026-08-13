import { motion } from "framer-motion";
import { ChevronDown, ChevronRight,ChevronLeft } from "lucide-react";
import FileIcon from "./FileIcon";
import { useTranslation } from "react-i18next";

const FileTreeItem = ({ item, level, onSelect, onToggle, selectedFile }) => {
  const isSelected = selectedFile?.name === item.name;
  const { t,i18n } = useTranslation();

  return (
    <div>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        style={{ paddingLeft: `${level * 1.5}rem` }}
        onClick={() =>
          item.type === "folder" ? onToggle(item) : onSelect(item)
        }
        className={`flex items-center py-1 px-2 cursor-pointer hover:bg-gray-700 ${
          isSelected ? "bg-gray-700" : ""
        }`}
      >
        {item.type === "folder" && (
          <>
            {item.isOpen ? (
              <ChevronDown size={16} className="mr-1" />
            ) : ( 
              i18n.language === "fr" ? <ChevronRight size={16} className="mr-1" />:<ChevronLeft size={16} className="mr-1" />
              
            )}
          </>
        )}

        <FileIcon type={item.type} name={item.name} isOpen={item.isOpen} />

        <span className="ml-1 mr-1">{t(item.name)}</span>
      </motion.div>

      {item.type === "folder" && item.isOpen && item.children && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          {item.children.map((child) => (
            <FileTreeItem
              key={child.name}
              item={child}
              level={level + 1}
              onToggle={onToggle}
              onSelect={onSelect}
              selectedFile={selectedFile}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FileTreeItem;
