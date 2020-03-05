import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actionClearNotificationList } from "../../../store/actions";
import clickOutsideHandler from "../../../utils/clickOutsideHandler";

import ClientNotificationsIcon from "../../icons/clientNotificationsIcon";

function NotificationsList({ openNotification, setOpenNotification }) {
  const notificationsList = useSelector(
    state => state.storage.notificationsList
  );
  const dispatch = useDispatch();

  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  clickOutsideHandler(
    popupRef,
    buttonRef,
    openNotification,
    setOpenNotification,
    useEffect
  );

  return (
    <>
      <button
        ref={buttonRef}
        className={notificationsList.length ? "has-notification" : ""}
        onClick={() => setOpenNotification(!openNotification)}
      >
        <ClientNotificationsIcon />
      </button>
      {openNotification && (
        <div className="notification-wrapper clearfix" ref={popupRef}>
          {!notificationsList.length ? (
            <p>no notifications</p>
          ) : (
            <>
              <button
                className="btn btn-cross"
                onClick={() => {
                  dispatch(actionClearNotificationList());
                  setOpenNotification(!openNotification);
                }}
              ></button>
              <ul>
                {notificationsList.map((notify, id) => (
                  <li key={id}>{notify.content}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default NotificationsList;
