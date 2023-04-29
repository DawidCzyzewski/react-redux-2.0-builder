import css from "./TaskForm.module.css";

import { Button } from "../Button/Button";
import { useTask } from "../../contexts/taskContext";

export const TaskForm = () => {
  const { addTask } = useTask();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    addTask(form.elements.text.value);
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>{" "}
    </form>
  );
};
