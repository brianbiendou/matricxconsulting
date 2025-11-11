import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { ArrowRight, Target, Headphones, Monitor, GraduationCap } from 'lucide-react'

const MatrixSection = () => {
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
      { threshold: 0.2 }
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
      title: t('matrixSection.services.strategy.title'),
      icon: <Target className="w-8 h-8" />
    },
    {
      title: t('matrixSection.services.listening.title'),
      icon: <Headphones className="w-8 h-8" />
    },
    {
      title: t('matrixSection.services.digital.title'),
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: t('matrixSection.services.training.title'),
      icon: <GraduationCap className="w-8 h-8" />
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-blue-50 relative overflow-hidden section-transition" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* En-tête dynamique avec badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <Target size={18} className="mr-2" />
            {t('matrixSection.badge')}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            {t('matrixSection.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('matrixSection.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Services en cercles */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-48 h-48 rounded-full bg-white shadow-lg border-2 border-yellow-400 flex flex-col items-center justify-center p-6 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  {/* Icône */}
                  <div className="text-yellow-500 mb-3 transform transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>

                  {/* Titre en gras */}
                  <h3 className="text-lg font-bold text-gray-900 text-center">
                    <strong>{service.title}</strong>
                  </h3>


                </div>
              </div>
            ))}
          </div>
        </div> 

        {/* CTA avec animation */}
        <div className="text-center animate-fade-in animation-delay-600">
          <button className="btn-primary group inline-flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <span className="text-lg">{t('matrixSection.cta')}</span>
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Éléments de fond animés */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 animate-float"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary-100 rounded-full opacity-30 blur-3xl translate-x-1/2 animate-float animation-delay-400"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl animate-float animation-delay-800"></div>
        </div>
      </div>
    </section>
  )
}

export default MatrixSection