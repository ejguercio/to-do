import useStore from "../../store";
import Task from "../Task/Task";

const TasksList = () => {
    const tasks= useStore((state)=> state.tasks)
    
    return (
        <div>
            {tasks.map(task => {
                return(
                    <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    />)
            })}
        </div>
    )
};

export default TasksList
