import {
  ICallErrorHandlerType,
} from '@Types/reducers/tools/Errors';
import { ReduxAction } from '@Types/ReduxHelper';
import { createAction } from 'redux-actions';

export const CALL_ERROR_HANDLER: ICallErrorHandlerType['type'] = 'CALL_ERROR_HANDLER';
export const callErrorHandlerAction: ReduxAction<
  ICallErrorHandlerType['type'],
  ICallErrorHandlerType['payload']
> = createAction(CALL_ERROR_HANDLER);
