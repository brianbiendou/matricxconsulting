import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { 
  BarChart3, 
  Search, 
  Settings, 
  GraduationCap, 
  ArrowRight,
  Sparkles
} from 'lucide-react'

const ServicesSection: React.FC = () => {
  const { t } = useTranslation()

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      name: "MatriCx Advisory",
      description: "Conseil, stratégie, pilotage, amélioration continue, optimisation, CXM...",
      link: "/services/advisory"
    },
    {
      icon: <Search className="w-8 h-8" />,
      name: "MatriCx Survey", 
      description: "Études de marché, connaissance client, stratégie de marché / marque...",
      link: "/services/survey"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      name: "MatriCx Training",
      description: "Leader CX, formation sur mesure, certificats CX, culture centrée client...",
      link: "/services/training"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      name: "MatriCx Technology",
      description: "Outils de la relation client, innovation, CRM transformation digitale...",
      link: "/services/technology"
    }
  ]

  return (
    <section className="section-padding bg-white section-transition">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-200">
            <Sparkles size={16} className="mr-2" />
            Services
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos domaines d'expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 mb-16">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 h-48 md:h-64 border border-gray-200 transition-transform duration-300 overflow-hidden">
                
                {/* Contenu de la card */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon - Yellow */}
                  <div className="text-yellow-400 mb-2 md:mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                    <div className="w-6 h-6 md:w-8 md:h-8">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title - Bold Black */}
                  <h3 className="text-sm md:text-xl font-bold text-black mb-2 md:mb-3 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                    {service.name}
                  </h3>
                  
                  {/* Description - Regular Black */}
                  <p className="text-black text-xs md:text-sm leading-relaxed mb-2 md:mb-4 flex-grow group-hover:text-gray-800 transition-colors duration-300 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* En savoir plus avec flèche */}
                  <div className="flex items-center justify-between text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300">
                    <span className="text-xs md:text-sm font-medium">
                      En savoir plus
                    </span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
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

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in animation-delay-600">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à transformer votre expérience client ?
            </h3>
            <p className="text-xl text-gray-600">
              Découvrez comment nos solutions peuvent révolutionner votre approche client.
            </p>
          </div>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 space-x-2"
          >
            <span>Nous contacter</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection