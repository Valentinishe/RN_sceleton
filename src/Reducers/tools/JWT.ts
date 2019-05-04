import { SET_JWT } from '@Actions/tools/JWT';

 // types
import { IJWTModel } from '@Types/Models/tools/JWT';
import { ISetJWTType } from '@Types/reducers/tools/JWT';

const initState: IJWTModel = {
  accessToken: '',
  expiresIn:  0,
  refreshExpiresIn: 0,
};

type ActionsType = ISetJWTType;

export default (state = initState, action: ActionsType): IJWTModel => {
  switch (action.type) {
    case SET_JWT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
