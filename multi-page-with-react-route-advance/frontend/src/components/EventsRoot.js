import React from "react";
import EventsNavigation from "./EventsNavigation";
import { Outlet } from "react-router-dom";

function EventsRootsLayout() {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default EventsRootsLayout;
