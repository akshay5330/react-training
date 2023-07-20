import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

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
