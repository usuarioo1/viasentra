import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { ModulesSection } from "@/components/landing/modules-section"
import { WorkflowSection } from "@/components/landing/workflow-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { AnalyticsSection } from "@/components/landing/analytics-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ModulesSection />
      <WorkflowSection />
      <BenefitsSection />
      <AnalyticsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
