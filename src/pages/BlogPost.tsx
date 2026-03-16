import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from '../hooks/useTranslation'
import { useSanityBlogPost } from '../hooks/useSanityBlogPosts'
import { Calendar, User, ArrowLeft, Clock, Facebook, Linkedin, Twitter } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../lib/sanity'

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { currentLanguage } = useTranslation()
  const { post, loading, error } = useSanityBlogPost(slug || '')

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />
  }

  const title = post.title[currentLanguage] || post.title.fr
  const content = post.content[currentLanguage] || post.content.fr
  const excerpt = post.excerpt[currentLanguage] || post.excerpt.fr

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return currentLanguage === 'fr' 
      ? date.toLocaleDateString('fr-FR', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      : date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
  }

  const getCategoryName = (category: string) => {
    const categories: Record<string, string> = {
      'cx': currentLanguage === 'fr' ? 'Expérience Client' : 'Customer Experience',
      'strategie': currentLanguage === 'fr' ? 'Stratégie' : 'Strategy',
      'digital': currentLanguage === 'fr' ? 'Transformation Digitale' : 'Digital Transformation',
      'formation': currentLanguage === 'fr' ? 'Formation' : 'Training',
      'etudes': currentLanguage === 'fr' ? 'Études de Marché' : 'Market Research'
    }
    return categories[category] || category
  }

  const shareUrl = window.location.href
  const shareText = `${title} - ${excerpt}`

  const handleShare = (platform: 'facebook' | 'linkedin' | 'twitter') => {
    let url = ''
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
        break
    }
    window.open(url, '_blank', 'width=600,height=400')
  }

  const portableTextComponents = {
    types: {
      image: ({ value }: { value: { asset: unknown; alt?: string; caption?: string } }) => (
        <div className="my-8">
          <img
            src={urlFor(value).width(800).height(400).url()}
            alt={value.alt || ''}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      ),
    },
    block: {
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>
      ),
      h1: ({ children }: { children?: React.ReactNode }) => (
        <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>
      ),
      h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">{children}</h3>
      ),
      h4: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">{children}</h4>
      ),
      blockquote: ({ children }: { children?: React.ReactNode }) => (
        <blockquote className="border-l-4 border-blue-600 pl-6 my-6 italic text-gray-700 bg-blue-50 py-4 rounded-r-lg">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: { children?: React.ReactNode }) => (
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">{children}</ul>
      ),
      number: ({ children }: { children?: React.ReactNode }) => (
        <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: { children?: React.ReactNode }) => <li className="ml-4">{children}</li>,
      number: ({ children }: { children?: React.ReactNode }) => <li className="ml-4">{children}</li>,
    },
    marks: {
      strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-semibold text-gray-900">{children}</strong>,
      em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
      code: ({ children }: { children?: React.ReactNode }) => (
        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
          {children}
        </code>
      ),
      link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      ),
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-24 pb-16">
        {/* Navigation de retour */}
        <div className="container mx-auto px-4 mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {currentLanguage === 'fr' ? 'Retour au blog' : 'Back to blog'}
          </Link>
        </div>

        {/* En-tête de l'article */}
        <header className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Catégorie */}
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {getCategoryName(post.category)}
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {excerpt}
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-8 gap-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(post.publishedAt)}
              </div>
              {post.author && (
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
              )}
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {currentLanguage === 'fr' ? '5 min de lecture' : '5 min read'}
              </div>
            </div>

            {/* Image principale */}
            {post.mainImage && (
              <div className="mb-12">
                <img
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Boutons de partage */}
            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <span className="text-gray-700 font-medium">
                {currentLanguage === 'fr' ? 'Partager :' : 'Share:'}
              </span>
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </button>
            </div>
          </div>
        </header>

        {/* Contenu de l'article */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-blue max-w-none">
              <PortableText 
                value={content} 
                components={portableTextComponents}
              />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {currentLanguage === 'fr' ? 'Tags :' : 'Tags:'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {currentLanguage === 'fr' 
                  ? 'Besoin d\'aide pour votre transformation ?' 
                  : 'Need help with your transformation?'
                }
              </h3>
              <p className="text-gray-600 mb-6">
                {currentLanguage === 'fr'
                  ? 'Nos experts sont là pour vous accompagner dans vos projets de transformation digitale et d\'amélioration de l\'expérience client.'
                  : 'Our experts are here to support you in your digital transformation and customer experience improvement projects.'
                }
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {currentLanguage === 'fr' ? 'Contactez-nous' : 'Contact us'}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default BlogPost