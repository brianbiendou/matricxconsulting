import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Building, Briefcase, Award, Monitor, Users } from 'lucide-react'

const About: React.FC = () => {
  const { currentLanguage } = useTranslation()

  const sections = [
    {
      icon: <Building size={32} className="text-primary-500" />,
      title: currentLanguage === 'fr' ? 'Notre Entreprise' : 'Our Company',
      description: currentLanguage === 'fr' 
        ? 'Découvrez MatriCx Consulting, votre partenaire de confiance en conseil en Afrique.'
        : 'Discover MatriCx Consulting, your trusted consulting partner in Africa.',
      link: '/about/company'
    },
    {
      icon: <Briefcase size={32} className="text-primary-500" />,
      title: currentLanguage === 'fr' ? 'Carrières' : 'Careers',
      description: currentLanguage === 'fr'
        ? 'Rejoignez notre équipe dynamique et contribuez à façonner l\'avenir du conseil.'
        : 'Join our dynamic team and help shape the future of consulting.',
      link: '/about/careers'
    },
    {
      icon: <Award size={32} className="text-primary-500" />,
      title: currentLanguage === 'fr' ? 'Notre Expérience' : 'Our Experience',
      description: currentLanguage === 'fr'
        ? 'Plus de 10 ans d\'expertise au service de nos clients en Afrique.'
        : 'Over 10 years of expertise serving our clients across Africa.',
      link: '/about/experience'
    },
    {
      icon: <Monitor size={32} className="text-primary-500" />,
      title: currentLanguage === 'fr' ? 'Médias' : 'Media',
      description: currentLanguage === 'fr'
        ? 'Suivez notre actualité et nos dernières réalisations.'
        : 'Follow our news and latest achievements.',
      link: '/about/media'
    },
    {
      icon: <Users size={32} className="text-primary-500" />,
      title: currentLanguage === 'fr' ? 'Nos Partenaires' : 'Our Partners',
      description: currentLanguage === 'fr'
        ? 'Découvrez notre réseau de partenaires de confiance.'
        : 'Discover our network of trusted partners.',
      link: '/about/partners'
    }
  ]

  return (
    <div key={currentLanguage} className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            {/* Grille animée */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
              animation: 'moveGrid 15s linear infinite',
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {currentLanguage === 'fr' 
                  ? 'Innovons Ensemble pour l\'Afrique'
                  : 'Innovating Together for Africa'}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                {currentLanguage === 'fr'
                  ? 'Découvrez comment nous transformons les défis en opportunités et façonnons l\'avenir du conseil en Afrique.'
                  : 'Discover how we transform challenges into opportunities and shape the future of consulting in Africa.'}
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
        </section>

        {/* Grid des sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    to={section.link}
                    className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full transform hover:-translate-y-1"
                  >
                    <div className="mb-4">{section.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Mission et Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentLanguage === 'fr' ? 'Notre Mission et Vision' : 'Our Mission and Vision'}
                </h2>
                <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">
                    {currentLanguage === 'fr' ? 'Notre Mission' : 'Our Mission'}
                  </h3>
                  <p className="text-gray-600">
                    {currentLanguage === 'fr'
                      ? 'Accompagner les entreprises africaines dans leur transformation digitale et leur croissance durable, en fournissant des solutions innovantes et adaptées à leurs besoins spécifiques.'
                      : 'Support African companies in their digital transformation and sustainable growth by providing innovative solutions tailored to their specific needs.'}
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">
                    {currentLanguage === 'fr' ? 'Notre Vision' : 'Our Vision'}
                  </h3>
                  <p className="text-gray-600">
                    {currentLanguage === 'fr'
                      ? 'Devenir le leader africain du conseil en transformation digitale et en expérience client, reconnu pour notre expertise et notre impact positif sur le développement du continent.'
                      : 'Become the African leader in digital transformation and customer experience consulting, recognized for our expertise and positive impact on the continent\'s development.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About