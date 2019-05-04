import { fork } from 'redux-saga/effects';

import Auth from './Auth';

// tools
import Errors from './tools/Errors';
import i18n from './tools/i18n';
import navigator from './tools/navigator';

export default function* root_saga(): any {
  yield fork(Auth);

  // tools
  yield fork(Errors);
  yield fork(i18n);
  yield fork(navigator);
}
