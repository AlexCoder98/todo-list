import { useState, useRef, FormEvent } from 'react';

import Button from '../Button/Button';

import { TodoType } from '../../types/todo';

import { IoMdAddCircleOutline } from 'react-icons/io';

import './AddTodo.css';

interface Props {
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const AddTodo: React.FC<Props> = ({ setTodos }) => {

    const [inputValue, setInputValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null!);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputValue.length !== 0) {
            // const todoId = (todos.length === 0 ? 0 : todos.length).toString();
            const todoId = (Math.random()).toString();
            setTodos((prevTodos) => {
                return [...prevTodos, { id: todoId, text: inputValue, isImportant: isChecked, isDone: false }];
            })
            inputRef.current.value = '';
        } else {
            alert('Input is empty!');
            return;
        }
    }

    const handleIsChecked = () => {
        setIsChecked(prev => !prev);
    }

    return (
        <form className="add-todo-form" onSubmit={handleOnSubmit}>
            <div>
                <div className="add-task-input-container">
                    <input
                        ref={inputRef}
                        className="add-task-input"
                        type="text"
                        onChange={handleOnChange}
                        placeholder="Your todo is..."
                    />
                    <Button
                        className={'add-task-btn'}
                        content={<IoMdAddCircleOutline />}
                        title={'Add new todo'}
                        type={'submit'} />
                </div>
            </div>
            <div>
                <input
                    id="mark-as-important"
                    type="checkbox"
                    onChange={handleIsChecked}
                />
                <label htmlFor="mark-as-important">Mark as important</label>
            </div>
        </form>
    )
}

export default AddTodo;