export interface IErrorModel {
  status: number;
  validations?: { [propName: string]: any };
  message?: string;
  activeForm: string;
}
