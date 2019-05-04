import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

interface IProps {
  styleContainer?: {};
  styleText?: {};
  text: boolean | string;
  testID?: string;
}

const ErrorTextInput = (props: IProps) => props.text ? (
    <View style={[style.container, props.styleContainer]}>
        <Text style={[style.text, props.styleText]} testID={props.testID}>
          {String(props.text)}
        </Text>
    </View>
) : null;

ErrorTextInput.defaultProps = {
  styleContainer: {},
  styleText     : {},
};

export default ErrorTextInput;
