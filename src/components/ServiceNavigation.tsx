import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Lightbulb, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'

const ServiceNavigation: React.FC = () => {
  const location = useLocation()

  const services = [
    {
      id: 'survey',
      name: 'MatriCx Survey',
      description: 'Études de marché, connaissance client',
      icon: <Search className="w-6 h-6" />,
      path: '/services/survey',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-400'
    },
    {
      id: 'technology',
      name: 'MatriCx Technology',
      description: 'Solutions CRM et transformation digitale',
      icon: <Lightbulb className="w-6 h-6" />,
      path: '/services/technology',
      color: 'accent',
      gradient: 'from-accent-500 to-accent-400'
    },
    {
      id: 'training',
      name: 'MatriCx Training',
      description: 'Formation et certification CX',
      icon: <GraduationCap className="w-6 h-6" />,
      path: '/services/training',
      color: 'secondary',
      gradient: 'from-secondary-500 to-secondary-400'
    },
    {
      id: 'advisory',
      name: 'MatriCx Advisory',
      description: 'Conseil stratégique et pilotage CX',
      icon: <Briefcase className="w-6 h-6" />,
      path: '/services/advisory',
      color: 'primary',
      gradient: 'from-primary-600 to-primary-500'
    }
  ]

  const currentService = services.find(service => location.pathname === service.path)
  const otherServices = services.filter(service => location.pathname !== service.path)

  if (!currentService || otherServices.length === 0) return null

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Découvrez nos autres services
          </h2>
          <p className="text-lg text-gray-600">
            Une expertise complète pour accompagner votre transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {otherServices.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full hover-lift">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Global */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Besoin d'une solution complète ?
            </h3>
            <p className="text-lg mb-6 text-black/80 max-w-2xl mx-auto">
              Nos experts peuvent combiner plusieurs services pour créer une solution parfaitement adaptée à vos besoins spécifiques.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-gray-900 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contactez nos experts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceNavigation