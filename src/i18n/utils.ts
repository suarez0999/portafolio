import { ui, defaultLang, languages } from "./ui";

/**
 * Obtiene el idioma desde la URL.
 * Si no está definido, usa el idioma predeterminado.
 */
export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Devuelve una función de traducción para el idioma especificado.
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    const translation = ui[lang][key] || ui[defaultLang][key];
    if (!translation) {
      console.warn(`Translation key "${key}" is missing for language "${lang}".`);
    }
    return translation;
  };
}

/**
 * Detecta el idioma del navegador.
 */
export function detectBrowserLanguage(): keyof typeof ui {
  const browserLang = navigator.language.split("-")[0]; // "es" o "en"
  if (browserLang in languages) {
    return browserLang as keyof typeof ui;
  }
  return defaultLang;
}
