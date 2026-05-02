import { useTranslations } from "next-intl"

export default function Page() {
  const t = useTranslations()

  return (
    <>
      <div>{t("menu-home")}</div>
    </>
  )
}
