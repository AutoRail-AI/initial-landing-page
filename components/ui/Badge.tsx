import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "lib/utils"

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-medium font-[family-name:var(--font-grotesk)]",
    "uppercase tracking-[0.05em]",
  ],
  {
    variants: {
      variant: {
        default: "bg-quantum-violet text-pure-white",
        outline: "bg-transparent border border-quantum-violet/50 text-quantum-violet",
        muted: "bg-slate-grey text-cloud-white/80",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px] rounded",
        md: "px-3 py-1 text-xs rounded-md",
        lg: "px-4 py-1.5 text-sm rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  children: ReactNode
}

export function Badge({ className, variant, size, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props}>
      {children}
    </span>
  )
}
