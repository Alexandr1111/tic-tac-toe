import { ReactElement } from 'react';
import { FieldTypes } from '../constants/Enums';
import { cross, circle } from '../assets/icons';

export const selectSign = (type?: FieldTypes): ReactElement | null => {
  if (!type) {
    return null;
  }

  return <img src={type === FieldTypes.Cross ? cross : circle} alt={'sign'} />;
};
