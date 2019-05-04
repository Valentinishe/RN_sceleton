import { put, takeEvery } from 'redux-saga/effects';

import { CHANGE_LOCALE, setLocaleAction } from '@Actions/tools/i18n';

import { IChangeLocaleType } from '@Types/reducers/tools/i18n';

export function* changeLocale({ payload }: IChangeLocaleType) {
  yield put(
    setLocaleAction({
      locale: payload.locale,
    }),
  );
}

export default function* rootSaga() {
  yield takeEvery(CHANGE_LOCALE, changeLocale);
}
