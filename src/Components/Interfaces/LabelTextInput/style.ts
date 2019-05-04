import colors from '@config/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {},
  text     : {
    color           : colors.gray,
    fontFamily      : 'Open Sans',
    fontSize        : '16@vs',
    fontWeight      : '300',
    textShadowColor : '#171717',
    textShadowOffset: { width: '0@s', height: '1@vs' },
    textShadowRadius: 1,
  },
});
