import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type TodoStore = TodoContextType & TodoContextActionType;

export const useTodoStore = create<TodoStore>()(
  persist(
    immer((set) => ({
      todos: [] as Todo[],
      addTodo: (text: string) =>
        set((state) => {
          state.todos.push({
            id: Date.now(),
            text,
            completed: false,
          });
        }),
      toggleTodo: (id: number) =>
        set((state) => {
          const todo = state.todos.find((todo) => todo.id === id);
          if (todo) {
            todo.completed = !todo.completed;
          }
        }),
      deleteTodo: (id: number) =>
        set((state) => {
          state.todos = state.todos.filter((todo) => todo.id !== id);
        }),
      modifyTodo: (id: number, text: string) =>
        set((state) => {
          const todo = state.todos.find((todo) => todo.id === id);
          if (todo) {
            todo.text = text;
          }
        }),
    })),
    { name: "todo-storage" }
  )
);
