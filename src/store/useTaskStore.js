import { create } from "zustand";
import { v4 as uuid } from "uuid";

const load = () => {
  try {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  } catch {
    return [];
  }
};

export const useTaskStore = create((set, get) => ({
  tasks: load(),
  activities: [],
  search: "",
  priorityFilter: "all",

  save: () => {
    localStorage.setItem("tasks", JSON.stringify(get().tasks));
  },

  addTask: (data) => {
    const task = {
      id: uuid(),
      title: data.title,
      description: data.description || "",
      priority: data.priority,
      dueDate: data.dueDate || null,
      tags: data.tags || [],
      status: data.status,
      createdAt: new Date().toISOString(),
    };

    set((s) => ({
      tasks: [...s.tasks, task],
      activities: [`Task created: ${task.title}`, ...s.activities],
    }));
    get().save();
  },

  updateTask: (id, data) => {
    set((s) => ({
      tasks: s.tasks.map((t) => (t.id === id ? { ...t, ...data } : t)),
      activities: [`Task edited`, ...s.activities],
    }));
    get().save();
  },

  deleteTask: (id) => {
    set((s) => ({
      tasks: s.tasks.filter((t) => t.id !== id),
      activities: [`Task deleted`, ...s.activities],
    }));
    get().save();
  },

  moveTask: (id, status) => {
    set((s) => ({
      tasks: s.tasks.map((t) => (t.id === id ? { ...t, status } : t)),
      activities: [`Task moved to ${status}`, ...s.activities],
    }));
    get().save();
  },

  setSearch: (val) => set({ search: val }),
  setPriorityFilter: (val) => set({ priorityFilter: val }),

  resetBoard: () => {
    localStorage.removeItem("tasks");
    set({ tasks: [], activities: [] });
  },
}));
