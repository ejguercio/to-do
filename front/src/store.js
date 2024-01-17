import { create } from "zustand";
const BASE_URL = import.meta.env.VITE_BACKEND_URL

const useStore = create((set) => ({
    tasks: [],
    totalPages: 1,
    loadTasks: async (currentPage = 1) => {
        const response = await fetch(`${BASE_URL}tasks?page=${currentPage}`)
        const data = await response.json()
        set({ tasks: data.taksPerPage, totalPages: data.totalPages });
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
