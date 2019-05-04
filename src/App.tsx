/* tslint:disable */
import { routerConfigs, screensConfigs } from '@config/router';
import store from '@root/store';
import Navigator from '@Services/Navigator';
import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';



const AppNavigator = createAppContainer(
  createSwitchNavigator(routerConfigs, { ...screensConfigs }),
);

console.disableYellowBox = true;
class Root extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <AppNavigator
            ref={navigatorRef => {
              Navigator.setTopLevelNavigator(navigatorRef);
            }}
        />
      </Provider>
    );
  }
}

export default Root;
