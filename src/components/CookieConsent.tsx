import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { X } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'matricx_cookie_consent'

const CookieConsent: React.FC = () => {
  const { currentLanguage } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'all')
    setVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'essential')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 font-primary">
            <span aria-hidden="true">🍪 </span>
            {currentLanguage === 'fr' ? 'Gestion des cookies' : 'Cookie Settings'}
          </h3>
          <button
            onClick={acceptEssential}
            className="text-gray-600 hover:text-gray-800 transition-colors p-1"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-secondary">
          {currentLanguage === 'fr'
            ? 'Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et afficher des publicités personnalisées via Google AdSense. Vous pouvez choisir d\'accepter tous les cookies ou uniquement les cookies essentiels au fonctionnement du site.'
            : 'We use cookies to enhance your experience on our site, analyze traffic, and display personalized advertisements through Google AdSense. You can choose to accept all cookies or only the essential cookies required for the site to function.'}
        </p>

        <p className="text-gray-500 text-xs mb-6 font-secondary">
          {currentLanguage === 'fr' ? (
            <>Pour en savoir plus, consultez notre <Link to="/privacy" className="text-blue-600 hover:underline">Politique de Confidentialité</Link>.</>
          ) : (
            <>Learn more in our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.</>
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={acceptAll}
            className="flex-1 bg-primary-500 hover:bg-primary-600 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300 font-primary text-sm"
          >
            {currentLanguage === 'fr' ? 'Accepter tout' : 'Accept All'}
          </button>
          <button
            onClick={acceptEssential}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 font-primary text-sm border border-gray-300"
          >
            {currentLanguage === 'fr' ? 'Essentiels uniquement' : 'Essential Only'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
