import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background gradient lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-2/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Plataforma de gestión operativa y seguridad</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Operación y seguridad en{" "}
            <span className="text-primary">una sola plataforma</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground lg:text-xl">
            Coordina servicios de transporte, valida condiciones antes de ejecutar, gestiona caminatas de seguridad y da
            seguimiento a hallazgos con trazabilidad completa.
          </p>

          {/* <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Solicitar Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Play className="mr-2 h-4 w-4" />
              Ver Flujo del Producto
            </Button>
          </div> */}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground lg:text-4xl">100%</div>
            <div className="mt-1 text-sm text-muted-foreground">Trazabilidad</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground lg:text-4xl">-60%</div>
            <div className="mt-1 text-sm text-muted-foreground">Tiempo administrativo</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground lg:text-4xl">5</div>
            <div className="mt-1 text-sm text-muted-foreground">Roles integrados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground lg:text-4xl">24/7</div>
            <div className="mt-1 text-sm text-muted-foreground">Visibilidad en tiempo real</div>
          </div>
        </div>
      </div>
    </section>
  )
}
