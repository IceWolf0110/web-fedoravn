"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { setLocale } from "@/actions/set-locale"

const items = [
  { label: "language.en", value: "en" },
  { label: "language.vi", value: "vi" },
]

export function LanguageSwitcher({
  sideOffset = 0,
  className = "",
}: {
  sideOffset?: number
  className?: string
}) {
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function changeLocale(nextLocale: "en" | "vi") {
    if (nextLocale === locale) return
    startTransition(async () => {
      await setLocale(nextLocale)
      router.refresh()
    })
  }

  const label = items.find((item) => item.value === locale)?.label ?? ""

  return (
    <Select
      disabled={isPending}
      value={t(label)}
      onValueChange={(value) => changeLocale(value as "en" | "vi")}
    >
      <SelectTrigger className="w-36">
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        sideOffset={sideOffset}
        className={className}
        alignItemWithTrigger={false}
      >
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {t(item.label)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
