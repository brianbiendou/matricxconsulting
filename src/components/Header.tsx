import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { Menu, X, Mail, Languages, ChevronDown, ChevronRight, Building, Briefcase, Award, Monitor, Users, Lightbulb, BarChart, Settings, GraduationCap, Search } from 'lucide-react'
import logoMatricx from '../images/matricxlogo.png'
import leadershipImage from '../images/blog/WhatsApp Image 2025-10-15 à 16.38.04_8110d4ba.jpg'
import innovationImage from '../images/blog/vert1.jpg'
import './Header.css'

interface SearchResult {
  title: string
  titleEn: string
  path: string
  keywords: string[]
}

const Header: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const location = useLocation()
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const searchDropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Database de recherche - Pages et sections
  const searchDatabase = [
    // Pages principales
    { title: 'Accueil', titleEn: 'Home', path: '/', keywords: ['home', 'accueil', 'principale'] },
    { title: 'À propos', titleEn: 'About', path: '/about', keywords: ['about', 'propos', 'entreprise', 'company'] },
    { title: 'Services', titleEn: 'Services', path: '/services', keywords: ['services', 'expertise'] },
    { title: 'Contact', titleEn: 'Contact', path: '/contact', keywords: ['contact', 'email', 'nous joindre'] },
    { title: 'Blog', titleEn: 'Blog', path: '/blog', keywords: ['blog', 'articles', 'actualités'] },
    
    // Sous-pages About
    { title: 'Entreprise', titleEn: 'Company', path: '/about/company', keywords: ['company', 'entreprise', 'équipe', 'team'] },
    { title: 'Carrières', titleEn: 'Careers', path: '/about/careers', keywords: ['careers', 'carrières', 'emploi', 'jobs', 'recrutement'] },
    { title: 'Expérience', titleEn: 'Experience', path: '/about/experience', keywords: ['experience', 'expérience', 'réalisations'] },
    { title: 'Partenaires', titleEn: 'Partners', path: '/about/partners', keywords: ['partners', 'partenaires', 'collaboration'] },
    { title: 'Média', titleEn: 'Media', path: '/about/media', keywords: ['media', 'média', 'presse'] },
    { title: 'Durabilité', titleEn: 'Sustainability', path: '/about/sustainability', keywords: ['sustainability', 'durabilité', 'environnement'] },
    
    // Services
    { title: 'MatriCx Advisory', titleEn: 'MatriCx Advisory', path: '/services/advisory', keywords: ['advisory', 'conseil', 'stratégie', 'consulting'] },
    { title: 'MatriCx Survey', titleEn: 'MatriCx Survey', path: '/services/survey', keywords: ['survey', 'enquête', 'études', 'research', 'marché'] },
    { title: 'MatriCx Technology', titleEn: 'MatriCx Technology', path: '/services/technology', keywords: ['technology', 'technologie', 'crm', 'digital', 'transformation'] },
    { title: 'MatriCx Training', titleEn: 'MatriCx Training', path: '/services/training', keywords: ['training', 'formation', 'éducation', 'certification'] },
  ]

  // Fonction de recherche
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    
    if (query.trim() === '') {
      setSearchResults([])
      return
    }

    const queryLower = query.toLowerCase()
    const results = searchDatabase.filter(item => {
      const title = currentLanguage === 'fr' ? item.title : item.titleEn
      return (
        title.toLowerCase().includes(queryLower) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(queryLower))
      )
    })

    setSearchResults(results.slice(0, 5)) // Limiter à 5 résultats
  }

  // Navigation vers un résultat
  const handleResultClick = (path: string) => {
    navigate(path)
    setSearchQuery('')
    setSearchResults([])
    setIsSearchFocused(false)
  }

  // Fermer le dropdown de recherche en cliquant dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false)
      }
    }

    if (isSearchFocused) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchFocused])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      {/* Main Navigation */}
      <nav className="py-2">
        <div className="container-custom flex items-center gap-6">
          {/* Logo - agrandi de 15% */}
          <div className="flex items-center">
            <Link to="/" className="transition-transform duration-200 hover:scale-105">
              <img 
                src={logoMatricx} 
                alt="MatriCx Consulting" 
                className="h-16 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation - MatriCx Styling - textes agrandis de 15% */}
          <div className="hidden lg:flex items-center space-x-2 font-primary flex-1">
            <div className="relative group"
                 onMouseEnter={() => setIsAboutDropdownOpen(true)}
                 onMouseLeave={() => setIsAboutDropdownOpen(false)}>
              <Link to="/about" className={`nav-link text-sm font-semibold transition-all duration-300 flex items-center px-2.5 py-2 rounded-lg hover:bg-primary-50 ${location.pathname === '/about' || location.pathname.startsWith('/about/') ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600'}`}>
                {t('nav.about')} 
                <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"></span>
              
              {/* Dropdown Menu About - Style Renascence exact */}
              <div className={`fixed left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg transition-all duration-300 transform origin-top z-50 ${isAboutDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="max-w-7xl mx-auto px-8 py-12">
                  <div className="flex">
                    {/* Section Navigation (2 colonnes à gauche) */}
                    <div className="flex-1 max-w-2xl mr-16">
                      <div className="grid grid-cols-2 gap-12">
                        {/* Colonne 1 */}
                        <div className="space-y-4">

                          <Link to="/about/company" className="flex items-center p-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                            <Building size={20} className="mr-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <div>
                              <div className="font-bold text-black">{currentLanguage === 'fr' ? 'Entreprise' : 'Company'}</div>
                              <div className="text-sm text-gray-500">{currentLanguage === 'fr' ? 'Dites bonjour à l\'équipe MatriCx' : 'Say hi to team MatriCx'}</div>
                            </div>
                          </Link>
                          
                          <Link to="/about/careers" className="flex items-center p-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                            <Briefcase size={20} className="mr-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <div>
                              <div className="font-bold text-black">{currentLanguage === 'fr' ? 'Carrières' : 'Careers'}</div>
                              <div className="text-sm text-gray-500">{currentLanguage === 'fr' ? 'Devenez membre de notre équipe' : 'Become a part of our team'}</div>
                            </div>
                          </Link>
                          
                          <Link to="/about/experience" className="flex items-center p-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                            <Award size={20} className="mr-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <div>
                              <div className="font-bold text-black">{currentLanguage === 'fr' ? 'Expérience' : 'Experience'}</div>
                              <div className="text-sm text-gray-500">{currentLanguage === 'fr' ? 'Découvrez nos réalisations' : 'Check what we are up to'}</div>
                            </div>
                          </Link>
                        </div>
                        
                        {/* Colonne 2 */}
                        <div className="space-y-4">
                          <Link to="/about/media" className="flex items-center p-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                            <Monitor size={20} className="mr-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <div>
                              <div className="font-bold text-black">{currentLanguage === 'fr' ? 'Médias' : 'Media'}</div>
                              <div className="text-sm text-gray-500">{currentLanguage === 'fr' ? 'MatriCx dans les médias' : 'MatriCx as presented in media'}</div>
                            </div>
                          </Link>
                          
                          <Link to="/about/partners" className="flex items-center p-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                            <Users size={20} className="mr-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <div>
                              <div className="font-bold text-black">{currentLanguage === 'fr' ? 'Partenaires' : 'Partners'}</div>
                              <div className="text-sm text-gray-500">{currentLanguage === 'fr' ? 'Faisons ce voyage ensemble' : 'Let\'s take this journey together'}</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Section Articles (à droite, juste à côté) */}
                    <div className="w-96 bg-gray-50 p-8 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-500 tracking-wide mb-6">
                        {currentLanguage === 'fr' ? 'À la une du blog' : 'Featured from blog'}
                      </h3>
                      <div className="space-y-6">
                        {/* Article 1 - Leadership Africain */}
                        <Link to="/blog" className="block group">
                          <div className="flex items-start space-x-4">
                            <div className="w-24 h-18 rounded-lg flex-shrink-0 overflow-hidden">
                              <img 
                                src={leadershipImage}
                                alt="Leadership Africain" 
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">
                                {currentLanguage === 'fr' ? 
                                  'Leadership Africain dans la Transformation Digitale' : 
                                  'African Leadership in Digital Transformation'
                                }
                              </h4>
                              <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                                {currentLanguage === 'fr' ? 
                                  'Comment les leaders africains façonnent l\'avenir numérique du continent avec des stratégies innovantes et des approches collaboratives.' : 
                                  'How African leaders are shaping the digital future of the continent with innovative strategies and collaborative approaches.'
                                }
                              </p>
                              <p className="text-xs text-gray-900 group-hover:text-gray-600 font-medium">
                                {currentLanguage === 'fr' ? 'Lire plus' : 'Read more'}
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        {/* Article 2 - Innovation en Afrique */}
                        <Link to="/blog" className="block group">
                          <div className="flex items-start space-x-4">
                            <div className="w-24 h-18 rounded-lg flex-shrink-0 overflow-hidden">
                              <img 
                                src={innovationImage} 
                                alt="Innovation Afrique" 
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">
                                {currentLanguage === 'fr' ? 
                                  'Innovation en Afrique : Défis et Opportunités' : 
                                  'Innovation in Africa: Challenges and Opportunities'
                                }
                              </h4>
                              <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                                {currentLanguage === 'fr' ? 
                                  'L\'écosystème entrepreneurial africain continue de croître malgré les défis, créant des opportunités uniques pour l\'innovation technologique.' : 
                                  'The African entrepreneurial ecosystem continues to grow despite challenges, creating unique opportunities for technological innovation.'
                                }
                              </p>
                              <p className="text-xs text-gray-900 group-hover:text-gray-600 font-medium">
                                {currentLanguage === 'fr' ? 'Lire plus' : 'Read more'}
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        {/* Voir tous les articles */}
                        <Link to="/blog" className="inline-flex items-center text-sm text-gray-900 hover:text-gray-600 font-medium pt-4 border-t border-gray-200 group">
                          {currentLanguage === 'fr' ? 'Voir tous les articles' : 'See all articles'} 
                          <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group"
                 onMouseEnter={() => setIsServicesDropdownOpen(true)}
                 onMouseLeave={() => setIsServicesDropdownOpen(false)}>
              <Link to="/services" className={`nav-link text-sm font-semibold transition-all duration-300 flex items-center px-2.5 py-2 rounded-lg hover:bg-primary-50 ${location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600'}`}>
                {t('nav.services')} 
                <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"></span>
              
              {/* Dropdown Menu Services - Style similaire About */}
              <div className={`fixed left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg transition-all duration-300 transform origin-top z-50 ${isServicesDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="max-w-7xl mx-auto px-8 py-12">
                  <div className="flex">
                    {/* Section Navigation Services (2 colonnes à gauche) */}
                    <div className="flex-1 max-w-2xl mr-16">
                      <div className="grid grid-cols-2 gap-12">
                        {/* Colonne 1 */}
                        <div className="space-y-4">
                          <Link to="/services/advisory" className="flex items-center p-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                            <Lightbulb size={20} className="mr-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <div>
                              <div className="font-bold text-black">{t('nav.dropdown.advisory')}</div>
                              <div className="text-sm text-gray-500">Conseil & stratégie financière</div>
                            </div>
                          </Link>
                          
                          <Link to="/services/survey" className="flex items-center p-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                            <BarChart size={20} className="mr-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <div>
                              <div className="font-bold text-black">{t('nav.dropdown.survey')}</div>
                              <div className="text-sm text-gray-500">Études & analyses de marché</div>
                            </div>
                          </Link>
                        </div>
                        
                        {/* Colonne 2 */}
                        <div className="space-y-4">
                          <Link to="/services/technology" className="flex items-center p-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                            <Settings size={20} className="mr-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <div>
                              <div className="font-bold text-black">{t('nav.dropdown.technology')}</div>
                              <div className="text-sm text-gray-500">CRM & transformation digitale</div>
                            </div>
                          </Link>
                          
                          <Link to="/services/training" className="flex items-center p-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                            <GraduationCap size={20} className="mr-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <div>
                              <div className="font-bold text-black">{t('nav.dropdown.training')}</div>
                              <div className="text-sm text-gray-500">Formation & certificats CX</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Section Articles (à droite, juste à côté) - Identique à About */}
                    <div className="w-96 bg-gray-50 p-8 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-500 tracking-wide mb-6">
                        {currentLanguage === 'fr' ? 'À la une du blog' : 'Featured from blog'}
                      </h3>
                      <div className="space-y-6">
                        {/* Article 1 - Leadership Africain */}
                        <Link to="/blog" className="block group">
                          <div className="flex items-start space-x-4">
                            <div className="w-24 h-18 rounded-lg flex-shrink-0 overflow-hidden">
                              <img 
                                src={leadershipImage}
                                alt="Leadership Africain" 
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">
                                {currentLanguage === 'fr' ? 
                                  'Leadership Africain dans la Transformation Digitale' : 
                                  'African Leadership in Digital Transformation'
                                }
                              </h4>
                              <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                                {currentLanguage === 'fr' ? 
                                  'Comment les leaders africains façonnent l\'avenir numérique du continent avec des stratégies innovantes et des approches collaboratives.' : 
                                  'How African leaders are shaping the digital future of the continent with innovative strategies and collaborative approaches.'
                                }
                              </p>
                              <p className="text-xs text-gray-900 group-hover:text-gray-600 font-medium">
                                {currentLanguage === 'fr' ? 'Lire plus' : 'Read more'}
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        {/* Article 2 - Innovation en Afrique */}
                        <Link to="/blog" className="block group">
                          <div className="flex items-start space-x-4">
                            <div className="w-24 h-18 rounded-lg flex-shrink-0 overflow-hidden">
                              <img 
                                src={innovationImage} 
                                alt="Innovation Afrique" 
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">
                                {currentLanguage === 'fr' ? 
                                  'Innovation en Afrique : Défis et Opportunités' : 
                                  'Innovation in Africa: Challenges and Opportunities'
                                }
                              </h4>
                              <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                                {currentLanguage === 'fr' ? 
                                  'L\'écosystème entrepreneurial africain continue de croître malgré les défis, créant des opportunités uniques pour l\'innovation technologique.' : 
                                  'The African entrepreneurial ecosystem continues to grow despite challenges, creating unique opportunities for technological innovation.'
                                }
                              </p>
                              <p className="text-xs text-gray-900 group-hover:text-gray-600 font-medium">
                                {currentLanguage === 'fr' ? 'Lire plus' : 'Read more'}
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        {/* Voir tous les articles */}
                        <Link to="/blog" className="inline-flex items-center text-sm text-gray-900 hover:text-gray-600 font-medium pt-4 border-t border-gray-200 group">
                          {currentLanguage === 'fr' ? 'Voir tous les articles' : 'See all articles'} 
                          <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/services/training" className={`nav-link text-sm font-semibold transition-all duration-300 relative group px-2.5 py-2 rounded-lg hover:bg-primary-50 whitespace-nowrap ${location.pathname === '/services/training' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600'}`}>
              {t('nav.training')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
            <Link to="/blog" className={`nav-link text-sm font-semibold transition-all duration-300 relative group px-2.5 py-2 rounded-lg hover:bg-primary-50 whitespace-nowrap ${location.pathname === '/blog' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600'}`}>
              {t('nav.blog')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
          </div>

          {/* Actions Section - MatriCx Styling */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Search Bar avec résultats */}
            <div className="relative" ref={searchDropdownRef}>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder={currentLanguage === 'fr' ? 'Rechercher...' : 'Search...'}
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-40 px-3 py-1.5 pl-8 text-xs rounded-lg border border-secondary-200 focus:border-primary-300 focus:ring-1 focus:ring-primary-300 focus:outline-none transition-all duration-300"
                />
                <Search size={14} className="absolute left-2.5 text-secondary-400 pointer-events-none" />
              </div>
              
              {/* Dropdown des résultats de recherche */}
              {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result.path)}
                      className="w-full text-left px-4 py-2.5 hover:bg-primary-50 transition-colors duration-200 flex items-center group"
                    >
                      <Search size={14} className="mr-3 text-gray-400 group-hover:text-primary-600" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-primary-600">
                          {currentLanguage === 'fr' ? result.title : result.titleEn}
                        </div>
                        <div className="text-xs text-gray-500">{result.path}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Language Dropdown */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 hover:scale-105 font-primary"
              >
                <Languages size={14} className="text-accent-500" />
                <span className="text-xs font-semibold text-secondary-600">{currentLanguage === 'fr' ? 'FR' : 'EN'}</span>
                <ChevronDown size={12} className={`text-secondary-600 transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => {
                      changeLanguage('fr')
                      setIsLanguageDropdownOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      currentLanguage === 'fr' 
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('en')
                      setIsLanguageDropdownOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      currentLanguage === 'en' 
                        ? 'text-primary-600 bg-primary-50' 
                        : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
            <Link to="/contact" className="btn-primary flex items-center space-x-1.5 hover:shadow-lg transform hover:-translate-y-0.5 text-xs font-primary px-3 py-1.5">
              <Mail size={14} />
              <span>{t('contact.cta')}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle - MatriCx Styling */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105 text-secondary-600"
          >
            {isMenuOpen ? <X size={22} className="text-secondary-600" /> : <Menu size={22} className="text-secondary-600" />}
          </button>
        </div>

        {/* Mobile Navigation - Accordion Style comme Renascence */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/98 backdrop-blur border-t border-primary-100">
            <div className="container-custom py-6 space-y-2 font-primary">
              {/* About Accordion */}
              <div className="space-y-1">
                <button 
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className={`w-full flex items-center justify-between py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${location.pathname === '/about' || location.pathname.startsWith('/about/') ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'}`}
                >
                  {t('nav.about')}
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileAboutOpen && (
                  <div className="ml-4 space-y-2 pb-2">

                    <Link to="/about/company" className="flex items-center py-2 px-4 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                      <Building size={16} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium">{currentLanguage === 'fr' ? 'Entreprise' : 'Company'}</div>
                        <div className="text-xs text-gray-500">{currentLanguage === 'fr' ? 'Dites bonjour à l\'équipe MatriCx' : 'Say hi to team MatriCx'}</div>
                      </div>
                    </Link>
                    <Link to="/about/careers" className="flex items-center py-2 px-4 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                      <Briefcase size={16} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium">{currentLanguage === 'fr' ? 'Carrières' : 'Careers'}</div>
                        <div className="text-xs text-gray-500">{currentLanguage === 'fr' ? 'Devenez membre de notre équipe' : 'Become a part of our team'}</div>
                      </div>
                    </Link>
                    <Link to="/about/experience" className="flex items-center py-2 px-4 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                      <Award size={16} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium">{currentLanguage === 'fr' ? 'Expérience' : 'Experience'}</div>
                        <div className="text-xs text-gray-500">{currentLanguage === 'fr' ? 'Découvrez nos réalisations' : 'Check what we are up to'}</div>
                      </div>
                    </Link>
                    <Link to="/about/media" className="flex items-center py-2 px-4 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                      <Monitor size={16} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium">{currentLanguage === 'fr' ? 'Médias' : 'Media'}</div>
                        <div className="text-xs text-gray-500">{currentLanguage === 'fr' ? 'MatriCx dans les médias' : 'MatriCx as presented in media'}</div>
                      </div>
                    </Link>
                    <Link to="/about/partners" className="flex items-center py-2 px-4 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                      <Users size={16} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium">{currentLanguage === 'fr' ? 'Partenaires' : 'Partners'}</div>
                        <div className="text-xs text-gray-500">{currentLanguage === 'fr' ? 'Faisons ce voyage ensemble' : 'Let\'s take this journey together'}</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Accordion */}
              <div className="space-y-1">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`w-full flex items-center justify-between py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'}`}
                >
                  {t('nav.services')}
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 space-y-2 pb-2">
                    <Link to="/services/advisory" className="flex items-center py-2 px-4 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                      <Lightbulb size={16} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium">{t('nav.dropdown.advisory')}</div>
                        <div className="text-xs text-gray-500">Conseil & stratégie financière</div>
                      </div>
                    </Link>
                    <Link to="/services/survey" className="flex items-center py-2 px-4 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                      <BarChart size={16} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium">{t('nav.dropdown.survey')}</div>
                        <div className="text-xs text-gray-500">Études & analyses de marché</div>
                      </div>
                    </Link>
                    <Link to="/services/technology" className="flex items-center py-2 px-4 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                      <Settings size={16} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium">{t('nav.dropdown.technology')}</div>
                        <div className="text-xs text-gray-500">CRM & transformation digitale</div>
                      </div>
                    </Link>
                    <Link to="/services/training" className="flex items-center py-2 px-4 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-25 rounded-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                      <GraduationCap size={16} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium">{t('nav.dropdown.training')}</div>
                        <div className="text-xs text-gray-500">Formation & certificats CX</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/services/training" className={`block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${location.pathname === '/services/training' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.training')}
              </Link>

              <Link to="/blog" className={`block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${location.pathname === '/blog' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.blog')}
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-primary-200 mt-6">
                <span className="text-sm text-secondary-600 font-medium">Langue:</span>
                <button
                  onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 border border-primary-200 transition-all duration-300 hover:scale-105"
                >
                  <Languages size={16} className="text-accent-500" />
                  <span className="text-sm font-semibold text-secondary-600">{currentLanguage === 'fr' ? 'EN' : 'FR'}</span>
                </button>
              </div>
              <Link to="/contact" className="btn-primary w-full flex items-center justify-center space-x-2 mt-6 hover:shadow-lg transform hover:-translate-y-0.5 text-base">
                <Mail size={18} />
                <span>{t('contact.cta')}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
