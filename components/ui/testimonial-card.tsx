"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  className?: string
  index?: number
}

export function TestimonialCard({ 
  name, 
  role, 
  avatar, 
  content, 
  rating,
  className,
  index = 0 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg",
        className
      )}
    >
      {/* Quote mark */}
      <div className="absolute top-4 right-4 text-6xl font-serif text-primary/20 leading-none">
        &ldquo;
      </div>
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "fill-primary text-primary" : "text-muted"
            )}
          />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-muted-foreground mb-6 relative z-10 line-clamp-4">
        {content}
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
