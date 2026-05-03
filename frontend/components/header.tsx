import { LanguageSwitcher } from "@/components/button/language-switcher"
import { useTranslations } from "next-intl"

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
      <div className="h-14 flex flex-1 justify-end items-center">
        <LanguageSwitcher sideOffset={14}/>
      </div>
    </div>
  )
}

export function HeaderMobile() {
  const t = useTranslations()

  return <div className="md:hidden">todo</div>
}
