import { Footer, NavBar } from "components/layout"
import {
  BetaCTASection,
  CapabilitiesSection,
  FAQSection,
  HeroSection,
  HowItWorksSection,
  ProblemSection,
  SolutionSection,
  UseCasesSection,
} from "components/sections"
import { JsonLd } from "components/shared"

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <BetaCTASection />
        <FAQSection />
      </main>
      <Footer />
      <JsonLd type="faq" />
    </>
  )
}
