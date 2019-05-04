import colors from '@config/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    alignItems    : 'center',
    flexDirection : 'row',
    justifyContent: 'center',
  },
  icon: {
    color      : colors.green,
    fontFamily : 'icomoon',
    fontSize   : '20@vs',
    marginRight: '3@s',
  },
  text: {
    color     : colors.whiteDark,
    fontSize  : '18@vs',
    marginLeft: '2@s',
  },
});
