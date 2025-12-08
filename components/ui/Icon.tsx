import type { LucideIcon, LucideProps } from "lucide-react"
import { cn } from "lib/utils"

export interface IconProps extends Omit<LucideProps, "ref"> {
  icon: LucideIcon
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const sizeMap = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
} as const

export function Icon({ icon: IconComponent, size = "md", className, ...props }: IconProps) {
  return (
    <IconComponent
      size={sizeMap[size]}
      strokeWidth={2}
      className={cn("shrink-0", className)}
      {...props}
    />
  )
}
