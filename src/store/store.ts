import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import themeSlice from "./features/theme/themeSlice";
import settingSlice from "./features/setting/settingSlice";
import todoSlice from "./features/todo/todoSlice";

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem("todos");
    if (saved) {
      return {
        todo: JSON.parse(saved),
      };
    }
  } catch {
    console.error("로컬 스토리지 로드 실패");
  }
};

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice,
    setting: settingSlice,
    todo: todoSlice,
  },
  preloadedState: loadFromLocalStorage(),
});

const saveToLocalStorage = (currentTodos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(currentTodos));
};

let previousTodos = store.getState().todo;
store.subscribe(() => {
  const currentTodos = store.getState().todo;
  if (previousTodos !== currentTodos) {
    previousTodos = currentTodos;
    saveToLocalStorage(currentTodos);
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
