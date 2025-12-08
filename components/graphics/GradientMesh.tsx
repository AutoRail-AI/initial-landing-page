"use client"

import { cn } from "lib/utils"

export interface GradientMeshProps {
  className?: string
  variant?: "hero" | "cta" | "subtle"
}

export function GradientMesh({ className, variant = "hero" }: GradientMeshProps) {
  const opacityMap = {
    hero: "opacity-40",
    cta: "opacity-20",
    subtle: "opacity-10",
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        opacityMap[variant],
        className
      )}
      aria-hidden="true"
    >
      {/* Primary gradient blob */}
      <div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(129, 52, 206, 0.6) 0%, transparent 70%)",
        }}
      />

      {/* Secondary gradient blob */}
      <div
        className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(110, 24, 179, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Cyan accent blob */}
      <div
        className="absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(250, 250, 250, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(250, 250, 250, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  )
}
