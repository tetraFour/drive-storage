import React from "react";
import { useSelector } from "react-redux";

function Notification() {
  const isNotificationOpen = useSelector(
    state => state.storage.isNotificationOpen
  );

  return (
    <div
      className={
        isNotificationOpen
          ? "notification-wrapper active"
          : "notification-wrapper"
      }
    >
      <p>Store has been updated to 1TB</p>
    </div>
  );
}

export default Notification;
