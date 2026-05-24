"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { navItems } from "@/lib/data"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeSection: string
  onNavigate: (section: string) => void
  isVisible: boolean
}

export function Sidebar({ activeSection, onNavigate, isVisible }: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -280, opacity: 0 }}
      animate={{
        x: isVisible ? 0 : -280,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 bottom-0 w-[230px] bg-secondary z-40 hidden lg:flex flex-col"
    >
      {/* Yellow accent bar */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary" /> */}

      {/* Profile image */}
      <div className="pt-8 pb-6 flex justify-center">
        <motion.div
          layoutId="profile-image"
          className="relative"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <Image
              src="/me.jpg"
              alt="Profile"
              width={112}
              height={112}
              className="object-fill object-center"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110" />
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
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

      {/* Decorative element */}
      <div className="p-6">
        <div className="h-px bg-sidebar-border" />
        <p className="text-xs text-sidebar-foreground/50 mt-4 text-center">
          © 2026 Perpetual Asogwa
        </p>
      </div>
    </motion.aside>
  )
}
