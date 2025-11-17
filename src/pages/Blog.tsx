import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from '../hooks/useTranslation'
import { Calendar, User, ArrowRight, TrendingUp, Users, Lightbulb, Target, BarChart3, Briefcase, Flame, Clock, Facebook, Linkedin, Twitter } from 'lucide-react'

// Import des images
import vert1 from '../images/blog/vert1.jpg'
import vert2 from '../images/blog/vert2.jpg'
import vert3 from '../images/blog/vert3.jpg'
import whatsapp1 from '../images/blog/WhatsApp Image 2025-10-15 à 16.38.04_8110d4ba.jpg'
import whatsapp2 from '../images/blog/WhatsApp Image 2025-10-15 à 16.38.34_2a28bb0e.jpg'
import whatsapp3 from '../images/blog/WhatsApp Image 2025-10-15 à 16.38.49_2b3172a9.jpg'
import whatsapp4 from '../images/blog/WhatsApp Image 2025-10-15 à 16.39.17_1ce3d0a9.jpg'
import whatsapp5 from '../images/blog/WhatsApp Image 2025-10-15 à 16.39.32_808f1fec.jpg'
import designersImage from '../images/blog/designers-industriels-travaillant-sur-un-modele-3d.jpg'
import personnesBureau from '../images/blog/personnes-au-bureau-pendant-une-journee-de-travail.jpg'
import affiliesImage from '../images/blog/affilies-de-prevision-examinant-les-donnees-sur-les-objectifs-et-les-indicateurs-de-performance.jpg'

