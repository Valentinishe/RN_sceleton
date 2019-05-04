import colors from '@config/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {},
  text     : {
    color           : colors.red,
    fontFamily      : 'Open Sans',
    fontSize        : '12@vs',
    fontWeight      : '400',
    textShadowColor : '#171717',
    textShadowOffset: { width: '0@s', height: '1@vs' },
    textShadowRadius: 0,
  },
});
