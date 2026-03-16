import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRight, Target, BarChart3, Settings, GraduationCap } from 'lucide-react'

const Services: React.FC = () => {
  const { t, currentLanguage } = useTranslation()

  const getServiceFeatures = (serviceKey: string) => {
    const features = currentLanguage === 'fr' ? {
      advisory: ['Conseil stratégique', 'Pilotage de projets', 'Amélioration continue', 'Optimisation processus'],
      survey: ['Études de marché', 'Analyses concurrentielles', 'Connaissance client', 'Stratégie de marque'],
      technology: ['Outils CRM', 'Transformation digitale', 'Innovation technologique', 'Solutions sur mesure'],
      training: ['Formation sur mesure', 'Certificats CX', 'Culture client', 'Leadership CX']
    } : {
      advisory: ['Strategic consulting', 'Project management', 'Continuous improvement', 'Process optimization'],
      survey: ['Market research', 'Competitive analysis', 'Customer knowledge', 'Brand strategy'],
      technology: ['CRM tools', 'Digital transformation', 'Technological innovation', 'Custom solutions'],
      training: ['Custom training', 'CX certificates', 'Customer culture', 'CX Leadership']
    }
    return features[serviceKey as keyof typeof features] || []
  }

  // Mapper les services Sanity ou utiliser les données hardcodées
  const defaultServices = [
    {
      id: 'advisory',
      name: t('services.advisory.name'),
      description: t('services.advisory.description'),
      icon: Target,
      color: 'primary',
      route: '/services/advisory',
      features: getServiceFeatures('advisory')
    },
    {
      id: 'survey',
      name: t('services.survey.name'),
      description: t('services.survey.description'),
      icon: BarChart3,
      color: 'accent',
      route: '/services/survey',
      features: getServiceFeatures('survey')
    },
    {
      id: 'technology',
      name: t('services.technology.name'),
      description: t('services.technology.description'),
      icon: Settings,
      color: 'secondary',
      route: '/services/technology',
      features: getServiceFeatures('technology')
    },
    {
      id: 'training',
      name: t('services.training.name'),
      description: t('services.training.description'),
      icon: GraduationCap,
      color: 'tertiary',
      route: '/services/training',
      features: getServiceFeatures('training')
    }
  ]



  const services = defaultServices

  return (
    <div key={currentLanguage} className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-32 min-h-[80vh] flex items-center relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat opacity-85"
            style={{
              backgroundImage: 'url(/service.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 8%'
            }}
          ></div>
          
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/20"></div>
          
          <div className="w-full max-w-none px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid grid-cols-1 gap-12 items-center">
              {/* Content - Centré maintenant */}
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 shadow-lg">
                  {t('services.header')}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-primary" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                  {t('services.title')}
                </h1>
                <p className="text-xl text-white mb-8 font-secondary" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
                  {t('services.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-primary">
                Solutions MatriCx
              </h2>
              <p className="text-xl text-gray-600 font-secondary leading-relaxed">
                Quatre solutions intégrées pour révolutionner la relation avec vos clients 
                et accélérer la croissance de votre entreprise en Afrique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <Link 
                    key={service.id} 
                    to={service.route}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col relative overflow-hidden max-w-xs mx-auto w-full cursor-pointer group"
                  >
                    {/* Colored top border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${
                      service.color === 'primary' ? 'bg-yellow-400' :
                      service.color === 'accent' ? 'bg-blue-500' :
                      service.color === 'secondary' ? 'bg-gray-600' : 'bg-gray-400'
                    }`}></div>

                    {/* Icon at the top */}
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 ${
                        service.color === 'primary' ? 'bg-yellow-50' :
                        service.color === 'accent' ? 'bg-blue-50' :
                        service.color === 'secondary' ? 'bg-gray-50' : 'bg-gray-50'
                      }`}>
                        <IconComponent size={28} className={`transition-all duration-300 group-hover:scale-110 ${
                          service.color === 'primary' ? 'text-yellow-600' :
                          service.color === 'accent' ? 'text-blue-600' :
                          service.color === 'secondary' ? 'text-gray-600' : 'text-gray-600'
                        }`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-primary group-hover:text-gray-700 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 font-secondary text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="mb-6 flex-grow">
                      <h4 className="text-xs font-semibold text-gray-700 mb-3 tracking-wide">
                        {t('services.ourExpertises')}
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 font-secondary text-xs">
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              service.color === 'primary' ? 'bg-yellow-400' :
                              service.color === 'accent' ? 'bg-blue-500' :
                              service.color === 'secondary' ? 'bg-gray-600' : 'bg-gray-400'
                            }`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto text-center">
                      <div className={`inline-flex items-center space-x-2 px-6 py-2 rounded-full font-semibold text-xs transition-all duration-300 transform group-hover:scale-105 shadow-md group-hover:shadow-lg ${
                        service.color === 'primary' ? 'bg-yellow-400 group-hover:bg-yellow-500 text-black' :
                        service.color === 'accent' ? 'bg-blue-500 group-hover:bg-blue-600 text-white' :
                        service.color === 'secondary' ? 'bg-gray-600 group-hover:bg-gray-700 text-white' : 'bg-gray-400 group-hover:bg-gray-500 text-white'
                      }`}>
                        <span>{t('services.learnMore')}</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-primary">
              Un plan pour améliorer votre expérience client ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-secondary max-w-2xl mx-auto">
              Nos experts toujours prêts à travailler avec vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black hover:text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ color: '#000000' }}
              >
                Contactez-nous
              </Link>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 hover:text-gray-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Services