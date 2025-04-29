"use client"
import { useState } from "react"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import { motion } from "framer-motion"

interface TeamMember {
  id: number
  name: string
  designation: string
  imageSrc: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Morgan",
    designation: "Founder & CEO",
    imageSrc: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "Jamie Chen",
    designation: "CTO",
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Sam Wilson",
    designation: "Design Lead",
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Taylor Reed",
    designation: "Product Manager",
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Jordan Smith",
    designation: "Marketing Director",
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Casey Brown",
    designation: "Lead Developer",
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Riley Johnson",
    designation: "UX Researcher",
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Morgan Lee",
    designation: "Growth Strategist",
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
]

export default function TeamsSection() {
  return (
    <div className="w-full bg-gradient-to-b from-[#f8a08c] to-[#87BAAB] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">our team</h2>
          <p className="text-white/90 max-w-2xl text-lg md:text-xl">
            Passionate experts dedicated to transforming innovative ideas into successful enterprises.
          </p>
        </motion.div>

        {/* Masonry-style grid for desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <TeamCard member={teamMembers[0]} featured />
            </div>
            <div className="col-span-1">
              <TeamCard member={teamMembers[1]} />
            </div>
            <div className="col-span-1">
              <TeamCard member={teamMembers[2]} />
            </div>
            <div className="col-span-1 row-span-2">
              <TeamCard member={teamMembers[3]} />
            </div>
            <div className="col-span-1">
              <TeamCard member={teamMembers[4]} />
            </div>
            <div className="col-span-2">
              <TeamCard member={teamMembers[5]} />
            </div>
            <div className="col-span-1">
              <TeamCard member={teamMembers[6]} />
            </div>
            <div className="col-span-1">
              <TeamCard member={teamMembers[7]} />
            </div>
          </div>
        </div>

        {/* Simplified grid for mobile */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface TeamCardProps {
  member: TeamMember
  featured?: boolean
}

function TeamCard({ member, featured = false }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <AspectRatio.Root ratio={featured ? 1.5 : 1}>
        <div className="w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          <img src={member.imageSrc || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
          <motion.div
            className="absolute bottom-0 left-0 p-4 z-20 w-full"
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white font-bold text-xl md:text-2xl">{member.name}</h3>
            <p className="text-white/80 text-sm md:text-base">{member.designation}</p>
          </motion.div>
        </div>
      </AspectRatio.Root>
    </motion.div>
  )
}
