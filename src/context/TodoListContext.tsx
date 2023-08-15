import { createContext, useContext } from 'react';
import { TodoListContextType } from '../types/todo';

export const TodoListContext = createContext<TodoListContextType | null>(null)


export const useTodoListContext = () => {
    const todoListContext = useContext(TodoListContext);

    if (!todoListContext) {
        throw new Error('TodoListContext is null or undefined');
    }

    return todoListContext;
}