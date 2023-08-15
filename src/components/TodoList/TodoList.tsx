import Todo from "../Todo/Todo";

import { TodoType } from "../../types/todo";

import './TodoList.css';

interface TodoListType {
    todos: TodoType[];
    listTitle: string;
    className: string;
}

const List = ({ todos, listTitle, className }: TodoListType) => {

    const sortList = (a: TodoType, b: TodoType) => {
        if (a.text < b.text) {
            return -1;
        } else if (a.text > b.text) {
            return 1;
        } else {
            return 0;
        };
    }

    if (todos.length > 0) {
        todos.sort(sortList);
    }

    return (
        <>
            {todos.length > 0 && (
                <div className={`list-container ${className}`}>
                    <h2>{listTitle}</h2>
                    <ul>
                        {todos && (
                            todos.map(todo => (
                                <Todo
                                    key={todo.id}
                                    id={todo.id}
                                    text={todo.text}
                                    isImportant={todo.isImportant}
                                    isDone={todo.isDone}
                                />
                            ))
                        )}
                    </ul>
                </div>
            )}
        </>

    )
}

export default List;