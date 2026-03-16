import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TestimonialsSection from '../../components/TestimonialsSection';
import { Clock, Users, BarChart, ArrowRight, Star } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useSanityExperienceStats, useSanityProjects } from '../../hooks/useSanityContent';

const Experience: React.FC = () => {
  const { currentLanguage, t } = useTranslation();
  const { experienceStats } = useSanityExperienceStats();
  const { projects: sanityProjects, urlFor } = useSanityProjects();

  // Stats - Sanity ou fallback
  const stats = (experienceStats && experienceStats.length > 0) ? experienceStats.map(stat => ({
    value: stat.value,
    label: stat.label[currentLanguage as 'fr' | 'en'] || stat.label.fr
  })) : [
    { value: '200+', label: 'Projets Réalisés' },
    { value: '15+', label: 'Pays Africains' },
    { value: '95%', label: 'Clients Satisfaits' },
    { value: '50M€+', label: 'Impact Généré' }
  ];

  // Projets - Sanity ou fallback
  const projects = (sanityProjects && sanityProjects.length > 0) ? sanityProjects.map(project => ({
    title: project.title[currentLanguage as 'fr' | 'en'] || project.title.fr,
    client: project.client,
    description: project.description[currentLanguage as 'fr' | 'en'] || project.description.fr,
    impact: project.impact[currentLanguage as 'fr' | 'en'] || project.impact.fr,
    duration: typeof project.duration === 'string' ? project.duration : 
             (project.duration?.[currentLanguage as 'fr' | 'en'] || project.duration?.fr || ''),
    tags: project.tags || [],
    image: project.image ? urlFor(project.image).width(400).height(300).url() : null
  })) : [
    {
      title: 'Transformation Digitale Bancaire',
      client: 'Grande Banque Ouest-Africaine',
      description: 'Modernisation complète des services bancaires numériques',
      impact: 'Augmentation de 300% des transactions en ligne',
      duration: '18 mois',
      tags: ['Finance', 'Digital Banking', 'UX Design'],
      image: null
    },
    {
      title: 'Optimisation CX Télécom',
      client: 'Opérateur Télécom Panafricain',
      description: 'Refonte de l\'expérience client multicanal',
      impact: 'Réduction de 45% du temps de résolution',
      duration: '12 mois',
      tags: ['Télécom', 'CX', 'Analytics'],
      image: null
    },
    {
      title: 'Plateforme E-commerce',
      client: 'Distributeur Régional',
      description: 'Création d\'une marketplace B2B innovante',
      impact: '+200% de croissance des ventes en ligne',
      duration: '8 mois',
      tags: ['E-commerce', 'B2B', 'Tech'],
      image: null
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
                {t('experiencePage.hero.title')}
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                {t('experiencePage.hero.subtitle')}
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
                {t('experiencePage.projects.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('experiencePage.projects.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="p-8">
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
                  {t('experiencePage.methodology.title')}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('experiencePage.methodology.subtitle')}
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                  {[
                    { key: 'analysis', title: t('experiencePage.methodology.steps.analysis.title'), desc: t('experiencePage.methodology.steps.analysis.description') },
                    { key: 'design', title: t('experiencePage.methodology.steps.design.title'), desc: t('experiencePage.methodology.steps.design.description') },
                    { key: 'implementation', title: t('experiencePage.methodology.steps.implementation.title'), desc: t('experiencePage.methodology.steps.implementation.description') },
                    { key: 'monitoring', title: t('experiencePage.methodology.steps.monitoring.title'), desc: t('experiencePage.methodology.steps.monitoring.description') }
                  ].map((step, index) => (
                    <div 
                      key={step.key}
                      className="flex items-center gap-8 group"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shrink-0 group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <div className="flex-grow bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all transform group-hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">
                          {step.desc}
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
        <TestimonialsSection />

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in">
                {t('experiencePage.cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-200">
                {t('experiencePage.cta.subtitle')}
              </p>
              <a 
                href="/contact"
                className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 inline-flex items-center group"
              >
                <span className="text-black group-hover:text-black group-hover:font-bold">
                  {t('experiencePage.cta.button')}
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