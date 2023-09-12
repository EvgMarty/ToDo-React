import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin2Line, RiCheckFill } from 'react-icons/ri';

const Todo = ({ todo, deletTodo, togleTodo }) => {
  const { id, text } = todo;
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
      <RiDeleteBin2Line
        onClick={() => deletTodo(id)}
        className={styles.iconDelete}
      />
      <RiCheckFill
        onClick={() => {
          togleTodo(id);
        }}
        className={styles.iconCheck}
      />
    </div>
  );
};

export default Todo;
