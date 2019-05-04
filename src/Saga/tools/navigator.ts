import { put, takeEvery } from 'redux-saga/effects';

import { CHANGE_ROUTE, setRouteAction } from '@Actions/tools/navigator';

import { IChangeRouteType } from '@Types/reducers/tools/navigator';

export function* changeRoute({ payload }: IChangeRouteType) {
  yield put(
    setRouteAction({
      params: payload.params,
      route: payload.route,
    }),
  );
}

export default function* rootSaga() {
  yield takeEvery(CHANGE_ROUTE, changeRoute);
}
