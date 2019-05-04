import HOCs from '@HOCs/index';
import { get } from 'lodash';
import * as React from 'react';
import { Text, View } from 'react-native';
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
  onSetErrorToFormType,
  onSetFormType,
} from '@Types/models/tools/Validation';

// actions
import { postSignUpAction } from '@Actions/Auth';

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
  postSignUpAction: typeof postSignUpAction;
  onChangeForm: onChangeFormType;
  onSetForm: onSetFormType;
  onClearForm: onClearFormType;
  onCheckValidations: onCheckValidationsType;
  onSetErrorToForm: onSetErrorToFormType;
  onSetActiveFormName: onSetActiveFormNameType;

  // data
  I18N: IInternationalization;
  Loaders: LoadersType;
  form: IDataFormMultyType;
}

class SignUpScreen extends React.Component<IProps> {
  public loadersId = {
    signUp: 'SignUpScreen.signUp',
  };

  public componentDidMount() {
    this.props.onSetActiveFormName('SignUpForm', () => {
      this.props.onSetForm({
        email: {
          error: false,
          value: '',
        },
        password: {
          error: false,
          value: '',
        },
        passwordConfirm: {
          error: false,
          value: '',
        },
      });
    });

  }

  public componentWillUnmount() {
    this.props.onClearForm('SignUpForm');
  }

  public onSignUp = () => {
    const { password, passwordConfirm, email } = this.props.form;
    const i18nErrors: any = this.props.I18N.getTranslate('ValidationsErrors');

    if (passwordConfirm.value !== password.value) {
      return this.props.onSetErrorToForm({
        passwordConfirm: get(
          i18nErrors,
          'isNotMatchPassword',
          'Passwords do not match',
        ),
      });
    }

    this.props.onCheckValidations(validationMap, () => {
      this.props.postSignUpAction({
        email: email.value,
        loaderId: this.loadersId.signUp,
        password: password.value,
      });
    });
  }

  public render() {
    const i18n: any = this.props.I18N.getTranslate('AuthSignUpScreen');

    const { form, onChangeForm, Loaders } = this.props;

    if (form === undefined) return null;

    const { password, passwordConfirm, email } = this.props.form;
    return (
      <LoaderContainer status={isLoading(Loaders, this.loadersId.signUp)} >
        <MainContainer>
          <Header isShowHome={true}  />
          <Text style={style.title} testID="logInText">{get(i18n, 'SIGN_UP', 'SIGN UP')}</Text>
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
          </View>
          <View style={style.content}>
            <LabelTextInput text={get(i18n, 'passwordConfirmInput', 'Confirm password:')}/>
            <TextInput
              value={get(passwordConfirm, 'value', '')}
              onChange={onChangeForm}
              name="passwordConfirm"
              isWithoutSpaces={true}
              error={get(passwordConfirm, 'error', '')}
              isPassword={true}
              testID="passwordConfirmInput"
            />
            <ErrorTextInput
              text={get(passwordConfirm, 'error', '')}
              testID="passwordConfirmErrorText"
            />
          </View>
          <Button
            style={ style.btn }
            styleContainer={style.btnContainer}
            onPress={this.onSignUp}
            text={get(i18n, 'signUpBtn', 'Sign Up')}
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
    postSignUpAction,
  },
);
export default HOCs(connector(SignUpScreen));
