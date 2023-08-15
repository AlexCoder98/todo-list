import { useState } from 'react';

import AddTodo from './components/AddTodo/AddTodo';
import List from './components/TodoList/TodoList';

import { TodoListContext } from './context/TodoListContext';

import { TodoType } from './types/todo';

import './App.css';

const App = () => {

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [doneTodos, setDoneTodos] = useState<TodoType[]>([]);

  const doneTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id.toString() !== id);
    });
    setDoneTodos((prevDoneTodos) => {
      const newDoneTodo = todos.find(doneTodo => doneTodo.id.toString() === id);
      return [...prevDoneTodos, { ...newDoneTodo, isDone: true } as TodoType];
    });
  }

  const deleteTodo = (id: string, list: TodoType[]) => {
    if (list === todos) {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id.toString() !== id);
      });
    }
    if (list === doneTodos) {
      setDoneTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id.toString() !== id);
      });
    }
  }

  return (
    <div className="to-do-list">
      <TodoListContext.Provider value={{ todos, doneTodos, doneTodo, deleteTodo, setTodos }}>
        <header>
          <h1 className="app-title">Todo list App</h1>
          <AddTodo
            setTodos={setTodos}
          />
        </header>
        <main>
          <List
            todos={todos}
            listTitle={'Active tasks'}
            className={'active'}
          />
          <List
            todos={doneTodos}
            listTitle={'Done tasks'}
            className={'done'}
          />
        </main>
      </TodoListContext.Provider>
    </div>
  );
}

export default App;
