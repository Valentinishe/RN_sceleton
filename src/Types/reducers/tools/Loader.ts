import { LoaderType } from '@Types/models/tools/Loader';
export interface IAddLoaderType {
  type: 'ADD_LOADER';
  payload: {
    loaderId: LoaderType,
  };
}

export interface IDeleteLoaderType {
  type: 'DELETE_LOADER';
  payload: {
    loaderId: LoaderType,
  };
}
