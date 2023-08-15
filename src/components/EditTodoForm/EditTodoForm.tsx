import { useState } from "react";
import { useTodoListContext } from '../../context/TodoListContext';

import Button from "../Button/Button";

import { FaSave } from 'react-icons/fa'

import './EditTodoForm.css';

interface EditTodoFormProps {
    todoTitle: string;
    id: string;
    onClick: () => void;
}

const EditTodoForm = ({ todoTitle, onClick, id }: EditTodoFormProps) => {
    const todoListContext = useTodoListContext();

    const [newTodoTitle, setNewTodoTitle] = useState(todoTitle);

    const handleEditInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoTitle(e.target.value);
    }

    const handleOnSubmit = (e: React.FormEvent, id: string) => {
        e.preventDefault();
        todoListContext.setTodos(prevTodos => {
            return prevTodos.map(todo => todo.id === id ? { ...todo, text: newTodoTitle } : todo);
        })
        onClick();
    }

    return (
        <form onSubmit={(e) => handleOnSubmit(e, id)}>
            <input
                value={newTodoTitle}
                onChange={handleEditInputValue}
                type="text"
                className="edit-input"
            />
            <Button
                content={<FaSave />}
                title={'Save'}
                type={'submit'}
            />
        </form>
    )
}

export default EditTodoForm;