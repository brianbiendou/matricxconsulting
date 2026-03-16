import React, { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { surveyImage } from "../../images/services";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Search,
  BarChart3,
  Target,
  Lightbulb,
  MessageSquare,
  CheckCircle,
  Award,
  ChevronDown,
} from "lucide-react";

// Composant pour les cercles animés
const AnimatedCircle: React.FC<{ 
  percentage: number; 
  label: string; 
  description: string; 
  centerText?: string;
  delay?: number 
}> = ({ 
  percentage, 
  label, 
  description, 
  centerText,
  delay = 0 
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const animationDuration = 2000; // 2 secondes
      const steps = 60;
      const increment = percentage / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= percentage) {
          setCurrentPercentage(percentage);
          clearInterval(interval);
        } else {
          setCurrentPercentage(Math.round(current));
        }
      }, animationDuration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const circumference = 2 * Math.PI * 45; // rayon de 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-6">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Cercle de fond */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="8"
          />
          {/* Cercle animé */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Texte au centre */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">
            {centerText || `${currentPercentage}%`}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">
        {label}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
};

const Survey: React.FC = () => {
  const { currentLanguage } = useTranslation();

  return (
    <div
      key={currentLanguage}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <Header />
      <main className="pt-8">
        {/* Hero Section avec Animation */}
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
                  <Search className="w-4 h-4 mr-2" />
                  Études et Analyses
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-white/90">Survey</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Étude & analyses, connaissance client, stratégie de marché / marque...
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group flex items-center justify-center">
                    Découvrir nos services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-white border-2 border-yellow-400 bg-yellow-400/20 hover:border-yellow-300 hover:bg-yellow-400/30 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Télécharger notre brochure
                  </button>
                </div>
              </div>
              <div className="relative">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={surveyImage}
                    alt="MatriCx Survey - Études et analyses"
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

        {/* Section Questions MatriCx Survey */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Les questions que se posent les dirigeants
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Nous identifions les défis stratégiques de votre entreprise pour apporter des réponses concrètes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Qui sont mes clients ?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Identification et segmentation de votre clientèle pour mieux comprendre leurs profils et comportements.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Que pensent-ils de mes produits/services ?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Évaluation de la perception de votre offre et identification des axes d'amélioration.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Comment les fidéliser ?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Stratégies de rétention et programmes de fidélisation adaptés à vos clients.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Comment optimiser ma relation client ?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Amélioration de l'expérience client et optimisation des points de contact.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Quelle est ma position concurrentielle ?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Analyse comparative de votre positionnement face à la concurrence.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Comment conquérir de nouveaux marchés ?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Identification des opportunités de croissance et stratégies d'expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Statistiques MatriCx Survey avec cercles animés */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                MatriCx Survey en chiffres
              </h2>
              <p className="text-gray-600">
                Notre expertise au service de votre croissance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <AnimatedCircle
                percentage={85}
                label="ÉTUDES RÉALISÉES"
                centerText="500+"
                description="Plus de 500 études menées avec succès"
                delay={200}
              />
              <AnimatedCircle
                percentage={75}
                label="ANNÉES D'EXPÉRIENCE"
                centerText="15"
                description="Une expertise reconnue depuis 15 ans"
                delay={400}
              />
              <AnimatedCircle
                percentage={95}
                label="CLIENTS SATISFAITS"
                description="Un taux de satisfaction client exceptionnel"
                delay={600}
              />
              <AnimatedCircle
                percentage={90}
                label="ENTREPRISES ACCOMPAGNÉES"
                centerText="200+"
                description="Plus de 200 entreprises nous font confiance"
                delay={800}
              />
            </div>
          </div>
        </section>

        {/* Section Méthodologie - Inspiration événements */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Méthodologie Survey
              </h2>
              <p className="text-gray-600">
                Notre processus structuré d'analyse et d'insights
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-400"></div>

              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">01</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-gray-600">
                        ÉTAPE 1
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Design de l'étude
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Organisateur : MatriCx Survey, en partenariat avec vos
                      équipes
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-700">
                        Définition des objectifs, méthodologie et questionnaire
                        adapté à vos besoins spécifiques.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">02</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-gray-600">
                        ÉTAPE 2
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Collecte de données
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Organisateur : Équipe terrain, supervision MatriCx
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-700">
                        Recueil des données via différents canaux : téléphone,
                        web, face-à-face selon vos besoins.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">03</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-gray-600">
                        ÉTAPE 3
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Analyse & Insights
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Organisateur : Data Scientists MatriCx - Restitution
                      stratégique
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-700">
                        Transformation des données en insights stratégiques et
                        recommandations actionnables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Services MatriCx Survey */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos services MatriCx Survey
              </h2>
              <p className="text-gray-600">
                Une approche complète de l'étude et de l'analyse client
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Études quantitatives
                </h3>
                <p className="text-gray-600 text-sm">
                  Sondages et enquêtes statistiques pour mesurer et quantifier les opinions
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Études qualitatives
                </h3>
                <p className="text-gray-600 text-sm">
                  Entretiens approfondis et focus groups pour comprendre les motivations
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Analyse de données
                </h3>
                <p className="text-gray-600 text-sm">
                  Traitement statistique avancé et data mining pour extraire les insights
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Conseil stratégique
                </h3>
                <p className="text-gray-600 text-sm">
                  Recommandations actionnables basées sur les résultats d'études
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Transformez vos questions en stratégies gagnantes
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Avec MatriCx Survey, obtenez des réponses précises à vos questions stratégiques et des recommandations pour optimiser vos performances business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                <span>Demander un devis</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-yellow-400 bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Télécharger notre présentation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Survey;
