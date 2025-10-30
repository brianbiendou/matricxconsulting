import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { advisoryImage } from "../../images/services";
import {
  ArrowRight,
  Briefcase,
  Target,
  Users,
  BarChart3,
  Shield,
  MessageSquare,
  Zap,
  Settings,
  Lightbulb,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const Advisory: React.FC = () => {
  const { currentLanguage } = useTranslation();

  return (
    <div key={currentLanguage} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
                  <Briefcase className="w-4 h-4 mr-2" />
                  Conseil Stratégique
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-primary-400">Advisory</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Conseil, stratégie, pilotage, amélioration continue,
                  optimisation, CXM
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Nos consultants experts vous accompagnent dans la définition
                  et l'implémentation de votre stratégie d'expérience client
                  pour créer un avantage concurrentiel durable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group flex items-center justify-center">
                    Découvrir notre approche
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link to="/contact" className="text-white hover:text-white border-2 border-yellow-400 bg-yellow-400/20 hover:border-yellow-300 hover:bg-yellow-400/30 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Évaluer votre maturité CX
                  </Link>
                </div>
              </div>
              <div className="relative">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={advisoryImage}
                    alt="MatriCx Advisory - Conseil stratégique"
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

        {/* Section Questions MatriCx Advisory */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                MatriCx <span className="text-yellow-400">advisory</span>
              </h2>
              
              {/* Questions Section avec fond jaune */}
              <div className="bg-yellow-400 rounded-2xl p-8 mb-8">
                <ul className="space-y-4 text-black">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Avez-vous défini votre vision, vos objectifs Expérience Client ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Avez-vous défini votre stratégie de canal?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Votre organisation est-elle alignée sur ces objectifs et êtes-vous prêt pour l'Expérience Client ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Avez-vous effectué un design du/des parcours de vos clients et identifié le parcours idéal à travers chaque point de contact et chaque canal ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Votre dispositif de mesure est-il un moteur d'action et d'impact commercial positif ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Avez-vous mis en place une feuille de route / stratégie Expérience Client et un modèle de gouvernance Expérience Client solide ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Que savez vous de vos clients? Leurs besoins, leurs attentes?</span>
                  </li>
                </ul>
              </div>

              {/* Section Description avec flèche */}
              <div className="border-2 border-yellow-400 rounded-2xl p-6 relative">
                {/* Flèche pointant vers le bas */}
                <div className="absolute -top-8 right-20">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-white"></div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Nous proposons une gamme de services : de l'évaluation votre maturité Expérience Client à la conception de systèmes de pilotage, en passant par une cartographie des parcours clients et employés.
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                  Définissez une vision claire de l'expérience voulue et délivrée par votre entreprise. Une expérience qui respecte vos promesses clients et engagent vos collaborateurs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services MatriCx Advisory */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                MatriCx <span className="text-yellow-400">advisory</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Audit & évaluation de maturité Expérience Client
                </h3>
                <p className="text-yellow-500 font-medium text-sm mb-4">
                  Objectifs business Vs état des lieux
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Définition de votre stratégie de canal et mise en place de contact center
                </h3>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Pilotage de la performance de l'Expérience Client
                </h3>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Expérience collaborateur et culture centrée client
                </h3>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Définition et déploiement de programmes Voix du Client
                </h3>
              </div>

              {/* Service 6 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Amélioration continue et optimisation
                </h3>
              </div>

              {/* Service 7 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Évaluation du ROI de votre programme Expérience Client
                </h3>
              </div>

              {/* Service 8 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Optimisation des parcours clients
                </h3>
              </div>

              {/* Service 9 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Innovation Expérience Client
                </h3>
                <p className="text-yellow-500 font-medium text-sm mb-4">
                  Pratiques, outils, transformation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Modèle d'implémentation */}
        <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Méthodologie d'Excellence
                <span className="block text-xl text-blue-600 mt-3">Programme Expérience Client MatriCx</span>
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Une approche structurée et éprouvée pour transformer durablement l'expérience client
              </p>
            </div>

            {/* Timeline d'implémentation */}
            <div className="relative max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {/* Étape 1 */}
                <div className="group">
                  <div className="relative bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="mt-12">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Compréhension & Analyse</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Analyse du contexte</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Identification des besoins</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Évaluation de l'environnement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="group">
                  <div className="relative bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="mt-12">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Diagnostic & Maturité</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>État des lieux</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Analyse comparative</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Axes d'amélioration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="group">
                  <div className="relative bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="mt-12">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Design & Implémentation</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Co-construction des solutions</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Plan d'action détaillé</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Accompagnement au changement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="group">
                  <div className="relative bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="mt-12">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Mesure & Impact ROI</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Suivi des indicateurs</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Analyse des résultats</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>Optimisation continue</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ligne de connexion avec dégradé */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 -z-10 hidden lg:block"></div>
              
              {/* Points de connexion */}
              <div className="hidden lg:flex justify-between absolute top-8 left-[10%] right-[10%] -z-10">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg"></div>
                <div className="w-3 h-3 rounded-full bg-blue-600 shadow-lg"></div>
                <div className="w-3 h-3 rounded-full bg-blue-700 shadow-lg"></div>
                <div className="w-3 h-3 rounded-full bg-blue-800 shadow-lg"></div>
              </div>
            </div>
            
            {/* Message de conclusion avec style inspirant */}
            <div className="max-w-3xl mx-auto text-center mt-16">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "Pour bâtir un programme Expérience Client innovant et réaliste, notre approche s'adapte à votre contexte unique en gardant toujours à l'esprit vos objectifs business."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 Leviers */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Les Fondamentaux de l'Excellence
                <span className="block text-xl text-blue-600 mt-3">Les 5 Leviers de Transformation</span>
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Une approche holistique pour transformer durablement l'expérience client
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {/* Levier 1 - Organisation */}
              <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Organisation</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700">Structure optimisée pour :</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Décloisonnement des silos</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Collaboration transverse</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Centralité client</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Levier 2 - Gouvernance */}
              <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Gouvernance</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700">Pilotage stratégique :</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Vision transverse</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Implication du management</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Culture client partagée</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Levier 3 - Voix du Client */}
              <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Voix du Client</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700">Écoute active :</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Dispositif multi-niveaux</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Retours directs</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Amélioration continue</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Levier 4 - Parcours Clients */}
              <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Parcours Clients</h4>
                  <p className="text-xs text-gray-700 mb-2">
                    Apporter de nouvelles approches pour designer les parcours clients, de ces derniers découleront ensuite :
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>1. Les processus</li>
                    <li>2. Les procédures</li>
                    <li>3. Les modes opératoires</li>
                  </ul>
                  <div className="flex justify-center mt-2">
                    <div className="w-8 h-8 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-yellow-600" />
                    </div>
                  </div>
                  <p className="text-xs text-center text-yellow-600 mt-1">
                    Boucle d'amélioration continue
                  </p>
                </div>
              </div>

              {/* Levier 5 - Mesure et Analyse */}
              <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Mesure & Analyse</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700">Pilotage performant :</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">KPIs stratégiques</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Analyse d'impact</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Optimisation continue</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Advisory;
