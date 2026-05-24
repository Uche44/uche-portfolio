"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useCountUp } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
  className?: string
}

export function AnimatedCounter({ value, suffix = "", label, className }: AnimatedCounterProps) {
  const { count, ref } = useCountUp(value, 2000)
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-primary bg-card shadow-lg",
        className
      )}
    >
      <span className="text-xl md:text-2xl font-bold text-primary">
        {count}{suffix}
      </span>
      <span className="text-[10px] md:text-xs text-muted-foreground text-center px-2 leading-tight">
        {label}
      </span>
    </motion.div>
  )
}
