"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Check } from "lucide-react"

const serviceSteps = [
  { id: "ASIGNADO", label: "Asignado", description: "Operario asignado al servicio" },
  { id: "ACEPTADO", label: "Aceptado", description: "Operario acepta el servicio" },
  { id: "EN_CHECKLIST", label: "En Checklist", description: "Completando validaciones previas" },
  { id: "PENDIENTE_APROBACION", label: "Pendiente Aprobación", description: "Esperando revisión del supervisor" },
  { id: "APROBADO", label: "Aprobado", description: "Supervisor aprueba el servicio" },
  { id: "EN_EJECUCION", label: "En Ejecución", description: "Servicio en curso" },
  { id: "COMPLETADO", label: "Completado", description: "Servicio finalizado exitosamente" },
]

const alertSteps = [
  { id: "PENDIENTE", label: "Actividad Programada", description: "Actividad a realizar" },
  { id: "CIERRE", label: "Levantamiento de información", description: "Generación de alertas o reportes si se requiere" },
   {id: "RESPONSABLE_CIERRE", label: "Responsable de cierre", description: " responsable asignado cierra el reporte" },
  { id: "PENDIENTE_VERIFICACION", label: "Pendiente Verificación", description: "Se verifica la información" },
  { id: "CERRADO", label: "Cerrado", description: "Alerta verificada y cerrada" },
]

export function WorkflowSection() {
  const [activeFlow, setActiveFlow] = useState<"service" | "alert">("service")
  const [activeStep, setActiveStep] = useState(0)

  const steps = activeFlow === "service" ? serviceSteps : alertSteps

  return (
    <section className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
            <span className="text-sm font-medium text-primary">Flujos de trabajo</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Control paso a paso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            El sistema obliga a avanzar por estados definidos, garantizando que no se salten validaciones críticas.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => {
              setActiveFlow("service")
              setActiveStep(0)
            }}
            className={cn(
              "rounded-lg px-6 py-3 text-sm font-medium transition-all",
              activeFlow === "service"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            Flujo de Servicio
          </button>
          <button
            onClick={() => {
              setActiveFlow("alert")
              setActiveStep(0)
            }}
            className={cn(
              "rounded-lg px-6 py-3 text-sm font-medium transition-all",
              activeFlow === "alert"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            Flujo de Actividades programadas
          </button>
        </div>

        <div className="mt-12">
          {/* Desktop flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "flex flex-col items-center gap-2 transition-all",
                      index <= activeStep ? "opacity-100" : "opacity-50"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all",
                        index < activeStep
                          ? "border-primary bg-primary text-primary-foreground"
                          : index === activeStep
                            ? "border-primary bg-primary/20 text-primary"
                            : "border-border bg-card text-muted-foreground"
                      )}
                    >
                      {index < activeStep ? <Check className="h-5 w-5" /> : <span className="text-sm">{index + 1}</span>}
                    </div>
                    <span
                      className={cn(
                        "max-w-[100px] text-center text-xs font-medium",
                        index <= activeStep ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {step.label}
                    </span>
                  </button>
                  {index < steps.length - 1 && (
                    <div className="mx-2 flex items-center">
                      <div
                        className={cn(
                          "h-0.5 w-8 transition-all",
                          index < activeStep ? "bg-primary" : "bg-border"
                        )}
                      />
                      <ArrowRight
                        className={cn(
                          "h-4 w-4",
                          index < activeStep ? "text-primary" : "text-border"
                        )}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile flow */}
          <div className="lg:hidden">
            <div className="space-y-3">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-all",
                    index === activeStep
                      ? "border-primary bg-primary/10"
                      : index < activeStep
                        ? "border-primary/50 bg-card"
                        : "border-border bg-card opacity-60"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2",
                      index < activeStep
                        ? "border-primary bg-primary text-primary-foreground"
                        : index === activeStep
                          ? "border-primary bg-primary/20 text-primary"
                          : "border-border text-muted-foreground"
                    )}
                  >
                    {index < activeStep ? <Check className="h-4 w-4" /> : <span className="text-sm">{index + 1}</span>}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{step.label}</div>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step description */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground">{steps[activeStep].label}</h3>
            <p className="mt-2 text-muted-foreground">{steps[activeStep].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
