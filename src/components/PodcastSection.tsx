import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { PlayCircle, Headphones } from 'lucide-react'
import podcastImage from '../images/podcast.jpeg'

const PodcastSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden section-transition">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-200 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image à gauche */}
          <div className="relative animate-fade-in">
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
            <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce pointer-events-none">
              <Headphones size={16} className="inline mr-2" />
              {t('podcast.badge')}
            </div>
          </div>

          {/* Contenu à droite */}
          <div className="space-y-6 animate-fade-in animation-delay-200">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm border border-yellow-200">
              <Headphones size={18} className="mr-2" />
              {t('podcast.badge')}
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-600">
                {t('podcast.title')}
              </h2>
              <p className="text-xl text-primary-600 font-semibold">
                {t('podcast.subtitle')}
              </p>
            </div>

            <p className="text-lg text-secondary-500 leading-relaxed">
              {t('podcast.description')}
            </p>

            {/* Bouton CTA */}
            <div className="flex gap-4 pt-4">
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

            {/* Statistiques optionnelles */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">20+</div>
                <div className="text-sm text-gray-600">Épisodes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">5K+</div>
                <div className="text-sm text-gray-600">Auditeurs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4.8⭐</div>
                <div className="text-sm text-gray-600">Note</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PodcastSection
