import { create } from "zustand";
import {
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountStore = {
  count: number;
  increment: (amount: number, amount2: number) => void;
  decrement: () => void;
  reset: () => void;
};

// use***Store
export const useCountStore = create<CountStore>()(
  devtools(
    subscribeWithSelector(
      persist(
        immer((set) => ({
          count: 0,
          decrement: () =>
            set((state) => {
              state.count -= 1;
            }),
          increment: async (amount: number, amount2: number) => {
            // await new Promise((resolve) => setTimeout(resolve, 1000));
            set((state) => {
              state.count += amount + amount2;
            });
          },
          reset: () =>
            set((state) => {
              state.count = 0;
            }),
        })),
        {
          name: "count-storage",
          storage: createJSONStorage(() => sessionStorage), // 세션 스토리지
        }
      )
    ),
    {
      enabled: import.meta.env.MODE === "development",
    }
  )
);
