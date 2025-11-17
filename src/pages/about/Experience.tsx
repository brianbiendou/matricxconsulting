import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Clock, Users, BarChart, ArrowRight, Star } from 'lucide-react';

const Experience: React.FC = () => {
  const stats = [
    {
      value: '200+',
      label: 'Projets Réalisés'
    },
    {
      value: '15+',
      label: 'Pays Africains'
    },
    {
      value: '95%',
      label: 'Clients Satisfaits'
    },
    {
      value: '50M€+',
      label: 'Impact Généré'
    }
  ];

  const projects = [
    {
      title: 'Transformation Digitale Bancaire',
      client: 'Grande Banque Ouest-Africaine',
      description: 'Modernisation complète des services bancaires numériques',
      impact: 'Augmentation de 300% des transactions en ligne',
      duration: '18 mois',
      tags: ['Finance', 'Digital Banking', 'UX Design']
    },
    {
      title: 'Optimisation CX Télécom',
      client: 'Opérateur Télécom Panafricain',
      description: 'Refonte de l\'expérience client multicanal',
      impact: 'Réduction de 45% du temps de résolution',
      duration: '12 mois',
      tags: ['Télécom', 'CX', 'Analytics']
    },
    {
      title: 'Plateforme E-commerce',
      client: 'Distributeur Régional',
      description: 'Création d\'une marketplace B2B innovante',
      impact: '+200% de croissance des ventes en ligne',
      duration: '8 mois',
      tags: ['E-commerce', 'B2B', 'Tech']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section Animée */}
        <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* Grille animée */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
              animation: 'moveGrid 15s linear infinite',
            }}></div>
          </div>
          
          <div className="container-custom relative z-10 h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center w-full">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 mt-16 animate-slide-up">
                Notre Expérience
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                Des projets innovants qui transforment l'Afrique
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="group transform hover:scale-110 transition-all duration-300"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce">
                      {stat.value}
                    </div>
                    <div className="text-white/80 group-hover:text-yellow-400 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projets Section avec Animation */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Projets Marquants
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des solutions innovantes pour des défis complexes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
                      <Users className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{project.client}</span>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm text-gray-500 mb-2">
                      <BarChart className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{project.impact}</span>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Méthodologie Section avec Animation */}
        <section className="py-20 bg-gray-50 overflow-hidden">
          <div className="container-custom relative">
            {/* Cercles animés en arrière-plan */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Notre Approche
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Une méthodologie éprouvée pour des résultats concrets
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                  {['Analyse', 'Conception', 'Implémentation', 'Suivi'].map((step, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-8 group"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shrink-0 group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <div className="flex-grow bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all transform group-hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step}</h3>
                        <p className="text-gray-600">
                          Description détaillée de l'étape {step.toLowerCase()} avec nos meilleures pratiques.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ce Qu'ils Disent de Nous
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div 
                  key={index}
                  className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "MatriCx a transformé notre approche digitale. Leur expertise et leur professionnalisme ont dépassé nos attentes."
                  </p>
                  <div className="font-semibold text-gray-900">Client {index + 1}</div>
                  <div className="text-sm text-gray-500">Secteur d'activité</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in">
                Prêt à Transformer Votre Business ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-200">
                Découvrez comment nous pouvons vous aider à atteindre vos objectifs
              </p>
              <a 
                href="/contact"
                className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 inline-flex items-center group"
              >
                <span className="text-black group-hover:text-black group-hover:font-bold">
                  Commencer un Projet
                </span>
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>
        {`
          @keyframes moveGrid {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(-4rem, -4rem);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Experience;