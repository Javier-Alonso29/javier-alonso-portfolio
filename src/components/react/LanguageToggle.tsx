import type { Language } from '../../i18n/ui'
import { Languages } from "lucide-react";


interface Props {
  currentLang: Language
  href: string
  label: string
}

export function LanguageToggle({ currentLang, href, label }: Props) {
  const targetLabel = currentLang === 'en' ? 'ES' : 'EN'
  const currentLabel = currentLang === 'en' ? 'En' : 'Es'

  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      className="relative inline-flex items-center justify-center rounded-md text-sm font-semibold h-9 w-9 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-[9px] font-bold leading-none">
        {currentLabel}
      </span>
      <span className="sr-only">Switch language to {targetLabel}</span>
    </a>
  )
}
