import config from "../../assets/configs/admin.config.json";
import {
  UPGRADE_STORAGE,
  OPEN_NOTIFICATION,
  CLOSE_NOTIFICATION,
  PUSH_NOTIFICATION_TO_LIST,
  CLEAR_NOTIFICATIONS_LIST
} from "../constants";

const defaultState = config;

export const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case UPGRADE_STORAGE:
      return {
        ...state,
        isStorageFilledUpgraded: payload.isStorageFilledUpgraded,
        storageField: payload.storageField
      };

    case OPEN_NOTIFICATION:
      return { ...state, isNotificationOpen: payload };

    case CLOSE_NOTIFICATION:
      return { ...state, isNotificationOpen: payload };

    case PUSH_NOTIFICATION_TO_LIST:
      return {
        ...state,
        notificationsList: state.notificationsList.concat(payload)
      };
    case CLEAR_NOTIFICATIONS_LIST:
      return {
        ...state,
        notificationsList: []
      };
    default:
      return state;
  }
};
