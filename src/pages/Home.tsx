import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import PodcastSection from '../components/PodcastSection'
import PartnersCarousel from '../components/PartnersCarousel'
import MatrixSection from '../components/MatrixSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ValuesSection from '../components/ValuesSection'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  const { currentLanguage } = useTranslation() // Force re-render when language changes
  return (
    <div key={currentLanguage} className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MatrixSection />
        <PodcastSection />
        <PartnersCarousel />
        <ServicesSection />
        <TestimonialsSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home