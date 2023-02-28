import Home from "../pages/Home/Home";

import { Routes, Route } from "react-router-dom";

const configRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default configRoutes;
