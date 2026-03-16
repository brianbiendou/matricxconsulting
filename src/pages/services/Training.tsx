import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { trainingImage } from "../../images/services";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  Target,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const Training: React.FC = () => {
  const { currentLanguage } = useTranslation();

  const trainingPrograms = [
    "Excellence en Expérience Client (CX)",
    "Conception et optimisation des parcours clients",
    "Leadership et culture centrée client",
    "Mesure et analyse de la satisfaction client (VOC)",
    "Transformation digitale de l'expérience client",
    "Management de la qualité de service",
    "Techniques d'écoute et analyse de la voix du client",
    "Stratégie omnicanale et expérience client",
    "CX dans la stratégie d'entreprise",
    "Innovation et design thinking en CX",
    "Gestion de la relation client 360°",
  ];

  const evaluationCriteria = [
    { title: "Le contenu", desc: "respect du programme et des objectifs" },
    {
      title: "L'animation",
      desc: "expertise du formateur, réponses aux questions, interactions avec les apprenants",
    },
    {
      title: "La pédagogie",
      desc: "atteinte des objectifs, équilibre entre théorie et pratique, prise en compte du contexte professionnel",
    },
    {
      title: "La logistique",
      desc: "organisation et planning, qualité de l'accueil, qualité des outils digitaux déployés",
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
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-fade-in">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Formation & Certification
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-primary-400">Training</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Leader CX, formation sur mesure, certificats CX, culture
                  centrée client
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Développez l'excellence de vos équipes avec nos programmes de
                  formation certifiants en expérience client et culture centrée
                  client.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group flex items-center justify-center">
                    Explorer nos formations
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-white border-2 border-yellow-400 bg-yellow-400/20 hover:border-yellow-300 hover:bg-yellow-400/30 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Catalogue de formations
                  </button>
                </div>
              </div>
              <div className="relative">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={trainingImage}
                    alt="MatriCx Training - Formation et certification"
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

        {/* Section Formation - Inspiration "Espace enseignant" */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Espace formation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Développer l'esprit d'excellence CX de vos collaborateurs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Formations</h3>
                    <p className="text-sm text-gray-600">Certifiantes</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Programmes de certification CX reconnus internationalement
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Programmes</h3>
                    <p className="text-sm text-gray-600">Sur mesure</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Formations adaptées à vos défis spécifiques en CX
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Certifications</h3>
                    <p className="text-sm text-gray-600">Reconnues</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Labels d'excellence en expérience client
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Performance</h3>
                    <p className="text-sm text-gray-600">Mesurable</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Indicateurs de performance CX (NPS, CSAT, CES)
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-800 rounded-2xl p-8 text-white h-full">
                  <h3 className="text-2xl font-bold mb-4">
                    Qu'est-ce que la Formation CX ?
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Notre programme de Formation CX est conçu pour transformer votre organisation 
                    en plaçant l'expérience client au cœur de vos opérations. 
                    Nous formons vos équipes aux meilleures pratiques CX, aux outils 
                    de mesure et d'analyse, et développons une culture d'excellence centrée sur le client à tous les niveaux de votre entreprise.
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                    Je découvre
                  </button>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-bold text-lg mb-4">Nos programmes de formation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trainingPrograms.map((program, index) => (
                      <div 
                        key={index} 
                        className="group bg-gray-50 hover:bg-yellow-50 rounded-lg p-3 transition-all duration-300"
                      >
                        <div className="flex items-start">
                          <Target className="w-4 h-4 text-yellow-500 mt-1 mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">{program}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Évaluation */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Évaluation de nos formations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nous évaluons la qualité de nos formations selon 4 critères principaux
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {evaluationCriteria.map((criteria, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{criteria.title}</h3>
                  <p className="text-gray-600">{criteria.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Actualités Formation - Inspiration "À la une" */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900">À la une</h2>
                <p className="text-gray-600">
                  Restez informés en suivant de près nos actualités formation
                </p>
              </div>
            </div>

            <div className="lg:flex lg:gap-12">
              <div className="lg:w-1/2">
                <div className="bg-yellow-400 rounded-2xl p-8 text-black mb-8 lg:mb-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Nouveauté</h3>
                      <p className="text-gray-800">15/10/2025</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4">
                    Nouveau Programme de Certification CX Manager 2026
                  </h4>
                  <p className="text-gray-800 mb-6">
                    MatriCx Training lance son programme phare de certification CX Manager, 
                    conçu pour former les leaders de demain en expérience client. 
                    Cette certification complète couvre l'ensemble des compétences 
                    nécessaires pour piloter une stratégie CX performante...
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
                      Innovation en Mesure de l'Expérience Client
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">14/10/2025</p>
                    <p className="text-gray-700 text-sm mb-3">
                      Découvrez les nouvelles méthodes de mesure et d'analyse de 
                      l'expérience client avec notre formation avancée en Voice of 
                      Customer (VoC) et analyse prédictive...
                    </p>
                    <button className="text-yellow-600 font-semibold text-sm hover:underline">
                      Lire plus...
                    </button>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Leadership CX : Former les Leaders de Demain
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">14/10/2025</p>
                    <p className="text-gray-700 text-sm mb-3">
                      Notre nouveau programme de leadership CX forme les dirigeants 
                      aux compétences essentielles pour piloter la transformation 
                      de l'expérience client dans leur organisation...
                    </p>
                    <button className="text-yellow-600 font-semibold text-sm hover:underline">
                      Lire plus...
                    </button>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Semaine de l'Excellence CX en Afrique
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">14/10/2025</p>
                    <p className="text-gray-700 text-sm mb-3">
                      MatriCx Training organise une semaine dédiée à l'excellence 
                      de l'expérience client, avec des masterclass, des ateliers 
                      pratiques et des certifications...
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

        {/* Section Programmes Formation */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos programmes
              </h2>
              <p className="text-gray-600">
                Vous avez un besoin ? Nous avons les formations pour vous
                accompagner : certification, leadership, culture client, etc.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Certification CX Manager
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Formation complète pour devenir un leader en expérience client. 
                      Maîtrisez les stratégies, outils et méthodes pour concevoir 
                      et piloter une stratégie CX performante.
                    </p>
                    <div className="text-sm text-gray-500">
                      Compétences: Vision CX • Stratégie • Leadership
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Culture centrée client
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Développez une culture d'entreprise centrée sur l'expérience client.
                      Apprenez à mobiliser vos équipes autour d'une vision commune
                      de l'excellence client.
                    </p>
                    <div className="text-sm text-gray-500">
                      Compétences: Engagement • Transformation • Innovation
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Excellence opérationnelle CX
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Optimisez vos processus pour délivrer une expérience client
                      exceptionnelle. Maîtrisez les outils de mesure et
                      d'amélioration continue de la satisfaction client.
                    </p>
                    <div className="text-sm text-gray-500">
                      Compétences: Mesure • Analytics • Amélioration continue
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Certification CX Practitioner
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Formation certifiante pour les professionnels de terrain.
                      Apprenez à mettre en œuvre les meilleures pratiques CX
                      dans vos interactions quotidiennes avec les clients.
                    </p>
                    <div className="text-sm text-gray-500">
                      Compétences: Service client • Empathie • Résolution
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Voir toutes nos formations
              </button>
            </div>
          </div>
        </section>

        {/* Section Statistiques */}
        {/* Section CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à développer l'excellence de vos équipes ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez nos programmes de formation certifiants et développez
              une culture centrée client exceptionnelle dans votre organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Explorer nos formations
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Catalogue de formations
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
