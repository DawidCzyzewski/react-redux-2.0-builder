import css from "./Task.module.css";
import { MdClose } from "react-icons/md";
import { useTask } from "../../contexts/taskContext";

export const Task = ({ task }) => {

  const { deleteTask, toggleCompleted } = useTask();

  const handleDelete = () => deleteTask(task.id);

  const handleToggle = () => toggleCompleted(task.id);

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" onClick={handleDelete} className={css.btn}>
        <MdClose />
      </button>
    </div>
  );
};
