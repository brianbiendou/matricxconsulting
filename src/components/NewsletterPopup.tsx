import React, { useState, useEffect } from 'react'
import { X, Mail, Check } from 'lucide-react'

interface NewsletterPopupProps {
  delay?: number // Délai avant affichage en ms (défaut: 5000)
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ delay = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fermé ou souscrit
    const hasInteracted = localStorage.getItem('newsletter-interacted')
    if (hasInteracted) return

    // Afficher après le délai
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('newsletter-interacted', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Validation email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setError('Adresse email invalide')
        setIsSubmitting(false)
        return
      }

      // Appel à la Netlify Function (clé API cachée côté serveur)
      // En développement local avec Netlify CLI: http://localhost:8888/.netlify/functions/subscribe-newsletter
      // En production: https://matricxconsulting.netlify.app/.netlify/functions/subscribe-newsletter
      const functionUrl = import.meta.env.DEV 
        ? 'http://localhost:8888/.netlify/functions/subscribe-newsletter'
        : 'https://matricxconsulting.netlify.app/.netlify/functions/subscribe-newsletter';
      
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      })

      if (response.ok) {
        setIsSuccess(true)
        localStorage.setItem('newsletter-subscribed', 'true')
        localStorage.setItem('newsletter-interacted', 'true')
        
        // Fermer après 3 secondes
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      } else {
        const data = await response.json()
        if (response.status === 409 || data.error?.includes('déjà inscrit')) {
          setError('Cet email est déjà inscrit')
        } else {
          setError(data.error || 'Une erreur est survenue. Veuillez réessayer.')
        }
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez réessayer.')
      console.error('Newsletter error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative pointer-events-auto animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>

          {!isSuccess ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-100 rounded-full p-4">
                  <Mail size={32} className="text-yellow-600" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
                Restez informé !
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 text-center mb-6">
                Recevez nos dernières actualités, conseils et insights sur l'expérience client directement dans votre boîte mail.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                    required
                    disabled={isSubmitting}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Inscription...' : "S'inscrire à la newsletter"}
                </button>
              </form>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Nous respectons votre vie privée. Désinscrivez-vous à tout moment.
              </p>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 rounded-full p-4">
                  <Check size={32} className="text-green-600" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
                Merci !
              </h2>
              
              <p className="text-gray-600 text-center">
                Vous êtes maintenant inscrit à notre newsletter. Vous recevrez bientôt nos actualités.
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default NewsletterPopup
