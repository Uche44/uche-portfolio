"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { BlogCard } from "@/components/ui/blog-card"
import { blogPosts } from "@/lib/data"
import { staggerContainer } from "@/lib/animations"

export function BlogSection() {
  return (
    <section
      id="blog"
      className="min-h-screen py-20 mt-12 lg:py-0 lg:pl-[220px] flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading title="BLOG" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mb-12 md:text-xl"
        >
          Thoughts, tutorials, and insights about web development, design patterns,
          and the latest technologies I&apos;m exploring.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              tags={post.tags}
              readTime={post.readTime}
              url={post.url}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
