import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import Chatbot from './Chatbot'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Twitter,
  Heart 
} from 'lucide-react'

const Footer: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation()

  return (
    <footer className="bg-secondary-800 text-white">
      {/* Main Footer - MatriCx Colors */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info - MatriCx Branding */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4 font-primary">
                {t('footer.company')}
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md font-secondary">
                {t('footer.description')}
              </p>
            </div>

            {/* Contact Info - MatriCx Styling */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white mb-4 font-primary">{t('footer.contactInfo')}</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-1" />
                  <div className="font-secondary">
                    <div>Makepe BM</div>
                    <div>BP 12777, Douala</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={18} className="text-primary-400 flex-shrink-0" />
                  <span className="font-secondary">677 810 120 | 699 947 136</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={18} className="text-primary-400 flex-shrink-0" />
                  <span className="font-secondary">{t('contact.email')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - MatriCx Navigation */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white font-primary">{t('footer.quickLinks')}</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-primary-300 transition-colors duration-300 font-secondary">
                {t('nav.home')}
              </a>
              <a href="#about" className="block text-gray-300 hover:text-primary-300 transition-colors duration-300 font-secondary">
                {t('nav.about')}
              </a>
              <a href="#services" className="block text-gray-300 hover:text-primary-300 transition-colors duration-300 font-secondary">
                {t('nav.services')}
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-primary-300 transition-colors duration-300 font-secondary">
                {t('nav.contact')}
              </a>
              <a href="#blog" className="block text-gray-300 hover:text-primary-300 transition-colors duration-300 font-secondary">
                {t('nav.blog')}
              </a>
            </nav>
          </div>

          {/* Services MatriCx */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white font-primary">{t('footer.ourServices')}</h4>
            <nav className="space-y-3">
              <a href="#advisory" className="block text-gray-300 hover:text-accent-300 transition-colors duration-300 font-secondary">
                MatriCx Advisory
              </a>
              <a href="#survey" className="block text-gray-300 hover:text-accent-300 transition-colors duration-300 font-secondary">
                MatriCx Survey
              </a>
              <a href="#technology" className="block text-gray-300 hover:text-accent-300 transition-colors duration-300 font-secondary">
                MatriCx Technology
              </a>
              <a href="#training" className="block text-gray-300 hover:text-accent-300 transition-colors duration-300 font-secondary">
                MatriCx Training
              </a>
            </nav>
          </div>
        </div>

        {/* Social Links - MatriCx Branding */}
        <div className="mt-12 pt-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 font-secondary">{t('footer.followUs')} :</span>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/people/La-Voix-du-Client-au-237/100086597136441/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary-700 border border-secondary-600 rounded-full flex items-center justify-center hover:bg-primary-500 hover:border-primary-400 transition-all duration-300 transform hover:scale-110"
                  title="Suivez-nous sur Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/matricx-consulting/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary-700 border border-secondary-600 rounded-full flex items-center justify-center hover:bg-accent-500 hover:border-accent-400 transition-all duration-300 transform hover:scale-110"
                  title="Suivez-nous sur LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://x.com/voix_au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary-700 border border-secondary-600 rounded-full flex items-center justify-center hover:bg-accent-500 hover:border-accent-400 transition-all duration-300 transform hover:scale-110"
                  title="Suivez-nous sur X (Twitter)"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Language Switcher MatriCx */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 font-secondary">Langues disponibles :</span>
              <button
                onClick={() => changeLanguage('fr')}
                className={`px-4 py-2 rounded-lg font-primary font-semibold transition-all duration-300 ${
                  currentLanguage === 'fr' 
                    ? 'bg-primary-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-secondary-700 border border-secondary-600'
                }`}
              >
                Français
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-4 py-2 rounded-lg font-primary font-semibold transition-all duration-300 ${
                  currentLanguage === 'en' 
                    ? 'bg-primary-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-secondary-700 border border-secondary-600'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar MatriCx */}
      <div className="bg-secondary-900 py-6 border-t border-secondary-700">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 font-secondary">
              <span>{t('footer.copyright')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm font-secondary">
              <span>{t('footer.madeWith')}</span>
              <Heart size={16} className="text-primary-500 fill-current" />
              <span>{t('footer.by')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligent Chatbot */}
      <Chatbot />
    </footer>
  )
}

export default Footer