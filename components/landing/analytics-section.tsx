"use client"

import { BarChart3, FileSpreadsheet, FileText, History, Camera, Clock } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Dashboards en tiempo real",
    description: "Indicadores de cumplimiento, tasas de aprobación y tiempos de ciclo actualizados al instante.",
  },
  {
    icon: Clock,
    title: "Métricas de desempeño",
    description: "Cumplimiento por operario, actividades vencidas, próximas y fuera de plazo.",
  },
  {
    icon: FileSpreadsheet,
    title: "Exportación a Excel",
    description: "Descarga todos los datos y reportes en formato Excel para análisis externos.",
  },
  {
    icon: FileText,
    title: "Generación de PDF",
    description: "PDFs de servicios y registros para respaldo documental y auditorías.",
  },
  {
    icon: History,
    title: "Historial de cierres",
    description: "Trazabilidad completa de quién cerró, verificó y cuándo para cada hallazgo.",
  },
  {
    icon: Camera,
    title: "Evidencia visual",
    description: "Soporte para imágenes en alertas, checklists y formularios operativos.",
  },
]

export function AnalyticsSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-secondary/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
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

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <span className="text-sm font-medium text-primary">Analítica y trazabilidad</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Datos para tomar decisiones
            </h2>
            <div className="mt-4 text-lg text-muted-foreground">
              No solo registras información: obtienes indicadores reales de cumplimiento, desempeño y seguridad para
              reuniones, reportes o auditorías.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
