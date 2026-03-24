import { ui, defaultLang, type Language } from './ui'

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as Language
  return defaultLang
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ((ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key]) as string
  }
}

/**
 * Given the current pathname and a target language,
 * returns the equivalent path in that language.
 *
 * Handles both prefix routing and the slug suffix convention:
 * - English: /experiences/software-analyst-accenture
 * - Spanish: /es/experiences/software-analyst-accenture-es
 */
export function getLanguageAlternate(pathname: string, targetLang: Language): string {
  const isCurrentlyEs = pathname.startsWith('/es')

  if (targetLang === 'es') {
    return isCurrentlyEs ? pathname : '/es' + pathname
  } else {
    const withoutEs = pathname.replace(/^\/es/, '')
    return withoutEs || '/'
  }
}

/** Returns the URL prefix for a given language ('' for English, '/es' for Spanish). */
export function getLangPrefix(lang: Language): string {
  return lang === 'es' ? '/es' : ''
}
