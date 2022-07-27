import React from 'react';
import { HeaderProps } from '../types/types';


function Header({todoName, setTodoName, addTodo}: HeaderProps) {

    const handleKeyDownName = (e: string) => {
        if (e === "Enter") {
            addTodo()
        } 
    }

    return (
        <>
            <div>
                <svg 
                    className={todoName && todoName.length > 0 ? 'arrow up' : 'arrow'}
                    height="48" 
                    viewBox="0 0 48 48" 
                    width="48" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/>
                    <path d="M0-.75h48v48h-48z" fill="none"/>
                </svg>
                <input 
                    className='inputText' 
                    type="text" 
                    value={todoName}
                    placeholder='What needs to be done?'
                    onKeyDown={(e) => handleKeyDownName(e.key)}
                    onChange={(e) => setTodoName(e.target.value)}
                />
            </div>
            <button className='button' onClick={() => addTodo()}>Add</button>
        </>
    )
}

export default Header