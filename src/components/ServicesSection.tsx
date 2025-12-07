import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { 
  BarChart3, 
  Search, 
  Settings, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  HeartHandshake,
  CalendarDays,
  Award
} from 'lucide-react'

const ServicesSection: React.FC = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      name: t('services.advisory.name'),
      description: t('services.advisory.description'),
      link: "/services/advisory"
    },
    {
      icon: <Search className="w-8 h-8" />,
      name: t('services.survey.name'), 
      description: t('services.survey.description'),
      link: "/services/survey"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      name: t('services.training.name'),
      description: t('services.training.description'),
      link: "/services/training"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      name: t('services.technology.name'),
      description: t('services.technology.description'),
      link: "/services/technology"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      name: t('services.care.name'),
      description: t('services.care.description'),
      link: "/services/care"
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      name: t('services.summit.name'),
      description: t('services.summit.description'),
      link: "/services/summit"
    },
    {
      icon: <Award className="w-8 h-8" />,
      name: t('services.mcxi.name'),
      description: t('services.mcxi.description'),
      link: "/services/mcxi"
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-white section-transition border-b border-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm border border-yellow-200">
            <Sparkles size={18} className="mr-2" />
            {t('services.header')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-600 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-primary-600 font-semibold max-w-3xl mx-auto leading-relaxed mb-6">
            {t('services.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid - 3 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className={`group block ${index === 6 ? 'sm:col-span-2 lg:col-span-3' : ''} transform transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`relative bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-yellow-600 transition-all duration-300 overflow-hidden hover:shadow-xl hover:from-yellow-500 hover:to-yellow-600 ${index === 6 ? 'min-h-[120px] md:h-40' : 'min-h-[200px] md:h-64'}`}>
                
                {/* Contenu de la card */}
                <div className={`relative z-10 h-full ${index === 6 ? 'flex flex-row items-center gap-4 md:gap-6' : 'flex flex-col'}`}>
                  {/* Icon - Black */}
                  <div className={`text-black transition-colors duration-300 ${index === 6 ? 'mb-0 flex-shrink-0' : 'mb-2 md:mb-4'}`}>
                    <div className="w-6 h-6 md:w-8 md:h-8">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content wrapper pour la dernière carte */}
                  <div className={`${index === 6 ? 'flex-grow min-w-0' : 'flex flex-col flex-grow'}`}>
                    {/* Title - Bold Black */}
                    <h3 className={`font-bold text-black transition-colors duration-300 leading-tight ${index === 6 ? 'text-base md:text-2xl mb-1' : 'text-sm md:text-xl mb-2 md:mb-3'}`}>
                      {service.name}
                    </h3>
                    
                    {/* Description - Regular Black */}
                    <p className={`text-black leading-relaxed transition-colors duration-300 ${index === 6 ? 'text-xs md:text-base' : 'text-xs md:text-sm mb-3 md:mb-4'}`}>
                      {service.description}
                    </p>
                  </div>
                  
                  {/* En savoir plus avec flèche */}
                  <div className={`flex items-center text-black group-hover:text-gray-900 transition-colors duration-300 ${index === 6 ? 'flex-shrink-0' : 'justify-between mt-auto'}`}>
                    <span className="text-xs md:text-sm font-medium border-2 border-black px-3 py-1.5 rounded-lg group-hover:bg-black group-hover:text-yellow-400 transition-all duration-300 whitespace-nowrap">
                      {t('services.learnMore')}
                    </span>
                    {index !== 6 && <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Styles CSS pour les animations de vagues */}
        <style jsx>{`
          @keyframes wave-oscillate {
            0%, 100% { transform: translateY(0px) skewX(0deg); }
            25% { transform: translateY(-2px) skewX(1deg); }
            50% { transform: translateY(0px) skewX(0deg); }
            75% { transform: translateY(2px) skewX(-1deg); }
          }
          
          @keyframes wave-oscillate-reverse {
            0%, 100% { transform: translateY(0px) skewX(0deg); }
            25% { transform: translateY(2px) skewX(-1deg); }
            50% { transform: translateY(0px) skewX(0deg); }
            75% { transform: translateY(-2px) skewX(1deg); }
          }
          
          @keyframes wave-shimmer {
            0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
            33% { opacity: 0.6; transform: scale(1.05) rotate(0.5deg); }
            66% { opacity: 0.4; transform: scale(0.98) rotate(-0.5deg); }
          }
        `}</style>

        {/* Bottom CTA Text */}
        <div className="text-center animate-fade-in animation-delay-600">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('servicesSection.ctaTitle')}
            </h3>
            <p className="text-xl text-gray-600">
              {t('servicesSection.ctaSubtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection