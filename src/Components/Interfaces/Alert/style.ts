import colors from '@config/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  cancelBtn:{},
  cancelText:{
    color: colors.whiteDark,
  },
  confirmBtn:{},
  confirmText: {
    color: '#fff',
    fontSize: '18@vs',
    fontWeight: '700',
  },
  container: {
    backgroundColor: colors.grayDark,
    borderRadius: '2@vs',
    shadowColor: colors.shadowColor,
    shadowOffset: { width: '1@s', height: '1@vs' },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  message: {
    color: '#fff',
    fontSize: '18@vs',
    fontWeight: '400',
  },
  overlayStyle: {
    opacity: 0,
  },
  title: {
    color: '#fff',
    fontSize: '20@vs',
    fontWeight: '700',
    textAlign: 'center',
  },
});
