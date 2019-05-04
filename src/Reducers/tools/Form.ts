import {
  CHANGE_FORM,
  CHANGE_MULTY_FORM,
  CLEAR_FORM,
  RESET_FORM,
  SET_ERROR_MESSAGE_FORM,
  SET_FORM,
  SET_VALIDATIONS_ERRORS_FORM,
 } from '@Actions/tools/Form';
import {
  changeForm,
  changeFormMulty,
  convertBErrToFErr,
  resetFErr,
} from '@root/Utils/formReduxHelper';

 // types
import { IDataErrorsForFormType, IDataFormMultyType } from '@Types/models/tools/Form';
import {
  IChangeFormType,
  IChangeMultyFormType,
  IClearFormType,
  IResetFormType,
  ISetErrorMessageFormType,
  ISetFormType,
  ISetValidationsErrorsFormType,
} from '@Types/reducers/tools/Form';

interface IState {
  forms: {
    [name: string]: IDataFormMultyType;
  };
  errors: IDataErrorsForFormType;
}

const initState: IState = {
  errors: {},
  forms: {},
};

type ActionsType =
    IChangeFormType
  | IChangeMultyFormType
  | IClearFormType
  | IResetFormType
  | ISetFormType
  | ISetValidationsErrorsFormType
  | ISetErrorMessageFormType;

export default (state = initState, action: ActionsType): IState => {
  switch (action.type) {
    case CHANGE_FORM:
      const activeForm1 = action.payload.activeForm;
      return {
        ...state,
        forms: {
          ...state.forms,
          [activeForm1] : changeForm(state.forms[activeForm1], action.payload.field),
        },
      };
    case CHANGE_MULTY_FORM:
      const activeForm2 = action.payload.activeForm;
      return {
        ...state,
        forms: {
          ...state.forms,
          [activeForm2] : changeFormMulty(state.forms[activeForm2], action.payload.form),
        },
      };
    case CLEAR_FORM:
      const newFormKeys = Object
        .keys(state.forms)
        .filter(form => form !== action.payload.activeForm);

      const newForms =  {};
      newFormKeys.forEach(form => newForms[form] = state.forms[form]);

      const newErrors = {};
      newFormKeys.forEach(error => newErrors[error] = state.errors[error]);

      return {
        ...state,
        errors: newErrors,
        forms: newForms,
      };
    case RESET_FORM:
      const activeForm3 = action.payload.activeForm;
      const resetErrors = resetFErr(state.forms[activeForm3]);

      return {
        ...state,
        forms :{
          ...state.forms,
          [activeForm3]: changeFormMulty(state.forms[activeForm3], resetErrors),
        },
      };
    case SET_FORM:
      const activeForm4 = action.payload.activeForm;
      return {
        ...state,
        forms: {
          ...state.forms,
          [activeForm4]: {
            ...action.payload.form,
          },
        },
      };
    case SET_VALIDATIONS_ERRORS_FORM:
      const activeForm5 = action.payload.activeForm;
      const convertedErrors = convertBErrToFErr(action.payload.errors);
      return {
        ...state,
        forms: {
          [activeForm5]: {
            ...changeFormMulty(state.forms[activeForm5], convertedErrors),
          },
        },
      };
    case SET_ERROR_MESSAGE_FORM:
      const activeForm6 = action.payload.activeForm;
      return {
        ...state,
        errors: {
          ...state.errors,
          [activeForm6]: action.payload.message,
        },
      };
    default:
      return state;
  }
};
