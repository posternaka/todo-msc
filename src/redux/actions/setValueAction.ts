import { createAction } from '@reduxjs/toolkit';
import { SET_INPUT_VALUE, DELETE, CHECKBOX, CHECK_ARROW } from './actionsTypes';

export const setInputValue = createAction<string>(SET_INPUT_VALUE);
export const deleteTask = createAction(DELETE);
export const checkbox = createAction<string>(CHECKBOX);
export const check_arrow = createAction<string>(CHECK_ARROW);