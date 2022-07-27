import { createReducer } from '@reduxjs/toolkit';
import { SET_INPUT_VALUE, DELETE, CHECKBOX } from '../actions/actionsTypes';
import { TodoItem } from '../../types/types';


const initStore: TodoItem[] = [];

const createTodoItem = (textTask: string): TodoItem => ({
    id: `${Date.now()}`, 
    checkbox: false, 
    textTask,
})

export const setValue = createReducer(initStore, {
    [SET_INPUT_VALUE]: (state, action) => {
        return [...state, createTodoItem(action.payload)]
    },

    [DELETE]: (state) => {
        return [...state.filter((item) => !item.checkbox)]
    },

    [CHECKBOX]: (state, action) => {
        return [...state.map((item) => item.id === action.payload ? {...item, checkbox: !item.checkbox} : item)]
    },
})