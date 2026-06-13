"use client";

import { useTaskStore } from "@/store/taskStore";

export default function FilterBar() {
  const activeFilter = useTaskStore((s) => s.activeFilter);
  const setFilter = useTaskStore((s) => s.setFilter);

  const filters = ["All", "Pending", "Done"] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            activeFilter === filter
              ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
              : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}