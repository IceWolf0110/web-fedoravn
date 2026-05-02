import { LanguageSwitcher } from "@/components/button/language-switcher"
import { useTranslations } from "next-intl"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

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

// ====================== DESKTOP (PC) ======================
export function HeaderPc() {
  const t = useTranslations()

  return (
    <div className="hidden h-16 items-center justify-between md:flex">
      {/* Logo */}
      <div className="text-3xl font-black tracking-tighter">
        {t("menu-home")}
      </div>

      {/* Navigation - shadcn NavigationMenu */}
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className="font-medium transition-colors hover:text-primary"
            >
              {t("menu-start")}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className="font-medium transition-colors hover:text-primary"
            >
              {t("menu-guides")}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className="font-medium transition-colors hover:text-primary"
            >
              {t("menu-docs")}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className="font-medium transition-colors hover:text-primary"
            >
              {t("menu-community")}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className="font-medium transition-colors hover:text-primary"
            >
              {t("hero-kicker")}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
      </div>
    </div>
  )
}

// ====================== MOBILE ======================
export function HeaderMobile() {
  const t = useTranslations()

  return (
    <div className="md:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter">
          {t("menu-home")}
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            }
          />

          <SheetContent side="right" className="w-70">
            <div className="mt-8">
              <nav className="flex flex-col gap-6 text-lg font-medium">
                <SheetClose
                  render={
                    <a
                      href="#"
                      className="transition-colors hover:text-primary"
                    >
                      {t("menu-start")}
                    </a>
                  }
                />

                <SheetClose
                  render={
                    <a
                      href="#"
                      className="transition-colors hover:text-primary"
                    >
                      {t("menu-guides")}
                    </a>
                  }
                />

                <SheetClose
                  render={
                    <a
                      href="#"
                      className="transition-colors hover:text-primary"
                    >
                      {t("menu-docs")}
                    </a>
                  }
                />

                <SheetClose
                  render={
                    <a
                      href="#"
                      className="transition-colors hover:text-primary"
                    >
                      {t("menu-community")}
                    </a>
                  }
                />

                <SheetClose
                  render={
                    <a
                      href="#"
                      className="transition-colors hover:text-primary"
                    >
                      {t("hero-kicker")}
                    </a>
                  }
                />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
