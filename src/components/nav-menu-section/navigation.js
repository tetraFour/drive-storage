import React from "react";
import { NavLink } from "react-router-dom";
import {routes} from "../../assets/configs/route.config";

function Navigation() {
  return (
    <nav>
      <ul>
        <li className="logo">
          <img src="/images/icons/drive-logo.svg" alt="drive" />
          Drive.
        </li>
        {routes.map(
          (link, index) =>
            link.isOnNavBar && (
              <li className={index === 0 ? "active" : ""} key={index}>
                <NavLink exact={link.exact} to={link.path}>
                  <img src={link.imgSrc} alt={link.alt} />
                  {link.alt}
                </NavLink>
              </li>
            )
        )}
        <li>
          <a href="/">
            <img src="/images/icons/logout.svg" alt="logout" />
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
