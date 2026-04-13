"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">N</span>
            </div>
            <span className="text-xl font-bold text-foreground">NextMiner</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#problema" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Problema
            </Link>
            <Link href="#solucion" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Solución
            </Link>
            <Link href="#modulos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Módulos
            </Link>
            <Link href="#beneficios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Beneficios
            </Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" size="sm">
              Iniciar Sesión
            </Button>
            <Button size="sm">Solicitar Demo</Button>
          </div>

          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="#problema"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Problema
            </Link>
            <Link
              href="#solucion"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solución
            </Link>
            <Link
              href="#modulos"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Módulos
            </Link>
            <Link
              href="#beneficios"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beneficios
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" size="sm" className="justify-start">
                Iniciar Sesión
              </Button>
              <Button size="sm">Solicitar Demo</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
