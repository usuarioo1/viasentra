import { CheckCircle2, Shield, FileCheck, ClipboardCheck, Bell, BarChart3, Mail } from "lucide-react"

const features = [
  {
    icon: FileCheck,
    title: "Gestión de servicios",
    description: "Asignación, seguimiento y cierre de servicios de transporte con flujos controlados.",
  },
  {
    icon: Shield,
    title: "Seguridad operacional",
    description: "Caminatas de seguridad integradas al flujo operativo con trazabilidad completa.",
  },
  {
    icon: ClipboardCheck,
    title: "Checklists obligatorios",
    description: "Validaciones de equipo, conductor y análisis de riesgo antes de cada servicio.",
  },
  {
    icon: CheckCircle2,
    title: "Aprobaciones digitales",
    description: "Firma del supervisor con registro de fecha, hora y motivo de decisión.",
  },
  {
    icon: Bell,
    title: "Gestión de alertas",
    description: "Reportes de peligro, tarjetas stop y controles ART con cierre y verificación.",
  },
  {
    icon: BarChart3,
    title: "Dashboards ejecutivos",
    description: "Indicadores de cumplimiento, tiempos y desempeño exportables a Excel.",
  },
{
  icon: Mail,
  title: "Notificaciones automáticas",
  description: "Alertas por correo para asiganciones, avisos de cierre y No conformidades.",
}
]

export function SolutionSection() {
  return (
    <section id="solucion" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <span className="text-sm font-medium text-primary">La solución</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Una plataforma que une operación y seguridad
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Viasentra centraliza todos los procesos en un flujo trazable de punta a punta, desde la planificación
              hasta el cierre del servicio o actividad programada.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">Control documental previo a la ejecución</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">Verificación posterior del cierre</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">Evidencia visual centralizada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">Trazabilidad por estados y responsables</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
