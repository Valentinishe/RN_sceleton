import { ADD_LOADER, DELETE_LOADER } from '@Actions/tools/Loader';

import {
  IAddLoaderType,
  IDeleteLoaderType,
} from '@Types/reducers/tools/Loader';

import { LoadersType } from '@Types/Models/tools/Loader';

interface IState {
  loaders: LoadersType;
}

type ActionType = IAddLoaderType | IDeleteLoaderType;

const initState: IState = {
  loaders: [],
};

export default (
  state: IState = initState,
  action: ActionType,
): IState => {
  switch (action.type) {
    case ADD_LOADER:
      const loaders = state.loaders;
      const newLoader = action.payload.loaderId;
      return {
        ...state,
        loaders: loaders.includes(newLoader) ? loaders : [...loaders, newLoader],
      };
    case DELETE_LOADER:
      return {
        ...state,
        loaders: [...state.loaders.filter(l => l !== action.payload.loaderId)],
      };
    default:
      return state;
  }
};
