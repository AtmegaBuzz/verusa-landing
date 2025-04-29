"use client"

import { useState } from "react"
import VerusaLogo from "../assets/verusa-logo.webp"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-center">
      <div className="w-[70%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={VerusaLogo} className="w-13 h-13"/>
            <span className="text-3xl font-bold text-white">erusa</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden space-x-10 md:flex">
            <a href="#" className="text-lg font-medium text-white hover:text-gray-200">
              Home
            </a>
            <a href="#" className="text-lg font-medium text-white hover:text-gray-200">
              Studio
            </a>
            <a href="#" className="text-lg font-medium text-white hover:text-gray-200">
              Team
            </a>
            <a href="#" className="text-lg font-medium text-white hover:text-gray-200">
              Resources
            </a>
            <a href="#" className="text-lg font-medium text-red-400 hover:text-red-300">
              Build With Us
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 rounded-lg bg-white/10 p-4 backdrop-blur-lg md:hidden">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-lg font-medium text-white hover:text-gray-200">
                Home
              </a>
              <a href="#" className="text-lg font-medium text-white hover:text-gray-200">
                Studio
              </a>
              <a href="#" className="text-lg font-medium text-white hover:text-gray-200">
                Team
              </a>
              <a href="#" className="text-lg font-medium text-white hover:text-gray-200">
                Resources
              </a>
              <a href="#" className="text-lg font-medium text-red-400 hover:text-red-300">
                Build With Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
