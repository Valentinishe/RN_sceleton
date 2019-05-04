// tslint:disable:jsx-no-multiline-js
import { DARK, GRAY } from '@config/constants';
import { IDataFormType } from '@Types/models/tools/form';
import React from 'react';
import { TextInput, View } from 'react-native';

import style from './style';

export interface IProps {
  value: string;
  onChange: (IDataFormType) => void;
  name: string;
  style?: {};
  styleContainer?: {};
  error?: boolean | string;
  isEmail?: boolean;
  isPassword?: boolean;
  isNumber?: boolean;
  isDecimal?: boolean;
  isDisabled?: boolean;
  isPhone?: boolean;
  isWithoutSpaces?: boolean;
  autoCorrect?: boolean;
  template?: typeof GRAY | typeof DARK;
  testID?: string;
}
type KeyboardType = 'email-address' | 'phone-pad' | 'number-pad' | 'decimal-pad' | 'default';

const Input = (props: IProps) => {
  const onChange = (text) => {
    props.onChange({ name: props.name, value: text });
  };
  const getKeyboardType = (): KeyboardType => {
    if (props.isEmail) {
      return 'email-address';
    }
    if (props.isPhone) {
      return 'phone-pad';
    }
    if (props.isNumber) {
      return 'number-pad';
    }
    if (props.isDecimal) {
      return 'decimal-pad';
    }
    return 'default';
  };

  return (
    <View style={[style.container, props.styleContainer] } >
      <TextInput
        style={[
          props.error ? style.errorTemplate : style.inputTemplate,
          style[`${props.template}Theme`],
          props.style,
        ]}
        value={String(props.value)}
        onChangeText={onChange}
        secureTextEntry={ props.isPassword }
        autoCorrect={ props.autoCorrect }
        autoCapitalize = "none"
        keyboardType={ getKeyboardType() }
        testID={props.testID}
        editable={ !props.isDisabled }
      />
    </View>
  );
};

Input.defaultProps = {
  autoCorrect: false,
  error: false,
  isDisabled: false,
  isEmail: false,
  isPassword: false,
  isPhone: false,
  isWithoutSpaces: false,
  style: {},
  styleContainer: {},
  template: GRAY,

};

export default Input;
