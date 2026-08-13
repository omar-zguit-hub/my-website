import { Route, Routes } from "react-router-dom";
import "./App.css";

import Explorer from "./components/Explorer";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ProjectDetails from "./pages/ProjectDetails";
import { useTranslation } from "react-i18next";

function App() {
  const [explorerOpen, setExplorerOpen] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language === "ar";

    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  
  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-white">
      <aside className="w-17 shrink-0">
        <Sidebar
          explorerOpen={explorerOpen}
          setExplorerOpen={setExplorerOpen}
        />
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1">
          {explorerOpen && <Explorer />}
          <Routes>
            <Route element={<Content />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
