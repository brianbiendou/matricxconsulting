import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { Shield, Lightbulb, Sparkles, Users, Star, ArrowRight, ArrowUpRight } from 'lucide-react'

const ValuesSection: React.FC = () => {
  const { t } = useTranslation()
  const [activeValue, setActiveValue] = useState(0)

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      name: t('values.integrity.name'),
      description: t('values.integrity.description'),
      gradient: "from-yellow-400 to-yellow-500",
      bgColor: "#FDC300",
      textColor: "text-black"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      name: t('values.innovation.name'),
      description: t('values.innovation.description'),
      gradient: "from-gray-900 to-black",
      bgColor: "#000000",
      textColor: "text-white"
    },
    {
      icon: <Star className="w-6 h-6" />,
      name: t('values.excellence.name'),
      description: t('values.excellence.description'),
      gradient: "from-white to-gray-100",
      bgColor: "#FFFFFF",
      textColor: "text-black"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: t('values.authenticity.name'),
      description: t('values.authenticity.description'),
      gradient: "from-blue-500 to-blue-600",
      bgColor: "#0080AF",
      textColor: "text-black"
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: t('values.collaboration.name'),
      description: t('values.collaboration.description'),
      gradient: "from-gray-400 to-gray-500",
      bgColor: "#9CA3AF",
      textColor: "text-black"
    }
  ]

  return (
    <section className="section-padding bg-white section-transition">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm border border-yellow-200">
            {t('values.badge')}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
            {t('values.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Interactive Values Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Interactive Values */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center text-yellow-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              {t('values.badge')}
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8 font-bold">
              {t('values.subtitle')}
            </p>

            {/* Interactive Value Buttons */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setActiveValue(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                    activeValue === index 
                      ? 'transform scale-[1.02] shadow-lg' 
                      : 'bg-gray-100 hover:bg-gray-200 border-2 border-gray-200'
                  }`}
                  style={{
                    backgroundColor: activeValue === index ? value.bgColor : undefined,
                    border: activeValue === index ? 'none' : undefined
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={activeValue === index ? value.textColor : 'text-gray-600'}
                        style={activeValue === index && value.textColor.includes('black') ? { color: '#000' } : undefined}
                      >
                        {value.icon}
                      </div>
                      <span
                        className={`font-semibold ${activeValue === index ? value.textColor : 'text-gray-700'}`}
                        style={activeValue === index && value.textColor.includes('black') ? { color: '#000' } : undefined}
                      >
                        {value.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transform transition-transform ${
                        activeValue === index ? (value.textColor + ' rotate-0') : 'text-gray-400 -rotate-45'
                      }`}
                      style={activeValue === index && value.textColor.includes('black') ? { color: '#000' } : undefined}
                    />
                  </div>
                  
                  {/* Expandable Description */}
                  <div className={`overflow-hidden transition-all duration-300 ${activeValue === index ? 'max-h-40 mt-4' : 'max-h-0' }`}>
                    <p className={`text-sm leading-relaxed ${activeValue === index ? value.textColor : 'text-gray-600'}`}>
                      {value.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex flex-col">
            {/* Main Image - Same height as left content */}
            <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/valeurs.jpg" 
                alt="MatriCx Values" 
                className="w-full h-full object-cover min-h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 animate-float"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl animate-float animation-delay-400"></div>
      </div>
    </section>
  )
}

export default ValuesSection