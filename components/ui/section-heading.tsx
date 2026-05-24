"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  className?: string
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("flex items-center gap-4 mb-8", className)}
    >
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-foreground" />
      </div>
      <div className="h-px flex-1 bg-foreground/20 max-w-[60px]" />
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide text-foreground">
        {title}
      </h2>
    </motion.div>
  )
}
