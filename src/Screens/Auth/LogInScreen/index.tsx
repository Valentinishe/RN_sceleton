import HOCs from '@HOCs/index';
import { get } from 'lodash';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

// utils
import { isLoading } from '@Utils/loaderHelpers';

// types
import { IDataFormMultyType } from '@Types/models/tools/Form';
import { IInternationalization } from '@Types/models/tools/I18N';
import { LoadersType } from '@Types/models/tools/Loader';
import {
  onChangeFormType,
  onCheckValidationsType,
  onClearFormType,
  onSetActiveFormNameType,
  onSetFormType,
} from '@Types/models/tools/Validation';

// actions
import { postAuthAction } from '@Actions/Auth';

// components
import MainContainer from '@Components/Containers/MainContainer';
import Button from '@Components/Interfaces/Button';
import ErrorTextInput from '@Components/Interfaces/ErrorTextInput';
import LabelTextInput from '@Components/Interfaces/LabelTextInput';
import LoaderContainer from '@Components/Interfaces/LoaderContainer';
import TextInput from '@Components/Interfaces/TextInput';
import Header from '@Containers/HeaderAuthContainer';

import style from './style';
import validationMap from './validationMap';

interface IProps {
  // actions
  postAuthAction: typeof postAuthAction;
  onChangeForm: onChangeFormType;
  onClearForm: onClearFormType;
  onSetForm: onSetFormType;
  onCheckValidations: onCheckValidationsType;
  onSetActiveFormName: onSetActiveFormNameType;

  // data
  I18N: IInternationalization;
  Loaders: LoadersType;
  form: IDataFormMultyType;
  error: string;
}

class LogInScreen extends React.Component<IProps> {
  public loadersId = {
    logIn: 'LogInScreen.logIn',
  };

  public componentDidMount() {
    this.props.onSetActiveFormName('LogInForm', () => {
      this.props.onSetForm({
        email: {
          error: false,
          value: '',
        },
        password: {
          error: false,
          value: '',
        },
      });
    });
  }

  public componentWillUnmount() {
    this.props.onClearForm('LogInForm');
  }

  public onLogIn = () => {
    const { email, password } = this.props.form;
    this.props.onCheckValidations(validationMap, () => {
      this.props.postAuthAction({
        email: email.value,
        loaderId: this.loadersId.logIn,
        password: password.value,
      });
    });
  }

  public render() {
    const i18n: any = this.props.I18N.getTranslate('AuthLogInScreen');
    const { form, onChangeForm, error } = this.props;
    if (form === undefined) {
      return null;
    }
    const { email, password } = form;

    return (
      <LoaderContainer status={isLoading(this.props.Loaders, this.loadersId.logIn)} >
        <MainContainer>
          <Header isShowHome={true}  />
          <Text style={style.title} testID="logInText">{get(i18n, 'LOG_IN', 'LOG IN')}</Text>
          <View style={ style.content }>
            <LabelTextInput text={get(i18n, 'emailInput', 'Email:')} />
            <TextInput
              value={get(email, 'value', '')}
              onChange={onChangeForm}
              name="email"
              isEmail={true}
              isWithoutSpaces={true}
              error={get(email, 'error', '')}
              testID="emailInput"
            />
            <ErrorTextInput
              text={get(email, 'error', '')}
              testID="emailErrorText"
            />
          </View>
          <View style={ style.content }>
            <LabelTextInput text={get(i18n, 'passwordInput', 'Password:')} />
            <TextInput
              isWithoutSpaces={true}
              value={get(password, 'value', '')}
              onChange={onChangeForm}
              name="password"
              error={get(password, 'error', '')}
              isPassword={true}
              testID="passwordInput"
            />
            <ErrorTextInput
              text={get(email, 'error', '')}
              testID="passwordErrorText"
            />
            <ErrorTextInput
              text={error || ''}
              testID="authErrorText"
            />
          </View>
          <Button
            style={ style.btn }
            styleContainer={style.btnContainer}
            onPress={this.onLogIn}
            text={get(i18n, 'logInBtn', 'GO TRADE')}
            testID="logInButton"
          />
        </MainContainer>
      </LoaderContainer>
    );
  }
}

const connector = connect(
  state => ({
    Loaders: state.Loaders.loaders,
  }),
  {
    postAuthAction,
  },
);

export default HOCs(connector(LogInScreen));
