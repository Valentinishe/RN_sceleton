import { changeRouteAction } from '@Actions/tools/navigator';
import store from '@root/store';
import { DrawerActions, NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
  if (_navigator) {
    _navigator.params = {};
  }
}

function navigate(routeName: string, params?: {}) {
  _navigator.params = params || {};
  _navigator.dispatch(
      NavigationActions.navigate({
        params,
        routeName,
      }),
    );
  store.dispatch(changeRouteAction({ route: routeName, params }));
}
function back() {
  _navigator.dispatch(
    NavigationActions.back(),
  );
}

function getParam(param) {
  if (_navigator === undefined) {
    return undefined;
  }
  return _navigator.params[param];
}

function getCurrentRoute() {
  return store.getState().navigator.route;
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}

function closeDrawer() {
  _navigator.dispatch(DrawerActions.closeDrawer());
}

function toggleDrawer() {
  _navigator.dispatch(DrawerActions.toggleDrawer());
}

export default {
  back,
  closeDrawer,
  getCurrentRoute,
  getParam,
  navigate,
  openDrawer,
  setTopLevelNavigator,
  toggleDrawer,
};
