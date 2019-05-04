import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION, WARNING_NOTIFICATION } from '@config/constants';

// actions
import {
  ADD_ERROR_NOTIFICATION,
  ADD_SUCCESS_NOTIFICATION,
  ADD_WARNING_NOTIFICATION,
  REMOVE_ALL_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '@Actions/tools/Notification';

 // types
import { INotification } from '@Types/Models/tools/Notification';
import {
  IAddErrorNotificationType,
  IAddSuccessNotificationType,
  IAddWarningNotificationType,
  IRemoveAllNotificationType,
  IRemoveNotificationType,
} from '@Types/reducers/tools/Notification';

interface IState {
  notifications: INotification[];
}

const initState = {
  notifications: [],
};

type ActionsType =
  IAddErrorNotificationType
  | IRemoveNotificationType
  | IAddSuccessNotificationType
  | IAddWarningNotificationType
  | IRemoveAllNotificationType;

const getTypeNotification = (type: string) => {
  switch (type) {
    case ADD_ERROR_NOTIFICATION:
      return ERROR_NOTIFICATION;
    case ADD_SUCCESS_NOTIFICATION:
      return SUCCESS_NOTIFICATION;
    case ADD_WARNING_NOTIFICATION:
      return WARNING_NOTIFICATION;
  }
};

export default (state = initState, action: ActionsType): IState => {
  switch (action.type) {
    case ADD_ERROR_NOTIFICATION:
    case ADD_SUCCESS_NOTIFICATION:
    case ADD_WARNING_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: Date.now(),
            message: action.payload.message,
            type: getTypeNotification(action.type),
          },
        ],
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(n => +n.id !== +action.payload.id),
      };
    case REMOVE_ALL_NOTIFICATION:
      return {
        ...initState,
      };
    default:
      return state;
  }
};
