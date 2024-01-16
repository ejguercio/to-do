import { create } from "zustand";
const BASE_URL = import.meta.env.VITE_BACKEND_URL

const useStore = create((set) => ({
    tasks: [],

    loadTasks: async () => {
        const response = await fetch(`${BASE_URL}tasks`)
        const data = await response.json()
        set({ tasks: data });
    },

    deleteTask: async (id) => {
        await fetch(`${`${BASE_URL}tasks`}/${id}`, {
            method: "DELETE"
        })
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id != id),
        }));
    }
}));

export default useStore;
