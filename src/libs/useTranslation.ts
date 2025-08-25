import { translations, type SupportedLanguage } from "./i18n";
import { useSettingStore } from "../store/settingStore";

export default function useTranslation() {
  const language = useSettingStore((state) => state.language);
  const lang = language as SupportedLanguage;

  const t = translations[lang];
  return { t, lang };
}
