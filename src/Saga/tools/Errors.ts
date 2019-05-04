import { put, takeEvery } from 'redux-saga/effects';

import {
  CALL_ERROR_HANDLER,
} from '@Actions/tools/Errors';

import {
  setErrorMessageFormAction,
  setValidationsErrorsFormAction,
} from '@Actions/tools/Form';

import { ICallErrorHandlerType } from '@Types/reducers/tools/Errors';

export function* errorsHandler({ payload }: ICallErrorHandlerType) {
  if (!payload.status) {
    return;
  }

  switch (payload.status) {
    case 401:
      yield put(
        setErrorMessageFormAction({
          activeForm: payload.activeForm,
          message: payload.message,
        }),
    );
      break;
    case 422:
      yield put(
        setValidationsErrorsFormAction({
          activeForm: payload.activeForm,
          errors: payload.validations,
        }),
      );
      break;
    default:
  }
}

export default function* rootSaga() {
  yield takeEvery(CALL_ERROR_HANDLER, errorsHandler);
}
