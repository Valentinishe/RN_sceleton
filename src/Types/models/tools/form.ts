// change name
export interface IDataFormType {
  name: string;
  value: any;
}

export interface IDataFormMultyType {
  [s: string]: {
    value?: any,
    error?: boolean | string,
  };
}

export interface IDataErrorsForFormType {
  [s: string]: string;
}
