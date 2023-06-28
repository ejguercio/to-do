const endpoint = "http://localhost:3001/tasks";

export const putTask = async (id, inputsForm) => {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputsForm)
        })
        if (!response.ok) throw Error(`something went wrong ${response.status}`)
    } catch (error) {
        alert(error.message)//revisar luego
    }
};
