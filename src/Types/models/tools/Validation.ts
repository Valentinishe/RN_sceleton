import {
  IDataErrorsForFormType,
  IDataFormMultyType,
  IDataFormType,
} from '@Types/models/tools/Form';
export interface IValidationModel {
  [files: string]: {
    methods: {
      [nameMethod: string]: () => boolean,
    },
    messages: {
      [nameMessage: string]: string;
    },
  };
}

// Validation HOCs methods
export type onCheckValidationsType = (validationMap, cb) => void;
export type onChangeFormType = (filed: IDataFormType) => void;
export type onSetFormType = (form: IDataFormMultyType) => void;
export type onSetErrorToFormType = (errors: IDataErrorsForFormType) => void;
export type onSetActiveFormNameType = (name: string, cb?: any) => void;
export type onClearFormType = (form: string) => void;
export type onResetFormType = () => void;
