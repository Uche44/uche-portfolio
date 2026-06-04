"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { navItems } from "@/lib/data"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (section: string) => {
    onNavigate(section)
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-sm border-b border-border z-50 lg:hidden flex items-center justify-between px-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
            <Image
              src="/me.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="font-display text-xl">PERPETUAL ASOGWA</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-secondary z-50 lg:hidden flex flex-col"
            >
              {/* Close button */}
              <div className="h-16 flex items-center justify-end px-4 border-b border-sidebar-border">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Profile */}
              <div className="py-8 flex flex-col items-center border-b border-sidebar-border">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-xl mb-4">
                  <Image
                    src="/me.jpg"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-xl text-sidebar-foreground">PERPETUAL ASOGWA</h3>
                <p className="text-sm text-sidebar-foreground/70">Fullstack Developer</p>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavigate(item.id)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium",
                          activeSection === item.id
                            ? "bg-primary text-primary-foreground"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                        )}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
