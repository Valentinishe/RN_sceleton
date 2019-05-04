import { LoaderType } from '@Types/models/tools/Loader';
import { IUserModel } from '@Types/models/User';

export interface IPostAuthType {
  type: 'POST_AUTH';
  payload: {
    email: IUserModel['email'],
    password: IUserModel['password'],
    loaderId: LoaderType,
  };
}

export interface IPostSignUpType {
  type: 'POST_SIGN_UP';
  payload: {
    email: IUserModel['email'],
    password: IUserModel['password'],
    loaderId: LoaderType,
  };
}
