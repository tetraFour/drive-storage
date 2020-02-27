import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionClearNotificationList } from "../../store/actions";

function NotificationsList({ setOpenNotification, openNotification }) {
  const notificationsList = useSelector(
    state => state.storage.notificationsList
  );
  const dispatch = useDispatch();
  console.log(notificationsList);
  return (
    <div className="notification-wrapper clearfix">
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
            {notificationsList.map((noty, id) => (
              <li key={id}>{noty.content}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default NotificationsList;
