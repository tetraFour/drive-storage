import {
  UPGRADE_STORAGE,
  OPEN_NOTIFICATION,
  CLOSE_NOTIFICATION,
  PUSH_NOTIFICATION_TO_LIST,
  CLEAR_NOTIFICATIONS_LIST
} from "../constants";

export const actionUpgradeStore = () => ({
  type: UPGRADE_STORAGE,
  payload: {
    isStorageFilledUpgraded: true,
    storageField: 500
  }
});

export const actionOpenNotification = () => ({
  type: OPEN_NOTIFICATION,
  payload: true
});
export const actionCloseNotification = () => ({
  type: CLOSE_NOTIFICATION,
  payload: false
});
export const actionPushNotificationToList = content => ({
  type: PUSH_NOTIFICATION_TO_LIST,
  payload: {
    content: content
  }
});

export const actionClearNotificationList = () => ({
  type: CLEAR_NOTIFICATIONS_LIST
});
