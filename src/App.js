import React from "react";
import "./assets/styles/index.sass";

import NavMenu from "./components/navMenu";
import ClientProfile from "./components/clientProfile";

import Notification from "./components/other-items/notification";

function App({ children }) {
  return (
    <>
      <NavMenu />
      {children}
      <ClientProfile />
      <Notification />
    </>
  );
}

export default App;
