"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/ui/project-card"
import { projects, portfolioFilters } from "@/lib/data"
import { cn } from "@/lib/utils"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 lg:py-0 lg:pl-[220px] flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading title="PORTFOLIO" />

        {activeFilter === "fullstack" && (<p className="text-muted-foreground mb-4">I worked on these projects from frontend to backend</p>)}
        {activeFilter === "backend" && (<p className="text-muted-foreground mb-4">I built the backend for these projects</p>)}
        {activeFilter === "frontend" && (<p className="text-muted-foreground mb-4">I built the frontend for these projects</p>)}
        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {portfolioFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  github={project.github}
                  live={project.live}
                  index={index}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
