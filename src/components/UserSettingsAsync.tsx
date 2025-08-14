import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useEffect } from "react";

export default function UserSettingsAsync() {
  const settings = useSelector((state: RootState) => state.setting);
  useEffect(() => {
    localStorage.setItem("preferences", JSON.stringify(settings));
  }, [settings]);
  return null;
}
