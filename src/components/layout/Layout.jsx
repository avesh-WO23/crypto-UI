import React from "react";
import { Outlet } from "react-router-dom";
import BackwardSection from "../common/BackwardSection";

const Layout = () => {
  return (
    <>
      <BackwardSection />
      <Outlet />
    </>
  );
};

export default Layout;
