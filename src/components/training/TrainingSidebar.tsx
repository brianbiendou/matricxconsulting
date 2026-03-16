import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Search, 
  Phone, 
  User, 
  ChevronDown, 
  BookOpen,
  HelpCircle,
  Newspaper,
  Calendar,
  UserCheck,
  BarChart3,
  Heart,
  MessageSquare,
  Cpu,
  Megaphone,
  TrendingUp,
  Monitor,
  Users,
  Building,
  Lightbulb,
  Award,
  GraduationCap,
  X,
  Home
} from 'lucide-react'

interface TrainingSidebarProps {
  isOpen?: boolean
  onClose?: () => void
  isMobile?: boolean
}

const TrainingSidebar: React.FC<TrainingSidebarProps> = ({ isOpen = true, onClose, isMobile = false }) => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    domaines: false,
    solutions: false,
    ressources: false
  })

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }))
  }

  const domaines = [
    { name: 'Expérience Client', slug: 'experience-client', icon: Heart },
    { name: 'Relation Client', slug: 'relation-client', icon: MessageSquare },
    { name: 'Excellence Opérationnelle', slug: 'excellence-operationnelle', icon: TrendingUp },
    { name: 'IA - Intelligence Artificielle', slug: 'intelligence-artificielle', icon: Cpu },
    { name: 'Digital', slug: 'digital', icon: Monitor },
    { name: 'Communication', slug: 'communication', icon: Megaphone },
    { name: 'Marketing', slug: 'marketing', icon: BarChart3 },
  ]

  const solutions = [
    { name: 'Formation Inter-entreprise', slug: 'inter', icon: Users },
    { name: 'Formation Intra-entreprise', slug: 'intra', icon: Building },
    { name: 'Formation Sur-mesure', slug: 'sur-mesure', icon: Lightbulb },
    { name: 'Formations Certifiantes', slug: 'certifiantes', icon: Award },
    { name: 'E-learning', slug: 'e-learning', icon: Monitor },
    { name: 'Digital Learning', slug: 'digital-learning', icon: GraduationCap },
  ]

  const ressources = [
    { name: 'FAQ', icon: HelpCircle },
    { name: 'Le Mag / Actualités', icon: Newspaper },
    { name: 'Webinars & Événements', icon: Calendar },
    { name: 'Nos Experts', icon: UserCheck },
    { name: 'Enquêtes & Baromètres', icon: BarChart3 },
  ]

  const sidebarClasses = isMobile 
    ? `fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
    : 'flex flex-col h-full overflow-y-auto'

  return (
    <>
      {/* Overlay pour mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={sidebarClasses}>
        {/* Header Sidebar - Mobile only close button */}
        {isMobile && (
          <div className="p-4 border-b border-gray-100 flex justify-end">
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg" aria-label="Fermer le menu">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        )}

        {/* Barre de recherche */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une formation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Accueil */}
        <div className="p-4 border-b border-gray-100">
          <Link 
            to="/services/training"
            onClick={isMobile ? onClose : undefined}
            className="flex items-center gap-3 p-3 bg-yellow-50 hover:bg-yellow-100 rounded-xl transition-colors w-full"
          >
            <Home className="w-5 h-5 text-yellow-600" />
            <span className="font-medium text-yellow-700">Accueil</span>
          </Link>
        </div>

        {/* Menus déroulants */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {/* Domaines de formation */}
          <div>
            <button
              onClick={() => toggleMenu('domaines')}
              className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-700">Domaines de formation</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openMenus.domaines ? 'rotate-180' : ''}`} />
            </button>
            {openMenus.domaines && (
              <div className="mt-1 ml-4 space-y-1 animate-fade-in">
                {domaines.map((item) => (
                  <div
                    key={item.slug}
                    className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-gray-600 cursor-default"
                  >
                    <item.icon className="w-4 h-4 text-gray-400" />
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Solutions */}
          <div>
            <button
              onClick={() => toggleMenu('solutions')}
              className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-700">Solutions</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openMenus.solutions ? 'rotate-180' : ''}`} />
            </button>
            {openMenus.solutions && (
              <div className="mt-1 ml-4 space-y-1 animate-fade-in">
                {solutions.map((item) => (
                  <div
                    key={item.slug}
                    className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-gray-600 cursor-default"
                  >
                    <item.icon className="w-4 h-4 text-gray-400" />
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ressources */}
          <div>
            <button
              onClick={() => toggleMenu('ressources')}
              className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-700">Ressources</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openMenus.ressources ? 'rotate-180' : ''}`} />
            </button>
            {openMenus.ressources && (
              <div className="mt-1 ml-4 space-y-1 animate-fade-in">
                {ressources.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-gray-600 cursor-default"
                  >
                    <item.icon className="w-4 h-4 text-gray-400" />
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Espace Client en bas */}
        <div className="p-4 border-t border-gray-100">
          <Link 
            to="/services/training/espace-client"
            onClick={isMobile ? onClose : undefined}
            className="flex items-center gap-3 p-3 bg-yellow-50 hover:bg-yellow-100 rounded-xl transition-colors w-full"
          >
            <User className="w-5 h-5 text-yellow-600" />
            <span className="font-medium text-yellow-700">Espace Client</span>
          </Link>
        </div>

        {/* Contact téléphone en bas */}
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <span className="text-xs text-gray-500">Appelez-nous</span>
              <span className="block font-semibold text-gray-900 text-sm">677 810 120</span>
              <span className="block font-semibold text-gray-900 text-sm">699 947 136</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default TrainingSidebar
