"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Lightbox, type LightboxItem } from "@/components/ui/lightbox"
import { speakingEngagements } from "@/lib/data"
import { formatMonthYear } from "@/lib/utils"

export function SpeakingSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const items: LightboxItem[] = useMemo(
    () =>
      speakingEngagements.map((engagement) => ({
        kind: engagement.videoUrl ? "video" : "image",
        src: engagement.videoUrl ?? engagement.image,
        title: engagement.talkTitle,
        description: engagement.description,
        meta: [
          engagement.event,
          formatMonthYear(engagement.date),
          engagement.location,
          engagement.audienceSize,
        ]
          .filter(Boolean)
          .join(" · "),
        links: [
          ...(engagement.videoUrl
            ? [{ label: "Watch talk", href: engagement.videoUrl }]
            : []),
          ...(engagement.slidesUrl
            ? [{ label: "Slides", href: engagement.slidesUrl }]
            : []),
        ],
      })),
    []
  )

  const step = (offset: number) => {
    setActiveIndex((current) => {
      if (current === null) return current
      const total = speakingEngagements.length
      return (current + offset + total) % total
    })
  }

  return (
    <section
      id="speaking"
      className="pb-20 pt-24 lg:py-32 lg:pl-[220px] lg:pr-[80px]"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading title="SPEAKING" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Talks, workshops and panels — sharing what I learn with the developers
          coming up behind me.
        </motion.p>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {speakingEngagements.map((engagement, index) => (
            <motion.button
              key={engagement.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={engagement.imageAlt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="group relative block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-2xl bg-card text-left shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={engagement.image}
                alt={engagement.imageAlt}
                width={engagement.width}
                height={engagement.height}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100" />

              {engagement.videoUrl && (
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <Play className="h-4 w-4 fill-current" />
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-4 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                <p className="font-display text-lg leading-tight text-white">
                  {engagement.talkTitle}
                </p>
                <p className="mt-1 text-xs text-white/80">
                  {engagement.event} · {formatMonthYear(engagement.date)}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        item={activeIndex === null ? null : items[activeIndex]}
        onClose={() => setActiveIndex(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </section>
  )
}
