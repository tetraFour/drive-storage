import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import ClientTipsIcon from "../icons/clientTipsIcon";
import ClientSettings from "../icons/clientSettingsIcon";
import ClientNotifications from "../icons/clientNotificationsIcon";
import NotificationsList from "./notificationsList";
import { useSelector } from "react-redux";

const ClientNav = () => {
  const [openNotification, setOpenNotification] = useState(false);

  const notificationsList = useSelector(
    state => state.storage.notificationsList
  );
  const userPic = useSelector(state => state.storage.userPic);

  return (
    <nav className="client-profile-nav">
      <ul>
        <li className="tips">
          <NavLink to="/tips">
            <ClientTipsIcon />
          </NavLink>
        </li>
        <li className="settings">
          <NavLink to="/settings">
            <ClientSettings />
          </NavLink>
        </li>
        <li
          className={
            openNotification ? "notifications active" : "notifications"
          }
        >
          <button
            className={notificationsList.length ? "has-notification" : ""}
            onClick={() => setOpenNotification(!openNotification)}
          >
            <ClientNotifications />
          </button>
          {openNotification && (
            <NotificationsList
              openNotification={openNotification}
              setOpenNotification={setOpenNotification}
            />
          )}
        </li>
        <li className="profile">
          <button className="profile-btn">
            <img src={userPic} alt="jannie" />
            Jannie
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ClientNav;
