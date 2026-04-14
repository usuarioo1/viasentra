"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"

import DashOp1 from "@/assets/dashboards-operaciones/Captura de pantalla 2026-04-13 200028.png"
import DashOp2 from "@/assets/dashboards-operaciones/Captura de pantalla 2026-04-13 200106.png"
import DashOp3 from "@/assets/dashboards-operaciones/Captura de pantalla 2026-04-13 200133.png"
import DashSeg1 from "@/assets/dashboard-seguridad/Captura de pantalla 2026-04-13 200358.png"
import DashSeg2 from "@/assets/dashboard-seguridad/Captura de pantalla 2026-04-13 200437.png"
import DashSeg3 from "@/assets/dashboard-seguridad/Captura de pantalla 2026-04-13 200456.png"
import DashSeg4 from "@/assets/dashboard-seguridad/Captura de pantalla 2026-04-13 200510.png"

type TabKey = "operaciones" | "seguridad"

const galleryData: Record<TabKey, { label: string; images: StaticImageData[] }> = {
    operaciones: {
        label: "Operaciones",
        images: [DashOp1, DashOp2, DashOp3],
    },
    seguridad: {
        label: "Seguridad",
        images: [DashSeg1, DashSeg2, DashSeg3, DashSeg4],
    },
}

export function DashboardGallerySection() {
    const [activeTab, setActiveTab] = useState<TabKey>("operaciones")
    const [activeIndex, setActiveIndex] = useState(0)

    const current = galleryData[activeTab]

    const handleTabChange = (tab: TabKey) => {
        setActiveTab(tab)
        setActiveIndex(0)
    }

    return (
        <section className="relative py-20 lg:py-28">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/20 to-transparent" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                        <span className="text-sm font-medium text-primary">Vistas reales de la plataforma</span>
                    </div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Así se ve Viasentra en acción
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Dashboards claros y funcionales diseñados para operadores, supervisores y gerencia.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mt-10 flex justify-center gap-2">
                    {(["operaciones", "seguridad"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === tab
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "border border-border bg-card text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Dashboard {galleryData[tab].label}
                        </button>
                    ))}
                </div>

                {/* Main image */}
                <div className="mt-6 rounded-3xl border border-border bg-card shadow-xl p-3">
                    <div className="relative w-full overflow-hidden rounded-3xl" style={{ aspectRatio: "16/9" }}>
                        <Image
                            key={`${activeTab}-${activeIndex}`}
                            src={current.images[activeIndex]}
                            alt={`Dashboard ${current.label} ${activeIndex + 1}`}
                            fill
                            className="object-contain brightness-90 rounded-3xl"
                            sizes="(max-width: 768px) 100vw, 90vw"
                            priority
                        />
                        <div className="absolute inset-0 rounded-3xl bg-black/10 pointer-events-none" />
                    </div>
                </div>

                {/* Thumbnails */}
                <div className="mt-4 flex justify-center gap-3 overflow-x-auto pb-2">
                    {current.images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-2xl border-2 transition-all duration-200 ${activeIndex === i
                                ? "border-primary opacity-100 shadow-md scale-105"
                                : "border-border opacity-50 hover:opacity-80 hover:scale-102"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`Vista ${i + 1}`}
                                fill
                                className="object-cover brightness-85"
                                sizes="128px"
                            />
                            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                        </button>
                    ))}
                </div>

                {/* Counter */}
                <p className="mt-4 text-center text-sm text-muted-foreground">
                    {activeIndex + 1} / {current.images.length}
                </p>
            </div>
        </section>
    )
}
