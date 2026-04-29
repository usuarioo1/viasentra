import { AlertTriangle, FileX, Eye, Clock, MessageSquareWarning } from "lucide-react"

const problems = [
  {
    icon: FileX,
    title: "Planillas dispersas",
    description: "Documentos en Excel, formularios sueltos y registros que se pierden entre correos y carpetas.",
  },
  {
    icon: AlertTriangle,
    title: "Validaciones manuales",
    description: "Checklists en papel que no se completan, se extravían o llegan tarde para la toma de decisiones.",
  },
  {
    icon: MessageSquareWarning,
    title: "Hallazgos sin seguimiento",
    description: "Reportes de peligro y tarjetas stop que quedan sin responsable ni fecha de cierre definida.",
  },
  {
    icon: Eye,
    title: "Baja trazabilidad",
    description: "Imposibilidad de saber quién aprobó, rechazó o ejecutó  alguna operación.",
  },
  {
    icon: Clock,
    title: "Poca visibilidad gerencial",
    description: "Falta de dashboards e indicadores para tomar decisiones basadas en datos reales.",
  },
]

export function ProblemSection() {
  return (
    <section id="problema" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Los problemas que enfrentas hoy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La gestión operativa y de seguridad en faenas enfrenta desafíos críticos que afectan la productividad y el
            cumplimiento.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
