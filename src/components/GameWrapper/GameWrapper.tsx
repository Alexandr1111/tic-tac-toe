import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deskActions } from '../../store/deskActions';
import {
  currentMoveNumberSelector,
  deskSelector,
} from '../../store/selectors/deskSelectors';
import c from './GameWrappperStyles.module.scss';
import { makeFields } from '../../utils/makeFields';
import { FieldType } from '../../store/types';
import { checkWin } from '../../utils/checkWin';
import { checkTie } from '../../utils/checkTie';

const GameWrapper = () => {
  const dispatch = useDispatch();
  const desk = useSelector(deskSelector);
  const currentMoveNumber = useSelector(currentMoveNumberSelector);

  useEffect(() => {
    if (checkWin(desk)) {
      alert(`Победа ${currentMoveNumber % 2 === 0 ? 'O' : 'X'}`);
    }
    if (checkTie(desk) && !checkWin(desk)) {
      alert('Ничья');
    }
  }, [currentMoveNumber, desk]);

  /**
   * Вызываем экшен установки нужного символа и увеличиваем счётчик ходов на 1
   * Если текущий клик на непустое поле, то ничего не делаем
   * Если уже есть победа, то ничего не делаем
   * @param fieldData
   */
  const onClickFieldHandler = (fieldData: FieldType) => {
    return desk.forEach((fieldDataInner) => {
      if (
        fieldDataInner.coordinate === fieldData.coordinate &&
        !fieldDataInner.type
      ) {
        if (!checkWin(desk)) {
          dispatch(deskActions.setSign(fieldData));
        }
      }
    });
  };

  return (
    <div className={c.gameWrapper}>
      <div className={c.desk}>
        {makeFields(desk, onClickFieldHandler, currentMoveNumber)}
      </div>
      <button
        className={c.newGameButton}
        style={{}}
        onClick={() => dispatch(deskActions.startNewGame())}
      >
        Начать заново
      </button>
    </div>
  );
};

export default GameWrapper;
