"use client"

import { motion } from "framer-motion"
import { Monitor, Server, Database, Palette, Zap } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { skills, stats, siteConfig } from "@/lib/data"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const iconMap = {
  Monitor,
  Server,
  Database,
  Palette,
  Zap,
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen md:h-screen py-20 lg:py-0 lg:pl-[220px] flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading title="ABOUT ME" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mb-12"
        >
          I&apos;m <span className="text-foreground font-semibold">{siteConfig.name}</span>,{" "}
          a passionate {siteConfig.title} who loves building innovative web applications.
          I specialize in creating seamless user experiences with modern technologies.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* What I Do */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl mb-6 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-primary" />
              What I Do?
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {skills.map((skill, index) => {
                const Icon = iconMap[skill.icon as keyof typeof iconMap]
                return (
                  <motion.div
                    key={skill.title}
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Fun Facts / Stats */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl mb-6 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-primary" />
              Fun Facts
            </motion.h3>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
