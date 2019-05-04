// tslint:disable:no-console max-line-length
import { IDataFormMultyType } from '@Types/models/tools/Form';
import { IValidationModel } from '@Types/models/tools/Validation';
import { get } from 'lodash';

type checkFormValidationResType = (validationMap: IValidationModel) => IDataFormMultyType;

export function apllyOnFormValidationRules(form: IDataFormMultyType): checkFormValidationResType  {
  const newform = { ...form };

  return (validationMap: IValidationModel): IDataFormMultyType => {
    Object.keys(validationMap).forEach((keyFiled) => {
      const field = validationMap[keyFiled];
      Object.keys(field.methods).forEach((keyMethod) => {
        const method: (string) => boolean = field.methods[keyMethod];
        const value = get(form[keyFiled], 'value', undefined);
        if (value === undefined) {
          console.error('apllyOnFormValidationRules', `not found propety \n ${String(keyFiled).toUpperCase()} \n in ValidationMap file`);
          return;
        }
        const result = method(form[keyFiled].value);
        if (!result) {
          newform[keyFiled].error = field.messages[keyMethod];
        }
      });

    });

    return newform;
  };
}

export function checkFormValidation(form: IDataFormMultyType): boolean  {
  let indicator = false;

  Object.keys(form).forEach((key) => {
    const field = form[key];
    if (field.error) {
      indicator = true;
      return indicator;
    }
  });

  return indicator;

}

interface IErrorsInputType {
  [err: string]: string[];
}
interface IErrorsOutputType {
  [err: string]: string;
}

export function transformBackendErrors(errors: IErrorsInputType): IErrorsOutputType  {
  const newFormatErrors = {};
  Object.keys(errors).forEach(key => newFormatErrors[key] = errors[key][0]);
  return newFormatErrors;
}
