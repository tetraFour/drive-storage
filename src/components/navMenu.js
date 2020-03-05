import React from "react";
import Storage from "./nav-menu-section/storage";
import Navigation from "./nav-menu-section/navigation";

function NavMenu() {
  return (
    <section className="nav-menu">
      <Navigation />
      <Storage />
    </section>
  );
}

export default NavMenu;
