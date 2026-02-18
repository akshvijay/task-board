import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  // if already logged in → go board
  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      navigate("/board");
    }
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden text-white flex flex-col">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#111827]" />

      {/* NAVBAR */}
      <div className="relative flex justify-between items-center px-10 py-4 bg-white/5 backdrop-blur-lg">
        <h1 className="text-lg font-semibold text-slate-200">
          TaskBoard
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md"
          onClick={() => navigate("/login")}
        >
          Login
        </motion.button>
      </div>

      {/* MAIN */}
      <div className="flex-1 grid grid-cols-2 items-center px-20 relative">

        <div className="space-y-7 max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            Manage work
            <br />
            without chaos.
          </h1>

          <p className="text-slate-400 text-lg">
            Organize, track and complete tasks with clarity using a
            structured workflow system.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md font-medium"
            onClick={() => navigate("/login")}
          >
            Open Dashboard
          </motion.button>
        </div>

        {/* right preview optional */}
        <div />
      </div>

      {/* FOOTER */}
      <div className="bg-white/5 backdrop-blur-lg px-10 py-3 text-sm text-slate-400">
        TaskBoard • Productivity workspace
      </div>
    </div>
  );
}
