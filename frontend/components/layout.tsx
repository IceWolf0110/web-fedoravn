import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Geist, Geist_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { TooltipProvider } from "@/components/ui/tooltip"
import { getLocale, getMessages } from "next-intl/server"
import { Header } from "@/components/header"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export function WebLayout({ children }: { children: ReactNode }) {
  return (
    <BaseLayout>
      <main className="flex min-h-screen flex-col">
        <Header />
        <section className="flex-1">{children}</section>
      </main>
    </BaseLayout>
  )
}

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <BaseLayout>
      <main className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-linear-to-b dark:from-zinc-950 dark:to-zinc-900">
        {children}
      </main>
    </BaseLayout>
  )
}

async function BaseLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <TooltipProvider>{children}</TooltipProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
