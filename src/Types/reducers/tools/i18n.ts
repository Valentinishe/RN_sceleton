import { LocaleType } from '@Types/models/tools/I18N';

export interface ISetLocaleType {
  type: 'SET_LOCALE';
  payload: {
    locale: LocaleType,
  };
}

export interface IChangeLocaleType {
  type: 'CHANGE_LOCALE';
  payload: {
    locale: LocaleType,
  };
}
