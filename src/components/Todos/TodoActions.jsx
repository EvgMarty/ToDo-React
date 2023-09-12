import Button from '../UI/Button';
import styles from './TodoActions.module.css';
import { RiDeleteBin7Line, RiRefreshLine } from 'react-icons/ri';

const TodoActions = ({ resetTodo, deletCompleted, completedTodoExist }) => {
  return (
    <div className={styles.todoActions}>
      <Button title="Clear Completed Todos" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Reset Todos"
        onClick={deletCompleted}
        disabled={!completedTodoExist}
      >
        <RiDeleteBin7Line />
      </Button>
    </div>
  );
};

export default TodoActions;
