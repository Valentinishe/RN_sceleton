// tslint:disable:jsx-wrap-multiline
import { apllyOnFormValidationRules, checkFormValidation } from '@Utils/validationReduxHelper';
import * as React from 'react';
import { connect } from 'react-redux';

// actions
import {
  changeFormAction,
  changeMultyFormAction,
  clearFormAction,
  resetFormAction,
  setFormAction,
  setValidationsErrorsFormAction,
} from '@Actions/tools/Form';

// types
import { IDataErrorsForFormType, IDataFormMultyType } from '@Types/models/tools/Form';

interface IProps {
  // Data
  Forms: {
    [name: string]: IDataFormMultyType;
  };
  Errors: IDataErrorsForFormType;

  // actions
  changeFormAction: typeof changeFormAction;
  changeMultyFormAction: typeof changeMultyFormAction;
  clearFormAction: typeof clearFormAction;
  setFormAction: typeof setFormAction;
  resetFormAction: typeof resetFormAction;
  setValidationsErrorsFormAction: typeof setValidationsErrorsFormAction;
}

const hoc = (Child: any) => {
  class ValidationHoC extends React.Component<IProps> {
    public state = {
      activeForm: '',
    };

    public onCheckValidations = (validationMap, cb) => {
      const activeForm = this.state.activeForm;
      const Forms = this.props.Forms;
      const newForm = apllyOnFormValidationRules(Forms[activeForm])(validationMap);
      if (checkFormValidation(newForm)) {
        return this.onSetForm(newForm);
      }
      if (cb) cb();
    }

    public onChangeForm = ({ name, value }) => {
      const activeForm = this.state.activeForm;

      this.props.changeFormAction({
        activeForm,
        field: {
          name,
          value,
        },
      });
    }

    public onSetActiveFormName = (name: string, cb: () => any) => {
      this.setState({ activeForm: name }, () => cb && cb());
    }

    public onSetForm = (form) => {
      const activeForm = this.state.activeForm;
      this.props.setFormAction({ form, activeForm });
    }

    public onClearForm = (form) => {
      const activeForm = form || this.state.activeForm;
      this.props.clearFormAction({ activeForm });
    }

    public onResetForm = () => {
      const activeForm = this.state.activeForm;
      this.props.resetFormAction({ activeForm });
    }

    public onSetErrorToForm = (errors: IDataErrorsForFormType) => {
      const activeForm = this.state.activeForm;
      this.props.setValidationsErrorsFormAction({ errors, activeForm });
    }

    public render() {
      const activeForm = this.state.activeForm;
      const Forms = this.props.Forms;
      const Errors = this.props.Errors;

      const form = Forms[activeForm];
      const error = Errors[activeForm];

      return (
        <Child
          {...this.props}
          onCheckValidations={this.onCheckValidations}
          onChangeForm={this.onChangeForm}
          onSetForm={this.onSetForm}
          onClearForm={this.onClearForm}
          onResetForm={this.onResetForm}
          onSetErrorToForm={this.onSetErrorToForm}
          onSetActiveFormName={ this.onSetActiveFormName }
          form={ form }
          error={ error }
        />
      );
    }
  }

  const connector = connect(
    state => ({
      Errors: state.Form.errors,
      Forms: state.Form.forms,
    }),
    {
      changeFormAction,
      changeMultyFormAction,
      clearFormAction,
      resetFormAction,
      setFormAction,
      setValidationsErrorsFormAction,
    },
  );

  return connector(ValidationHoC);
};

export default hoc;
