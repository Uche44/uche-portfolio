"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { getYouTubeId } from "@/lib/youtube"

export interface LightboxLink {
  label: string
  href: string
}

export interface LightboxItem {
  kind: "image" | "video"
  src: string
  title: string
  description?: string
  meta?: string
  links?: LightboxLink[]
}

interface LightboxProps {
  item: LightboxItem | null
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

export function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!item || (!onPrev && !onNext)) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onPrev?.()
      if (event.key === "ArrowRight") onNext?.()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [item, onPrev, onNext])

  const videoId = item?.kind === "video" ? getYouTubeId(item.src) : null

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="gap-0 overflow-hidden bg-card p-0 sm:max-w-4xl">
        {item && (
          <>
            <div className="relative bg-black">
              {item.kind === "video" ? (
                videoId ? (
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                      title={item.title}
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center px-6 text-center text-sm text-white/70">
                    This video link could not be read. Open it directly with the link below.
                  </div>
                )
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="max-h-[70vh] w-full object-contain"
                />
              )}

              {onPrev && (
                <button
                  type="button"
                  onClick={onPrev}
                  aria-label="Previous item"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:left-3"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {onNext && (
                <button
                  type="button"
                  onClick={onNext}
                  aria-label="Next item"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:right-3"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="space-y-2 p-5 sm:p-6">
              <DialogTitle className="font-display text-xl sm:text-2xl">
                {item.title}
              </DialogTitle>

              {item.description && (
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </DialogDescription>
              )}

              {item.meta && (
                <p className="text-xs text-muted-foreground">{item.meta}</p>
              )}

              {item.links && item.links.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      {link.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
