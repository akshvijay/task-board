import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0b1220] text-white flex flex-col">

      {/* BACKGROUND GLOW */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 160, -80, 0], y: [0, 120, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"
        animate={{ x: [0, -120, 60, 0], y: [0, -100, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      {/* NAVBAR */}
      <div className="relative flex justify-between items-center px-10 py-4 bg-[#0f172a]/80 backdrop-blur-xl">

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

      {/* SUBTLE DIVIDER GLOW */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

      {/* MAIN */}
      <div className="flex-1 grid grid-cols-2 items-center px-20">

        {/* LEFT SIDE */}
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
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl p-6 w-[460px] shadow-2xl"
          >
            <p className="text-sm text-slate-500 mb-4">Today</p>

            <div className="grid grid-cols-3 gap-3 text-xs">

              <div>
                <p className="font-semibold mb-2 text-slate-400">To-Do</p>

                <div className="bg-yellow-300/90 text-black p-2 rounded mb-2">
                  Design homepage
                </div>

                <div className="bg-yellow-300/90 text-black p-2 rounded">
                  API structure
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-slate-400">Doing</p>

                <div className="bg-cyan-300/90 text-black p-2 rounded">
                  Task board UI
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-slate-400">Done</p>

                <div className="bg-pink-300/90 text-black p-2 rounded mb-2">
                  Project setup
                </div>

                <div className="bg-pink-300/90 text-black p-2 rounded">
                  Research
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* FOOTER */}
      <div className="bg-[#0f172a]/70 backdrop-blur-xl px-10 py-3 text-sm text-slate-500">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <span>TaskBoard</span>
          <span>Productivity workspace</span>
        </div>
      </div>

    </div>
  );
}
