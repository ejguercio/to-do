import useStore from "../../store";
import TasksList from "../../components/TaskList/TasksList";
import css from "./Home.module.css"
import { useEffect } from "react";

const Home = () => {
    const loadTasks = useStore((state) => state.loadTasks)

    useEffect(() => {
      loadTasks()
    }, [])
    
    return (<>
        <h1 className={css.titulo}>TO-DO LIST</h1>
        <TasksList />
    </>)
};

export default Home;
