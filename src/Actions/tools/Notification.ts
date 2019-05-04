// tslint:disable max-line-length
import {
  IAddErrorNotificationType,
  IAddSuccessNotificationType,
  IAddWarningNotificationType,
  IRemoveAllNotificationType,
  IRemoveNotificationType,
} from '@Types/reducers/tools/Notification';
import { ReduxAction } from '@Types/ReduxHelper';
import { createAction } from 'redux-actions';

export const ADD_ERROR_NOTIFICATION: IAddErrorNotificationType['type'] = 'ADD_ERROR_NOTIFICATION';
export const addErrorNotificationAction: ReduxAction<
IAddErrorNotificationType['type'],
IAddErrorNotificationType['payload']
> = createAction(ADD_ERROR_NOTIFICATION);

export const ADD_WARNING_NOTIFICATION: IAddWarningNotificationType['type'] = 'ADD_WARNING_NOTIFICATION';
export const addWarningNotificationAction: ReduxAction<
IAddErrorNotificationType['type'],
IAddErrorNotificationType['payload']
> = createAction(ADD_WARNING_NOTIFICATION);

export const ADD_SUCCESS_NOTIFICATION: IAddSuccessNotificationType['type'] = 'ADD_SUCCESS_NOTIFICATION';
export const addSuccessNotificationAction: ReduxAction<
  IAddSuccessNotificationType['type'],
  IAddSuccessNotificationType['payload']
> = createAction(ADD_SUCCESS_NOTIFICATION);

export const REMOVE_NOTIFICATION: IRemoveNotificationType['type'] = 'REMOVE_NOTIFICATION';
export const removeNotificationAction: ReduxAction<
  IRemoveNotificationType['type'],
  IRemoveNotificationType['payload']
> = createAction(REMOVE_NOTIFICATION);

export const REMOVE_ALL_NOTIFICATION: IRemoveAllNotificationType['type'] = 'REMOVE_ALL_NOTIFICATION';
export const removeAllNotificationAction: ReduxAction<
  IRemoveAllNotificationType['type'],
  IRemoveAllNotificationType['payload']
> = createAction(REMOVE_ALL_NOTIFICATION);
