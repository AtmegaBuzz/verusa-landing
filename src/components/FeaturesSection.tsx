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
    <>
      {/* Top Section - Solid Background #6BA0E3 */}
      <section
        className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 font-sans bg-[#6BA0E3]">
        <div className="mx-auto max-w-6xl flex flex-col items-center">
          {/* Mobile version with bordered containers */}
          <div className="grid grid-cols-1 gap-4 w-full max-w-3xl sm:hidden">
            {texts.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 relative cursor-pointer border-2 border-black/30 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-xl font-bold text-black/90">{item.main}</div>
                <div className="text-2xl font-bold text-black/80">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop version with underlines */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 w-full max-w-3xl">
            {texts.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-4 group relative cursor-pointer w-full"
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
          <div className="mt-8 sm:mt-12 w-full">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-black/90 text-center sm:text-left">
              Powered by our advanced AI-driven platform, Verusa delivers unparalleled stablecoin protection and regulatory adherence. Join us in securing the future of crypto ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Middle Section - Gradient Background */}
      <section className="w-full bg-gradient-to-b from-[#6BA0E3] via-[#83B9B1] to-[#0CA9BA] py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12">
          {/* You can add content here if needed, or leave it as a visual separator */}
        </div>
      </section>

      {/* Bottom Section - Solid Background #0CA9BA */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 font-sans bg-[#0CA9BA]">
        <div className="mx-auto max-w-6xl">
          {/* Main content section with image and expandable items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image container - responsive width and height */}
            <div className="relative flex items-center justify-center w-full max-w-[90%] sm:max-w-[500px] mx-auto h-[250px] sm:h-[350px] md:h-[400px] bg-gray-100/20 rounded-[10px] shadow-lg order-2 md:order-1">
              <img src={Workflow} alt="Workflow diagram" className="h-full w-full object-contain" />
            </div>

            {/* Text content */}
            <div className="order-1 md:order-2">
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-black/90 text-center md:text-left">
                Autonomous Protection
                <br className="hidden sm:block" />
                Architecture
              </h2>
              <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl font-light text-black/80 text-center md:text-left">
                Verusa integrates multiple specialized AI agents working in concert to provide comprehensive protection for your stablecoin ecosystem.
              </p>

              {/* Expandable sections */}
              <div className="space-y-3 sm:space-y-4">
                {sectionItems.map((item, index) => (
                  <div key={index} className="border-b border-white/30 pb-4 sm:border-2 sm:border-white/30 sm:rounded-lg sm:p-4">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl text-black/90">{item.title}</h3>
                      <button className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors duration-300 ml-2 flex-shrink-0">
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
                      <p className="mt-3 text-sm sm:text-base text-black/80">
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
    </>
  );
};

export default FeaturesSection;