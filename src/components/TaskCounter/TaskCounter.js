import { useSelector } from "react-redux";
import styles from "./TaskCounter.module.css";

export const TaskCounter = () => {
  // Getting tasks from status Redux
  const tasks = useSelector((state) => state.tasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={styles.text}>Active: {count.active}</p>
      <p className={styles.text}>Completed: {count.completed}</p>
    </div>
  );
};
