import Swal from 'sweetalert2'
const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const postTask = async (inputsForm) => {
    try {
        const response = await fetch(`${BASE_URL}tasks`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputsForm)
        })
        if (!response.ok) throw Error(data.error)
        const data = await response.json()

        //MENSAJE
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Task created successfully"
        });
    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
    }
};
