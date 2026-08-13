import { FileType, Folder, FolderOpen } from "lucide-react";
import { FaFileImage } from "react-icons/fa6";
import { BsFiletypeSql } from "react-icons/bs";
import { BsFiletypeJsx } from "react-icons/bs";
import { BsFiletypeJs } from "react-icons/bs";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeJson } from "react-icons/bs";
import { BsFiletypePy } from "react-icons/bs";
import { BsFiletypePhp } from "react-icons/bs";
import { BsFiletypeMd } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { VscFileCode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { BsFiletypeYml } from "react-icons/bs";
import { BsFiletypePdf } from "react-icons/bs";


const FileIcon = ({ type, name, isOpen }) => {
  if (type === "folder") {
    return isOpen ? (
      <FolderOpen size={16} className="text-yellow-400" />
    ) : (
      <Folder size={16} className="text-yellow-400 " />
    );
  }

  const extension = name.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "html":
      return <BsFiletypeHtml size={16} className="text-white-400" />;
    case "py":
      return <BsFiletypePy size={16} className="text-white-400" />;
    case "php":
      return <BsFiletypePhp size={16} className="text-white-400" />;
    case "jsx":
      return <BsFiletypeJsx size={16} className="text-white-400" />;
    case "sql":
      return <BsFiletypeSql size={16} className="text-white-400" />;
    case "js":
      return <BsFiletypeJs size={16} className="text-white-400" />;

    case "css":
      return <BsFiletypeCss size={16} className="text-white-400" />;

    case "json":
      return <BsFiletypeJson size={16} className="text-white-300" />;
    case "code":
      return <VscFileCode size={16} className="text-white-300" />;
    case "git":
      return <FaGitAlt size={16} className="text-white-300" />;
    case "yml":
      return <BsFiletypeYml size={16} className="text-white-300" />;
    case "pdf":
      return <BsFiletypePdf size={16} className="text-white-300" />;

    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
      return <FaFileImage size={16} className="text-white-400" />;

    case "md":
      return <BsFiletypeMd size={16} className="text-white-400" />;

    default:
      return <FileType size={16} className="text-white-400" />;
  }
};

export default FileIcon;
