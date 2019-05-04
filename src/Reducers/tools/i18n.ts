import config from '@config/config';

import { SET_LOCALE } from '@Actions/tools/i18n';

import { ISetLocaleType } from '@Types/reducers/tools/i18n';

import { LocaleType } from '@Types/models/tools/I18N';

interface IState {
  locale: LocaleType;
}

type ActionType = ISetLocaleType;

const initState: IState = {
  locale: config.defaultLocale,
};

export default (state: IState = initState, action: ActionType): IState => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.payload.locale ? action.payload.locale : state.locale,
      };
    default:
      return state;
  }
};
