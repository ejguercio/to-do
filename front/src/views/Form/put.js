const endpoint = "http://localhost:3001/tasks";

export const putTask = async (id, inputsForm) => {
    try {
        const response= await fetch(`${endpoint}/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputsForm)
        })
        console.log(response)
        if (!response.ok) throw Error("algo ha fallado")
        
    } catch (error) {
        alert(error.message)//revisar luego
    }
};
