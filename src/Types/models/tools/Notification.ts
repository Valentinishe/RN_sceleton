import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION, WARNING_NOTIFICATION } from '@config/constants';

export interface INotification {
  id: number;
  message: string;
  type: typeof ERROR_NOTIFICATION | typeof SUCCESS_NOTIFICATION | typeof WARNING_NOTIFICATION;
}
