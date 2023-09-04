import { FieldTypes } from '../constants/Enums';

export type FieldType = {
  coordinate: number;
  type?: FieldTypes;
};

export type DeskType = {
  desk: FieldType[];
  currentMoveNumber: number;
};
