import React, { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection: React.FC = () => {
  const { t, currentLanguage } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Témoignages selon la langue choisie
  const testimonialsData = currentLanguage === 'fr' ? [
    {
      quote: "MatriCx Consulting a révolutionné notre approche client. Une expertise remarquable qui a boosté notre chiffre d'affaires de 40%.",
      author: "Amina Tchinda",
      position: "Directrice Générale",
      company: "Cameroon Bank",
      rating: 5,
      avatar: "AT",
      photoId: "1580489944761-95a4bd4e7909"
    },
    {
      quote: "Une équipe professionnelle qui comprend parfaitement les enjeux du marché africain. Résultats concrets et durables.",
      author: "Jean-Baptiste Nkomo",
      position: "CEO",
      company: "Tech Solutions Cameroun",
      rating: 5,
      avatar: "JN",
      photoId: "1472099645785-5658abf4ff4e"
    },
    {
      quote: "L'accompagnement de MatriCx nous a permis d'optimiser notre relation client et d'améliorer significativement notre satisfaction client.",
      author: "Françoise Mballa",
      position: "Responsable Marketing",
      company: "Orange Cameroun",
      rating: 5,
      avatar: "FM",
      photoId: "1494790108755-7d6c0b8e76e"
    },
    {
      quote: "Des conseils stratégiques et un accompagnement personnalisé. MatriCx comprend vraiment les besoins des entreprises africaines.",
      author: "Paul Mvondo",
      position: "Directeur Commercial",
      company: "SABC Douala",
      rating: 5,
      avatar: "PM",
      photoId: "1507003211169-0a1dd7a838a0"
    }
  ] : [
    {
      quote: "MatriCx Consulting has revolutionized our customer approach. Remarkable expertise that boosted our revenue by 40%.",
      author: "Amina Tchinda",
      position: "General Manager",
      company: "Cameroon Bank",
      rating: 5,
      avatar: "AT",
      photoId: "1580489944761-95a4bd4e7909"
    },
    {
      quote: "A professional team that perfectly understands the challenges of the African market. Concrete and lasting results.",
      author: "Jean-Baptiste Nkomo",
      position: "CEO",
      company: "Tech Solutions Cameroon",
      rating: 5,
      avatar: "JN",
      photoId: "1472099645785-5658abf4ff4e"
    },
    {
      quote: "MatriCx's support allowed us to optimize our customer relationship and significantly improve our customer satisfaction.",
      author: "Françoise Mballa",
      position: "Marketing Manager",
      company: "Orange Cameroon",
      rating: 5,
      avatar: "FM",
      photoId: "1494790108755-7d6c0b8e76e"
    },
    {
      quote: "Strategic advice and personalized support. MatriCx truly understands the needs of African businesses.",
      author: "Paul Mvondo",
      position: "Commercial Director",
      company: "SABC Douala",
      rating: 5,
      avatar: "PM",
      photoId: "1507003211169-0a1dd7a838a0"
    }
  ]

  const testimonials = testimonialsData

  // Défilement ultra-fluide et lent pour lecture confortable
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Reset à zéro quand on atteint la fin du premier set pour boucle infinie
        if (prev >= 4 * 320 / 320) { // Utiliser 4 au lieu de testimonials.length
          return 0.005;
        }
        return prev + 0.003; // Déplacement fluide : 0.005px toutes les 16ms = 60fps fluide
      })
    }, 16) // 60fps pour une fluidité parfaite (16ms = 1000/60)

    return () => clearInterval(interval)
  }, []) // Pas de dépendances pour éviter les boucles

  // Tripler les témoignages pour un défilement vraiment infini
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="py-16 bg-white overflow-hidden section-transition">
      <div className="container-custom">
        {/* En-tête simple */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center text-primary-600 text-sm font-medium mb-4">
            <Quote size={16} className="mr-2" />
            {t('testimonials.header')}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Carrousel horizontal avec effet de fade */}
        <div className="relative">
          {/* Conteneur avec fade sur les bords */}
          <div className="relative overflow-hidden">
            {/* Effet de fade gauche */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            
            {/* Effet de fade droit */}
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Carrousel en défilement continu */}
            <div 
              className="flex space-x-6"
              style={{ 
                transform: `translateX(-${currentIndex * 320}px)`,
                transition: 'none', // Pas de transition CSS pour un mouvement fluide
                width: `${extendedTestimonials.length * 320}px`
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ minWidth: '300px', maxWidth: '300px' }}
                >
                  {/* Quote */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary-600 mb-3 opacity-60" />
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author avec initiales centrées */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonial.position}
                      </div>
                      <div className="text-primary-600 text-xs font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection