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

function App() {
  return (
    <div className="flex bg-gray-900 h-screen text-white overflow-hidden">
      <aside className="w-20 shrink-0">
        <Sidebar />
      </aside>
      <Explorer />
      <Routes>
        <Route element={<Content />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
