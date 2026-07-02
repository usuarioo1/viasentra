"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import ViasentraLogo from "@/assets/viasentra3.png"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={ViasentraLogo} alt="Viasentra" height={48} className="h-12 w-auto" priority />
          </div>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
            <a href="mailto:contacto@viasentra.cl" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              contacto@viasentra.cl
            </a>
            <Link href="#problema" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Problema
            </Link>
            <Link href="#solucion" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Solución
            </Link>
            <Link href="#modulos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Módulos
            </Link>
            <Link href="#notificaciones" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Notificaciones
            </Link>
            <Link href="#beneficios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Beneficios
            </Link>
            <Link href="#contactanos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contáctanos
            </Link>
          </nav>

          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav id="mobile-navigation" className="flex flex-col gap-4 p-4" aria-label="Navegación móvil">
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
              href="#notificaciones"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Notificaciones
            </Link>
            <Link
              href="#beneficios"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="#contactanos"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contáctanos
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button asChild variant="ghost" size="sm" className="justify-start">
                <a href="mailto:contacto@viasentra.cl">Iniciar contacto</a>
              </Button>
              <Button asChild size="sm">
                <Link href="#contactanos" onClick={() => setMobileMenuOpen(false)}>
                  Solicitar demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
