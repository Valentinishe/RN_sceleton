import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

interface IProps {
  styleContainer?: {};
  styleText?: {};
  text: string;
}

const LabelTextInput = (props: IProps) => (
    <View style={[style.container, props.styleContainer]}>
        <Text style={[style.text, props.styleText]}>{props.text}</Text>
    </View>
);

LabelTextInput.defaultProps = {
  styleContainer: {},
  styleText     : {},
};

export default LabelTextInput;
