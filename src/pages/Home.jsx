import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-hidden text-white flex flex-col">

      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#111827]" />

      {/* SOFT GLOW */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-indigo-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 150, -70, 0], y: [0, 100, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* NAVBAR */}
      <div className="relative flex justify-between items-center px-10 py-4 bg-white/5 backdrop-blur-lg">

        <h1 className="text-lg font-semibold tracking-wide text-slate-200">
          TaskBoard
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md shadow"
          onClick={() => navigate("/login")}
        >
          Login
        </motion.button>
      </div>

      {/* MAIN */}
      <div className="flex-1 grid grid-cols-2 items-center px-20 relative">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-7 max-w-xl"
        >
          <h1 className="text-5xl font-bold leading-tight text-slate-100">
            Manage work
            <br />
            without chaos.
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed">
            A focused task management workspace designed to organize,
            track and complete tasks with clarity and structure.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md font-medium shadow"
            onClick={() => navigate("/login")}
          >
            Open Dashboard
          </motion.button>
        </motion.div>

        {/* RIGHT PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 w-[460px] shadow-2xl"
          >
            <p className="text-sm text-slate-400 mb-4">Today</p>

            <div className="grid grid-cols-3 gap-3 text-xs">

              <div>
                <p className="font-semibold mb-2 text-slate-400">To-Do</p>

                <div className="bg-yellow-300 text-black p-2 rounded mb-2">
                  Design homepage
                </div>

                <div className="bg-yellow-300 text-black p-2 rounded">
                  API structure
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-slate-400">Doing</p>

                <div className="bg-cyan-300 text-black p-2 rounded">
                  Task board UI
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-slate-400">Done</p>

                <div className="bg-pink-300 text-black p-2 rounded mb-2">
                  Project setup
                </div>

                <div className="bg-pink-300 text-black p-2 rounded">
                  Research
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* FOOTER */}
      <div className="bg-white/5 backdrop-blur-lg px-10 py-3 text-sm text-slate-400">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <span>TaskBoard</span>
          <span>Productivity workspace</span>
        </div>
      </div>

    </div>
  );
}
