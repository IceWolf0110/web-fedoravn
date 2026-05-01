import "../globals.css"
import { ReactNode } from "react"
import { WebLayout } from "@/components/layout"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <WebLayout>{children}</WebLayout>
}
