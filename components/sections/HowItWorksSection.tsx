"use client"

import { motion } from "framer-motion"
import { ProcessSteps } from "components/graphics"
import { Container, SectionHeader } from "components/ui"
import { fadeInUp, viewportSettings } from "lib/animations"
import { SECTION_IDS } from "lib/constants"

export function HowItWorksSection() {
  return (
    <section
      id={SECTION_IDS.howItWorks}
      className="relative overflow-hidden bg-void-black py-20 md:py-24"
    >
      <Container>
        <SectionHeader
          title="How AutoRail Works"
          description="Four steps. Zero YAML. No Terraform required."
        />

        {/* Process Steps */}
        <div className="mt-16">
          <ProcessSteps />
        </div>

        {/* Closing Statement */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="mx-auto mt-16 max-w-2xl text-center text-lg text-foreground-secondary"
        >
          No infrastructure expertise required. No configuration files to maintain.
          Just working production systems.
        </motion.p>
      </Container>
    </section>
  )
}
