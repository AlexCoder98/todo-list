import { useState } from 'react';
import { useTodoListContext } from '../../context/TodoListContext';

import Button from '../Button/Button';
import EditTodoForm from '../EditTodoForm/EditTodoForm';

import { FaEdit } from 'react-icons/fa';
import { MdOutlineDone, MdDelete } from 'react-icons/md';

import './Todo.css';

interface TodoProps {
    id: string;
    text: string;
    isImportant: boolean;
    isDone: boolean;
}

const Todo = ({ id, text, isImportant, isDone }: TodoProps) => {
    const todoContext = useTodoListContext();

    const [isEdited, setIsEdited] = useState(false);

    const h4Style = {
        color: isDone ? 'rgb(35, 35, 35)' : (isImportant ? 'red' : 'black'),
        fontWeight: isImportant ? 'bold' : 'lighter',
    }

    const properList = (isDone ? todoContext.doneTodos : todoContext.todos);

    const editTodo = () => {
        setIsEdited(prev => !prev);
    }

    return (
        <li id={id} className={isEdited ? 'todo editable' : 'todo'}>
            {isEdited ? (
                <EditTodoForm todoTitle={text} onClick={editTodo} id={id} />
            ) : (
                <>
                    <h4 style={h4Style}>{text}</h4>
                    {!isDone && (
                        <>
                            <Button
                                content={<FaEdit />}
                                title={'Edit'}
                                onClick={editTodo}
                            />
                            <Button
                                content={<MdOutlineDone />}
                                title={'Done'}
                                onClick={() => todoContext!.doneTodo(id)}
                            />
                        </>
                    )}
                    <Button
                        content={<MdDelete />}
                        title={'Delete'}
                        className={isDone ? 'done' : null}
                        onClick={() => todoContext!.deleteTodo(id, properList)}
                    />
                </>
            )}
        </li>
    )
}

export default Todo;