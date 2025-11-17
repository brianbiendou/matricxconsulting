import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { Mail, ArrowRight, TrendingUp } from 'lucide-react'
import ImageCarousel from './ImageCarousel'

const HeroSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden pt-32 pb-8 lg:pb-12 section-transition">
      {/* Background Elements - MatriCx Colors */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full opacity-25 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full opacity-20 blur-3xl animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Badge MatriCx Styling */}
        <div className="block lg:hidden mb-6 text-center animate-fade-in">
          <div className="inline-flex items-center bg-primary-100 border border-primary-200 text-secondary-700 px-6 py-3 rounded-full text-sm font-semibold font-primary shadow-sm">
            <TrendingUp size={16} className="mr-2 text-accent-500" />
            {t('hero.badge')}
          </div>
        </div>

        {/* Layout Mobile: Carousel puis texte | Desktop: Texte à gauche, Carousel à droite */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image Carousel - Ordre 1 mobile, ordre 2 desktop */}
          <div className="relative animate-fade-in animation-delay-200 order-1 lg:order-2 w-full">
            <ImageCarousel />
          </div>

          {/* Content - Ordre 2 mobile, ordre 1 desktop */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              {/* Badge MatriCx Desktop */}
              <div className="hidden lg:inline-flex items-center bg-primary-100 border border-primary-200 text-secondary-700 px-6 py-3 rounded-full text-sm font-semibold font-primary shadow-sm">
                <TrendingUp size={16} className="mr-2 text-accent-500" />
                {t('hero.badge')}
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-secondary-600">
                <span className="block">{t('hero.heroLine1')}</span>
                <span className="block">{t('hero.heroLine2')}</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">{t('hero.heroLine3')}</span>
                <span className="block">{t('hero.heroLine4')}</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">
                  {t('hero.heroLine5')}
                </span>
              </h1>
              
              <p className="text-base lg:text-lg text-secondary-500 leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 lg:px-0 font-secondary">
                {t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons MatriCx */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <Link to="/contact" className="btn-primary flex items-center justify-center space-x-3 group">
                <Mail size={20} />
                <span>{t('hero.cta')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link to="/services" className="btn-secondary flex items-center justify-center space-x-2 bg-transparent border-2 border-secondary-300 text-secondary-600 hover:bg-secondary-50 hover:border-accent-400 hover:text-accent-600">
                <span>{t('common.learnMore')}</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-200 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary-600">100+</div>
                <div className="text-xs lg:text-sm text-gray-600">{t('hero.stats.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary-600">3 ans</div>
                <div className="text-xs lg:text-sm text-gray-600">{t('hero.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary-600">95%</div>
                <div className="text-xs lg:text-sm text-gray-600">{t('hero.stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection