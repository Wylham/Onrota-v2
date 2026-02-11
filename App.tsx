import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./src/pages/Home";
import QuemSomos from "./src/pages/QuemSomos";
import { ScrollRevealRoot } from "./src/hooks/useScrollReveal";
import "./src/styles/scroll-reveal.css";

const ScrollToHash: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <ScrollRevealRoot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
