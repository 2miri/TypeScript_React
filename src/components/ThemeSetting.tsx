import { Monitor, Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";
import useTranslation from "../libs/useTranslation";
import { useLayoutEffect } from "react";
import { useSettingStore } from "../store/settingStore";

export default function ThemeSetting() {
  const colorScheme = useSettingStore((state) => state.colorScheme);
  const updateColorScheme = useSettingStore((state) => state.updateColorScheme);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    if (colorScheme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.add("light");
      }
    } else {
      document.documentElement.classList.add(colorScheme);
    }
  }, [colorScheme]);
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Sun className="text-blue-500" size={24} />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t.theme.label}
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {/* On: bg-blue-500 text-white */}
          {/* Off: bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 */}
          {(["system", "light", "dark"] as const).map((theme) => (
            <button
              key={theme}
              className={twMerge(
                "flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                colorScheme === theme
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              )}
              onClick={() => updateColorScheme(theme)}
            >
              {theme === "system" ? (
                <>
                  <Monitor size={16} />
                  <span>{t.theme.system}</span>
                </>
              ) : theme === "light" ? (
                <>
                  <Sun size={16} />
                  <span>{t.theme.light}</span>
                </>
              ) : (
                <>
                  <Moon size={16} />
                  <span>{t.theme.dark}</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
