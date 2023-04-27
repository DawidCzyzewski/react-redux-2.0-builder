// import { useSelector } from "react-redux";
// import { StatusFilter } from "./components/StatusFilter/StatusFilter";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";

const App = () => {
  // const value = useSelector((state) => state.tasks[0].text);
  // const value1 = useSelector((state) => state.tasks[1]);

  return (
    <>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </>
  );
};

export default App;
