import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const logout = useAuthStore((s) => s.logout);
  const nav = useNavigate();

  return (
    <div className="flex justify-between mb-4">
      <h1 className="text-xl font-bold">Task Board</h1>
      <button
        className="bg-red-500 text-white p-2"
        onClick={() => {
          logout();
          nav("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}
