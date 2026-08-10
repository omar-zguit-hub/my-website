import { useEffect, useState } from "react";
import { getFileStructure } from "../data/files";
import FileTreeItem from "./explorer/FileTreeItem";
import { useLocation } from "react-router-dom";

const Explorer = () => {
  const location = useLocation();
  const path = location.pathname;
  const [files, setFiles] = useState(getFileStructure(path));
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFiles(getFileStructure(path));
    setSelectedFile(null);
  }, [path]);

  // Toggle folder
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

  // Select file
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="bg-gray-800 h-screen overflow-y-auto w-55">
      <div className="p-2">
        <div className="text-sm uppercase tracking-wide text-gray-400 mb-2">
          Explorer
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
    </div>
  );
};

export default Explorer;
