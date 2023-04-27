import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import { Button } from "../Button/Button";

export const TaskForm = () => {
  // Create constant to use sending to state function dispatch
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // Call the action generator and pass the task text for the payload field
    //  Send the result - task creating action
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />{" "}
      <Button type="submit">Add task</Button>{" "}
    </form>
  );
};
