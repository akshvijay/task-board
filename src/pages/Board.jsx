import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Column from "../components/Column";
import ActivityLog from "../components/ActivityLog";

export default function Board() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch {
      return [];
    }
  });

  const [activity, setActivity] = useState([]);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");

  // protect board route
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth !== "true") {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
    setActivity(prev => [
      `Created "${task.title}"`,
      ...prev
    ]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const updateTask = (id, data) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, ...data } : t))
    );
  };

  const filteredTasks = tasks
    .filter(t =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(t =>
      priorityFilter === "all"
        ? true
        : t.priority === priorityFilter
    );

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <div className="border-b border-slate-800 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Task Board</h1>

        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      {/* SEARCH */}
      <div className="px-8 py-4 flex gap-4 border-b border-slate-800">

        <input
          className="px-3 py-2 rounded bg-slate-800 border border-slate-700 w-[240px]"
          placeholder="Search tasks"
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select
          className="px-3 py-2 rounded bg-slate-800 border border-slate-700"
          onChange={(e)=>setPriorityFilter(e.target.value)}
        >
          <option value="all">All priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

      </div>

      {/* BOARD */}
      <div className="px-8 py-6 grid grid-cols-3 gap-6">

        <Column
          status="todo"
          tasks={filteredTasks}
          addTask={addTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />

        <Column
          status="doing"
          tasks={filteredTasks}
          addTask={addTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />

        <Column
          status="done"
          tasks={filteredTasks}
          addTask={addTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />

      </div>

      <div className="px-8 pb-8">
        <ActivityLog logs={activity} />
      </div>

    </div>
  );
}
