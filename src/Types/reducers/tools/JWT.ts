import { IJWTModel } from '@Types/models/tools/JWT';

export interface ISetJWTType {
  type: 'SET_JWT';
  payload: {
    accessToken?: IJWTModel['accessToken'],
    expiresIn?: IJWTModel['expiresIn'],
    refreshExpiresIn?: IJWTModel['refreshExpiresIn'],
  };
}

export interface IGetJWTType {
  type: 'GET_JWT';
  payload: {};
}
