import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import TeamsSection from "./components/TeamSection"
import { VentureStudio } from "./components/InfoSection1"
import PageLayout from "./components/PageLayout"

function App() {
  return (
    <div className="min-h-screen">
      <PageLayout>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <VentureStudio />
        <TeamsSection />
      </PageLayout>

    </div>
  )
}

export default App
