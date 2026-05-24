"use client"

import { motion } from "framer-motion"
import { Home, User, FileText, Briefcase, MessageSquare, Mail } from "lucide-react"
import { navItems } from "@/lib/data"
import { cn } from "@/lib/utils"

const iconMap = {
  Home,
  User,
  FileText,
  Briefcase,
  MessageSquare,
  Mail,
}

interface RightNavProps {
  activeSection: string
  onNavigate: (section: string) => void
  isVisible: boolean
}

export function RightNav({ activeSection, onNavigate, isVisible }: RightNavProps) {
  return (
    <motion.nav
      initial={{ x: 100, opacity: 0 }}
      animate={{ 
        x: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center"
    >
      {/* Vertical line */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-foreground/20" />
      
      {/* Icons */}
      <div className="relative flex flex-col gap-4">
        {navItems.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap]
          const isActive = activeSection === item.id
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground shadow-md"
              )}
            >
              <Icon className="w-4 h-4" />
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -left-4 w-2 h-2 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-2 py-1 rounded bg-foreground text-background text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none">
                {item.label}
              </span>
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}
