import { IErrorModel } from '@Types/models/tools/Errors';
import { IDataFormMultyType, IDataFormType } from '@Types/models/tools/Form';

export interface ISetFormType {
  type: 'SET_FORM';
  payload: {
    form: IDataFormMultyType,
    activeForm: string,
  };
}

export interface ISetValidationsErrorsFormType {
  type: 'SET_VALIDATIONS_ERRORS_FORM';
  payload: {
    errors: IErrorModel['validations'],
    activeForm: IErrorModel['activeForm'],
  };
}

export interface ISetErrorMessageFormType {
  type: 'SET_ERROR_MESSAGE_FORM';
  payload: {
    activeForm: IErrorModel['activeForm'];
    message: IErrorModel['message'];
  };
}

export interface IClearFormType {
  type: 'CLEAR_FORM';
  payload: {
    activeForm: IErrorModel['activeForm'],
  };
}

export interface IResetFormType {
  type: 'RESET_FORM';
  payload: {
    activeForm: IErrorModel['activeForm'],
  };
}

export interface IChangeMultyFormType {
  type: 'CHANGE_MULTY_FORM';
  payload: {
    form: IDataFormMultyType,
    activeForm: IErrorModel['activeForm'],
  };
}

export interface IChangeFormType {
  type: 'CHANGE_FORM';
  payload: {
    field: IDataFormType,
    activeForm: IErrorModel['activeForm'],
  };
}
