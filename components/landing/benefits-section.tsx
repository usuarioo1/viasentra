import { Users, Briefcase, Shield, HardHat, HeartPulse, Wrench } from "lucide-react"

const roles = [
  {
    icon: Users,
    title: "Jefaturas",
    description: "Visión global con dashboards ejecutivos, administración de usuarios y control total del sistema.",
    benefits: ["Dashboards ejecutivos", "Gestión de equipos", "Exportación de reportes", "Control de cumplimiento"],
  },
  {
    icon: Briefcase,
    title: "Coordinadores",
    description: "Creación y asignación de servicios con flujo operativo ordenado y trazable.",
    benefits: ["Crear servicios", "Asignar operarios", "Seguimiento en tiempo real", "Historial de operaciones"],
  },
  {
    icon: Shield,
    title: "Supervisores",
    description: "Revisión y aprobación de documentación con firma digital y seguimiento de alertas.",
    benefits: ["Aprobar/rechazar servicios", "Firma digital", "Gestión de alertas", "Verificación de cierres"],
  },
  {
    icon: HardHat,
    title: "Operarios",
    description: "Ejecución guiada con checklists obligatorios y registro de cada etapa del servicio.",
    benefits: ["Aceptar servicios", "Completar checklists", "Registro de ejecución", " Respaldo de formularios"],
  },
  {
    icon: Wrench,
    title: "Taller",
    description:
      "Levantamiento de no conformidades de equipos para corregir problemas o inconvenientes de mantenimiento.",
    benefits: [
      "Registro de no conformidades",
      "Diagnóstico del inconveniente",
      "Plan de acción correctivo",
      "Seguimiento hasta cierre",
    ],
  },
  {
    icon: HeartPulse,
    title: "Prevencionistas",
    description: "Programación de tareas de seguridad, controles y seguimiento preventivo sistemático.",
    benefits: ["Asignar tareas", "Caminatas de seguridad", "Control preventivo", "Métricas de cumplimiento"],
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
            <span className="text-sm font-medium text-primary">Beneficios por rol</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Diseñado para cada perfil
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada rol accede exactamente a lo que necesita, con permisos específicos y una vista personalizada.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <role.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{role.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{role.description}</p>
                <ul className="mt-4 space-y-2">
                  {role.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
