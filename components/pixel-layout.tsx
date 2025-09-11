import type React from "react"
import { PixelNav } from "./pixel-nav"

interface PixelLayoutProps {
  children: React.ReactNode
}

export function PixelLayout({ children }: PixelLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative">
      <PixelNav />
      <main className="container mx-auto px-4 py-8 relative z-10">{children}</main>
      <footer className="border-t-2 border-border bg-muted/50 py-8 mt-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            Built with pixel-perfect precision • Deep Learning Engineer Portfolio
          </p>
        </div>
      </footer>
    </div>
  )
}
