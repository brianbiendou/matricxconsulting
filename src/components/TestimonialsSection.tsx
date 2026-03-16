import React, { useState, useEffect, useMemo } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useSanityTestimonials } from '../hooks/useSanityTestimonials'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection: React.FC = () => {
  const { t, currentLanguage } = useTranslation()
  const { testimonials: sanityTestimonials } = useSanityTestimonials()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Témoignages hardcodés (fallback)
  const defaultTestimonialsData = currentLanguage === 'fr' ? [
    {
      quote: "MatriCx Consulting a révolutionné notre approche client. Une expertise remarquable qui a boosté notre chiffre d'affaires de 40%.",
      author: "Laure Mazigui",
      position: "Responsable Développement Commercial",
      company: "Wafacash",
      rating: 5,
      avatar: "LM",
      photoId: "1580489944761-95a4bd4e7909"
    },
    {
      quote: "Une équipe professionnelle qui comprend parfaitement les enjeux du marché africain. Résultats concrets et durables.",
      author: "Durand Nana",
      position: "DGA",
      company: "Matrix Telecoms SA",
      rating: 5,
      avatar: "DN",
      photoId: "1472099645785-5658abf4ff4e"
    },
    {
      quote: "L'accompagnement de MatriCx nous a permis d'optimiser notre relation client et d'améliorer significativement notre satisfaction client.",
      author: "Eva Tchokonte",
      position: "DRH",
      company: "Matrix Telecoms SA",
      rating: 5,
      avatar: "ET",
      photoId: "1494790108755-7d6c0b8e76e"
    },
    {
      quote: "Des conseils stratégiques et un accompagnement personnalisé. MatriCx comprend vraiment les besoins des entreprises africaines.",
      author: "Solange Yana",
      position: "DG",
      company: "Wafacash Central Africa",
      rating: 5,
      avatar: "SY",
      photoId: "1507003211169-0a1dd7a838a0"
    },
    {
      quote: "Grâce à MatriCx, nous avons transformé notre expérience client et fidélisé notre clientèle de manière exceptionnelle.",
      author: "Gabrielle Simo",
      position: "DG",
      company: "Hôtel Y",
      rating: 5,
      avatar: "GS",
      photoId: "1580489944761-95a4bd4e7909"
    },
    {
      quote: "Un partenariat stratégique qui a permis d'améliorer nos performances commerciales et notre relation client.",
      author: "Gaelle Hapi",
      position: "Responsable Commercial",
      company: "Newtelnet",
      rating: 5,
      avatar: "GH",
      photoId: "1472099645785-5658abf4ff4e"
    },
    {
      quote: "L'expertise de MatriCx en matière d'expérience client est incomparable. Une collaboration enrichissante.",
      author: "Mairamou Pantami",
      position: "Chargée de Clientèle",
      company: "SCB Cameroun",
      rating: 5,
      avatar: "MP",
      photoId: "1494790108755-7d6c0b8e76e"
    },
    {
      quote: "MatriCx nous a aidé à mieux comprendre nos clients et à offrir un service d'excellence au quotidien.",
      author: "Esther Njock",
      position: "Chargée de Clientèle",
      company: "Studely",
      rating: 5,
      avatar: "EN",
      photoId: "1507003211169-0a1dd7a838a0"
    }
  ] : [
    {
      quote: "MatriCx Consulting has revolutionized our customer approach. Remarkable expertise that boosted our revenue by 40%.",
      author: "Laure Mazigui",
      position: "Responsable Développement Commercial",
      company: "Wafacash",
      rating: 5,
      avatar: "LM",
      photoId: "1580489944761-95a4bd4e7909"
    },
    {
      quote: "A professional team that perfectly understands the challenges of the African market. Concrete and lasting results.",
      author: "Durand Nana",
      position: "DGA",
      company: "Matrix Telecoms SA",
      rating: 5,
      avatar: "DN",
      photoId: "1472099645785-5658abf4ff4e"
    },
    {
      quote: "MatriCx's support allowed us to optimize our customer relationship and significantly improve our customer satisfaction.",
      author: "Eva Tchokonte",
      position: "DRH",
      company: "Matrix Telecoms SA",
      rating: 5,
      avatar: "ET",
      photoId: "1494790108755-7d6c0b8e76e"
    },
    {
      quote: "Strategic advice and personalized support. MatriCx truly understands the needs of African businesses.",
      author: "Solange Yana",
      position: "DG",
      company: "Wafacash Central Africa",
      rating: 5,
      avatar: "SY",
      photoId: "1507003211169-0a1dd7a838a0"
    },
    {
      quote: "Thanks to MatriCx, we have transformed our customer experience and built exceptional customer loyalty.",
      author: "Gabrielle Simo",
      position: "DG",
      company: "Hôtel Y",
      rating: 5,
      avatar: "GS",
      photoId: "1580489944761-95a4bd4e7909"
    },
    {
      quote: "A strategic partnership that has improved our commercial performance and customer relationships.",
      author: "Gaelle Hapi",
      position: "Responsable Commercial",
      company: "Newtelnet",
      rating: 5,
      avatar: "GH",
      photoId: "1472099645785-5658abf4ff4e"
    },
    {
      quote: "MatriCx's expertise in customer experience is unparalleled. An enriching collaboration.",
      author: "Mairamou Pantami",
      position: "Chargée de Clientèle",
      company: "SCB Cameroun",
      rating: 5,
      avatar: "MP",
      photoId: "1494790108755-7d6c0b8e76e"
    },
    {
      quote: "MatriCx helped us better understand our customers and deliver excellent service every day.",
      author: "Esther Njock",
      position: "Chargée de Clientèle",
      company: "Studely",
      rating: 5,
      avatar: "EN",
      photoId: "1507003211169-0a1dd7a838a0"
    }
  ]

  // Mapper les données Sanity vers le format existant (mémorisé pour éviter re-renders)
  const sanityMappedTestimonials = useMemo(() => {
    const mapped = sanityTestimonials
      .filter((t: any) => t.featured === true)
      .sort((a: any, b: any) => (a.order || 0) - (b.order || 0)) // Gérer les valeurs nulles
      .map((t: any) => ({
        quote: t.content?.[currentLanguage as 'fr' | 'en'] || t.content?.fr || 'Témoignage non disponible',
        author: t.name || 'Auteur anonyme',
        position: t.position || 'Position non spécifiée',
        company: t.company || 'Entreprise non spécifiée',
        rating: t.rating || 5,
        avatar: t.name ? t.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().substring(0, 2) : 'AA',
        photoId: t.image ? null : "1580489944761-95a4bd4e7909"
      }))
    
    return mapped
  }, [sanityTestimonials, currentLanguage])

  // LOGIQUE ADDITIVE : Sanity + Défaut (au lieu de remplacer)
  const testimonials = [...sanityMappedTestimonials, ...defaultTestimonialsData]

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
    <section className="pt-6 pb-16 bg-white overflow-hidden section-transition border-b border-gray-100">
      <div className="container-custom relative z-10">
        {/* En-tête simple */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm border border-yellow-200">
            <Quote size={18} className="mr-2" />
            {t('testimonials.badge')}
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