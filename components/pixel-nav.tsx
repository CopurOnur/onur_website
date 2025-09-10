"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Code, FileText, Briefcase, User, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "About", icon: User },
  { href: "/papers", label: "Papers", icon: FileText },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/cv", label: "CV", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function PixelNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-sm flex items-center justify-center">
              <div className="h-4 w-4 bg-primary-foreground rounded-[2px]"></div>
            </div>
            <span className="font-mono text-lg font-bold text-foreground">DL_Engineer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "h-9 px-3 font-mono text-sm border-2 transition-all duration-200",
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-[2px_2px_0px_0px_theme(colors.border)]"
                        : "border-transparent hover:border-border hover:bg-accent hover:shadow-[2px_2px_0px_0px_theme(colors.border)]",
                    )}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 p-0 border-2 border-transparent hover:border-border hover:bg-accent"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={cn(
                        "w-full justify-start h-10 px-3 font-mono border-2 transition-all duration-200",
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-[2px_2px_0px_0px_theme(colors.border)]"
                          : "border-transparent hover:border-border hover:bg-accent hover:shadow-[2px_2px_0px_0px_theme(colors.border)]",
                      )}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
