import useStore from "../../store";
import css from "./Task.module.css"
import { useNavigate } from "react-router-dom";

const Task = ({ id, title, description }) => {
    const navigate = useNavigate();
    const deleteTask = useStore((state) => state.deleteTask)

    const handleEdit = (event) => {
        const id = (event.target.value)
        navigate(`/form/edit/${id}`)
    };

    const handleDelete = async (event) => {
        const id = (event.target.value)
        deleteTask(id)
    };

    return (

        <div className={css.container}>
            <div className={css.tasksContainer}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className={css.buttonsContainer}>
                <button className={css.button} value={id} onClick={handleEdit}>EDIT</button>
                <button className={css.button} value={id} onClick={handleDelete}>DELETE</button>
            </div>
        </div>
    )
};

export default Task
