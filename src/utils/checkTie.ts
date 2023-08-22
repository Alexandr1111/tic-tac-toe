import { FieldType } from '../store/types';

export const checkTie = (desk: FieldType[]): boolean => {
  if (desk.every(fieldData => fieldData.type)) {
    return true;
  }

  return false;
};
