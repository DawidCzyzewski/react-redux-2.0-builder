import { useSelector } from "react-redux";
// import { getVisibleTasks } from "../../utils/getVisibleTasks";
import { Task } from "../Task/Task";
import { getStatusFilter, getTasks } from "../../redux/selectors";
import styles from "./TaskList.module.css";
import { statusFilters } from "../../redux/constants";

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

// Task no need any props, becouse it's getting props from redux
export const TaskList = () => {
  // getting tasks:
  // const tasks = useSelector((state) => state.tasks);
  // Instead of this using created function:
  const tasks = useSelector(getTasks);

  // getting selected status:
  const statusFilter = useSelector(getStatusFilter);

  // connecting tasks with actual status:
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

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
