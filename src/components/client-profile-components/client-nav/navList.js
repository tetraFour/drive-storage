import React from "react";

import { routes } from "../../../assets/configs/route.config";
import { Link } from "react-router-dom";

function NavList({ openProfileList, setOpenProfileList }) {
  return (
    <>
      {routes.map(
        (route, id) =>
          route.isOnNavBar && (
            <Link
              key={id}
              to={route.path}
              onClick={() => setOpenProfileList(!openProfileList)}
            >
              {route.alt}
            </Link>
          )
      )}
    </>
  );
}

export default NavList;
