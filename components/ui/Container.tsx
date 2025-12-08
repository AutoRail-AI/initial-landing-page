import type { ComponentProps, ReactNode } from "react"
import { cn } from "lib/utils"

export interface ContainerProps extends ComponentProps<"div"> {
  children: ReactNode
  size?: "default" | "narrow" | "wide"
}

export function Container({ className, children, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        size === "default" && "max-w-7xl",
        size === "narrow" && "max-w-4xl",
        size === "wide" && "max-w-[1440px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
