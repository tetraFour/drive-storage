import React from "react";
import Storage from "./nav-menu-section/storage";
import NavNavigation from "./nav-menu-section/navNavigation";

function NavMenu() {
  return (
    <section className="nav-menu">
      <NavNavigation />
      <Storage />
    </section>
  );
}

export default NavMenu;
