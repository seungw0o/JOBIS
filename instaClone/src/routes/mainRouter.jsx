import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/home";
import ProfilePage from "../pages/profilePage";
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MainRouter;
