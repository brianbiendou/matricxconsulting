import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useSanityTeamMembers } from '../../hooks/useSanityContent';

const Company: React.FC = () => {
  const { t, currentLanguage } = useTranslation();
  const { teamMembers, urlFor } = useSanityTeamMembers();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section avec Animation */}
        <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-24 overflow-hidden">
          <div className="absolute inset-0">
            {/* Grille animée */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
              animation: 'moveGrid 15s linear infinite',
            }}></div>
          </div>
          
          <div className="container-custom relative z-10 h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center w-full">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 mt-16 animate-slide-up">
                {t('companyPage.hero.title')}
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                {t('companyPage.hero.subtitle')}
              </p>
              <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 inline-flex items-center group">
                <a href="#notre-histoire" className="flex items-center w-full text-black no-underline group-hover:text-black group-hover:font-bold">
                  {t('companyPage.hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </button>
            </div>
          </div>
        </section>

        {/* Experience Client Section */}
        <section id="notre-histoire" className="py-20 bg-white overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/equipe.jpg"
                    alt="Notre équipe en action"
                    className="w-full h-[600px] object-cover bg-white"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-yellow-400/10 px-4 py-2 rounded-full inline-block">
                  <span className="text-yellow-600 font-semibold">{t('companyPage.about.badge')}</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  {t('companyPage.about.title')}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('companyPage.about.description')}
                </p>
                <a 
                  href="/services/training"
                  className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 inline-flex items-center group"
                >
                  <span className="text-black group-hover:text-black group-hover:font-bold">{t('companyPage.about.cta')}</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Fondateur & Direction */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="bg-yellow-400/10 px-4 py-2 rounded-full inline-block mb-4">
                <span className="text-yellow-600 font-semibold">
                  {currentLanguage === 'fr' ? 'Direction' : 'Leadership'}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {currentLanguage === 'fr' ? 'Fondateur & Directeur Général' : 'Founder & CEO'}
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center p-8">
                    <div className="w-40 h-40 rounded-full bg-white/20 border-4 border-white flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">DT</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Didier TIOMELA</h3>
                    <p className="text-yellow-600 font-semibold text-lg">
                      {currentLanguage === 'fr' ? 'Fondateur & Directeur Général' : 'Founder & Chief Executive Officer'}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {currentLanguage === 'fr'
                        ? 'Fort de plus d\'une décennie d\'expérience en conseil stratégique et en transformation d\'entreprises en Afrique, Didier TIOMELA a fondé MatriCx Consulting avec la vision de créer un cabinet de conseil de référence sur le continent. Sa connaissance approfondie des marchés africains, combinée à une expertise internationale en expérience client, en stratégie digitale et en management interculturel, fait de lui un leader reconnu dans l\'accompagnement des organisations vers l\'excellence opérationnelle.'
                        : 'With over a decade of experience in strategic consulting and business transformation in Africa, Didier TIOMELA founded MatriCx Consulting with the vision of creating a leading consulting firm on the continent. His deep knowledge of African markets, combined with international expertise in customer experience, digital strategy, and cross-cultural management, makes him a recognized leader in guiding organizations toward operational excellence.'}
                    </p>
                    <div className="pt-4 space-y-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-yellow-500 flex-shrink-0" />
                        <span>Makepe BM, BP 12777, Douala, Cameroun</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-yellow-500 flex-shrink-0" />
                        <span>contact@matricxconsulting.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-yellow-500 flex-shrink-0" />
                        <span>+237 677 810 120 | +237 699 947 136</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Équipe Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="bg-yellow-400/10 px-4 py-2 rounded-full inline-block mb-4">
                <span className="text-yellow-600 font-semibold">{t('companyPage.team.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('companyPage.team.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('companyPage.team.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(teamMembers && teamMembers.length > 0) ? (
                teamMembers.map((member, index) => {
                  // Fonction pour obtenir les initiales (max 2 caractères)
                  const getInitials = (name: string) => {
                    const parts = name.trim().split(/\s+/);
                    if (parts.length >= 2) {
                      return (parts[0][0] + parts[1][0]).toUpperCase();
                    }
                    return name.substring(0, 2).toUpperCase();
                  };

                  return (
                  <div 
                    key={member._id} 
                    className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in" 
                    style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                  >
                    {member.photo ? (
                      <img
                        src={urlFor(member.photo).width(200).height(200).url()}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 border-4 border-yellow-400 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">{getInitials(member.name)}</span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-yellow-600 font-medium mb-4">
                      {member.position[currentLanguage as 'fr' | 'en'] || member.position.fr}
                    </p>
                    <p className="text-gray-600">
                      {member.description[currentLanguage as 'fr' | 'en'] || member.description.fr}
                    </p>
                  </div>
                  );
                })
              ) : (
                // Fallback si pas de données Sanity
                <>
                  <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <img src="/team1.jpg" alt="Amadou Nkongho" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Amadou Nkongho</h3>
                    <p className="text-yellow-600 font-medium mb-4">Responsable Innovation Digitale</p>
                    <p className="text-gray-600">Expert en solutions CRM et intelligence artificielle.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <img src="/team2.jpg" alt="Marie-Claire Fotso" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Marie-Claire Fotso</h3>
                    <p className="text-yellow-600 font-medium mb-4">Directrice Expérience Client</p>
                    <p className="text-gray-600">Spécialiste en expérience client.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <img src="/team3.jpg" alt="Jean-Paul Mbarga" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Jean-Paul Mbarga</h3>
                    <p className="text-yellow-600 font-medium mb-4">Lead Stratégie Digitale</p>
                    <p className="text-gray-600">Architecte de solutions digitales.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Notre Approche Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-right">
                <div className="bg-yellow-400/10 px-4 py-2 rounded-full inline-block">
                  <span className="text-yellow-600 font-semibold">{t('companyPage.approach.badge')}</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  {t('companyPage.approach.title')}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('companyPage.approach.description')}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">98%</div>
                    <div className="text-gray-600">{t('companyPage.approach.stat1')}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">150+</div>
                    <div className="text-gray-600">{t('companyPage.approach.stat2')}</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-slide-left">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/innovation.jpg"
                    alt="Innovation en action"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Company;