/* tslint:disable:variable-name */
import I18N from '@Services/I18N';
import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {
  i18n: {
    locale: string,
  };
}

const hoc = (Child: any) => {
  class I18nHOC extends React.Component<IProps> {
    public getTranslate = (path: string) => {
      I18N.locale = this.props.i18n.locale;
      return I18N.t(path);
    }

    public render() {
      return <Child {...this.props} I18N={{ getTranslate: this.getTranslate }} />;
    }
  }

  const connector = connect(
        state => ({
          i18n: state.i18n,
        }),
        {},
    );

  return connector(I18nHOC);
};

export default hoc;
