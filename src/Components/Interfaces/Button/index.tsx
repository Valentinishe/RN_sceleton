import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  onPress: (params: any) => any;
  style?: {};
  styleContainer?: {};
  children?: any;
  text?: string;
  // for ui tests
  testID?: string;
}

const Button = (props: IProps) => {
  const renderChildren = () => (
    <View style={props.style}>{props.children}</View>
  );

  const renderText = () => (
    <View style={ props.styleContainer }>
      <Text style={props.style}>
          {' '}
          {props.text}
          {' '}
      </Text>
    </View>
  );

  return(
    <TouchableOpacity onPress={props.onPress} testID={props.testID}>
        {props.children ? renderChildren() : renderText()}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  children: null,
  style   : {},
  styleContainer: {},
  text    : '',
};

export default Button;
