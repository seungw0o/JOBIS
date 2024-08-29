import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/sideMenu";

function Layout() {
  return (
    <>
      <SideMenu />
      <Outlet />
    </>
  );
}

export default Layout;
