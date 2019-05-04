import { IErrorModel } from '@Types/models/tools/Errors';

export interface ICallErrorHandlerType {
  type: 'CALL_ERROR_HANDLER';
  payload: {
    status: IErrorModel['status'];
    validations?: IErrorModel['validations'];
    message: IErrorModel['message'];
    activeForm: IErrorModel['activeForm'];
  };
}
