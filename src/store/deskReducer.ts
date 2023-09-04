import { DeskType } from './types';
import { RESET_STORE_ACTION, SET_SIGN_IN_FIELD } from './deskActions';

const beforeInitialState: DeskType = { desk: [], currentMoveNumber: 0 };

// создаём стор полей
for (let i = 0; i < 9; i++) {
  beforeInitialState.desk.push({ coordinate: i });
}

type InitialStateType = typeof beforeInitialState;

const deskReducer = (
  state = beforeInitialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case RESET_STORE_ACTION:
      return {
        ...beforeInitialState,
        currentMoveNumber: 0,
      };
    case SET_SIGN_IN_FIELD:
      const updatedDesk = state.desk.map((fieldData) => {
        if (fieldData.coordinate === action.data.coordinate) {
          return (fieldData = action.data);
        }

        return fieldData;
      });

      return {
        ...state,
        desk: updatedDesk,
        currentMoveNumber: (state.currentMoveNumber += 1),
      };
  }
  return state;
};

export default deskReducer;
