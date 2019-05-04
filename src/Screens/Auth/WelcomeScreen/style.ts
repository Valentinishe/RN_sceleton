import colors from '@config/colors';
import { scale, ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  btn: {
    color:           colors.blueDark,
    fontFamily      : 'Open Sans',
    fontSize        : '26@vs',
    fontWeight      : '300',
    lineHeight      : '36@vs',
    textTransform   : 'uppercase',
  },
  btnsContainer: {
    alignItems    : 'center',
    flexDirection : 'row',
    justifyContent: 'space-around',
    marginTop     : '15@vs',
  },
  container: {
    alignItems    : 'center',
    flex          : 1,
    justifyContent: 'center',
  },
  title: {
    color           : colors.gray,
    fontFamily      : 'Open Sans',
    fontSize        : '22@vs',
    fontWeight      : '300',
    letterSpacing   : '1.4@s',
    marginBottom    : '10@vs',
  },

});
