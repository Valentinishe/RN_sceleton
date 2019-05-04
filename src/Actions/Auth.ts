import {
  IPostAuthType,
  IPostSignUpType,
} from '@Types/reducers/Auth';
import { ReduxAction } from '@Types/ReduxHelper';
import { createAction } from 'redux-actions';

// AUTH
export const POST_AUTH: IPostAuthType['type'] = 'POST_AUTH';
export const postAuthAction: ReduxAction<
  IPostAuthType['type'],
  IPostAuthType['payload']
> = createAction(POST_AUTH);

// REGISTRATION
export const POST_SIGN_UP: IPostSignUpType['type'] = 'POST_SIGN_UP';
export const postSignUpAction: ReduxAction<
  IPostSignUpType['type'],
  IPostSignUpType['payload']
> = createAction(POST_SIGN_UP);
