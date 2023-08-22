import { FieldTypes } from '../constants/Enums';

export const defineFieldType = (currentMoveNumber: number): FieldTypes => {
  if (currentMoveNumber % 2 === 0) {
    return FieldTypes.Cross;
  }

  return FieldTypes.Circle;
};
