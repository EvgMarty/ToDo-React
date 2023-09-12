import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos, deletTodo, togleTodo, completedTodo }) => {
  return (
    <div className={styles.todoListWrapper}>
      {!todos.length && <h2>The task list is empty.</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deletTodo={deletTodo}
          togleTodo={togleTodo}
        />
      ))}
      {!!completedTodo && (
        <h3>{`You have completeg ${completedTodo} ${
          completedTodo > 1 ? 'todos' : 'todo'
        }`}</h3>
      )}
    </div>
  );
};

export default TodoList;
