import React from 'react';
import { TodoListProps } from '../types/types';

import TodoItem from './TodoItem';

function TodoList({ todoList }: TodoListProps) {
  return (
    <div className='todo__items'>
        {
            todoList.map(item => (
                <TodoItem key={item.id} item={item} />
            ))
        }
    </div>
  )
}

export default TodoList