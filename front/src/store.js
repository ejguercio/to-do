import { create } from "zustand";
const endpoint = "http://localhost:3001/tasks"

const useStore = create((set) => ({
    tasks: [],
    
    loadTasks : async () => {
        const response = await fetch(endpoint)
        const data = await response.json()
        set({ tasks: data });
    },

    deleteTask : async (id) => {
            await fetch(`${endpoint}/${id}`, {
                 method: "DELETE"
            })
            set((state) => ({
                tasks: state.tasks.filter((task) => task.id != id),
              }));
        }
}));

export default useStore;
