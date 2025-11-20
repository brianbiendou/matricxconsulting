import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Users, Laptop, GraduationCap, Heart, ArrowRight, ChevronRight } from 'lucide-react';
import equipeImage from '../../images/equipe.jpg';
import { useTranslation } from '../../hooks/useTranslation';

const Careers: React.FC = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Formation Continue',
      description: 'Programme de développement professionnel personnalisé'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Équipe Internationale',
      description: 'Collaborez avec des experts de divers horizons'
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Travaillez sur des projets digitaux innovants'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Bien-être',
      description: 'Équilibre vie pro/perso et avantages sociaux'
    }
  ];

  const openings = [
    {
      title: 'Consultant(e) en Transformation Digitale',
      location: 'Douala, Cameroun',
      type: 'CDI',
      experience: '3-5 ans'
    },
    {
      title: 'Chef de Projet Digital',
      location: 'Abidjan, Côte d\'Ivoire',
      type: 'CDI',
      experience: '5+ ans'
    },
    {
      title: 'Analyste CX',
      location: 'Dakar, Sénégal',
      type: 'CDI',
      experience: '2-4 ans'
    },
    {
      title: 'Développeur(se) Full Stack',
      location: 'Remote',
      type: 'CDI',
      experience: '3+ ans'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
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
                {t('careers.hero.title')}
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                {t('careers.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#postes-ouverts"
                  className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 inline-flex items-center justify-center group"
                >
                  <span className="text-black group-hover:text-black group-hover:font-bold">
                    {t('careers.hero.cta1')}
                  </span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="mailto:contact@matricxconsulting.com?subject=Candidature Spontanée"
                  className="bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  {t('careers.hero.cta2')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The MatriCx Way - Culture Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-blue-50 overflow-hidden">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              {/* Badge centré */}
              <div className="text-center mb-12 animate-fade-in">
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  ✨ {t('careers.matricxWay.badge')}
                </div>
              </div>
              
              {/* Layout 2 colonnes : Texte à gauche, Image à droite */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Colonne gauche - Texte */}
                <div className="space-y-6 animate-slide-in-left">
                  <div className="space-y-6">
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {t('careers.matricxWay.text1')}
                    </p>
                    
                    <div className="relative pl-6 border-l-4 border-yellow-400 bg-white/60 backdrop-blur-sm p-6 rounded-r-xl shadow-md">
                      <p className="text-lg lg:text-xl text-gray-800 leading-relaxed font-semibold italic">
                        {t('careers.matricxWay.text2')}
                      </p>
                    </div>
                    
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {t('careers.matricxWay.text3')}
                    </p>
                  </div>
                </div>
                
                {/* Colonne droite - Image */}
                <div className="relative animate-slide-in-right animation-delay-200">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <img 
                      src={equipeImage} 
                      alt="Équipe MatriCx Consulting" 
                      className="w-full h-auto object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Badge flottant */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg">
                      <p className="text-sm font-semibold text-gray-900">
                        💼 {t('careers.matricxWay.team')}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {t('careers.matricxWay.culture')}
                      </p>
                    </div>
                  </div>
                  
                  {/* Éléments décoratifs */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('careers.benefits.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('careers.benefits.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t(`careers.benefits.${benefit.title === 'Formation Continue' ? 'training' : benefit.title === 'Équipe Internationale' ? 'team' : benefit.title === 'Innovation' ? 'innovation' : 'wellbeing'}`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`careers.benefits.${benefit.title === 'Formation Continue' ? 'trainingDesc' : benefit.title === 'Équipe Internationale' ? 'teamDesc' : benefit.title === 'Innovation' ? 'innovationDesc' : 'wellbeingDesc'}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section id="postes-ouverts" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('careers.openings.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('careers.openings.subtitle')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {openings.map((job, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <button className="text-yellow-500 hover:text-yellow-600">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            {/* Titre de la section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('careers.values.sectionTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('careers.values.sectionSubtitle')}
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              {/* Layout : Liste à gauche, Bloc texte à droite */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Colonne gauche - Liste des valeurs (3 colonnes : icône, nom, description) */}
                <div className="space-y-6">
                  {/* Valeur 1 - Intégrité */}
                  <div className="grid grid-cols-[auto,1fr,2fr] gap-4 items-start pb-6 border-b border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 pt-2">{t('careers.values.integrity')}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed pt-2">
                      {t('careers.values.integrityDesc')}
                    </p>
                  </div>

                  {/* Valeur 2 - Innovation */}
                  <div className="grid grid-cols-[auto,1fr,2fr] gap-4 items-start pb-6 border-b border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 pt-2">{t('careers.values.innovation')}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed pt-2">
                      {t('careers.values.innovationDesc')}
                    </p>
                  </div>

                  {/* Valeur 3 - Excellence Client */}
                  <div className="grid grid-cols-[auto,1fr,2fr] gap-4 items-start pb-6 border-b border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 pt-2">{t('careers.values.excellence')}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed pt-2">
                      {t('careers.values.excellenceDesc')}
                    </p>
                  </div>

                  {/* Valeur 4 - Authenticité */}
                  <div className="grid grid-cols-[auto,1fr,2fr] gap-4 items-start pb-6 border-b border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 pt-2">{t('careers.values.authenticity')}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed pt-2">
                      {t('careers.values.authenticityDesc')}
                    </p>
                  </div>

                  {/* Valeur 5 - Collaboration */}
                  <div className="grid grid-cols-[auto,1fr,2fr] gap-4 items-start pb-6 border-b border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 pt-2">{t('careers.values.collaboration')}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed pt-2">
                      {t('careers.values.collaborationDesc')}
                    </p>
                  </div>
                </div>

                {/* Colonne droite - Bloc "Living our values" */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    {t('careers.values.badge')}
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {t('careers.values.title')}
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      {t('careers.values.intro')}
                    </p>
                    <p>
                      {t('careers.values.matricx')}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                {t('careers.cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('careers.cta.subtitle')}
              </p>
              <a 
                href="mailto:contact@matricxconsulting.com?subject=Candidature - MatriCx Consulting"
                className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors inline-block"
              >
                {t('careers.cta.button')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;