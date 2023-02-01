import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/common/navbar";

const GlobalLayout: FC = () => {
  return (
    <>
      <NavBar />
      <div className="app-content">
        <Outlet />
      </div>
    </>
  );
};
export default GlobalLayout;
