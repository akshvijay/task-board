import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: localStorage.getItem("auth") === "true",

  login: (email, password, remember) => {
    if (email === "intern@demo.com" && password === "intern123") {
      set({ isAuthenticated: true });
      if (remember) localStorage.setItem("auth", "true");
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem("auth");
    set({ isAuthenticated: false });
  },
}));
