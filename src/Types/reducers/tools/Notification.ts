import { INotification } from '@Types/models/tools/Notification';

export interface IAddSuccessNotificationType {
  type: 'ADD_SUCCESS_NOTIFICATION';
  payload: {
    message: INotification['message'],
  };
}

export interface IAddErrorNotificationType {
  type: 'ADD_ERROR_NOTIFICATION';
  payload: {
    message: INotification['message'],
  };
}

export interface IAddWarningNotificationType {
  type: 'ADD_WARNING_NOTIFICATION';
  payload: {
    message: INotification['message'],
  };
}

export interface IRemoveNotificationType {
  type: 'REMOVE_NOTIFICATION';
  payload: {
    id: INotification['id'],
  };
}

export interface IRemoveAllNotificationType {
  type: 'REMOVE_ALL_NOTIFICATION';
  payload: {};
}
