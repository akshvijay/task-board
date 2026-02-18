import { useTaskStore } from "../store/useTaskStore";

export default function Filters() {
  const setSearch = useTaskStore((s) => s.setSearch);
  const setPriorityFilter = useTaskStore((s) => s.setPriorityFilter);

  return (
    <div className="flex gap-4">
      <input
        placeholder="Search..."
        className="border p-2"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setPriorityFilter(e.target.value)}>
        <option value="all">All priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}
