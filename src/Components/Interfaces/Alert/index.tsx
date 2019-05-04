import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

import colors from '@root/config/colors';
import style from './style';

interface IProps {
  // boolean
  isShow: boolean;
  isProgress: boolean;
  closeOnHardwareBackPress?: boolean;
  closeOnTouchOutside?: boolean;
  // text
  message?: string;
  title: string;
  confirmBtn?: string;
  cancelBtn?: string;
  // actions
  onConfirm?: (any: any) => void;
  onCancel?: () => void;
}

const Alert = (props: IProps) => {
  const { isShow, isProgress, message, title,
          cancelBtn, confirmBtn, onCancel, onConfirm  } = props;

  return (
    <AwesomeAlert
      contentContainerStyle={ style.container }
      messageStyle={ style.message }
      show={isShow}
      showProgress={ isProgress }
      titleStyle={ style.title }
      title={ title }
      message={ message }
      closeOnTouchOutside={props.closeOnTouchOutside}
      closeOnHardwareBackPress={props.closeOnHardwareBackPress}
      showCancelButton={ Boolean(cancelBtn && onCancel) }
      showConfirmButton={ Boolean(confirmBtn && onConfirm) }
      cancelText={ cancelBtn }
      cancelButtonTextStyle={ style.cancelText }
      cancelButtonStyle={ cancelBtn }
      cancelButtonColor= { colors.grayDark }
      confirmText={ confirmBtn }
      confirmButtonTextStyle={ style.confirmText }
      confirmButtonStyle={ confirmBtn }
      confirmButtonColor= { colors.green }
      onCancelPressed={onCancel}
      onConfirmPressed={onConfirm}
      onDismiss={onCancel}
      overlayStyle={ style.overlayStyle }
    />
  );
};

Alert.defaultProps = {
  cancelBtn: '',
  closeOnHardwareBackPress: false,
  closeOnTouchOutside: false,
  confirmBtn: '',
  isProgress: false,
  isShow: false,
  message: '',
  title: '',
};

export default Alert;
