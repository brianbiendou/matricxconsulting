import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { technologyImage } from "../../images/services";
import {
  ArrowRight,
  Lightbulb,
  Settings,
  Database,
  Cloud,
  Zap,
  ChevronDown,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Globe,
  ShieldCheck,
} from "lucide-react";

const Technology: React.FC = () => {
  const { currentLanguage } = useTranslation();

  const crmSolutions = [
    {
      name: "Salesforce",
      category: "Leader",
      description: "Solution CRM leader mondiale",
    },
    {
      name: "Microsoft",
      category: "Leader",
      description: "Écosystème Microsoft Dynamics",
    },
    {
      name: "Zendesk",
      category: "Visionary",
      description: "Plateforme service client avancée",
    },
    {
      name: "ServiceNow",
      category: "Challenger",
      description: "Gestion des services IT et business",
    },
    {
      name: "Freshworks",
      category: "Nicheplayer",
      description: "Suite CRM moderne et intuitive",
    },
  ];

  return (
    <div
      key={currentLanguage}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 from-40% via-gray-700 via-50% to-yellow-500 to-100% text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-lg rotate-12"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-20 left-32 w-24 h-24 border border-white rounded-lg -rotate-12"></div>
            <div className="absolute top-20 right-40 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute bottom-40 right-10 w-12 h-12 border-2 border-white rounded-lg rotate-45"></div>
            <div className="absolute top-40 left-1/4 w-6 h-6 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-32 left-1/3 w-14 h-14 border border-white/50 rounded-lg rotate-12"></div>
          </div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-primary-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-fade-in">
                  <Lightbulb className="w-4 h-4 mr-2 text-primary-400" />
                  Innovation Technologique
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-primary-400">Technology</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Solutions technologiques innovantes pour l'excellence opérationnelle
                  et la performance client
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Optimisez votre efficacité opérationnelle avec nos solutions technologiques
                  avancées et notre expertise en intégration de systèmes d'entreprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group flex items-center justify-center">
                    Découvrir nos solutions
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-black border-2 border-white/30 hover:border-white hover:bg-white/10 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Voir nos intégrations
                  </button>
                </div>
              </div>
              <div className="relative">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={technologyImage}
                    alt="MatriCx Technology - Solutions technologiques"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
          </div>
        </section>

        {/* Section Ressources - Inspiration design */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Solutions technologiques
                </h2>
                <p className="text-gray-600 mt-2">
                  Notre expertise en solutions d'entreprise et transformation digitale
                  pour votre excellence opérationnelle.
                </p>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                En savoir +
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Solutions d'entreprise intégrées
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Optimisation des processus métiers avec des solutions
                      technologiques sur mesure et évolutives.
                    </p>
                    <div className="text-xs text-gray-500">
                      ERP • CRM • SIRH • BI
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <Cloud className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Intégrations Cloud
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Les données nationales, régionales sur l'adoption cloud
                      depuis 2020.
                    </p>
                    <div className="text-xs text-gray-500">
                      Azure • AWS • Google Cloud
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Développement sur mesure
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Nos missions et activités destinées à créer des solutions
                      personnalisées.
                    </p>
                    <div className="text-xs text-gray-500">
                      React • Node.js • Python
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Innovation digitale
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Les tendances innovation digitale et transformation
                      technologique depuis 2019.
                    </p>
                    <div className="text-xs text-gray-500">
                      IA • Automation • API
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-800 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Lightbulb className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Technologies CRM
                    </h3>
                    <p className="text-gray-200 mb-6">
                      Au format 100% technologique, nos ressources CRM donnent
                      les informations nécessaires pour se lancer dans la
                      transformation digitale de votre choix.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                      Découvrir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Process - Inspiration actualités */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900">À la une</h2>
                <p className="text-gray-600">
                  Restez informés en suivant de près nos actualités
                  technologiques
                </p>
              </div>
            </div>

            <div className="lg:flex lg:gap-12">
              <div className="lg:w-1/2">
                <div className="bg-yellow-400 rounded-2xl p-8 text-black mb-8 lg:mb-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Nouveauté</h3>
                      <p className="text-gray-800">15/10/2025</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4">
                    Innovation 2026 : Nouvelles solutions d'excellence opérationnelle
                  </h4>
                  <p className="text-gray-800 mb-6">
                    Notre cabinet dévoile sa nouvelle gamme de solutions technologiques
                    intégrées pour l'optimisation des processus d'entreprise. Une approche
                    innovante qui combine expertise métier et technologies de pointe pour
                    une transformation digitale réussie...
                  </p>
                  <button className="text-black font-semibold hover:underline">
                    Lire plus →
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Dernières actualités
                  </h3>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      L'excellence opérationnelle par la technologie : Guide 2025
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">14/10/2025</p>
                    <p className="text-gray-700 text-sm mb-3">
                      Découvrez notre guide complet sur l'optimisation des processus
                      d'entreprise grâce aux nouvelles technologies et à notre
                      expertise en transformation digitale...
                    </p>
                    <button className="text-yellow-600 font-semibold text-sm hover:underline">
                      Lire plus...
                    </button>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Un projet d'innovation pour augmenter l'intégration cloud
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">14/10/2025</p>
                    <p className="text-gray-700 text-sm mb-3">
                      MatriCx Technology propose des solutions cloud intégrées
                      pour améliorer la performance de vos systèmes et de
                      certaines personnes en situation de...
                    </p>
                    <button className="text-yellow-600 font-semibold text-sm hover:underline">
                      Lire plus...
                    </button>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Le mois de la transformation digitale en
                      Nouvelle-Technologie
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">14/10/2025</p>
                    <p className="text-gray-700 text-sm mb-3">
                      Durant tout le mois de novembre, la Région et ses
                      partenaires organisent différents événements pour
                      sensibiliser et informer les chefs d'entreprise...
                    </p>
                    <button className="text-yellow-600 font-semibold text-sm hover:underline">
                      Lire plus...
                    </button>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                    Voir toutes les actualités
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Solutions - Inspiration Bpifrance */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                MatriCx Technology
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Préparez-vous à réussir votre transformation digitale !
              </p>
            </div>

            {/* Boutons de navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button className="border border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 font-medium px-8 py-3 rounded-full transition-all duration-300">
                Être accompagné(e)
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition-all duration-300">
                Développer ma solution tech
              </button>
              <button className="border border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 font-medium px-8 py-3 rounded-full transition-all duration-300">
                Trouver un financement
              </button>
            </div>

            {/* Design innovant avec disposition orbitale */}
            <div className="relative max-w-6xl mx-auto py-12">
              {/* Centre d'attraction - Solution principale */}
              <div className="relative">
                {/* Élément central magnétique */}
                <div className="flex justify-center mb-16">
                  <div className="relative group cursor-pointer">
                    {/* Cercle extérieur animé */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                    
                    {/* Cercle principal */}
                    <div className="relative w-40 h-40 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Lightbulb className="w-10 h-10 text-white mb-2 animate-pulse" />
                      <span className="text-white font-bold text-sm text-center leading-tight">
                        Je crée Mon<br />Solution Tech
                      </span>
                    </div>
                    
                    {/* Anneaux orbitaux décoratifs */}
                    <div className="absolute inset-0 border-2 border-primary-200 rounded-full scale-125 animate-spin" style={{ animationDuration: '20s' }}></div>
                    <div className="absolute inset-0 border-2 border-accent-200 rounded-full scale-150 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  </div>
                </div>

                {/* Options en constellation autour du centre */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  {/* Option 1 - CRM */}
                  <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      {/* Hexagone background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 transform rotate-45 rounded-2xl blur-sm opacity-50"></div>
                      
                      <div className="relative bg-white rounded-2xl p-6 border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl transform rotate-45 flex items-center justify-center group-hover:rotate-0 transition-transform duration-500">
                            <Database className="w-7 h-7 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                          </div>
                          <div className="text-center">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Je veux créer</h4>
                            <p className="text-primary-600 font-semibold text-xs">mon CRM</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ligne de connexion vers le centre */}
                      <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary-200 to-transparent transform -translate-y-1/2 opacity-30"></div>
                    </div>
                  </div>

                  {/* Option 2 - Système existant */}
                  <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-100 to-accent-200 transform rotate-45 rounded-2xl blur-sm opacity-50"></div>
                      
                      <div className="relative bg-white rounded-2xl p-6 border-2 border-accent-200 hover:border-accent-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center group-hover:animate-spin transition-all duration-500">
                            <Settings className="w-7 h-7 text-white" />
                          </div>
                          <div className="text-center">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Je veux reprendre</h4>
                            <p className="text-accent-600 font-semibold text-xs">un système existant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Option 3 - Gérer et développer */}
                  <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 to-secondary-200 transform -rotate-45 rounded-2xl blur-sm opacity-50"></div>
                      
                      <div className="relative bg-white rounded-2xl p-6 border-2 border-secondary-200 hover:border-secondary-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
                        <div className="flex flex-col items-center gap-4">
                          <div className="relative w-14 h-14 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-lg transform group-hover:rotate-45 transition-transform duration-500">
                            <Cloud className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-white group-hover:-rotate-45 transition-transform duration-500" />
                          </div>
                          <div className="text-center">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Je gère et je</h4>
                            <p className="text-secondary-600 font-semibold text-xs">développe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Option 4 - Céder système */}
                  <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 transform rotate-12 rounded-2xl blur-sm opacity-50"></div>
                      
                      <div className="relative bg-white rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 clip-triangle flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                            <Zap className="w-7 h-7 text-white absolute" />
                          </div>
                          <div className="text-center">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Je cède mon</h4>
                            <p className="text-purple-600 font-semibold text-xs">système</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ligne de connexion */}
                      <div className="absolute top-1/2 right-1/2 w-32 h-0.5 bg-gradient-to-l from-purple-200 to-transparent transform -translate-y-1/2 opacity-30"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Particules flottantes décoratives */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-float opacity-60"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent-400 rounded-full animate-float animation-delay-400 opacity-60"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-secondary-400 rounded-full animate-float animation-delay-600 opacity-60"></div>
              </div>
            </div>

            {/* Section informative en bas */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Votre transformation digitale commence ici
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Que vous souhaitiez optimiser votre CRM existant, migrer vers le cloud, 
                    développer une solution sur mesure ou reprendre un système, nos experts 
                    MatriCx Technology vous accompagnent à chaque étape.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                      Évaluer mes besoins gratuitement
                    </button>
                    <button className="border-2 border-gray-300 hover:border-yellow-400 text-gray-700 hover:text-yellow-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                      Découvrir nos solutions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à accélérer votre transformation digitale ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez nos solutions technologiques sur mesure et notre expertise en
              transformation digitale pour optimiser vos processus d'entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Découvrir nos solutions
              </button>
              <button className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Voir nos intégrations
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Technology;
