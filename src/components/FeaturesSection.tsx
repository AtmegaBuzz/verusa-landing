import { useState } from "react";
import Workflow from "../assets/workflow.png";

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const texts = [
    { main: 'detect', sub: 'swiftly' },
    { main: 'verify', sub: 'instantly' },
    { main: 'protect', sub: 'relentlessly' }
  ];

  const sectionItems = [
    { title: 'KYB Engine (SSI/DeFi)', description: 'Our specialized KYB engine handles verification processes, from document scanning to risk assessment, all powered by advanced AI.' },
    { title: 'AI Agents (LLM+NLP)', description: 'Core intelligence components that understand context, process language, and make decisions based on complex patterns.' },
    { title: 'Market Graph (GraphRNN)', description: 'Specialized neural networks that map relationships between market activities, social signals, and on-chain transactions.' },
    { title: 'Regulatory Oracles', description: 'Always up-to-date with the latest regulatory requirements including EU DORA and MiCA frameworks.' }

  ];

  return (
    <section
      className="relative px-6 pb-12 pt-8 md:px-12 font-sans"
      style={{
        willChange: 'background',
        background: 'linear-gradient(to bottom, #48A9FB 0%, #69B3AE 50%, #83BBAD 100%)',
        minHeight: '100vh'
      }}
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        <div className="grid gap-12 md:grid-cols-3 w-3xl">
          {texts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 group relative cursor-pointer w-[200px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-4xl font-bold text-black/90">{item.main}</div>
              <div className="mb-4 text-4xl font-bold text-black/80 md:text-5x">
                {item.sub}
              </div>
              <div
                className={`absolute bottom-4 left-4 h-0.5 bg-black/90 transition-all duration-300 ease-in-out
                  ${hoveredIndex === index
                    ? 'w-3/4'
                    : 'w-full'
                  }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 w-full">
          <p className="text-xl font-light text-black/90 md:text-2xl">
            Powered by our advanced AI-driven platform, Verusa delivers unparalleled stablecoin protection and regulatory adherence. Join us in securing the future of crypto ecosystems.
          </p>
        </div>

        <div className="mt-32 grid gap-12 md:grid-cols-2">
          <div className="relative flex items-center justify-center w-[500px] h-full bg-gray-100/20 rounded-[10px] shadow-lg">
            <img src={Workflow} alt="Mesh sphere"  className="h-full w-full object-contain" />
          </div>
          <div>
            <h2 className="mb-8 text-5xl font-bold text-black/90 md:text-6xl">
              Autonomous Protection
              <br />
              Architecture
            </h2>
            <p className="mb-12 text-xl font-light text-black/80 md:text-2xl">
              Verusa integrates multiple specialized AI agents working in concert to provide comprehensive protection for your stablecoin ecosystem.
            </p>
            <div className="space-y-4">
              {sectionItems.map((item, index) => (
                <div key={index} className="border-b border-white/30 pb-4">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                  >
                    <h3 className="text-3xl text-black/90">{item.title}</h3>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors duration-300">
                      <svg
                        className="h-5 w-5 text-black/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {expandedSection === index && (
                    <p className="mt-4 text-black/80">
                      {/* Add description for expanded section */}
                      Additional details about {item.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection