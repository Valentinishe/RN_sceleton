import colors from '@config/colors';
import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './style';

interface IProps {
  style?: {};
  status?: any;
  color?: string;
}

const LoaderContainer = (props: IProps) => {
  if (!props.status) return null;
  return(
    <View style={[styles.containerLoading]}>
      <View style={ [styles.loader,  props.style] }>
        <ActivityIndicator animating={true} size="large" color={props.color || colors.green} />
    </View>
  </View>
  );
};

LoaderContainer.defaultProps = {
  color:  null,
  status: false,
  style:  {},
};

export default LoaderContainer;
