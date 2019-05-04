import icons from '@config/icons';
import I18N from '@Services/I18N';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

// types
import { LocaleType } from '@Types/models/tools/I18N';

// Actions
import { changeLocaleAction } from '@Actions/tools/i18n';

// Components
import Button from '@Components/Interfaces/Button';
import i18nHOC from '@HOCs/I18N';

import style from './style';

interface IProps {
  changeLocaleAction: typeof changeLocaleAction;
  i18n: {
    locale: LocaleType;
  };
  containerStyle?: any;
}

const styles = StyleSheet.create({
  container: {},
});

const Localization = (props: IProps) => {
  const nextLocale =
    props.i18n.locale !== I18N.locales.constants.RU
      ? I18N.locales.constants.RU
      : I18N.locales.constants.EN;

  const onChangeLocale = () => {
    props.changeLocaleAction({ locale: nextLocale });
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Button onPress={onChangeLocale} testID="i18nButton">
        <View style={style.container}>
          <Text style={style.icon}>{icons.WORLD_ICON}</Text>
          <Text style={style.text}>
            {String(props.i18n.locale).toUpperCase()}
          </Text>
        </View>
      </Button>
    </View>
  );
};

Localization.defaultProps = {
  containerStyle: {},
};

const connector = connect(
  state => ({
    i18n: state.i18n,
  }),
  {
    changeLocaleAction,
  },
);

export default i18nHOC(connector(Localization));
