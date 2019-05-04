import {
    IChangeRouteType,
    ISetRouteType,
    ISetStatusLogoutModalType,
} from '@Types/reducers/tools/navigator';
import { ReduxAction } from '@Types/ReduxHelper';
import { createAction } from 'redux-actions';

export const CHANGE_ROUTE: IChangeRouteType['type'] = 'CHANGE_ROUTE';
export const changeRouteAction: ReduxAction<
IChangeRouteType['type'],
IChangeRouteType['payload']
> = createAction(CHANGE_ROUTE);

export const SET_ROUTE: ISetRouteType['type'] = 'SET_ROUTE';
export const setRouteAction: ReduxAction<
ISetRouteType['type'],
ISetRouteType['payload']
> = createAction(SET_ROUTE);

export const SET_STATUS_LOGOUT_MODAL: ISetStatusLogoutModalType['type'] = 'SET_STATUS_LOGOUT_MODAL';
export const setStatusLogoutAction: ReduxAction<
    ISetStatusLogoutModalType['type'],
    ISetStatusLogoutModalType['payload']
> = createAction(SET_STATUS_LOGOUT_MODAL);
