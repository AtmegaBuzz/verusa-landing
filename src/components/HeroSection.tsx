import { useState, useEffect } from 'react';
import LayeredButton from "./LayeredButton";

const HeroSection = () => {
  const videos = [
    "/videos/hero-bg-1.mp4",
    "/videos/hero-bg-2.mp4", 
    "/videos/hero-bg-3.mp4"
  ];
  
  const [currentVideo, setCurrentVideo] = useState(0);
  
  useEffect(() => {
    // Create a timeout to change the video
    const videoTimeout = setTimeout(() => {
      // Move to the next video, loop back to the first if we're at the end
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 5000); // Change video every 5 seconds
    
    // Clean up timeout on component unmount or when currentVideo changes
    return () => clearTimeout(videoTimeout);
  }, [currentVideo, videos.length]);
  
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/forest-mist.jpg")' }}
    >
      {/* Video elements - only one is visible at a time */}
      {videos.map((videoSrc, index) => (
        <video
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1] transition-opacity duration-1000 ${
            index === currentVideo ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

      <div className="absolute inset-0 bg-black/30 sm:bg-black/30 md:bg-black/30"></div>
      
      {/* Main content container - adjusted for responsive widths */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[80%] xl:w-[70%]">
        <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 text-white">
          {/* Responsive typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">verusa</h1>
          <h1 className="mb-4 sm:mb-6 md:mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">vanguard</h1>
          
          <div className="">
            <p className="mb-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
              Improving Stablecoin Compliance with Agentic Workflows
            </p>
            <p className="mb-8 sm:mb-10 md:mb-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
              AI-Powered Dual Engine for Compliance & Market Protection.
            </p>
            
            {/* Responsive button size */}
            <div className="sm:mt-2 md:mt-4">
              <LayeredButton 
                width={window.innerWidth < 640 ? 150 : 180} 
                height={window.innerWidth < 640 ? 40 : 50}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Optional: Video indicators - adjusted position for mobile */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full ${
              index === currentVideo ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Switch to video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;