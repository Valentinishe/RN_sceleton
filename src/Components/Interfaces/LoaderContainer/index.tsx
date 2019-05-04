import colors from '@config/colors';
import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './style';

interface IProps {
  children: any;
  style?: {};
  status?: any;
  color?: string;
}

const LoaderContainer = (props: IProps) => {

  const renderLoader = () => {
    if (props.status) {
      return (
        <View style={ styles.loader }>
          <ActivityIndicator animating={true} size="large" color={props.color || colors.green} />
        </View>
      );
    }
    return null;
  };

  return(
    <View style={[styles.containerLoading, props.style]}>
        { renderLoader() }
        { props.children }
    </View>
  );
};

LoaderContainer.defaultProps = {
  color:  null,
  status: false,
  style:  {},
};

export default LoaderContainer;
