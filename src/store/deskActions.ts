import { FieldType } from './types';

export const RESET_STORE_ACTION = 'TT/DESK/RESET';
export const SET_SIGN_IN_FIELD = 'TT/DESK/SET_SIGN_IN_FIELD';

export const deskActions = {
  startNewGame: () => ({ type: RESET_STORE_ACTION }),
  setSign: (data: FieldType) => ({ type: SET_SIGN_IN_FIELD, data }),
};
