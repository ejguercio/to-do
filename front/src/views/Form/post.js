const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const postTask = async (inputsForm) => {
    try {
        const response = await fetch(`${BASE_URL}tasks`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputsForm)
        })
        const data = await response.json()

        if (!response.ok) throw Error(data.error)
        alert(data.message)
    } catch (error) {
        alert(error.message)//revisar luego
    }
};
