import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PartnersCarousel from '../../components/PartnersCarousel';
import { ArrowRight, Award, Briefcase, Users } from 'lucide-react';

const Partners: React.FC = () => {
  const partnerTypes = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Entreprises',
      description: 'Grandes entreprises et PME en transformation digitale'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Institutions',
      description: 'Organismes publics et institutions financières'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Startups',
      description: 'Startups innovantes en croissance'
    }
  ];

  const benefits = [
    {
      title: 'Expertise Partagée',
      description: 'Accès à notre réseau d\'experts et nos ressources'
    },
    {
      title: 'Visibilité Accrue',
      description: 'Promotion via nos canaux de communication'
    },
    {
      title: 'Opportunités Business',
      description: 'Accès à notre portefeuille de clients'
    },
    {
      title: 'Innovation',
      description: 'Participation à nos programmes d\'innovation'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section avec Animation */}
        <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* Grille animée */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
              animation: 'moveGrid 15s linear infinite',
            }}></div>
          </div>
          {/* Particules animées */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              >
                <div className="w-3 h-3 bg-yellow-400/20 rounded-full"></div>
              </div>
            ))}
          </div>
          <div className="container-custom relative z-10 h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center w-full">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 mt-16 animate-slide-up">
                Nos Partenaires
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                Ensemble, construisons l'avenir de la transformation digitale en Afrique
              </p>
              <a href="/contact" className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors inline-flex items-center group">
                <span className="group-hover:text-black group-hover:font-bold">Devenir Partenaire</span>
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Section Partenaires avec Animation */}
        <section className="py-20 bg-white overflow-hidden relative">
          <div className="container-custom">
            {/* Réutilisation du composant PartnersCarousel - mais on doit retirer son background */}
            <div className="animate-slide-up [&>section]:!bg-white [&>section]:!border-0">
              <PartnersCarousel />
            </div>
          </div>
        </section>

        {/* Types de Partenaires */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Types de Partenariats
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des solutions adaptées à chaque type d'organisation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-yellow-400/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bénéfices avec Animation */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Avantages du Partenariat
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Développez votre activité avec MatriCx
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group hover:bg-yellow-400 bg-gray-50 p-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-black mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-black/80">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section avec Animation */}
        <section className="py-20 bg-gray-900 text-white overflow-hidden">
          <div className="container-custom relative">
            {/* Éléments de design animés */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in">
                Rejoignez Notre Réseau de Partenaires
              </h2>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-200">
                Ensemble, créons des solutions innovantes pour l'Afrique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors inline-flex items-center group">
                  <span className="group-hover:text-black group-hover:font-bold">Devenir Partenaire</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
                  En Savoir Plus
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;