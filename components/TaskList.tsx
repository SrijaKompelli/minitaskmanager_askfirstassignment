"use client";

import { useTaskStore } from "@/store/taskStore";

const priorityStyles = {
  Low: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-rose-100 text-rose-700",
} as const;

export default function TaskList() {
  const tasks = useTaskStore((s) => s.tasks);
  const filter = useTaskStore((s) => s.activeFilter);
  const toggleDone = useTaskStore((s) => s.toggleDone);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") return !task.done;
    if (filter === "Done") return task.done;
    return true;
  });

  return (
    <div className="space-y-3">
      {filteredTasks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500">
          No tasks match this filter yet.
        </div>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`rounded-2xl border p-4 shadow-sm transition ${
              task.done
                ? "border-emerald-200 bg-emerald-50/70"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-slate-900">{task.title}</h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      task.done
                        ? "bg-emerald-200 text-emerald-800"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {task.done ? "Done" : "Pending"}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Priority: {" "}
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityStyles[task.priority]}`}>
                    {task.priority}
                  </span>
                </p>
              </div>

              <button
                onClick={() => toggleDone(task.id)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  task.done
                    ? "bg-white text-slate-700 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                {task.done ? "Undo" : "Done"}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}