import { ArrowRight, BellRing, ClipboardCheck, MailCheck, Truck, UserRound } from "lucide-react"

const notificationScenarios = [
    {
        icon: Truck,
        badge: "Servicio",
        title: "Nuevo servicio creado",
        description: "Cada vez que se registra y asigna un servicio, el sistema dispara una notificacion por correo.",
        trigger: "Se crea el servicio SV-1042",
        email: "operador.asignado@empresa.cl",
        details: [
            "Codigo de servicio, origen y destino.",
            "Fecha y hora comprometida.",
            "Supervisor y prioridad operativa.",
        ],
    },
    {
        icon: ClipboardCheck,
        badge: "Actividad",
        title: "Nueva actividad creada",
        description: "Al crear una actividad y asignar responsable, el aviso llega de inmediato al correo del ejecutor.",
        trigger: "Se crea la actividad ACT-2087",
        email: "responsable.actividad@empresa.cl",
        details: [
            "Tipo de actividad y ubicacion.",
            "Plazo de ejecucion y fecha limite.",
            "Instrucciones y evidencia requerida.",
        ],
    },
]

const emailHighlights = [
    "Asunto claro con identificador del servicio o actividad.",
    "Resumen de datos clave para actuar sin entrar al sistema.",
    "Trazabilidad de envio para auditoria y cumplimiento.",
]

export function NotificationsSection() {
    return (
        <section id="notificaciones" className="relative py-20 lg:py-32">
            <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-secondary/20" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                        <BellRing className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Notificaciones automaticas</span>
                    </div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Cada servicio o actividad creada se notifica por correo al asignado
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Tu equipo recibe avisos inmediatos para actuar a tiempo, sin depender de llamadas o seguimiento manual.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-5">
                        {notificationScenarios.map((scenario, index) => (
                            <article
                                key={index}
                                className="rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-primary/40"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                                            <scenario.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground">{scenario.title}</h3>
                                            <p className="text-sm text-muted-foreground">{scenario.description}</p>
                                        </div>
                                    </div>
                                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                        {scenario.badge}
                                    </span>
                                </div>

                                <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                                    <div className="rounded-lg border border-border bg-background/70 p-3">
                                        <p className="text-xs uppercase tracking-wide text-muted-foreground">Evento</p>
                                        <p className="mt-1 text-sm font-medium text-foreground">{scenario.trigger}</p>
                                    </div>
                                    <ArrowRight className="mx-auto hidden h-4 w-4 text-primary sm:block" />
                                    <div className="rounded-lg border border-primary/30 bg-primary/10 p-3">
                                        <p className="text-xs uppercase tracking-wide text-primary/80">Correo enviado a</p>
                                        <p className="mt-1 text-sm font-medium text-foreground">{scenario.email}</p>
                                    </div>
                                </div>

                                <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                                    {scenario.details.map((detail, detailIndex) => (
                                        <li
                                            key={detailIndex}
                                            className="rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-muted-foreground"
                                        >
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                        <div className="flex items-center gap-2 text-primary">
                            <MailCheck className="h-5 w-5" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Vista del correo</span>
                        </div>

                        <h3 className="mt-3 text-xl font-semibold text-foreground">Informacion accionable desde el primer minuto</h3>

                        <ul className="mt-4 space-y-2">
                            {emailHighlights.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 rounded-xl border border-border bg-background p-4">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>Asunto</span>
                                <span>Automatico</span>
                            </div>
                            <p className="mt-1 font-medium text-foreground">[Viasentra] Nueva actividad asignada - ACT-2087</p>

                            <div className="mt-4 rounded-lg border border-border bg-card p-4">
                                <div className="flex items-center gap-2">
                                    <UserRound className="h-4 w-4 text-primary" />
                                    <p className="text-sm text-foreground">Hola Ana,</p>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Se te asigno una nueva actividad con vencimiento para hoy a las 18:00. Revisa el detalle y confirma
                                    recepcion en la plataforma.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}