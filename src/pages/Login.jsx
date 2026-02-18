import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      navigate("/board");
    }
  }, []);

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Enter email and password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (email === "intern@demo.com" && password === "intern123") {

        // ALWAYS LOGIN
        localStorage.setItem("auth", "true");

        navigate("/board");

      } else {
        setError("Invalid credentials");
      }

      setLoading(false);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <motion.div
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        className="bg-slate-800/80 backdrop-blur p-8 rounded-2xl shadow-2xl border border-slate-700 w-[380px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome Back
        </h2>

        <div className="space-y-4">

          <input
            className="w-full px-3 py-2 rounded bg-slate-700 border border-slate-600"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full px-3 py-2 rounded bg-slate-700 border border-slate-600"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" onChange={()=>setRemember(!remember)} />
            Remember me
          </label>

          <button
            className={`w-full py-2 rounded font-semibold
              ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}
            `}
            onClick={handleLogin}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

        </div>
      </motion.div>
    </motion.div>
  );
}
