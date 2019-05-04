/* tslint:disable:ter-arrow-parens max-line-length no-console */
import { IDataErrorsForFormType, IDataFormMultyType, IDataFormType } from '@Types/models/tools/Form';
import { isEmpty } from 'lodash';

export function changeForm(form: IDataFormMultyType, data: IDataFormType): IDataFormMultyType {
  return {
    ...form,
    [data.name]: {
      error: false,
      value: data.value,
    },
  };
}

export function changeFormMulty(form, data: IDataFormMultyType): any {
  if (!isEmpty(data)) {
    Object.keys(data).forEach(key => {
      if (!form[key]) console.error(`Name "${key}" - not found on form!`);

      form[key] = {
        error: data[key].error !== undefined ? data[key].error : form[key].error,
        value: data[key].value !== undefined ? data[key].value : form[key].value,
      };
    });
  }
  return form;
}

// convert backend error to form error structure
export function convertBErrToFErr(error: IDataErrorsForFormType): IDataFormMultyType  {

  const err = {};

  if (!isEmpty(error)) {
    Object.keys(error).forEach(key => {
      const e = {
        error: '',
      };
      e.error = String(error[key]);
      err[key] = e;
    });
  }

  return err;
}

// reset all errors on Redux Form
export function resetFErr(form: IDataFormMultyType): IDataFormMultyType {
  const err = {};
  Object.keys(form).forEach(key => {
    const e = {
      error: '',
    };
    err[key] = e;
  });

  return err;
}
