import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import style from './style';

interface IProps {
  children: any;
}

const MainContainer = (props: IProps) => (
  <SafeAreaView
    style={ style.container }
    forceInset={{ horizontal: 'always', vertical:'never', top:'always' }}
  >
    { props.children }
  </SafeAreaView>
);

export default MainContainer;
