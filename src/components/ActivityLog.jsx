export default function ActivityLog({ logs }) {
  return (
    <div className="mt-6 bg-slate-800/80 backdrop-blur p-4 rounded-xl border border-slate-700">
      <h3 className="font-semibold mb-2">Activity</h3>

      {logs.length === 0 && (
        <p className="text-sm text-slate-400">No activity yet</p>
      )}

      {logs.map((log,i)=>(
        <p key={i} className="text-sm text-slate-300">
          {log}
        </p>
      ))}
    </div>
  );
}
