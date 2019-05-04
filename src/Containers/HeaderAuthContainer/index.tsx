import icons from '@config/icons';
import { WELCOME } from '@config/routs';
import I18N from '@HOCs/I18N';
import Navigator from '@Services/Navigator';
import * as React from 'react';
import { Text, View } from 'react-native';

// components
import Button from '@Components/Interfaces/Button';
import Localization from '@Containers/Localization';

import style from './style';

interface IProps {
  isShowHome?: boolean;
  isShowLocalization?: boolean;
}

const HeaderAuthContainer = (props: IProps) => {
  const toHome = () => Navigator.navigate(WELCOME);

  const renderHomeBtn = () => (
    <Button testID="homeButton" onPress={toHome}>
      <View>
        <Text style={style.home}>{icons.HOME_ICON}</Text>
      </View>
    </Button>
  );

  return (
    <View style={style.container}>
      <View style={style.settings}>
        {props.isShowHome && renderHomeBtn() }
        <Localization containerStyle={style.locale} />
      </View>
    </View>
  );
};

HeaderAuthContainer.defaultProps = {
  isShowHome: true,
  isShowLocalization: false,
};

export default I18N(HeaderAuthContainer);
