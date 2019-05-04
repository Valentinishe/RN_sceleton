import colors from '@config/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    height: '35@vs',
  },
  errorTemplate: {
    alignItems            : 'center',
    backgroundColor       : colors.red,
    borderRadius          : 2,
    color                 : colors.black,
    flex                  : 1,
    fontFamily            : 'Open Sans',
    fontSize              : '16@vs',
    fontWeight            : '300',
    justifyContent        : 'center',
    paddingLeft           : '9@s',
    paddingRight          : '9@s',
    shadowColor           : colors.shadowColor,
    shadowOffset           : { width: '1@s', height: '1@vs' },
    shadowOpacity          : 1,
    shadowRadius           : 0,
    width                 : '100%',
  },
  inputTemplate: {
    alignItems            : 'center',
    borderRadius          : 2,
    flex                  : 1,
    fontFamily            : 'Open Sans',
    fontSize              : '16@vs',
    fontWeight            : '300',
    justifyContent        : 'center',
    paddingLeft           : '9@s',
    paddingRight          : '9@s',
    shadowColor           : colors.shadowColor,
    shadowOffset           : { width: '1@s', height: '1@vs' },
    shadowOpacity          : 1,
    shadowRadius           : 0,
    width                 : '100%',
  },

  // Themes
  darkTheme: {
    backgroundColor       : colors.bluePurpleDark,
    color                 : colors.white,
  },
  grayTheme: {
    backgroundColor       : colors.grayDark,
    color                 : colors.grayLight,
  },
});
