import colors from '@config/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    alignItems    : 'center',
    flexDirection : 'row',
    justifyContent: 'flex-end',
    width         : '100%',
  },
  home: {
    color      : colors.green,
    fontFamily : 'icomoon',
    fontSize   : '24@vs',
  },
  locale: {
    color              : colors.green,
    marginLeft         : '10@s',
    textDecorationColor: colors.green,
  },
  settings: {
    alignItems    : 'center',
    flexDirection : 'row',
    justifyContent: 'space-between',
  },
});
