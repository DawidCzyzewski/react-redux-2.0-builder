// export const Task = ({ task }) => {
//   return (
//     <div>
//       {task.id}
//       {task.name}
//       {task.completed}
//     </div>
//   );
// };

import css from "./Task.module.css";
import { useDispatch } from "react-redux";
// import { deleteTask, toggleCompleted } from "../../redux/actions";

// changed to slice:
import { deleteTask, toggleCompleted } from "../../redux/taskSlice";

import { MdClose } from "react-icons/md";

export const Task = ({ task }) => {
  // Get a link to the action dispatch function
  const dispatch = useDispatch();

  // Call the action generator and pass the task ID
  // Send the result - task delete action
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Call the action generator and pass the task ID
  // Send the result - action to switch task status
  const handleToggle = () => dispatch(toggleCompleted(task.id));

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
