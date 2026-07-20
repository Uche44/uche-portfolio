"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  live?: string
  demo?: string
  className?: string
  index?: number
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  github, 
  live,
  demo,
  className,
  index = 0 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card shadow-lg cursor-pointer",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay - always visible on mobile, hover-only on large screens */}
        <div className="absolute inset-0 bg-foreground/80 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="text-card translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-display text-2xl mb-2">{title}</h3>
            <p className="text-sm text-card/80 mb-4 line-clamp-2">{description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-2.5 items-center">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1.5 text-xs font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1.5 text-xs font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1.5 text-xs font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
