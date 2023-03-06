import { BrowserRouter, Route, Routes } from "react-router-dom";
import Budget from "../pages/Budget";
import Welcome from "../pages/Welcome";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/Budget/" element={<Budget />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
