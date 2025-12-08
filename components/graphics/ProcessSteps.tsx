"use client"

import { motion } from "framer-motion"
import { PROCESS_STEPS } from "data/process-steps"
import { staggerContainer, stepReveal, viewportSettings } from "lib/animations"
import { cn } from "lib/utils"

export interface ProcessStepsProps {
  className?: string
}

export function ProcessSteps({ className }: ProcessStepsProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={staggerContainer}
      className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-4", className)}
    >
      {PROCESS_STEPS.map((step, index) => (
        <motion.div
          key={step.number}
          variants={stepReveal}
          className="relative flex flex-col items-center text-center"
        >
          {/* Connector line (hidden on last item and mobile) */}
          {index < PROCESS_STEPS.length - 1 && (
            <div className="absolute left-[calc(50%+40px)] top-8 hidden h-0.5 w-[calc(100%-80px)] bg-border-default lg:block" />
          )}

          {/* Step number */}
          <div className="relative mb-6 flex size-16 items-center justify-center rounded-xl bg-rail-fade">
            <span className="font-[family-name:var(--font-grotesk)] text-2xl font-bold text-pure-white">
              {step.number}
            </span>
          </div>

          {/* Content */}
          <h4 className="mb-3 font-[family-name:var(--font-grotesk)] text-xl font-medium text-cloud-white">
            {step.title}
          </h4>
          <p className="text-sm leading-relaxed text-foreground-secondary">
            {step.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
