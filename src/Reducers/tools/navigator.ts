import { SET_ROUTE, SET_STATUS_LOGOUT_MODAL } from '@Actions/tools/navigator';

import { ISetRouteType, ISetStatusLogoutModalType } from '@Types/reducers/tools/navigator';

import { INavigatorModel } from '@Types/models/tools/navigator';

interface IState {
  history: INavigatorModel['history'];
  route: INavigatorModel['route'];
  params: INavigatorModel['params'];
  isShowLogoutModal: boolean;
}

type ActionType = ISetRouteType | ISetStatusLogoutModalType;

const initState: IState = {
  history: [],
  isShowLogoutModal: false,
  params: undefined,
  route: '',
};

export default (state: IState = initState, action: ActionType): IState => {
  switch (action.type) {
    case SET_ROUTE:
      return {
        ...state,
        history: [...state.history, action.payload.route],
        params: { ...action.payload.params },
        route: action.payload.route,
      };
    case SET_STATUS_LOGOUT_MODAL:
      return {
        ...state,
        isShowLogoutModal: action.payload.status,
      };
    default:
      return state;
  }
};
