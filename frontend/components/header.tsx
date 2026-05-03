import { LanguageSwitcher } from "@/components/button"
import { useTranslations } from "next-intl"
import { ThemeSwitcher } from "@/components/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto">
        <HeaderPc />
        <HeaderMobile />
      </div>
    </header>
  )
}

export function HeaderPc() {
  const t = useTranslations()

  return (
    <div className="hidden md:block">
      <div className="flex h-14 flex-1 items-center justify-end gap-3">
        <LanguageSwitcher sideOffset={14} />
        <ThemeSwitcher sideOffset={14} />
      </div>
    </div>
  )
}

export function HeaderMobile() {
  const t = useTranslations()

  return <div className="md:hidden">todo</div>
}
