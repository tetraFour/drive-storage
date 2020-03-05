import React, { useRef, useEffect } from "react";

import clickOutsideHandler from "../../../utils/clickOutsideHandler";
import NavList from "./navList";

function ProfileList({ openProfileList, setOpenProfileList, userPic }) {
  const buttonRef = useRef(null);
  const popupRef = useRef(null);
  clickOutsideHandler(
    popupRef,
    buttonRef,
    openProfileList,
    setOpenProfileList,
    useEffect
  );
  return (
    <>
      <button
        ref={buttonRef}
        className="profile-btn"
        onClick={() => setOpenProfileList(!openProfileList)}
      >
        <img src={userPic} alt="jannie" />
        Jannie
      </button>
      <div className="profile-menu-list" ref={popupRef}>
        <NavList
          openProfileList={openProfileList}
          setOpenProfileList={setOpenProfileList}
        />
      </div>
    </>
  );
}

export default ProfileList;
