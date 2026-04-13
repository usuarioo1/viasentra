import {
  Truck,
  ClipboardList,
  Footprints,
  AlertOctagon,
  StopCircle,
  FileSearch,
  LayoutDashboard,
} from "lucide-react"

const modules = [
  {
    icon: Truck,
    title: "Servicios de Transporte",
    description:
      "Creación, asignación y seguimiento de servicios con registro de guía de despacho y generación de PDF.",
    features: ["Código y descripción", "Origen y destino", "Estados controlados", "Historial completo"],
  },
  {
    icon: ClipboardList,
    title: "Checklists y AST",
    description: "Validaciones obligatorias de equipo, tractocamión, fatiga del conductor y análisis seguro de tareas.",
    features: ["Checklist de equipo", "Checklist de fatiga", "AST estructurado", "Bloqueo sin validación"],
  },
  {
    icon: Footprints,
    title: "Caminatas de Seguridad",
    description: "Programación y seguimiento de caminatas con zona, faena, responsable y conteo de hallazgos.",
    features: ["Asignación a usuarios", "Fechas programadas", "Estados de avance", "Alertas asociadas"],
  },
  {
    icon: AlertOctagon,
    title: "Reportes de Peligro",
    description: "Registro de peligros con tipo, zona, nivel de hallazgo y flujo de cierre con verificación posterior.",
    features: ["Clasificación por tipo", "Asignación responsable", "Cierre con evidencia", "Verificación final"],
  },
  {
    icon: StopCircle,
    title: "Tarjetas Stop",
    description: "Detención de actividades inseguras con registro de causa, motivo y seguimiento hasta el cierre.",
    features: ["Registro de causa", "Contexto del hallazgo", "Cierre documentado", "Trazabilidad completa"],
  },
  {
    icon: FileSearch,
    title: "Control ART",
    description: "Formularios para validar la calidad del análisis de riesgo con observaciones y evidencias.",
    features: ["Observaciones ART", "Carga de evidencias", "Integración caminatas", "Tareas pendientes"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Tableros operativos y de seguridad con métricas, indicadores y exportación a Excel.",
    features: ["KPIs en tiempo real", "Filtros por período", "Exportación Excel", "Vista por rol"],
  },
]

export function ModulesSection() {
  return (
    <section id="modulos" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
            <span className="text-sm font-medium text-primary">Módulos</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Todo lo que necesitas para operar con seguridad
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Módulos integrados que trabajan juntos para garantizar el cumplimiento y la trazabilidad en cada etapa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <module.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{module.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{module.description}</p>
              <ul className="mt-4 space-y-2">
                {module.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
