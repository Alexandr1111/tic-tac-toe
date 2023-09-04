import { FieldType } from '../store/types';

export const checkTie = (desk: FieldType[]): boolean => {
  return desk.every((fieldData) => fieldData.type);
};
