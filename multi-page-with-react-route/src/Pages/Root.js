import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

const RootLayouts = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayouts;
