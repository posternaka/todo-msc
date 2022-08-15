import React from 'react';
import '../styles/main.scss';

import Header from './Header';
import TodoList from './TodoList';
import InfoTodoItems from './InfoTodoItems';

import { TodoItem as TodoItemTypes } from '../types/types';

import { setInputValue } from '../redux/actions/setValueAction';
import { deleteTask } from '../redux/actions/setValueAction';


import { useAppDispatch, useAppSelector } from '../hooks';


const getTodoList = (todoList: TodoItemTypes[], stateShowTodo: string): TodoItemTypes[] => {
    
    if(!todoList) {
        return [];   
    }

    switch(stateShowTodo) {
        case 'Active': 
            return todoList.filter(item => !item.checkbox)

        case 'Complete':
            return todoList.filter(item => item.checkbox)

        default: 
            return todoList
    }
}

function Main() {
    const settingsShowTodo = ['All', 'Active', 'Complete'];
    const [changeSettingsTodo, setChangeSettingsTodo] = React.useState(0);
    const [stateShowTodo, setStateShowTodo] = React.useState(settingsShowTodo[0]);
    const [todoName, setTodoName] = React.useState('');
    const [checkArrow, setCheckArrow] = React.useState(false);

    const dispatch = useAppDispatch();
    
    const state = useAppSelector(state => state);
    const itemsLeft = state.inputValue.filter(item => !item.checkbox).length;

    const addTodo = () => {
        if(!todoName) {
            return
        }

        dispatch(setInputValue(todoName));
        setTodoName('');
    }

    const todoList = getTodoList(state.inputValue, stateShowTodo); 

    return (
        <>
            <header>
                <p className='container__title'>todos</p>
            </header>
            <main>
                <div className='wrapper'>
                    <div className="container">
                        <div className='todo'>
                            <div className='todo__title cart' >
                                <Header 
                                    todoName={todoName} 
                                    setTodoName={setTodoName} 
                                    addTodo={addTodo}
                                    checkArrow={checkArrow}
                                    setCheckArrow={setCheckArrow}
                                />
                            </div>
                            {
                                checkArrow 
                                ? <TodoList todoList={todoList} />
                                : ''
                            }
                            <div className='todo__footer'>
                                <div className="count">
                                    {itemsLeft} items left
                                </div>
                                <InfoTodoItems 
                                    settingsShowTodo={settingsShowTodo} 
                                    setStateShowTodo={setStateShowTodo} 
                                    setChangeSettingsTodo={setChangeSettingsTodo}
                                    changeSettingsTodo={changeSettingsTodo}
                                />
                                <div className="clear">
                                    <button 
                                        className='button clean' 
                                        onClick={() => dispatch(deleteTask())}
                                    >
                                        Clear completed
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;