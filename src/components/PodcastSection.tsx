import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useSanityPodcastStats } from '../hooks/useSanityContent'
import { PlayCircle, Headphones } from 'lucide-react'
import podcastImage from '../images/podcast.jpeg'

const PodcastSection: React.FC = () => {
  const { t, currentLanguage } = useTranslation()
  const { podcastStats } = useSanityPodcastStats()
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

  // Stats - données Sanity ou fallback
  const stats = (podcastStats && podcastStats.length > 0) ? podcastStats.map(stat => ({
    value: stat.value,
    label: stat.label[currentLanguage as 'fr' | 'en'] || stat.label.fr
  })) : [
    { value: '20+', label: 'Épisodes' },
    { value: '5K+', label: 'Auditeurs' },
    { value: '4.8⭐', label: 'Note' }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden section-transition">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-200 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image à gauche */}
          <div className={`relative transform transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}>
            <a 
              href="https://www.youtube.com/@mcx-1906" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={podcastImage} 
                alt="Podcast MatriCx" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay avec icône */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <PlayCircle size={64} className="text-white mx-auto mb-3 animate-pulse" />
                  <p className="text-white font-semibold text-lg">{t('podcast.cta')}</p>
                </div>
              </div>
            </a>
            {/* Badge "Nouveau" */}
            <div className={`absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg pointer-events-none transform transition-all duration-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <Headphones size={16} className="inline mr-2" />
              {t('podcast.badge')}
            </div>
          </div>

          {/* Contenu à droite */}
          <div className={`space-y-6 transform transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className={`inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm border border-yellow-200 transform transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`} style={{ transitionDelay: '300ms' }}>
              <Headphones size={18} className="mr-2" />
              {t('podcast.badge')}
            </div>
            <div className={`space-y-3 transform transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-600">
                {t('podcast.title')}
              </h2>
              <p className="text-xl text-primary-600 font-semibold">
                {t('podcast.subtitle')}
              </p>
            </div>

            <p className={`text-lg text-secondary-500 leading-relaxed transform transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '500ms' }}>
              {t('podcast.description')}
            </p>

            {/* Bouton CTA */}
            <div className={`flex gap-4 pt-4 transform transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '600ms' }}>
              <a 
                href="https://www.youtube.com/@mcx-1906" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-3 group"
              >
                <PlayCircle size={20} />
                <span>{t('podcast.cta')}</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>

            {/* Statistiques - Sanity ou fallback */}
            <div className={`grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 transform transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '700ms' }}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transform transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PodcastSection
