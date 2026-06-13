"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task } from "@/types/task";

type Filter = "All" | "Pending" | "Done";

interface TaskStore {
  tasks: Task[];
  activeFilter: Filter;

  addTask: (title: string, priority: Task["priority"]) => void;
  toggleDone: (id: string) => void;
  setFilter: (filter: Filter) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      activeFilter: "All",

      addTask: (title, priority) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              title,
              priority,
              done: false,
            },
          ],
        })),

      toggleDone: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, done: !task.done }
              : task
          ),
        })),

      setFilter: (filter) =>
        set({
          activeFilter: filter,
        }),
    }),
    {
      name: "task-manager-storage",
    }
  )
);