import { IChangeLocaleType, ISetLocaleType } from '@Types/reducers/tools/i18n';
import { ReduxAction } from '@Types/ReduxHelper';
import { createAction } from 'redux-actions';

export const SET_LOCALE: ISetLocaleType['type'] = 'SET_LOCALE';
export const setLocaleAction: ReduxAction<
  ISetLocaleType['type'],
  ISetLocaleType['payload']
> = createAction(SET_LOCALE);

export const CHANGE_LOCALE: IChangeLocaleType['type'] = 'CHANGE_LOCALE';
export const changeLocaleAction: ReduxAction<
  IChangeLocaleType['type'],
  IChangeLocaleType['payload']
> = createAction(CHANGE_LOCALE);
