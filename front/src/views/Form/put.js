import Swal from 'sweetalert2'
const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const putTask = async (id, inputsForm) => {
    try {
        const response = await fetch(`${BASE_URL}tasks/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputsForm)
        })
        if (!response.ok) throw Error(`something went wrong ${response.status}`)

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
            title: "Task edited successfully"
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
