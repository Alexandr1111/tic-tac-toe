import React, { ReactElement } from 'react';
import Field from '../components/Field/Field';
import { FieldType } from '../store/types';
import { defineFieldType } from './defineFieldType';

export const makeFields = (
  deskData: FieldType[],
  onClickFieldCallback: (fieldData: FieldType) => void,
  currentMoveNumber: number,
): ReactElement[] => {
  return deskData.map((field) => {
    return (
      <Field
        onClickField={() =>
          onClickFieldCallback({
            coordinate: field.coordinate,
            type: defineFieldType(currentMoveNumber),
          })
        }
        coordinate={field.coordinate}
        type={field.type}
        key={field.coordinate}
      />
    );
  });
};
