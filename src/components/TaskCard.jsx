export default function TaskCard({ task, deleteTask, updateTask }) {
  return (
    <div
      className={`rounded-xl p-4 mb-3 border shadow-sm transition

      ${task.status === "todo"
        ? "bg-slate-800 border-slate-700 text-slate-200"
        : ""}

      ${task.status === "doing"
        ? "bg-indigo-900/40 border-indigo-700 text-slate-200"
        : ""}

      ${task.status === "done"
        ? "bg-emerald-900/30 border-emerald-700 text-slate-200"
        : ""}
    `}
    >

      {/* TITLE */}
      <div className="text-base font-semibold mb-1">
        {task.title}
      </div>

      {/* DESCRIPTION */}
      {task.description && (
        <p className="text-sm text-slate-400 mb-2">
          {task.description}
        </p>
      )}

      {/* PRIORITY */}
      {task.priority && (
        <span className="text-xs px-2 py-1 rounded-full mb-2 inline-block bg-white/10">
          {task.priority}
        </span>
      )}

      {/* DUE DATE */}
      {task.dueDate && (
        <p className="text-xs text-slate-400 mb-1">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      {/* CREATED DATE */}
      {task.createdAt && (
        <p className="text-xs text-slate-500 mb-2">
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </p>
      )}

      {/* TAGS */}
      <div className="flex gap-1 flex-wrap mb-3">
        {(task.tags || []).map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-white/10 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* STATUS SELECT + DELETE */}
      <div className="flex justify-between items-center">

        <select
          className="bg-slate-800 border border-slate-600 text-slate-200 px-2 py-1 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          value={task.status}
          onChange={(e) =>
            updateTask(task.id, { status: e.target.value })
          }
        >
          <option value="todo" className="bg-slate-800 text-white">Todo</option>
          <option value="doing" className="bg-slate-800 text-white">Doing</option>
          <option value="done" className="bg-slate-800 text-white">Done</option>
        </select>

        <button
          className="text-red-400 hover:text-red-500 text-sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
