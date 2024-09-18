import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const MainRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
