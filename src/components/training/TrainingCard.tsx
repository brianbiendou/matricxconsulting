import React from 'react'
import { LucideIcon } from 'lucide-react'

interface TrainingCardProps {
  icon: LucideIcon
  title: string
  description: string
  link?: string
  accentColor?: 'yellow' | 'blue' | 'green' | 'purple' | 'orange' | 'pink'
  onClick?: () => void
}

const accentColors = {
  yellow: {
    bg: 'bg-yellow-50',
    icon: 'bg-yellow-100 text-yellow-600',
    hover: 'hover:border-yellow-300',
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    hover: 'hover:border-blue-300',
  },
  green: {
    bg: 'bg-green-50',
    icon: 'bg-green-100 text-green-600',
    hover: 'hover:border-green-300',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    hover: 'hover:border-purple-300',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-600',
    hover: 'hover:border-orange-300',
  },
  pink: {
    bg: 'bg-pink-50',
    icon: 'bg-pink-100 text-pink-600',
    hover: 'hover:border-pink-300',
  },
}

const TrainingCard: React.FC<TrainingCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  link,
  accentColor = 'yellow',
  onClick
}) => {
  const colors = accentColors[accentColor]
  
  const CardWrapper = link ? 'a' : 'div'
  const cardProps = link ? { href: link } : { onClick }

  return (
    <div 
      className={`group bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colors.hover} cursor-pointer`}
      onClick={onClick}
    >
      {/* Icône */}
      <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
        <Icon className="w-7 h-7" />
      </div>

      {/* Titre */}
      <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-yellow-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default TrainingCard
