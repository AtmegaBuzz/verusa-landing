"use client"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import { motion } from "framer-motion"

export function VentureStudio() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 md:p-8">
      {/* Base background color */}
      <div className="absolute inset-0 bg-[#f8a08c]"></div>

      {/* Gradient overlay for top 20% */}
      <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-[#0FA8B9] to-[#f8a08c] pointer-events-none"></div>

      <div className="w-[70%] h-full bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8">
              ideas to
              <br />
              enterprises
            </h1>
            <p className="text-black max-w-2xl text-lg md:text-xl">
              The venture studio model is a powerful new approach that is redefining entrepreneurship. By combining
              company building with funding, we accelerate timelines, iterate rapidly and scale faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Validate Card */}
            <Card
              title="validate"
              description="Deep, systematic research and experimentation to validate both the problem in the market and the solution."
              bgColor="bg-[#f8a08c]"
              iconSrc="/placeholder.svg?height=150&width=150"
            />

            {/* Build Card */}
            <Card
              title="build"
              description="Full-stack team building each component of a Venture alongside founders."
              bgColor="bg-[#7fd1df]"
              iconSrc="/placeholder.svg?height=150&width=150"
            />

            {/* Scale Card */}
            <Card
              title="scale"
              description="Accelerating growth through GTM, partnerships, strategy and funding."
              bgColor="bg-[#f8a08c]"
              iconSrc="/placeholder.svg?height=150&width=150"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface CardProps {
  title: string
  description: string
  bgColor: string
  iconSrc: string
}

function Card({ title, description, bgColor, iconSrc }: CardProps) {
  return (
    <motion.div
      className={`${bgColor} p-8 rounded-lg h-full flex flex-col justify-between`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{title}</h2>
        <p className="text-black text-base md:text-lg">{description}</p>
      </div>
      <div className="mt-8">
        <AspectRatio.Root ratio={1}>
          <div className="w-24 h-24 relative">
            <img
              src={iconSrc || "/placeholder.svg"}
              alt=""
              className="w-full h-full object-contain"
              aria-hidden="true"
            />
          </div>
        </AspectRatio.Root>
      </div>
    </motion.div>
  )
}