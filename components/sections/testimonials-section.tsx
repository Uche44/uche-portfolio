"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { testimonials } from "@/lib/data"
import { staggerContainer } from "@/lib/animations"

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="min-h-screen py-20 lg:py-0 lg:pl-[220px] flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading title="TESTIMONIALS" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mb-12"
        >
          What clients and colleagues say about working with me. Building great
          products starts with great relationships.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              content={testimonial.content}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