const Blog: React.FC = () => {
  const { currentLanguage } = useTranslation()
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [sortBy, setSortBy] = useState<'popular' | 'recent' | 'oldest'>('popular')
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const [showPopularDropdown, setShowPopularDropdown] = useState(false)
  const [showDateDropdown, setShowDateDropdown] = useState(false)

  // Topics/catégories adaptées à MatriCx Consulting
  const topics = [
    {
      id: 'all',
      name: currentLanguage === 'fr' ? 'Tous les articles' : 'All Articles',
      icon: BarChart3,
      color: 'blue'
    },
    {
      id: 'transformation',
      name: currentLanguage === 'fr' ? 'Transformation Digitale' : 'Digital Transformation',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      id: 'leadership',
      name: currentLanguage === 'fr' ? 'Leadership & Management' : 'Leadership & Management',
      icon: Users,
      color: 'blue'
    },
    {
      id: 'innovation',
      name: currentLanguage === 'fr' ? 'Innovation & Stratégie' : 'Innovation & Strategy',
      icon: Lightbulb,
      color: 'blue'
    },
    {
      id: 'performance',
      name: currentLanguage === 'fr' ? 'Performance Organisationnelle' : 'Organizational Performance',
      icon: Target,
      color: 'blue'
    },
    {
      id: 'consulting',
      name: currentLanguage === 'fr' ? 'Méthodologie Conseil' : 'Consulting Methodology',
      icon: Briefcase,
      color: 'blue'
    }
  ]

  // Articles professionnels avec focus africain
  const articles = [
    {
      id: 1,
      title: currentLanguage === 'fr' 
        ? 'Leadership Africain dans la Transformation Digitale'
        : 'African Leadership in Digital Transformation',
      excerpt: currentLanguage === 'fr'
        ? 'Comment les leaders africains redéfinissent l\'approche de la transformation digitale en entreprise, créant des solutions innovantes adaptées au contexte local.'
        : 'How African leaders are redefining the approach to digital transformation in business, creating innovative solutions adapted to the local context.',
      date: '15 Oct 2025',
      dateValue: new Date('2025-10-15'),
      author: 'Dr. Amina Kone',
      category: 'transformation',
      readTime: '8 min',
      image: whatsapp1,
      views: 4250
    },
    {
      id: 2,
      title: currentLanguage === 'fr'
        ? 'Innovation en Afrique : Défis et Opportunités'
        : 'Innovation in Africa: Challenges and Opportunities',
      excerpt: currentLanguage === 'fr'
        ? 'L\'écosystème entrepreneurial africain connaît une croissance remarquable. Découvrez les stratégies gagnantes des leaders innovants.'
        : 'The African entrepreneurial ecosystem is experiencing remarkable growth. Discover the winning strategies of innovative leaders.',
      date: '22 Mar 2025',
      dateValue: new Date('2025-03-22'),
      author: 'Emmanuel Okonkwo',
      category: 'innovation',
      readTime: '6 min',
      image: designersImage,
      views: 3890
    },
    {
      id: 3,
      title: currentLanguage === 'fr'
        ? 'Management Interculturel : L\'Atout Africain'
        : 'Intercultural Management: The African Advantage',
      excerpt: currentLanguage === 'fr'
        ? 'Les compétences multiculturelles des managers africains représentent un avantage concurrentiel majeur dans l\'économie globalisée.'
        : 'The multicultural skills of African managers represent a major competitive advantage in the globalized economy.',
      date: '8 Jul 2025',
      dateValue: new Date('2025-07-08'),
      author: 'Fatou Diallo',
      category: 'leadership',
      readTime: '7 min',
      image: personnesBureau,
      views: 5120
    },
    {
      id: 4,
      title: currentLanguage === 'fr'
        ? 'Performance Organisationnelle : Méthodes Agiles Africaines'
        : 'Organizational Performance: African Agile Methods',
      excerpt: currentLanguage === 'fr'
        ? 'Les entreprises africaines développent des approches agiles uniques, combinant traditions locales et méthodologies modernes.'
        : 'African companies are developing unique agile approaches, combining local traditions and modern methodologies.',
      date: '14 Jan 2025',
      dateValue: new Date('2025-01-14'),
      author: 'Kwame Asante',
      category: 'performance',
      readTime: '9 min',
      image: affiliesImage,
      views: 2760
    },
    {
      id: 5,
      title: currentLanguage === 'fr'
        ? 'Conseil en Afrique : Nouvelles Approches Collaboratives'
        : 'Consulting in Africa: New Collaborative Approaches',
      excerpt: currentLanguage === 'fr'
        ? 'Les cabinets de conseil africains redéfinissent leur métier en privilégiant des approches plus collaboratives et participatives.'
        : 'African consulting firms are redefining leur business by favoring more collaborative and participatory approaches.',
      date: '5 Jun 2025',
      dateValue: new Date('2025-06-05'),
      author: 'Dr. Sarah Mensah',
      category: 'consulting',
      readTime: '10 min',
      image: whatsapp2,
      views: 1480
    },
    {
      id: 6,
      title: currentLanguage === 'fr'
        ? 'Stratégies d\'Innovation Technologique en Afrique'
        : 'Technology Innovation Strategies in Africa',
      excerpt: currentLanguage === 'fr'
        ? 'Les entreprises africaines adoptent des stratégies d\'innovation uniques pour surmonter les défis technologiques et créer des opportunités.'
        : 'African companies adopt unique innovation strategies to overcome technological challenges and create opportunities.',
      date: '18 Sep 2025',
      dateValue: new Date('2025-09-18'),
      author: 'Prof. Kofi Mensah',
      category: 'innovation',
      readTime: '12 min',
      image: whatsapp3,
      views: 4780
    },
    {
      id: 7,
      title: currentLanguage === 'fr'
        ? 'Développement des Talents : L\'Approche Africaine'
        : 'Talent Development: The African Approach',
      excerpt: currentLanguage === 'fr'
        ? 'Comment les organisations africaines développent leurs talents en combinant formation moderne et sagesse traditionnelle.'
        : 'How African organizations develop their talents by combining modern training with traditional wisdom.',
      date: '11 Feb 2025',
      dateValue: new Date('2025-02-11'),
      author: 'Dr. Aisha Traore',
      category: 'leadership',
      readTime: '8 min',
      image: whatsapp4,
      views: 3320
    },
    {
      id: 8,
      title: currentLanguage === 'fr'
        ? 'Transformation Organisationnelle Post-Pandémie'
        : 'Post-Pandemic Organizational Transformation',
      excerpt: currentLanguage === 'fr'
        ? 'Les leçons apprises et les nouvelles pratiques organisationnelles qui émergent dans le contexte africain post-COVID.'
        : 'Lessons learned and new organizational practices emerging in the African post-COVID context.',
      date: '29 Apr 2025',
      dateValue: new Date('2025-04-29'),
      author: 'Emmanuel Diop',
      category: 'transformation',
      readTime: '11 min',
      image: whatsapp5,
      views: 2950
    }
  ]

  // Services/thèmes verticaux pour la section principale
  const featuredServices = [
    {
      id: 'advisory',
      title: currentLanguage === 'fr' ? 'Conseil Stratégique' : 'Strategic Advisory',
      description: currentLanguage === 'fr' 
        ? 'Accompagnement dans la définition et mise en œuvre de stratégies de croissance'
        : 'Support in defining and implementing growth strategies',
      image: vert1,
      gradient: null
    },
    {
      id: 'transformation',
      title: currentLanguage === 'fr' ? 'Transformation Digitale' : 'Digital Transformation',
      description: currentLanguage === 'fr'
        ? 'Modernisation des processus et adoption des nouvelles technologies'
        : 'Process modernization and adoption of new technologies',
      image: vert2,
      gradient: null
    },
    {
      id: 'leadership',
      title: currentLanguage === 'fr' ? 'Développement Leadership' : 'Leadership Development',
      description: currentLanguage === 'fr'
        ? 'Formation et coaching des équipes dirigeantes'
        : 'Training and coaching of leadership teams',
      image: vert3,
      gradient: null
    }
  ]

  // Mois de l'année pour le filtre
  const months = [
    { num: 0, nameFr: 'Janvier', nameEn: 'January' },
    { num: 1, nameFr: 'Février', nameEn: 'February' },
    { num: 2, nameFr: 'Mars', nameEn: 'March' },
    { num: 3, nameFr: 'Avril', nameEn: 'April' },
    { num: 4, nameFr: 'Mai', nameEn: 'May' },
    { num: 5, nameFr: 'Juin', nameEn: 'June' },
    { num: 6, nameFr: 'Juillet', nameEn: 'July' },
    { num: 7, nameFr: 'Août', nameEn: 'August' },
    { num: 8, nameFr: 'Septembre', nameEn: 'September' },
    { num: 9, nameFr: 'Octobre', nameEn: 'October' },
    { num: 10, nameFr: 'Novembre', nameEn: 'November' },
    { num: 11, nameFr: 'Décembre', nameEn: 'December' }
  ]

  // Filtrage par topic
  const topicFilteredArticles = selectedTopic === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedTopic)

  // Filtrage par mois (si sélectionné)
  const monthFilteredArticles = selectedMonth !== null
    ? topicFilteredArticles.filter(article => article.dateValue.getMonth() === selectedMonth)
    : topicFilteredArticles

  // Tri des articles
  const filteredArticles = [...monthFilteredArticles].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.views - a.views // Tri par popularité (décroissant)
    } else if (sortBy === 'recent') {
      return b.dateValue.getTime() - a.dateValue.getTime() // Tri par date (plus récent d'abord)
    } else { // oldest
      return a.dateValue.getTime() - b.dateValue.getTime() // Tri par date (plus ancien d'abord)
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white py-16 overflow-hidden">
          {/* Grille animée en background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
              animation: 'moveGrid 15s linear infinite',
            }}></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              {currentLanguage === 'fr' ? 'Du nouveau sur le Blog MatriCx' : 'News on the MatriCx Blog'}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              {currentLanguage === 'fr' 
                ? 'Un recueil d\'histoires sur nos collaborateurs, nos compétences, nos recherches et l\'évolution constante de notre entreprise.'
                : 'A collection of stories about our employees, our skills, our research and the constant evolution of our company.'
              }
            </p>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Sidebar gauche - Topics */}
            <aside className="col-span-12 lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  {currentLanguage === 'fr' ? 'Sujets d\'expertise' : 'Topics of Expertise'}
                </h3>
                <nav className="space-y-2">
                  {topics.map((topic) => {
                    const IconComponent = topic.icon
                    return (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 ${
                          selectedTopic === topic.id
                            ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-600'
                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        <IconComponent size={18} />
                        <span className="text-sm font-medium">{topic.name}</span>
                      </button>
                    )
                  })}
                </nav>

                {/* Section Réseaux Sociaux */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-4">
                    {currentLanguage === 'fr' ? 'Suivez-nous' : 'Follow Us'}
                  </h4>
                  <div className="flex items-center justify-center space-x-3">
                    <a 
                      href="https://www.linkedin.com/company/matricx-consulting/posts/?feedView=all" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a 
                      href="https://x.com/voix_au" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all transform hover:scale-110"
                      title="Twitter"
                    >
                      <Twitter size={18} className="text-white" />
                    </a>
                    <a 
                      href="https://www.facebook.com/people/La-Voix-du-Client-au-237/100086597136441/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110"
                      title="Facebook"
                    >
                      <Facebook size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Contenu principal */}
            <main className="col-span-12 lg:col-span-9">
              
              {/* Services Cards Verticaux avec effet hover */}
              <section className="mb-12">
                {/* Header avec titre et filtres */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {currentLanguage === 'fr' ? 'Nos Domaines d\'Excellence' : 'Our Areas of Excellence'}
                  </h2>
                  
                  {/* Filtres avec dropdowns */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 font-medium">
                      {currentLanguage === 'fr' ? 'Trier par :' : 'Sort by:'}
                    </span>
                    
                    {/* Filtre Populaire avec dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowPopularDropdown(!showPopularDropdown)
                          setShowDateDropdown(false)
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                          sortBy === 'popular' || sortBy === 'recent' || sortBy === 'oldest'
                            ? 'bg-yellow-400 text-gray-900 shadow-md'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        <Flame size={16} />
                        {sortBy === 'popular' && (currentLanguage === 'fr' ? 'Populaire' : 'Popular')}
                        {sortBy === 'recent' && (currentLanguage === 'fr' ? 'Récent' : 'Recent')}
                        {sortBy === 'oldest' && (currentLanguage === 'fr' ? 'Ancien' : 'Oldest')}
                        <svg className={`w-4 h-4 transition-transform ${showPopularDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown menu Populaire */}
                      {showPopularDropdown && (
                        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 min-w-[160px]">
                          <button
                            onClick={() => {
                              setSortBy('popular')
                              setSelectedMonth(null)
                              setShowPopularDropdown(false)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-yellow-50 text-gray-700 hover:text-yellow-600 transition-colors"
                          >
                            {currentLanguage === 'fr' ? 'Populaire' : 'Popular'}
                          </button>
                          <button
                            onClick={() => {
                              setSortBy('recent')
                              setSelectedMonth(null)
                              setShowPopularDropdown(false)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-yellow-50 text-gray-700 hover:text-yellow-600 transition-colors"
                          >
                            {currentLanguage === 'fr' ? 'Récent' : 'Recent'}
                          </button>
                          <button
                            onClick={() => {
                              setSortBy('oldest')
                              setSelectedMonth(null)
                              setShowPopularDropdown(false)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-yellow-50 text-gray-700 hover:text-yellow-600 transition-colors"
                          >
                            {currentLanguage === 'fr' ? 'Ancien' : 'Oldest'}
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {/* Filtre Date avec dropdown de mois */}
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowDateDropdown(!showDateDropdown)
                          setShowPopularDropdown(false)
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                          selectedMonth !== null
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        <Clock size={16} />
                        {selectedMonth !== null 
                          ? (currentLanguage === 'fr' ? months[selectedMonth].nameFr : months[selectedMonth].nameEn)
                          : (currentLanguage === 'fr' ? 'Date' : 'Date')
                        }
                        <svg className={`w-4 h-4 transition-transform ${showDateDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown menu Date - Grille de mois */}
                      {showDateDropdown && (
                        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
                          <div className="grid grid-cols-3 gap-2 w-[280px]">
                            {months.map((month) => (
                              <button
                                key={month.num}
                                onClick={() => {
                                  setSelectedMonth(month.num)
                                  setShowDateDropdown(false)
                                }}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                  selectedMonth === month.num
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }`}
                              >
                                {currentLanguage === 'fr' ? month.nameFr : month.nameEn}
                              </button>
                            ))}
                          </div>
                          <button
                            onClick={() => {
                              setSelectedMonth(null)
                              setShowDateDropdown(false)
                            }}
                            className="w-full mt-3 px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            {currentLanguage === 'fr' ? 'Tous les mois' : 'All months'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 h-96">
                  {featuredServices.map((service) => (
                    <div
                      key={service.id}
                      className="group relative flex-1 rounded-xl overflow-hidden transition-all duration-700 ease-out hover:flex-[1.8] cursor-pointer shadow-lg hover:shadow-2xl"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 30%'
                      }}
                    >
                      {/* Overlay subtil seulement pour la lisibilité du texte */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-all duration-700"></div>
                      
                      {/* Effet de brillance subtil au survol */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Content avec effet subtil */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="transform transition-all duration-500 ease-out group-hover:translate-y-[-15px]">
                          <h3 className="text-lg font-bold mb-3 group-hover:text-xl transition-all duration-500 drop-shadow-lg">
                            {service.title}
                          </h3>
                          <p className="text-sm opacity-85 group-hover:opacity-100 transition-all duration-500 line-clamp-2 group-hover:line-clamp-none drop-shadow-md">
                            {service.description}
                          </p>
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                              <span className="text-sm font-medium">{currentLanguage === 'fr' ? 'Explorer' : 'Explore'}</span>
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Articles correspondant au topic sélectionné */}
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedTopic === 'all' 
                      ? (currentLanguage === 'fr' ? 'Tous nos articles' : 'All our articles')
                      : topics.find(t => t.id === selectedTopic)?.name
                    }
                  </h2>
                  <span className="text-sm text-gray-500">
                    {filteredArticles.length} {currentLanguage === 'fr' ? 'articles' : 'articles'}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {filteredArticles.map((article) => (
                    <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                      {/* Image de l'article */}
                      <div className="h-48 relative overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{
                            objectPosition: 'center 30%'
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {topics.find(t => t.id === article.category)?.name}
                          </span>
                        </div>
                      </div>

                      {/* Contenu de l'article */}
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User size={14} />
                            <span>{article.author}</span>
                          </div>
                          <span className="text-blue-600">{article.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>

                        <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                          <span>{currentLanguage === 'fr' ? 'Lire l\'article' : 'Read article'}</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Bouton Load More */}
                {filteredArticles.length > 0 && (
                  <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-yellow-500 text-black font-bold rounded-lg hover:from-blue-700 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg">
                      {currentLanguage === 'fr' ? 'Charger plus d\'articles' : 'Load more articles'}
                    </button>
                  </div>
                )}
              </section>
            </main>
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {currentLanguage === 'fr' ? 'Ne louper pas nos dernières recherches & actualités' : 'Don\'t miss our latest research & news'}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {currentLanguage === 'fr' 
                ? 'Recevez nos analyses exclusives et insights du consulting africain'
                : 'Receive our exclusive analysis and insights from African consulting'
              }
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder={currentLanguage === 'fr' ? 'Votre email professionnel' : 'Your professional email'}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors font-medium">
                {currentLanguage === 'fr' ? 'S\'abonner' : 'Subscribe'}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Blog