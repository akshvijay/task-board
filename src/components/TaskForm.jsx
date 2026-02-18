import { useState } from "react";

export default function TaskForm({ status, addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState("");

  const submit = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority: priority || "medium",
      status: status.toLowerCase(),
      dueDate: dueDate ? new Date(dueDate).toISOString() : "",
      createdAt: new Date().toISOString(),
      tags: tags
        ? tags.split(",").map((t) => t.trim()).filter(Boolean)
        : []
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("medium");
    setDueDate("");
    setTags("");
  };

  return (
    <div className="space-y-2 mb-4">

      <input
        value={title}
        className="w-full px-3 py-2 rounded bg-slate-700 border border-slate-600"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />

      <input
        value={description}
        className="w-full px-3 py-2 rounded bg-slate-700 border border-slate-600"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <div>
  <label className="text-xs text-slate-400">
    Due date
  </label>
  <input
    type="date"
    value={dueDate}
    className="w-full mt-1 px-3 py-2 rounded bg-slate-700 border border-slate-600"
    onChange={(e) => setDueDate(e.target.value)}
  />
</div>


      <select
        value={priority}
        className="w-full px-3 py-2 rounded bg-slate-700 border border-slate-600"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low priority</option>
        <option value="medium">Medium priority</option>
        <option value="high">High priority</option>
      </select>

      <input
        value={tags}
        className="w-full px-3 py-2 rounded bg-slate-700 border border-slate-600"
        placeholder="Tags (comma separated)"
        onChange={(e) => setTags(e.target.value)}
      />

      <button
        type="button"
        className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded font-medium w-full"
        onClick={submit}
      >
        Add Task
      </button>
    </div>
  );
}
