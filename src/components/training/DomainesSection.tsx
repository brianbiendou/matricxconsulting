import React, { useState } from 'react'
import { ChevronDown, Heart, MessageSquare, TrendingUp, Cpu, Monitor, Megaphone, BarChart3 } from 'lucide-react'

const domaines = [
  {
    id: 'experience-client',
    name: 'Expérience Client',
    icon: Heart,
    description: 'Maîtrisez les fondamentaux et les techniques avancées de l\'expérience client. Apprenez à concevoir des parcours clients mémorables et à mesurer la satisfaction.',
    formations: [
      'Excellence en Expérience Client (CX)',
      'Conception et optimisation des parcours clients',
      'Mesure et analyse de la satisfaction client (VOC)',
      'CX dans la stratégie d\'entreprise',
    ]
  },
  {
    id: 'relation-client',
    name: 'Relation Client',
    icon: MessageSquare,
    description: 'Développez vos compétences en gestion de la relation client. Techniques de communication, fidélisation et gestion des réclamations.',
    formations: [
      'Gestion de la relation client 360°',
      'Techniques d\'écoute active',
      'Fidélisation et rétention client',
      'Gestion des réclamations et situations difficiles',
    ]
  },
  {
    id: 'excellence-operationnelle',
    name: 'Excellence Opérationnelle',
    icon: TrendingUp,
    description: 'Optimisez vos processus et améliorez la performance de vos équipes. Lean, Six Sigma et management de la qualité.',
    formations: [
      'Management de la qualité de service',
      'Lean Management appliqué aux services',
      'Optimisation des processus',
      'KPIs et tableaux de bord',
    ]
  },
  {
    id: 'intelligence-artificielle',
    name: 'IA - Intelligence Artificielle',
    icon: Cpu,
    description: 'Intégrez l\'IA dans votre stratégie client. Chatbots, analyse prédictive et personnalisation automatisée.',
    formations: [
      'IA appliquée à l\'expérience client',
      'Chatbots et assistants virtuels',
      'Analyse prédictive et machine learning',
      'Personnalisation à grande échelle',
    ]
  },
  {
    id: 'digital',
    name: 'Digital',
    icon: Monitor,
    description: 'Maîtrisez la transformation digitale de l\'expérience client. Omnicanal, CRM et outils digitaux.',
    formations: [
      'Transformation digitale de l\'expérience client',
      'Stratégie omnicanale',
      'CRM et outils de la relation client',
      'E-commerce et expérience utilisateur',
    ]
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: Megaphone,
    description: 'Améliorez votre communication client. Écriture, prise de parole et communication de crise.',
    formations: [
      'Communication écrite professionnelle',
      'Prise de parole et présentation',
      'Communication de crise',
      'Storytelling et brand content',
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: BarChart3,
    description: 'Développez vos compétences marketing. Acquisition, fidélisation et analyse de données.',
    formations: [
      'Marketing relationnel',
      'Customer Data Platform (CDP)',
      'Marketing automation',
      'Analyse et segmentation client',
    ]
  },
]

const DomainesSection: React.FC = () => {
  const [openDomaine, setOpenDomaine] = useState<string | null>(null)

  const toggleDomaine = (id: string) => {
    setOpenDomaine(openDomaine === id ? null : id)
  }

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">Domaines de formation</h2>
        <p className="text-gray-600">Explorez nos 7 domaines d'expertise pour développer vos compétences</p>
      </div>

      <div className="space-y-3">
        {domaines.map((domaine) => (
          <div 
            key={domaine.id}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            {/* Header du domaine */}
            <button
              onClick={() => toggleDomaine(domaine.id)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <domaine.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600">{domaine.name}</h3>
                  <p className="text-sm text-gray-500">{domaine.formations.length} formations disponibles</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openDomaine === domaine.id ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Contenu déroulant */}
            {openDomaine === domaine.id && (
              <div className="px-5 pb-5 animate-fade-in">
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 mb-4">{domaine.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Formations disponibles :</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {domaine.formations.map((formation, idx) => (
                        <li 
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2"
                        >
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                          {formation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default DomainesSection
