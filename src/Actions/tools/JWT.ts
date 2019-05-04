import {
  IGetJWTType,
  ISetJWTType,
} from '@Types/reducers/tools/JWT';
import { ReduxAction } from '@Types/ReduxHelper';
import { createAction } from 'redux-actions';

export const SET_JWT: ISetJWTType['type'] = 'SET_JWT';
export const setJWTAction: ReduxAction<
  ISetJWTType['type'],
  ISetJWTType['payload']
> = createAction(SET_JWT);

export const GET_JWT: IGetJWTType['type'] = 'GET_JWT';
export const getJWTAction: ReduxAction<
  IGetJWTType['type'],
  IGetJWTType['payload']
> = createAction(GET_JWT);
