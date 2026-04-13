import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Play } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          {/* Background elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,transparent_0%,transparent_49%,var(--border)_50%,transparent_51%,transparent_100%)] bg-[length:80px_100%] opacity-20" />
          </div>

          <div className="relative px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Comienza a controlar tu operación hoy
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Viasentra no es solo un sistema para registrar servicios: es una plataforma para controlar la ejecución,
                asegurar el cumplimiento y dar visibilidad en tiempo real.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto">
                  Solicitar Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Reunión
                </Button>
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  <Play className="mr-2 h-4 w-4" />
                  Ver Piloto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
