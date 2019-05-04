import HOCs from '@HOCs/index';
import { get } from 'lodash';
import * as React from 'react';
import { Text, View } from 'react-native';

// configs
import { LOG_IN, SING_UP } from '@config/routs';

// types
import { IInternationalization } from '@Types/models/tools/I18N';

// components
import MainContainer from '@Components/Containers/MainContainer';
import Button from '@Components/Interfaces/Button';
import Navigator from '@Services/Navigator';

import style from './style';

interface IProps {
  I18N: IInternationalization;
}

class WelcomeScreen extends React.Component<IProps> {
  public toLogin = () => {
    Navigator.navigate(LOG_IN);
  }

  public toSignUp = () => {
    Navigator.navigate(SING_UP);
  }

  public render() {
    const i18n: any = this.props.I18N.getTranslate('AuthWelcomeScreen');

    return (
    <MainContainer>
      <View style={style.container}>
        <Text style={style.title} testID="welcomeText">
          {get(i18n, 'title', 'Welcome1')}
        </Text>
        <View style={style.btnsContainer}>
          <Button
            onPress={this.toLogin}
            text={get(i18n, 'LOG_IN', 'LOG IN')}
            style={style.btn}
            testID="logInButton"
          />
          <Button
            style={ style.btn }
            onPress={this.toSignUp}
            text={get(i18n, 'SIGN_UP', 'SIGN UP')}
            testID="signUpButton"
          />
        </View>
      </View>
    </MainContainer>
    );
  }
}
export default HOCs(WelcomeScreen);
