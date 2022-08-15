import React from 'react';
import { TodoItemsProps } from '../types/types';

import { useAppDispatch } from '../hooks';
import { checkbox } from '../redux/actions/setValueAction';

function TodoItem({ item }: TodoItemsProps) {
    const dispatch = useAppDispatch();

  return (
    <label className="item_check" >
            <input 
                type="checkbox" 
                checked={item.checkbox} 
                onChange={() => dispatch(checkbox(item.id))}
            />
            <span className="checkmark"></span>
            <p className={item.checkbox ? 'underline' : ''}>{item.textTask}</p> 
        </label>
  )
}

export default TodoItem