import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { useSanityBlogPosts } from '../hooks/useSanityBlogPosts'
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Newspaper } from 'lucide-react'
import { urlFor } from '../lib/sanity'

// Import des images fallback
import vert1 from '../images/blog/vert1.jpg'
import vert2 from '../images/blog/vert2.jpg'
import vert3 from '../images/blog/vert3.jpg'
import whatsapp1 from '../images/blog/WhatsApp Image 2025-10-15 à 16.38.04_8110d4ba.jpg'

const FeaturedArticlesSection: React.FC = () => {
  const { t, currentLanguage } = useTranslation()
  const { posts: sanityPosts, loading } = useSanityBlogPosts()
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Articles fallback si pas de données Sanity
  const fallbackArticles = [
    {
      id: '1',
      title: {
        fr: 'Leadership Africain dans la Transformation Digitale',
        en: 'African Leadership in Digital Transformation'
      },
      excerpt: {
        fr: 'Comment les leaders africains redéfinissent l\'approche de la transformation digitale en entreprise.',
        en: 'How African leaders are redefining the approach to digital transformation in business.'
      },
      publishedAt: '2025-10-15',
      slug: { current: 'leadership-africain-transformation-digitale' },
      image: whatsapp1
    },
    {
      id: '2',
      title: {
        fr: 'Innovation en Afrique : Défis et Opportunités',
        en: 'Innovation in Africa: Challenges and Opportunities'
      },
      excerpt: {
        fr: 'L\'écosystème entrepreneurial africain connaît une croissance remarquable.',
        en: 'The African entrepreneurial ecosystem is experiencing remarkable growth.'
      },
      publishedAt: '2025-03-22',
      slug: { current: 'innovation-afrique-defis-opportunites' },
      image: vert1
    },
    {
      id: '3',
      title: {
        fr: 'Excellence Opérationnelle : Les Clés du Succès',
        en: 'Operational Excellence: Keys to Success'
      },
      excerpt: {
        fr: 'Découvrez les meilleures pratiques pour atteindre l\'excellence opérationnelle.',
        en: 'Discover best practices for achieving operational excellence.'
      },
      publishedAt: '2025-02-10',
      slug: { current: 'excellence-operationnelle-cles-succes' },
      image: vert2
    },
    {
      id: '4',
      title: {
        fr: 'Expérience Client : Tendances 2025',
        en: 'Customer Experience: 2025 Trends'
      },
      excerpt: {
        fr: 'Les nouvelles tendances qui façonnent l\'expérience client en Afrique.',
        en: 'New trends shaping customer experience in Africa.'
      },
      publishedAt: '2024-12-18',
      slug: { current: 'experience-client-tendances-2025' },
      image: vert3
    }
  ]

  // Utiliser les articles Sanity si disponibles, sinon fallback
  const articles = sanityPosts.length > 0 ? sanityPosts.slice(0, 6) : fallbackArticles

  // Formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    }
    return date.toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : 'en-US', options)
  }

  // Navigation du carousel
  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 4
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 4
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
    }
  }

  // Obtenir l'image de l'article
  const getArticleImage = (article: any) => {
    if (article.mainImage) {
      try {
        return urlFor(article.mainImage).width(400).height(250).url()
      } catch {
        return article.image || whatsapp1
      }
    }
    return article.image || whatsapp1
  }

  // Obtenir le titre selon la langue
  const getTitle = (article: any) => {
    if (typeof article.title === 'object') {
      return article.title[currentLanguage] || article.title.fr
    }
    return article.title
  }

  // Obtenir l'extrait selon la langue
  const getExcerpt = (article: any) => {
    if (typeof article.excerpt === 'object') {
      const excerpt = article.excerpt[currentLanguage] || article.excerpt.fr
      if (Array.isArray(excerpt)) {
        return excerpt.map((block: any) => block.children?.map((child: any) => child.text).join('')).join(' ')
      }
      return excerpt
    }
    return article.excerpt
  }

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 section-transition">
      <div className="container-custom relative z-10">
        {/* Header avec badge centré, titre et navigation */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-yellow-200">
            <Newspaper size={16} className="mr-2" />
            {t('featuredArticles.badge')}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-600">
              {t('featuredArticles.title')}
            </h2>
          </div>
          
          {/* Boutons de navigation */}
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-white border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-50 transition-colors shadow-sm"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} className="text-yellow-600" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-sm"
              aria-label="Suivant"
            >
              <ChevronRight size={20} className="text-black" />
            </button>
          </div>
        </div>

        {/* Carousel d'articles */}
        <div 
          ref={carouselRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.map((article: any, index: number) => (
            <Link
              key={article._id || article.id || index}
              to={`/blog/${article.slug?.current || article.slug}`}
              className="flex-shrink-0 w-[280px] md:w-[300px] snap-start group"
            >
              <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                {/* Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={getArticleImage(article)}
                    alt={getTitle(article)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Contenu */}
                <div className="p-4 md:p-5">
                  {/* Date */}
                  <div className="flex items-center text-yellow-600 text-xs font-medium mb-2">
                    <Calendar size={12} className="mr-1" />
                    {formatDate(article.publishedAt)}
                  </div>
                  
                  {/* Titre */}
                  <h3 className="font-bold text-secondary-700 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors text-sm md:text-base">
                    {getTitle(article)}
                  </h3>
                  
                  {/* Extrait */}
                  <p className="text-gray-500 text-xs md:text-sm line-clamp-2 mb-3">
                    {getExcerpt(article)}
                  </p>
                  
                  {/* Lien */}
                  <div className="flex items-center text-yellow-600 text-xs font-semibold group-hover:text-yellow-700 transition-colors">
                    <span>{t('featuredArticles.readMore')}</span>
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Lien vers le blog */}
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors shadow-md"
          >
            {t('featuredArticles.viewAll')}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticlesSection
