import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

export default function Column({
  status,
  tasks = [],
  addTask,
  deleteTask,
  updateTask
}) {

  // Filter tasks for this column
  const columnTasks = (tasks || [])
    .filter((t) => t.status === status)
    .sort((a, b) => {

      // Sort by due date first
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }

      // Tasks with no due date go bottom
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;

      // fallback: newest first
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    });

  return (
    <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-4 shadow-lg border border-slate-700 hover:border-blue-500 transition">

      {/* COLUMN HEADER */}
      <h2 className="text-xl font-semibold mb-3 capitalize flex items-center justify-between">
        {status}
        <span className="text-xs bg-slate-700 px-2 py-1 rounded">
          {columnTasks.length}
        </span>
      </h2>

      {/* TASK FORM */}
      <TaskForm status={status} addTask={addTask} />

      {/* EMPTY STATE */}
      {columnTasks.length === 0 && (
        <p className="text-sm text-slate-500 mt-2">
          No tasks here yet.
        </p>
      )}

      {/* TASK LIST */}
      <div className="mt-3">
        {columnTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}
