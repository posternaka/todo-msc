export type TodoItem = {
    id: string;
    checkbox: boolean;
    textTask: string;
}

export type HeaderProps = {
    todoName: string;
    addTodo: () => void;
    setTodoName: React.Dispatch<React.SetStateAction<string>>;
    checkArrow: boolean;
    setCheckArrow: React.Dispatch<React.SetStateAction<boolean>>;
}

export type TodoItemsProps = {
    item: TodoItem;
}

export type TodoListProps = {
    todoList: TodoItem[]
}

export type InfoTodoProps = {
    settingsShowTodo: string[];
    setStateShowTodo: React.Dispatch<React.SetStateAction<string>>;
    setChangeSettingsTodo: React.Dispatch<React.SetStateAction<number>>;
    changeSettingsTodo: number;
}