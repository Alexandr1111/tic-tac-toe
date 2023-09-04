import { FieldType } from '../store/types';

export const checkWin = (deskInner: FieldType[]): boolean => {
  const winCombinations = [
    // Победные комбинации в строках
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Победные комбинации в столбцах
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Победные комбинации в диагоналях
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winCombinations) {
    const [coord1, coord2, coord3] = combination;
    const field1 = deskInner[coord1];
    const field2 = deskInner[coord2];
    const field3 = deskInner[coord3];

    if (
      field1.type &&
      field1.type === field2.type &&
      field2.type === field3.type
    ) {
      return true;
    }
  }

  return false;
};
