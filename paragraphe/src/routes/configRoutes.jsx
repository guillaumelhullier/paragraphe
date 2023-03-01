import Home from "../pages/Home/Home";
import About from "../pages/About/About";

import { Routes, Route } from "react-router-dom";

const configRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default configRoutes;
