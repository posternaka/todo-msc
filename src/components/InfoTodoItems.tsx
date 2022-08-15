import { InfoTodoProps } from '../types/types';
 
function InfoTodoItems({ settingsShowTodo, setStateShowTodo, setChangeSettingsTodo, changeSettingsTodo }: InfoTodoProps) {

    const handleSetShowTodo = (index: number, name: string) => {
        setStateShowTodo(name);
        setChangeSettingsTodo(index);
    }

    return (
        <div className="select">
            {
                settingsShowTodo.map((item, index) => (
                    <button 
                        key={index}
                        className={index === changeSettingsTodo ? 'button active' : 'button'}
                        onClick={() => handleSetShowTodo(index, item)}
                    >
                        {item}
                    </button>
                ))
            }
        </div>
    )
}

export default InfoTodoItems