import AddTaskForm from "@/components/AddTaskForm";
import FilterBar from "@/components/FilterBar";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <section className="rounded-[28px] border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/70 backdrop-blur">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Productivity
          </p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Mini Task Manager
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Capture ideas, set priorities, and track progress in one calm space.
          </p>
        </section>

        <section className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/60">
          <AddTaskForm />
        </section>

        <section className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/60">
          <FilterBar />
        </section>

        <section className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/60">
          <TaskList />
        </section>
      </div>
    </main>
  );
}