import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/home";
import ProfilePage from "../pages/profilePage";
import Post from "../pages/profilePages/post";
import Save from "../pages/profilePages/save";
import Tag from "../pages/profilePages/tag";
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="" element={<Post />} />
            <Route path="saved" element={<Save />} />
            <Route path="tagged" element={<Tag />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MainRouter;
