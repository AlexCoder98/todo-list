export interface TodoType {
    id: string;
    text: string;
    isImportant: boolean;
    isDone: boolean;
}

export type TodoListContextType = {
    todos: TodoType[];
    doneTodos: TodoType[];
    doneTodo: (id: string) => void;
    deleteTodo: (id: string, list: TodoType[]) => void;
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}