import { Button } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"

const CONTACT_EMAIL = "contacto@viasentra.cl"
const MAILTO_LINK = "mailto:contacto@viasentra.cl?subject=Cotizaci%C3%B3n%20de%20servicios"

export function ContactSection() {
  return (
    <section id="contactanos" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm lg:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contactanos</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Escribenos para recibir informacion comercial, resolver dudas o solicitar una cotizacion de servicios.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block text-lg font-medium text-primary transition-colors hover:text-primary/80"
          >
            {CONTACT_EMAIL}
          </a>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="min-w-65">
              <a href={MAILTO_LINK} aria-label="Enviar correo con asunto Cotización de servicios">
                Enviar correo
                <Send className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}