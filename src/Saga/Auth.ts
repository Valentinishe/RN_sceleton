import { delay, put, takeEvery } from 'redux-saga/effects';

// actions
import { POST_AUTH, POST_SIGN_UP } from '@Actions/Auth';
import { callErrorHandlerAction } from '@Actions/tools/Errors';
import { addLoaderAction, deleteLoaderAction } from '@Actions/tools/Loader';

// types
import {
  IPostAuthType,
  IPostSignUpType,
} from '@Types/reducers/Auth';

// AUTH
export function* postAuth({ payload }: IPostAuthType): any {
  yield put(addLoaderAction({ loaderId: payload.loaderId }));
  try {
   // http request
    yield delay(4000);
  } catch (error) {
    yield put(
      callErrorHandlerAction({
        activeForm: 'LogInForm',
        message: error.message,
        status: error.status,
        validations: error.validations,
      }),
    );
  } finally {
    yield put(deleteLoaderAction({ loaderId: payload.loaderId }));
  }
}

// REGISTRATION
export function* postUser({ payload }: IPostSignUpType): any {
  yield put(addLoaderAction({ loaderId: payload.loaderId }));
  try {

    // https request
    yield delay(4000);

  } catch (error) {
    yield put(
      callErrorHandlerAction({
        activeForm: 'SignUpForm',
        message: error.message,
        status: error.status,
        validations: error.validations,
      }),
    );
  } finally {
    yield put(deleteLoaderAction({ loaderId: payload.loaderId }));
  }
}

export default function* rootSaga(): any {
  // AUTH
  yield takeEvery(POST_AUTH, postAuth);
  // REGISTRATION
  yield takeEvery(POST_SIGN_UP, postUser);
}
