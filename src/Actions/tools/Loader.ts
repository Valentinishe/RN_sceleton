import {
  IAddLoaderType,
  IDeleteLoaderType,
} from '@Types/reducers/tools/Loader';
import { ReduxAction } from '@Types/ReduxHelper';
import { createAction } from 'redux-actions';

export const ADD_LOADER: IAddLoaderType['type'] = 'ADD_LOADER';
export const addLoaderAction: ReduxAction<
  IAddLoaderType['type'],
  IAddLoaderType['payload']
> = createAction(ADD_LOADER);

export const DELETE_LOADER: IDeleteLoaderType['type'] = 'DELETE_LOADER';
export const deleteLoaderAction: ReduxAction<
  IDeleteLoaderType['type'],
  IDeleteLoaderType['payload']
> = createAction(DELETE_LOADER);
