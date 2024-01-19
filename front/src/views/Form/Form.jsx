import css from "./Form.module.css"
import { useState, useEffect } from "react";
import { postTask } from "./post";
import { useParams, useNavigate } from "react-router-dom";
import { putTask } from "./put";
const BASE_URL = import.meta.env.VITE_BACKEND_URL

const Form = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({ //estado local
        title: "",
        description: ""
    });
    
    const handleChange = (event) => { //controlar formulario
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    };
    const handleSubmit = async (event) => {//enviar formulario
        event.preventDefault(); //si hay id actualizo tarea correspondiente sino la creo 
        (params.id) ? await putTask(params.id, inputs, navigate) : await postTask(inputs)

        setTimeout(() => {
            navigate("/")
        }, 2500)
    };

    const loadTask = async (id) => {
        const response = await fetch(`${BASE_URL}tasks/${id}`)
        const data = await response.json()
        setInputs({ title: data.title, description: data.description });
    }
    useEffect(() => {
        //si voy del editForm al create necesito limpiar el estado
        (params.id) ? loadTask(params.id) : setInputs({ title: "", description: "" })
    }, [params.id])

    return (
        <form className={css.container} onSubmit={handleSubmit}>
            <div className={css.containerTitle}>
                <label className={css.labels}>Title</label>
                <input className={css.inputTitle} name="title" value={inputs.title} onChange={handleChange} maxLength={30} />
            </div>
            <div className={css.containerArea}>
                <label className={css.labels}>Description</label>
                <textarea className={css.inputText} name="description" value={inputs.description} onChange={handleChange} maxLength={350} />
            </div>
            <button className={css.button}>SAVE</button>
        </form>
    )
};

export default Form;
