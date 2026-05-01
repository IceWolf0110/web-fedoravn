import "../globals.css"

import { ReactNode } from "react"
import { AuthLayout } from "@/components/layout"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <AuthLayout>{children}</AuthLayout>
}
