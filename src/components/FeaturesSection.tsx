import { useState } from "react";
import Workflow from "../assets/workflow.png";

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const texts = [
    { main: 'detect', sub: 'swiftly' },
    { main: 'verify', sub: 'instantly' },
    { main: 'protect', sub: 'relentlessly' }
  ];

  const sectionItems = [
    { 
      title: 'KYB Engine (SSI/DeFi)', 
      description: 'Our specialized KYB engine handles verification processes, from document scanning to risk assessment, all powered by advanced AI.' 
    },
    { 
      title: 'AI Agents (LLM+NLP)', 
      description: 'Core intelligence components that understand context, process language, and make decisions based on complex patterns.' 
    },
    { 
      title: 'Market Graph (GraphRNN)', 
      description: 'Specialized neural networks that map relationships between market activities, social signals, and on-chain transactions.' 
    },
    { 
      title: 'Regulatory Oracles', 
      description: 'Always up-to-date with the latest regulatory requirements including EU DORA and MiCA frameworks.' 
    }
  ];

  return (
    <section
      className="relative px-4 sm:px-6 md:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 pt-6 sm:pt-8 font-sans"
      style={{
        willChange: 'background',
        background: 'linear-gradient(to bottom, #48A9FB 0%, #69B3AE 50%, #83BBAD 100%)',
        minHeight: '100vh'
      }}
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        {/* Responsive grid for the detect/verify/protect section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 w-full max-w-3xl">
          {texts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 group relative cursor-pointer w-full sm:w-auto"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-3xl sm:text-4xl font-bold text-black/90">{item.main}</div>
              <div className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black/80">
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

        {/* Description paragraph */}
        <div className="mt-12 sm:mt-16 w-full">
          <p className="text-lg sm:text-xl md:text-2xl font-light text-black/90">
            Powered by our advanced AI-driven platform, Verusa delivers unparalleled stablecoin protection and regulatory adherence. Join us in securing the future of crypto ecosystems.
          </p>
        </div>

        {/* Main content section with image and expandable items */}
        <div className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image container - responsive width and height */}
          <div className="relative flex items-center justify-center w-full max-w-[500px] mx-auto h-[300px] sm:h-[400px] md:h-full bg-gray-100/20 rounded-[10px] shadow-lg order-2 md:order-1">
            <img src={Workflow} alt="Workflow diagram" className="h-full w-full object-contain" />
          </div>
          
          {/* Text content */}
          <div className="order-1 md:order-2">
            <h2 className="mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl font-bold text-black/90">
              Autonomous Protection
              <br className="hidden sm:block" />
              Architecture
            </h2>
            <p className="mb-8 sm:mb-12 text-lg sm:text-xl md:text-2xl font-light text-black/80">
              Verusa integrates multiple specialized AI agents working in concert to provide comprehensive protection for your stablecoin ecosystem.
            </p>
            
            {/* Expandable sections */}
            <div className="space-y-4">
              {sectionItems.map((item, index) => (
                <div key={index} className="border-b border-white/30 pb-4">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-black/90">{item.title}</h3>
                    <button className="flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 items-center justify-center rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors duration-300">
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5 text-black/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d={expandedSection === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
                        />
                      </svg>
                    </button>
                  </div>
                  {expandedSection === index && (
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-black/80">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;