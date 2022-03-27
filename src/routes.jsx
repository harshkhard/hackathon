import { Routes, Route } from "react-router-dom";
import { Generator } from "./pages/Generator";
import { Home } from "./pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generator/:name" element={<Generator />} />
    </Routes>
  );
};
