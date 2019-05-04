import config from '@config/config';
import { LOG_IN, SING_UP, WELCOME } from '@config/routs';

// AUTH screens
import LogInScreen from '@Screens/Auth/LogInScreen';
import SignUpScreen from '@Screens/Auth/SignUpScreen';
import WelcomeScreen from '@Screens/Auth/WelcomeScreen';

import {
  createStackNavigator,
} from 'react-navigation';

export const routerConfigs = {
  // AUTH
  [WELCOME]: createStackNavigator(
    {
      [WELCOME]: WelcomeScreen,
      [SING_UP]: SignUpScreen,
      [LOG_IN]: LogInScreen,
    },
    {
      headerMode: 'none',
    },
  ),
};

export const screensConfigs = {
  headerMode: 'none',
  initialRouteName: config.INIT_ROUTE,
};
