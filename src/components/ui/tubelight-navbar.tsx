"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  sectionId: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const ticking = useRef(false)

  // Resize handler for mobile detection
  useEffect(() => {
    const handleResize = () => {
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Optimized scroll spy with requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true

      requestAnimationFrame(() => {
        const sections = items.map((item) => document.getElementById(item.sectionId)).filter(Boolean) as HTMLElement[]

        if (sections.length === 0) {
          ticking.current = false
          return
        }

        const scrollPosition = window.scrollY + window.innerHeight / 3

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          if (!section) continue

          if (section.offsetTop <= scrollPosition) {
            const activeSection = items[i].name
            if (activeTab !== activeSection) {
              setActiveTab(activeSection)
            }
            break
          }
        }

        ticking.current = false
      })
    }
  }, [items, activeTab])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Smooth scrolling with improved performance
  const handleNavClick = (sectionId: string, name: string) => {
    const section = document.getElementById(sectionId)

    if (section) {
      // Use native smooth scrolling
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setActiveTab(name)
    }
  }

  return (
    <div className={cn("fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[100] mb-6 sm:pt-6", className)}>
      <div className="flex items-center gap-3 bg-gray-900 border border-primary/30 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.sectionId, item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-white hover:text-background",
                isActive && "bg-primary text-background",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-background/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-background rounded-t-full">
                    <div className="absolute w-12 h-6 bg-background/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-background/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-background/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

