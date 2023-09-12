import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodoActions from './components/Todos/TodoActions';

const App = () => {
  const [todos, setTodos] = useState([]);

  //получаем масив с выполнеными  задачами
  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;

  //функция добавляет в масив обьект с задачей з
  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  //функция удаляет задачу на которую нажали путем сравнения айди
  const deletTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //функция меняет статус задачи
  const togleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  //функция очистки всех задач
  const resetTodoHandler = () => {
    setTodos([]);
  };

  //функция очистки выполненых задач
  const deletCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div className="App">
      <div className="appWraper">
        <img
          className="logo"
          src="/apple-touch-icon.png"
          alt="Apple Touch Icon"
        />
        <h1>ToDo App</h1>
      </div>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          completedTodoExist={!!completedTodoCount}
          resetTodo={resetTodoHandler}
          deletCompleted={deletCompletedHandler}
        />
      )}
      <TodoList
        todos={todos}
        completedTodo={completedTodoCount}
        deletTodo={deletTodoHandler}
        togleTodo={togleTodoHandler}
      />
    </div>
  );
};

export default App;
