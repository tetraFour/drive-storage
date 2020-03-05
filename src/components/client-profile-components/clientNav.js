import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import NotificationsList from "./client-nav/notificationsList";
import ProfileList from "./client-nav/profileList";

import ClientTipsIcon from "../icons/clientTipsIcon";
import ClientSettings from "../icons/clientSettingsIcon";

const ClientNav = () => {
  const userPic = useSelector(state => state.storage.userPic);

  const [openNotification, setOpenNotification] = useState(false);

  const [openProfileList, setOpenProfileList] = useState(false);

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
          <NotificationsList
            openNotification={openNotification}
            setOpenNotification={setOpenNotification}
          />
        </li>
        <li className={openProfileList ? "profile active" : "profile"}>
          <ProfileList
            openProfileList={openProfileList}
            setOpenProfileList={setOpenProfileList}
            userPic={userPic}
          />
        </li>
      </ul>
    </nav>
  );
};

export default ClientNav;
