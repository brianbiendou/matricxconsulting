import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import TrainingSidebar from './TrainingSidebar'
import Header from '../Header'
import Footer from '../Footer'

interface TrainingLayoutProps {
  children: React.ReactNode
}

const TrainingLayout: React.FC<TrainingLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header principal du site */}
      <Header />

      {/* Mobile Menu Button - Fixed sur mobile */}
      <div className="lg:hidden fixed bottom-6 left-6 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-4 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg transition-all"
          aria-label="Ouvrir le menu de formation"
        >
          <Menu className="w-6 h-6 text-gray-900" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <TrainingSidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        isMobile={true}
      />

      {/* Desktop Layout avec marges comme le reste du site */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-10">
          {/* Desktop Sidebar - STICKY pour s'arrêter au footer */}
          <div className="hidden lg:block lg:w-72 xl:w-80 flex-shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-sm">
              <TrainingSidebar />
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 min-h-screen pb-12">
            {children}
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default TrainingLayout
