import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Calendar, Clock, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact: React.FC = () => {
  const { t, currentLanguage } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulation d'envoi d'email
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1500)
  }

  const openCalendly = () => {
    window.open('https://calendly.com/enablermoney/new-meeting', '_blank')
  }

  const ContactForm = () => {
    if (isSubmitted) {
      return (
        <div className="max-w-2xl mx-auto text-center py-16">
          <CheckCircle className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-secondary-600 mb-4 font-primary">
            {t('contact.page.form.success')}
          </h2>
          <p className="text-lg text-secondary-500 mb-8 font-secondary">
            {t('contact.page.form.successDescription', { name: formData.name, hours: '24' })}
          </p>
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 shadow-lg border border-primary-200">
            <h3 className="font-semibold text-secondary-600 mb-3 font-primary">{t('contact.page.form.scheduleText')}</h3>
            <button 
              onClick={openCalendly}
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <Calendar size={20} />
              <span>{t('contact.page.form.scheduleButton')}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-secondary-600 mb-6 font-primary">{t('contact.page.info.title')}</h2>
            
            {/* Téléphone MatriCx */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-4 border border-primary-100 hover:border-primary-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-600 mb-1 font-primary">{t('contact.page.info.phone')}</h3>
                <p className="text-secondary-500 mb-2 font-secondary">{t('contact.page.info.phoneDescription')}</p>
                <a href="tel:+237677810120" className="text-primary-600 font-medium hover:text-primary-700 font-primary">
                  +237 677 810 120
                </a>
              </div>
            </div>

            {/* Email MatriCx */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-600 mb-1 font-primary">{t('contact.page.info.email')}</h3>
                <p className="text-secondary-500 mb-2 font-secondary">{t('contact.page.info.emailDescription')}</p>
                <a href="mailto:contact@matricxconsulting.com" className="text-primary-600 font-medium hover:text-primary-700 font-primary">
                  contact@matricxconsulting.com
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white p-6 rounded-xl mt-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6" />
              <h3 className="font-semibold">{t('contact.page.info.hours')}</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{t('contact.page.info.mondayFriday')}</span>
                <span>8h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span>{t('contact.page.info.saturday')}</span>
                <span>9h00 - 13h00</span>
              </div>
              <div className="flex justify-between opacity-75">
                <span>{t('contact.page.info.sunday')}</span>
                <span>{t('contact.page.info.closed')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('contact.page.form.title')}
              </h2>
              <p className="text-gray-600">
                {t('contact.page.form.formDescription')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-600 mb-2 font-primary">
                    {t('contact.page.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-300 font-secondary hover:border-primary-300"
                    placeholder={t('contact.page.form.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-600 mb-2 font-primary">
                    {t('contact.page.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-300 font-secondary hover:border-primary-300"
                    placeholder={t('contact.page.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-600 mb-2 font-primary">
                    {t('contact.page.form.company')} *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-300 font-secondary hover:border-primary-300"
                    placeholder={t('contact.page.form.companyPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-600 mb-2 font-primary">
                    {t('contact.page.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-300 font-secondary hover:border-primary-300"
                    placeholder={t('contact.page.form.phonePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-600 mb-2 font-primary">
                  {t('contact.page.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-300 resize-none font-secondary hover:border-primary-300"
                  placeholder={t('contact.page.form.messagePlaceholder')}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary flex-1 inline-flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t('contact.page.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('contact.page.form.send')}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={openCalendly}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 bg-accent-600 text-white font-bold rounded-xl hover:bg-accent-700 transition-all duration-300 group font-primary shadow-lg"
                >
                  <Calendar size={20} />
                  <span>{t('contact.page.form.orSchedule')}</span>
                </button>
              </div>
            </form>

            {/* Temps de réponse */}
            <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <div className="flex items-center space-x-2 text-primary-700">
                <CheckCircle size={18} />
                <span className="text-sm font-medium font-primary">
                  {t('contact.page.form.responseGuarantee')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div key={currentLanguage} className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <Header />
      <main className="pt-20">
        <div className="container-custom py-16">
          {/* Header MatriCx */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 border border-primary-200 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <MessageSquare size={18} className="mr-2 text-accent-500" />
              {t('contact.page.badge')}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-600 mb-6 font-primary">
              {t('contact.page.title')} <span className="gradient-text">{t('contact.page.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto font-secondary">
              {t('contact.page.subtitle')}
            </p>
          </div>

          <ContactForm />

          {/* Localisation */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mt-16 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">{t('contact.page.location')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Informations de localisation - Avec icônes alignées */}
              <div className="flex flex-col items-start space-y-8 mx-auto lg:ml-20">
                <div className="w-full flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">Adresse complète</h4>
                    <div className="text-gray-600 leading-relaxed">
                      <p>Makepe BM</p>
                      <p>Douala, Cameroun</p>
                      <p>BP 12777</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">Téléphone</h4>
                    <a href="tel:+237677810120" className="text-yellow-600 hover:text-yellow-700 font-medium text-lg">
                      +237 677 810 120
                    </a>
                  </div>
                </div>

                {/* Bouton Google Maps - Aligné avec les icônes */}
                <a
                  href="https://www.google.com/maps/search/Makepe+Missoke,+Douala,+Cameroun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300 bg-yellow-500 border-yellow-600 text-black font-bold w-full sm:w-auto px-4 py-3 text-sm sm:text-base"
                >
                  <MapPin size={16} />
                  <span className="whitespace-nowrap">Voir sur Google Maps</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Carte alternative avec ombre uniforme */}
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl shadow-lg border border-yellow-200 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-5">
                  <MapPin className="w-10 h-10 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Notre bureau à Douala
                </h4>
                <p className="text-gray-700 mb-8 font-medium text-lg">
                  Makepe BM, quartier d'affaires
                </p>
                
                {/* Bouton itinéraire - Centré et aligné */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Makepe+Missoke,+Douala,+Cameroun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-7 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 inline-flex items-center space-x-3 shadow-lg transform hover:scale-105"
                >
                  <span>Obtenir l'itinéraire</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact