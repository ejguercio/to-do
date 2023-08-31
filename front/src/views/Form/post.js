const endpoint = "http://localhost:3001/tasks";

export const postTask = async (inputsForm) => {
    try {
        const response = await fetch(endpoint, {
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
