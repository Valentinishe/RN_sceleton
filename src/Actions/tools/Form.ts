// tslint:disable:max-line-length
import {
  IChangeFormType,
  IChangeMultyFormType,
  IClearFormType,
  IResetFormType,
  ISetErrorMessageFormType,
  ISetFormType,
  ISetValidationsErrorsFormType,
} from '@Types/reducers/tools/Form';
import { ReduxAction } from '@Types/ReduxHelper';
import { createAction } from 'redux-actions';

export const CHANGE_FORM: IChangeFormType['type'] = 'CHANGE_FORM';
export const changeFormAction: ReduxAction<
  IChangeFormType['type'],
  IChangeFormType['payload']
> = createAction(CHANGE_FORM);

export const CHANGE_MULTY_FORM: IChangeMultyFormType['type'] = 'CHANGE_MULTY_FORM';
export const changeMultyFormAction: ReduxAction<
  IChangeMultyFormType['type'],
  IChangeMultyFormType['payload']
> = createAction(CHANGE_MULTY_FORM);

export const CLEAR_FORM: IClearFormType['type'] = 'CLEAR_FORM';
export const clearFormAction: ReduxAction<
  IClearFormType['type'],
  IClearFormType['payload']
> = createAction(CLEAR_FORM);

export const SET_FORM: ISetFormType['type'] = 'SET_FORM';
export const setFormAction: ReduxAction<
  ISetFormType['type'],
  ISetFormType['payload']
> = createAction(SET_FORM);

export const SET_VALIDATIONS_ERRORS_FORM: ISetValidationsErrorsFormType['type'] = 'SET_VALIDATIONS_ERRORS_FORM';
export const setValidationsErrorsFormAction: ReduxAction<
ISetValidationsErrorsFormType['type'],
ISetValidationsErrorsFormType['payload']
> = createAction(SET_VALIDATIONS_ERRORS_FORM);

export const SET_ERROR_MESSAGE_FORM: ISetErrorMessageFormType['type'] = 'SET_ERROR_MESSAGE_FORM';
export const setErrorMessageFormAction: ReduxAction<
ISetErrorMessageFormType['type'],
ISetErrorMessageFormType['payload']
> = createAction(SET_ERROR_MESSAGE_FORM);

export const RESET_FORM: IResetFormType['type'] = 'RESET_FORM';
export const resetFormAction: ReduxAction<
  IResetFormType['type'],
  IResetFormType['payload']
> = createAction(RESET_FORM);
