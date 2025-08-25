import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type SettingStore = UserPreferences & PreferencesContextActionType;

export const useSettingStore = create<SettingStore>()(
  persist(
    immer((set) => ({
      language: "ko",
      fontSize: "medium",
      notifications: {
        email: false,
        push: false,
        desktop: false,
      },
      colorScheme: "system",
      updateLanguage: (language: UserPreferences["language"]) =>
        set((state) => {
          state.language = language;
        }),
      updateFontSize: (fontSize: UserPreferences["fontSize"]) =>
        set((state) => {
          state.fontSize = fontSize;
        }),
      updateColorScheme: (scheme: UserPreferences["colorScheme"]) =>
        set((state) => {
          state.colorScheme = scheme;
        }),
      updateNotifications: (
        key: keyof UserPreferences["notifications"],
        value: boolean
      ) =>
        set((state) => {
          state.notifications[key] = value;
        }),
    })),
    { name: "setting-storage" }
  )
);
