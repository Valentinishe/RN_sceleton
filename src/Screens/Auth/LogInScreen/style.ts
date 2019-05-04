
import colors from '@config/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  btn: {
    alignSelf: 'center',
    color     : colors.grayDark,
    fontFamily: 'Open Sans',
    fontSize  : '16@vs',
    fontWeight: '700',
    letterSpacing: '5@s',
    padding: '7@vs',
  },
  btnContainer: {
    borderColor: colors.grayDark,
    borderRadius: '5@vs',
    borderWidth: '3@vs',
    marginBottom: '20@vs',
    marginTop: '50@vs',
  },
  content  : {
    marginBottom  : '10@vs',
    marginTop     : '10@vs',
  },

  title: {
    color           : colors.gray,
    fontFamily      : 'Open Sans',
    fontSize        : '36@vs',
    fontWeight      : '300',
    letterSpacing   : '1.4@vs',
    lineHeight      : '40@vs',
    marginBottom    : '0@vs',
    marginTop       : '20@s',
    textAlign       : 'center',
    textTransform   : 'uppercase',
  },
});
