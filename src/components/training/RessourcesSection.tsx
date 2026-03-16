import React from 'react'
import { HelpCircle, Newspaper, Calendar, UserCheck, BarChart3 } from 'lucide-react'

const ressources = [
  {
    id: 'faq',
    name: 'FAQ',
    icon: HelpCircle,
    description: 'Toutes les réponses aux questions que vous vous posez sur la formation professionnelle continue chez MatriCx.',
  },
  {
    id: 'actualites',
    name: 'Le Mag / Actualités',
    icon: Newspaper,
    description: 'Découvrez le Mag et toutes nos rubriques animées par nos experts en management, formation professionnelle, communication digitale.',
  },
  {
    id: 'evenements',
    name: 'Webinars & Événements',
    icon: Calendar,
    description: 'Webinars ou prix d\'excellence, nous vous invitons à revivre ou à rejoindre nos rendez-vous mensuels ou annuels.',
  },
  {
    id: 'experts',
    name: 'Nos Experts',
    icon: UserCheck,
    description: 'Découvrez l\'expertise de nos consultants-formateurs et rejoignez la communauté qui vous correspond.',
  },
  {
    id: 'barometres',
    name: 'Enquêtes & Baromètres',
    icon: BarChart3,
    description: 'Baromètre de la formation professionnelle, enquête sur le climat social en entreprise, études sur l\'usage des réseaux sociaux.',
  },
]

const RessourcesSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ressources</h2>
        <p className="text-gray-600">Explorez nos ressources pour approfondir vos connaissances</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ressources.map((ressource) => (
          <div
            key={ressource.id}
            className="bg-white rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:shadow-md hover:border-gray-200"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-gray-200">
              <ressource.icon className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {ressource.name}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {ressource.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RessourcesSection
