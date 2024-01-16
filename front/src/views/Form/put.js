const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const putTask = async (id, inputsForm) => {
    try {
        const response = await fetch(`${BASE_URL}tasks/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputsForm)
        })
        if (!response.ok) throw Error(`something went wrong ${response.status}`)
    } catch (error) {
        alert(error.message)//revisar luego
    }
};
