import React from 'react'
import TrainingLayout from '../../../components/training/TrainingLayout'
import DomainesSection from '../../../components/training/DomainesSection'
import RessourcesSection from '../../../components/training/RessourcesSection'
import { 
  GraduationCap, 
  Users, 
  Building, 
  Award, 
  Monitor, 
  Lightbulb,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react'

const TrainingHome: React.FC = () => {
  const typesFormation = [
    {
      icon: Users,
      title: 'Formation Inter-entreprise',
      description: '1000 formations métier, transversales et sectorielles dispensées dans les centres de formation MatriCx pour répondre aux besoins individuels de vos collaborateurs.',
    },
    {
      icon: Building,
      title: 'Formation Intra-entreprise',
      description: 'La formation de votre choix, à la date de votre choix dispensée dans votre organisation pour vos collaborateurs. 900 formations disponibles.',
    },
    {
      icon: Lightbulb,
      title: 'Formation Sur-mesure',
      description: '1000 entreprises font confiance chaque année à l\'offre sur-mesure MatriCx pour développer leurs talents et accompagner leurs transformations.',
    },
    {
      icon: Award,
      title: 'Formations Certifiantes & Diplômantes',
      description: 'Afin de répondre aux besoins croissants des individus et des entreprises pour une reconnaissance officielle des compétences, nous proposons près de 150 formations certifiantes.',
    },
    {
      icon: Monitor,
      title: 'Digital Learning & Innovation',
      description: 'Découvrez nos solutions d\'apprentissage digital avec nos modules e-learning, classes virtuelles, vidéos, et les nouveautés en présentiel.',
    },
    {
      icon: GraduationCap,
      title: 'Formations E-learning',
      description: 'Leader en ingénierie pédagogique multimodale. MatriCx propose une offre de formation variée multi-supports, multi-formats et multilingues.',
    },
  ]

  const stats = [
    { value: '10+', label: 'Années d\'expérience' },
    { value: '500+', label: 'Entreprises formées' },
    { value: '5000+', label: 'Apprenants certifiés' },
    { value: '100%', label: 'Taux de satisfaction' },
  ]

  return (
    <TrainingLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-600 text-white rounded-xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-lg rotate-12"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-20 left-32 w-24 h-24 border border-white rounded-lg -rotate-12"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-8 py-20 lg:py-24 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              MatriCx
              <span className="block text-yellow-400">Training & Certification</span>
            </h1>
              
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Leader CX en Afrique. Développez vos compétences avec nos formations certifiantes en Expérience Client. 
                Programmes sur mesure, certifications internationales et coaching personnalisé.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all flex items-center gap-2">
                  Explorer nos formations
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-900 font-medium py-3 px-6 rounded-xl transition-all hover:bg-gray-100">
                  Télécharger le catalogue
                </button>
              </div>

              {/* Stats dans la Hero */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/20">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
          </div>
        </section>

        {/* Types de formation */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Nos solutions de formation</h2>
            <p className="text-gray-600">Choisissez le format qui correspond le mieux à vos besoins</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {typesFormation.map((type, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="font-semibold text-yellow-600 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Domaines de formation */}
        <section className="max-w-6xl mx-auto px-6">
          <DomainesSection />
        </section>

        {/* Pourquoi nous choisir */}
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pourquoi choisir MatriCx Training ?</h2>
              <p className="text-gray-600">L'excellence de la formation CX en Afrique</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Star, title: 'Expertise reconnue', desc: 'Plus de 10 ans d\'expérience en CX' },
                { icon: Award, title: 'Certifications', desc: 'Certifications internationales reconnues' },
                { icon: Users, title: 'Formateurs experts', desc: 'Praticiens et consultants expérimentés' },
                { icon: CheckCircle, title: 'Résultats prouvés', desc: '100% de satisfaction client' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                  <div className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </TrainingLayout>
  )
}

export default TrainingHome
