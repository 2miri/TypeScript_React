import { useSelector } from "react-redux";
// import { useSetting } from "../context/setting/useSetting";
import { translations, type SupportedLanguage } from "./i18n";
import type { RootState } from "../store/store";

export default function useTranslation() {
  // const { preferences } = useSetting();
  // const lang = preferences.language as SupportedLanguage;

  const language = useSelector((state: RootState) => state.setting.language);
  const lang = language as SupportedLanguage;

  const t = translations[lang];
  return { t, lang };
}
