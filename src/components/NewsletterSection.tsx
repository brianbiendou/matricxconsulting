import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function NewsletterSection() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage(t('newsletter.invalidEmail'));
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': import.meta.env.VITE_BREVO_API_KEY || ''
        },
        body: JSON.stringify({
          email: email,
          listIds: [parseInt(import.meta.env.VITE_BREVO_LIST_ID || '3')],
          updateEnabled: true
        })
      });

      if (response.ok || response.status === 204) {
        setStatus('success');
        setMessage(t('newsletter.successMessage'));
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        
        if (errorData.code === 'duplicate_parameter') {
          setStatus('success');
          setMessage(t('newsletter.alreadySubscribed'));
          setEmail('');
          setTimeout(() => {
            setStatus('idle');
            setMessage('');
          }, 5000);
        } else {
          throw new Error(errorData.message || 'Erreur lors de l\'inscription');
        }
      }
    } catch (error) {
      setStatus('error');
      setMessage(t('newsletter.errorMessage'));
      console.error('Subscription error:', error);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Parlons-en CTA */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full">
              <span className="text-[#FFD700] font-medium text-sm">
                {t('contact.title')}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              {t('contact.subtitle')}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('newsletter.ctaDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1a1a2e] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#FFD700]/20 transform hover:-translate-y-1 transition-all duration-300 group"
              >
                {t('contact.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href={`tel:${t('contact.phone').split('|')[0].trim()}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300"
              >
                📞 {t('contact.phone').split('|')[0].trim()}
              </a>
            </div>
          </div>

          {/* Right side - Newsletter subscription */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-lg">
                <Mail className="w-6 h-6 text-[#1a1a2e]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('newsletter.title')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('newsletter.subtitle')}
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('newsletter.description')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.emailPlaceholder')}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1a1a2e] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#FFD700]/20 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#1a1a2e] border-t-transparent rounded-full animate-spin"></div>
                    {t('newsletter.subscribing')}
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    {t('newsletter.subscribed')}
                  </>
                ) : (
                  <>
                    {t('newsletter.subscribe')}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {message && (
                <div
                  className={`p-4 rounded-lg ${
                    status === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  <p className="text-sm font-medium">{message}</p>
                </div>
              )}
            </form>

            <p className="text-xs text-gray-600 mt-4">
              {t('newsletter.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
