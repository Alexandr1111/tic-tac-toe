import React, { FC } from 'react';
import cn from 'classnames';
import { FieldType } from '../../store/types';
import c from './FieldStyles.module.scss';
import { selectSign } from '../../utils/selectSign';

type FieldP = {
  onClickField: (data: FieldType) => void;
} & FieldType;

const Field: FC<FieldP> = ({ coordinate, type, onClickField }) => {

  return (
    <div className={cn(c.field)} onClick={() => onClickField({ coordinate, type })}>
      {selectSign(type)}
    </div>
  );
};

export default Field;
