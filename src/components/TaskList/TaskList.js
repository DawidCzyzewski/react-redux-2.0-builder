import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { getStatusFilter, getTasks } from "../../redux/selectors";
import styles from "./TaskList.module.css";
import { statusFilters } from "../../redux/constants";
import { useFilter } from "../../contexts/filterContext";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);

  const { status } = useFilter();

  const visibleTasks = getVisibleTasks(tasks, status);

  return (
    <ul className={styles.list}>
      {visibleTasks.map((task) => (
        <li className={styles.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
