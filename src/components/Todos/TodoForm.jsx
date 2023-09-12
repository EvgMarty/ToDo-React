import { useState } from 'react';
import styles from './TodoForm.module.css';
import { AiFillHdd } from 'react-icons/ai';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.formInput}
          type="text"
          placeholder="Enter new Todo"
        ></input>
        <button className={styles.formButton}>
          <AiFillHdd className={styles.iconButton} />
          Submyt
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
