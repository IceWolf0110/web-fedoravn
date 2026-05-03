import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/button"

export default function Page() {
  const t = useTranslations()

  return (
    <div>
      <LanguageSwitcher />
    </div>
  )
}
