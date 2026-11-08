"use client"

import { motion } from "framer-motion"
import {
  Award,
  BadgeCheck,
  GitPullRequest,
  Trophy,
  ArrowUpRight,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { achievements, type Achievement } from "@/lib/data"
import { cn, formatMonthYear } from "@/lib/utils"

const typeConfig = {
  hackathon: { icon: Trophy, label: "Hackathon" },
  award: { icon: Award, label: "Award" },
  certification: { icon: BadgeCheck, label: "Certification" },
  "open-source": { icon: GitPullRequest, label: "Open Source" },
} as const

const sortedAchievements: Achievement[] = [...achievements].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export function RecognitionSection() {
  return (
    <section
      id="recognition"
      className="pb-20 pt-24 lg:py-32 lg:pl-[220px] lg:pr-[80px]"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading title="RECOGNITION" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Hackathon results, awards and credentials earned along the way.
        </motion.p>

        <ol className="relative space-y-10">
          <div
            className="absolute bottom-4 left-5 top-4 w-px bg-border"
            aria-hidden="true"
          />

          {sortedAchievements.map((achievement, index) => {
            const { icon: Icon, label } = typeConfig[achievement.type]
            const isWin = achievement.type === "hackathon"
            const isFirstPlace = achievement.placement
              ?.toLowerCase()
              .includes("1st")

            return (
              <motion.li
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="relative flex gap-5"
              >
                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2",
                    isWin
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1 pb-1">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl leading-tight md:text-2xl">
                      {achievement.title}
                    </h3>
                    {achievement.placement && (
                      <Badge variant={isFirstPlace ? "default" : "outline"}>
                        {achievement.placement}
                      </Badge>
                    )}
                    <span className="sr-only">{label}</span>
                  </div>

                  <p className="mb-2 text-xs text-muted-foreground">
                    {[
                      formatMonthYear(achievement.date),
                      achievement.location,
                      achievement.project,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>

                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {achievement.description}
                  </p>

                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      View
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
