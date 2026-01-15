import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { ArrowRight, Sparkles } from 'lucide-react'

// Images Unsplash pour les cartes bento (environnement/décor professionnel)
const IMAGES = {
  // Training: Salle de conférence moderne avec lumière naturelle
  training: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
  // Advisory: Bureau moderne avec vue panoramique
  advisory: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  // Technology: Dashboard CRM / Interface email sur écran
  technology: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  // Survey: Graphiques et données analytiques
  survey: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  // Care: Espace de travail collaboratif chaleureux
  care: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'
}

// Styles pour les text-shadow
const textShadowDark = { textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }
const textShadowLight = { textShadow: '1px 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.5)' }

const ServicesSection: React.FC = () => {
  const { t, currentLanguage } = useTranslation()

  // Configuration des services - Nom MatriCx en titre principal, tagline dans description
  const services = [
    {
      id: 'training',
      name: 'MatriCx Training & Certification',
      description: currentLanguage === 'fr' 
        ? 'Leader CX en Afrique. Développez vos compétences avec nos formations certifiantes en Expérience Client. Programmes sur mesure, certifications internationales et coaching personnalisé.'
        : 'CX Leader in Africa. Develop your skills with our certified Customer Experience training programs. Customized programs, international certifications and personalized coaching.',
      link: '/services/training',
      image: IMAGES.training,
      buttonText: currentLanguage === 'fr' ? 'Découvrir nos formations' : 'Discover our training'
    },
    {
      id: 'advisory',
      name: 'MatriCx Advisory',
      description: currentLanguage === 'fr'
        ? 'Conseil stratégique, pilotage et optimisation de votre stratégie CX & financière pour une croissance durable.'
        : 'Strategic consulting, management and optimization of your CX & financial strategy for sustainable growth.',
      link: '/services/advisory',
      image: IMAGES.advisory,
      buttonText: currentLanguage === 'fr' ? 'Accélérez votre croissance' : 'Accelerate your growth'
    },
    {
      id: 'technology',
      name: 'MatriCx Technology',
      description: currentLanguage === 'fr'
        ? 'Transformation digitale, CRM et outils de la relation client pour moderniser votre entreprise.'
        : 'Digital transformation, CRM and customer relationship tools to modernize your business.',
      link: '/services/technology',
      image: IMAGES.technology,
      buttonText: currentLanguage === 'fr' ? 'Modernisez-vous maintenant' : 'Modernize now'
    },
    {
      id: 'survey',
      name: 'MatriCx Survey',
      description: currentLanguage === 'fr'
        ? 'Études & analyses de marché, connaissance client et insights approfondis pour éclairer vos décisions stratégiques.'
        : 'Market studies & analysis, customer insights and in-depth research to inform your strategic decisions.',
      link: '/services/survey',
      image: IMAGES.survey,
      buttonText: currentLanguage === 'fr' ? 'Prenez les bonnes décisions' : 'Make the right decisions'
    },
    {
      id: 'care',
      name: 'MatriCx Care',
      description: currentLanguage === 'fr'
        ? 'Externalisation et sous-traitance de votre Relation Client. "We Care Your Business"'
        : 'Outsourcing of your Customer Relations. "We Care Your Business"',
      link: null,
      image: IMAGES.care,
      buttonText: currentLanguage === 'fr' ? 'Bientôt disponible' : 'Coming soon',
      comingSoon: true
    }
  ]

  return (
    <section className="section-padding bg-white section-transition border-b border-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Grande carte - Training (occupe 7 colonnes sur 12) */}
          <Link 
            to={services[0].link!}
            className="lg:col-span-7 group relative overflow-hidden rounded-2xl lg:rounded-3xl min-h-[400px] lg:min-h-[520px]"
          >
            {/* Image de fond */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${services[0].image})` }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            
            {/* Contenu */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 lg:p-10">
              {/* Titre en haut */}
              <div className="mb-4">
                <span 
                  style={{ 
                    display: 'block',
                    fontSize: '1.8vw',
                    fontWeight: 900,
                    color: 'white',
                    lineHeight: 0.95,
                    textShadow: '4px 4px 16px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.8)'
                  }}
                >
                  MatriCx
                </span>
                <span 
                  style={{ 
                    display: 'block',
                    fontSize: '1.8vw',
                    fontWeight: 900,
                    color: '#FDC300',
                    lineHeight: 0.95,
                    textShadow: '4px 4px 16px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.8)'
                  }}
                >
                  Training &
                </span>
                <span 
                  style={{ 
                    display: 'block',
                    fontSize: '1.8vw',
                    fontWeight: 900,
                    color: 'white',
                    lineHeight: 0.95,
                    textShadow: '4px 4px 16px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.8)'
                  }}
                >
                  Certification
                </span>
              </div>
              
              {/* Description et bouton en bas */}
              <div>
                <p 
                  className="text-white text-base lg:text-lg max-w-lg mb-6 leading-relaxed font-medium"
                  style={textShadowDark}
                >
                  {services[0].description}
                </p>
                <span className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 group-hover:shadow-lg">
                  {services[0].buttonText}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          {/* Colonne droite - 2 cartes empilées (5 colonnes sur 12) */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
            
            {/* Carte Advisory - Style clair avec image */}
            <Link 
              to={services[1].link!}
              className="group relative overflow-hidden rounded-2xl lg:rounded-3xl min-h-[200px] lg:min-h-[250px]"
            >
              {/* Image de fond */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${services[1].image})` }}
              />
              {/* Overlay clair */}
              <div className="absolute inset-0 bg-white/85" />
              
              {/* Contenu */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 lg:p-8">
                <div>
                  <h3 
                    className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-2"
                    style={textShadowLight}
                  >
                    {services[1].name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    {services[1].description}
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2.5 rounded-full transition-all duration-300 text-sm">
                    {services[1].buttonText}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Carte Technology - Style sombre avec image */}
            <Link 
              to={services[2].link!}
              className="group relative overflow-hidden rounded-2xl lg:rounded-3xl min-h-[200px] lg:min-h-[250px]"
            >
              {/* Image de fond */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${services[2].image})` }}
              />
              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-black/70" />
              
              {/* Pattern décoratif */}
              <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-30">
                <svg viewBox="0 0 200 200" className="w-full h-full text-yellow-400">
                  <defs>
                    <radialGradient id="techGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.3"/>
                  <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.3"/>
                </svg>
              </div>
              
              {/* Contenu */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 lg:p-8">
                <div>
                  <h3 
                    className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2"
                    style={textShadowDark}
                  >
                    {services[2].name}
                  </h3>
                  <p className="text-white text-sm leading-relaxed font-medium" style={textShadowDark}>
                    {services[2].description}
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2.5 rounded-full transition-all duration-300 text-sm">
                    {services[2].buttonText}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Rangée du bas - 2 cartes de taille égale */}
          <Link 
            to={services[3].link!}
            className="lg:col-span-6 group relative overflow-hidden rounded-2xl lg:rounded-3xl min-h-[220px] lg:min-h-[280px]"
          >
            {/* Image de fond */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${services[3].image})` }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            
            {/* Contenu */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
              <h3 
                className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-3"
                style={textShadowDark}
              >
                {services[3].name}
              </h3>
              <p 
                className="text-white text-sm mb-4 max-w-md font-semibold"
                style={textShadowDark}
              >
                {services[3].description}
              </p>
              <div>
                <span className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2.5 rounded-full transition-all duration-300 text-sm">
                  {services[3].buttonText}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          {/* Carte Care - Coming Soon */}
          <div className="lg:col-span-6 group relative overflow-hidden rounded-2xl lg:rounded-3xl min-h-[220px] lg:min-h-[280px]">
            {/* Image de fond */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${services[4].image})` }}
            />
            {/* Overlay plus prononcé pour "coming soon" */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
            
            {/* Contenu */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
              <h3 
                className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-3"
                style={textShadowDark}
              >
                {services[4].name}
              </h3>
              <p 
                className="text-white/80 text-sm mb-4 max-w-md font-medium"
                style={textShadowDark}
              >
                {services[4].description}
              </p>
              <div>
                <span className="inline-flex items-center bg-white/20 text-white/80 font-medium px-5 py-2.5 rounded-full text-sm cursor-not-allowed border border-white/30">
                  {services[4].buttonText}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-12 lg:mt-16 animate-fade-in animation-delay-600">
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