import React, { useState, useCallback } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useSanityPartners } from '../hooks/useSanityContent'
import finexsLogo from '../images/finexs.png'
import matricxLogo from '../images/logomatricx.png'
import matrixLogo from '../images/matrix.png'
import newtelnetLogo from '../images/newtelnet.png'
import wafaLogo from '../images/wafa.png'
import hotelLogo from '../images/hotel.png'

const PartnersCarousel: React.FC = () => {
  const { t } = useTranslation()
  const { partners: sanityPartners, urlFor } = useSanityPartners()
  const [isHovered, setIsHovered] = useState(false)
  
  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  // Partenaires hardcodés (fallback)
  const defaultPartners = [
    {
      type: 'image',
      src: finexsLogo,
      alt: 'Finexs',
      name: 'Finexs'
    },
    {
      type: 'image',
      src: matricxLogo,
      alt: 'MatriCx',
      name: 'MatriCx'
    },
    {
      type: 'image',
      src: matrixLogo,
      alt: 'Matrix',
      name: 'Matrix'
    },
    {
      type: 'image',
      src: newtelnetLogo,
      alt: 'New Telnet',
      name: 'New Telnet'
    },
    {
      type: 'image',
      src: wafaLogo,
      alt: 'WAFA',
      name: 'WAFA'
    },
    {
      type: 'image',
      src: hotelLogo,
      alt: 'Hotel',
      name: 'Hotel'
    }
  ]

  // Mapper les partenaires Sanity
  const sanityMappedPartners = (sanityPartners && sanityPartners.length > 0) ? sanityPartners.map(partner => ({
    type: 'image' as const,
    src: urlFor(partner.logo).width(200).height(100).url(),
    alt: partner.name,
    name: partner.name,
    website: partner.website
  })) : []

  // Utiliser Sanity si disponible, sinon fallback
  const partners = sanityMappedPartners.length > 0 ? sanityMappedPartners : defaultPartners

  // Dupliquer exactement 2 fois pour un défilement CSS fluide
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-white overflow-hidden section-transition border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm border border-yellow-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {t('partnersCarousel.badge')}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('partnersCarousel.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('partnersCarousel.description')}
          </p>
        </div>

        <div className="flex justify-center items-center">
          {/* Conteneur du carrousel */}
          <div className="relative overflow-hidden h-24">
            {/* Carrousel avec CSS pur */}
            <div 
              className={`flex space-x-14 ${isHovered ? 'carousel-paused' : 'carousel-scroll'}`}
              style={{ width: 'max-content' }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-24 w-40 hover:scale-110 transition-transform duration-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {partner.type === 'image' ? (
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="max-h-20 max-w-36 object-contain transition-all duration-300 drop-shadow-md hover:drop-shadow-xl"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-gray-700 hover:text-gray-900 transition-colors duration-300 font-primary drop-shadow-md">
                      {partner.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel