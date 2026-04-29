import Link from "next/link"
import Image from "next/image"
import ViasentraLogo from "@/assets/viasentra3.png"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image src={ViasentraLogo} alt="Viasentra" height={36} className="h-9 w-auto" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Plataforma web de gestión operativa y seguridad para empresas de transporte y operaciones en faena.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Producto</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#modulos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Módulos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Recursos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Guía de inicio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:contacto@viasentra.cl" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  contacto@viasentra.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Viasentra. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Términos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
