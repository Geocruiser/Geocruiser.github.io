"use client"

import * as React from "react"
import { motion } from "framer-motion"

/**
 * Minimal hero section component with just the name
 * Clean, focused design without distractions
 */
export function HeroSection() {
  return (
    <section className="min-h-[30vh] flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight py-2"
        >
          Morgan Jones
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mt-4"
        >
          Biology Major + AI Engineer
        </motion.p>
      </div>
    </section>
  )
} 