"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { Sun, Moon, Monitor } from "lucide-react"
import { useEffect, useState } from "react"

const items = [
  { label: "theme.light", value: "light", icon: Sun },
  { label: "theme.dark", value: "dark", icon: Moon },
  { label: "theme.system", value: "system", icon: Monitor },
]

export function ThemeSwitcher({
  sideOffset = 0,
  className = "",
}: {
  sideOffset?: number
  className?: string
}) {
  const t = useTranslations()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timeout)
  }, [])

  const handleThemeChange = (value: string | null) => {
    setTheme(value ?? 'system')
  }

  const currentItem = mounted ? items.find((i) => i.value === theme) : items[2] // fallback to "system"
  const CurrentIcon = currentItem?.icon

  if (!mounted) {
    return <div className="h-9 w-36" /> // render a placeholder with same dimensions
  }

  return (
    <Select value={theme} onValueChange={handleThemeChange}>
      <SelectTrigger className="w-36">
        <SelectValue className="gap-2">
          <span className="flex items-center gap-2">
            {CurrentIcon && <CurrentIcon className="h-4 w-4" />}
            {t(`theme.${theme}`)}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        sideOffset={sideOffset}
        className={className}
        alignItemWithTrigger={false}
      >
        <SelectGroup>
          {items.map((item) => {
            const Icon = item.icon
            return (
              <SelectItem key={item.value} value={item.value}>
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {t(item.label)}
                </span>
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
