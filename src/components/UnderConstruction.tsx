import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { Construction, ArrowLeft, Home } from 'lucide-react'

interface UnderConstructionProps {
  pageName: string
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ pageName }) => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
      <div className="container-custom">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Construction Icon */}
          <div className="inline-flex p-6 bg-primary-100 rounded-full">
            <Construction size={80} className="text-primary-600" />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Page {pageName}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cette page est en cours de construction.
            </p>
            <p className="text-lg text-gray-500">
              Nous travaillons dur pour vous offrir une expérience exceptionnelle. 
              Revenez bientôt !
            </p>
          </div>

          {/* Progress Bar Animation */}
          <div className="max-w-md mx-auto">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-500 h-full rounded-full animate-pulse" style={{width: '65%'}}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Construction en cours... 65%</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Retour</span>
            </button>
            <a 
              href="/" 
              className="bg-white border-2 border-gray-300 hover:border-primary-300 text-gray-700 hover:text-primary-600 font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Home size={20} />
              <span>Accueil</span>
            </a>
          </div>

          {/* Contact CTA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Besoin d'aide maintenant ?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactez-nous directement pour toute question ou demande de devis.
            </p>
            <button className="btn-primary w-full">
              {t('contact.cta')}
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary-100 rounded-full opacity-20 blur-3xl translate-x-1/2 animate-float animation-delay-400"></div>
      </div>
    </div>
  )
}

export default UnderConstruction