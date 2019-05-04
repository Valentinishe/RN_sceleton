import { INavigatorModel } from '@Types/models/tools/navigator';

export interface IChangeRouteType {
  type: 'CHANGE_ROUTE';
  payload: {
    route: INavigatorModel['route'],
    params: INavigatorModel['params'],
  };
}

export interface ISetRouteType {
  type: 'SET_ROUTE';
  payload: {
    route: INavigatorModel['route'],
    params: INavigatorModel['params'],
  };
}

export interface ISetStatusLogoutModalType {
  type: 'SET_STATUS_LOGOUT_MODAL';
  payload: {
    status: boolean,
  };
}
