import useStore from "../../store";
import Task from "../Task/Task";
import { useState } from "react";
import css from "./TasksList.module.css"

const TasksList = () => {
    const tasks= useStore((state)=> state.tasks)
    const totalPages=useStore((state)=> state.totalPages)
    const loadTasks = useStore((state) => state.loadTasks)
    const [currentPage, setCurrentPage] = useState(1)

    //FUNCIONES BOTONES BACK Y NEXT
    const handlePrevPage=()=>{
        if (currentPage > 1) {
            setCurrentPage((prevPage) => {
                loadTasks(prevPage - 1);
                return prevPage - 1;
            });
        }
    }

    const handleNextPage=()=>{
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => {
                loadTasks(prevPage + 1);
                return prevPage + 1;
            });
        }
    }
    return (
        <main>
            <section className={css.tasksContainer}>
                {tasks.map(task => {
                    return(
                        <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        />)
                })}
            </section>
            <section>
                <button
                    className={css.buttons}
                    disabled={currentPage === 1}
                    onClick={handlePrevPage}
                >PREVIOUS</button>
                <button
                    className={css.buttons}
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                >NEXT</button>
            </section>           
        </main>
    )
};

export default TasksList
