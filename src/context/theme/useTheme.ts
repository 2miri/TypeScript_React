import { useContext } from "react";
import { ThemeContext, ThemeContextAction } from "./ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme는 ThemeProvider 안에서만 사용 가능합니다.");
  return context;
}

export function useThemeAction() {
  const context = useContext(ThemeContextAction);
  if (!context)
    throw new Error("useThemeAction은 ThemeProvider 안에서만 사용 가능합니다.");
  return context;
}
