"use client"
import { useRef } from "react"
import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  // Get the scroll progress for the footer reveal
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start end", "end end"],
  })

  // Transform for the content to move up as user scrolls to the end
  const contentY = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Fixed footer that stays behind the content */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-[#FA6C55] h-[50vh]">
        <div className="container mx-auto px-4 py-8 h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side */}
            <div>
              <p className="text-black/80 mb-2">We take you behind the scenes of world-class design.</p>
              <p className="text-black/80 mb-6">verusa is a project by Fons Mars</p>

              <a
                href="https://producthunt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-white px-3 py-1.5 rounded-md text-sm"
              >
                <span className="mr-2">Featured on</span>
                <span className="font-bold">Product Hunt</span>
              </a>
            </div>

            {/* Right side - Links */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              <div>
                <FooterLink href="/subscription">Manage subscription</FooterLink>
                <FooterLink href="/support">Support us</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/brand">Brand kit</FooterLink>
              </div>
              <div>
                <FooterLink href="https://instagram.com">Instagram</FooterLink>
                <FooterLink href="https://twitter.com">Twitter</FooterLink>
                <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
                <FooterLink href="https://threads.net">Threads</FooterLink>
                <FooterLink href="https://medium.com">Medium</FooterLink>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="pt-6 border-t border-black/10">
            <h2 className="text-7xl md:text-9xl font-bold text-black">verusa</h2>
          </div>
        </div>
      </footer>

      {/* Main content that lifts up to reveal the footer */}
      <motion.div 
        ref={contentRef} 
        className="relative z-20 h-screen overflow-auto" 
        style={{ y: contentY }}
      >
        <div className="min-h-full pb-[50vh]">
          {children}
        </div>
      </motion.div>

      {/* Trigger element for scroll detection - invisible */}
      <div ref={triggerRef} className="h-[100vh]"></div>
    </div>
  )
}

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a href={href} className="block text-black hover:underline mb-2">
      {children}
    </a>
  )
}