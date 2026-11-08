"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { Lightbox } from "@/components/ui/lightbox";
import { projects, portfolioFilters, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [activeDemo, setActiveDemo] = useState<Project | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6); // 3 columns -> 6 items is 2 rows
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4); // 2 columns -> 4 items is 2 rows
      } else {
        setItemsPerPage(2); // 1 column -> 2 items is 2 rows
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset to first page when filtering or grid columns change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, itemsPerPage]);

  const filteredProjects =
    activeFilter === "all"
      ? [...projects].sort(
          (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
        )
      : projects.filter((p) =>
          p.category.some(
            (c) => c.toLowerCase() === activeFilter.toLowerCase(),
          ),
        );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 lg:py-0 lg:pl-[220px] flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading title="PORTFOLIO" />

        {activeFilter === "fullstack" && (
          <p className="text-muted-foreground mb-4">
            I worked on these projects from frontend to backend
          </p>
        )}
        {activeFilter === "backend" && (
          <p className="text-muted-foreground mb-4">
            I built the backend for these projects
          </p>
        )}
        {activeFilter === "frontend" && (
          <p className="text-muted-foreground mb-4">
            I built the frontend for these projects
          </p>
        )}
        {activeFilter === "web3" && (
          <p className="text-muted-foreground mb-4">
            I built the web3 infrastructure for these projects
          </p>
        )}
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
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
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
            {paginatedProjects.map((project, index) => (
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
                  demo={project.demo}
                  onPlayDemo={() => setActiveDemo(project)}
                  index={index}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mt-12 pb-10"
          >
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:hover:bg-card disabled:hover:text-muted-foreground transition-all duration-200 cursor-pointer"
              title="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                  currentPage === page
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:hover:bg-card disabled:hover:text-muted-foreground transition-all duration-200 cursor-pointer"
              title="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>

      <Lightbox
        item={
          activeDemo?.demo
            ? {
                kind: "video",
                src: activeDemo.demo,
                title: activeDemo.title,
                description: activeDemo.description,
                meta: activeDemo.tags.join(" · "),
                links: [
                  ...(activeDemo.live
                    ? [{ label: "View Live", href: activeDemo.live }]
                    : []),
                  ...(activeDemo.github
                    ? [{ label: "View Code", href: activeDemo.github }]
                    : []),
                ],
              }
            : null
        }
        onClose={() => setActiveDemo(null)}
      />
    </section>
  );
}
