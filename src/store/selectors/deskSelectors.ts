import { AppStateType } from '../store';
import { FieldType } from '../types';

export const deskSelector = ((state: AppStateType): FieldType[] => state.desk.desk);

export const currentMoveNumberSelector = ((state: AppStateType): number => state.desk.currentMoveNumber);
