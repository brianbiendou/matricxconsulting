import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Newspaper, Video, Mic, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useSanityPressReleases, useSanityMediaAppearances, useSanityUpcomingEvents } from '../../hooks/useSanityContent';

const Media: React.FC = () => {
  const { currentLanguage, t } = useTranslation();
  const { pressReleases: sanityPressReleases } = useSanityPressReleases();
  const { mediaAppearances: sanityMediaAppearances } = useSanityMediaAppearances();
  const { upcomingEvents: sanityUpcomingEvents } = useSanityUpcomingEvents();

  // Helper pour obtenir l'icône selon le type
  const getMediaIcon = (type: string) => {
    switch(type) {
      case 'video': return <Video className="w-6 h-6" />;
      case 'podcast': return <Mic className="w-6 h-6" />;
      default: return <Newspaper className="w-6 h-6" />;
    }
  };

  // Communiqués - Sanity ou fallback
  const pressReleases = (sanityPressReleases && sanityPressReleases.length > 0) ? sanityPressReleases.map(press => ({
    date: new Date(press.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: press.title[currentLanguage as 'fr' | 'en'] || press.title.fr,
    source: press.source,
    link: press.link || '#'
  })) : [
    {
      date: '15 Octobre 2025',
      title: 'MatriCx ouvre un nouveau bureau à Dakar',
      source: 'Les Échos d\'Afrique',
      link: '#'
    },
    {
      date: '28 Septembre 2025',
      title: 'Interview exclusive avec Didier Tiomela sur la transformation digitale',
      source: 'Digital Africa Magazine',
      link: '#'
    },
    {
      date: '10 Août 2025',
      title: 'MatriCx lance son programme de formation en ligne',
      source: 'Tech & Co',
      link: '#'
    }
  ];

  // Apparitions médiatiques - Sanity ou fallback
  const mediaAppearances = (sanityMediaAppearances && sanityMediaAppearances.length > 0) ? sanityMediaAppearances.map(media => ({
    type: media.type,
    icon: getMediaIcon(media.type),
    title: media.title[currentLanguage as 'fr' | 'en'] || media.title.fr,
    platform: media.platform,
    date: new Date(media.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    link: media.link || '#'
  })) : [
    {
      type: 'video',
      icon: <Video className="w-6 h-6" />,
      title: 'L\'avenir du digital en Afrique',
      platform: 'Africa Business Channel',
      date: '5 Octobre 2025',
      link: '#'
    },
    {
      type: 'podcast',
      icon: <Mic className="w-6 h-6" />,
      title: 'Innovation et Leadership',
      platform: 'Tech Africa Podcast',
      date: '20 Septembre 2025',
      link: '#'
    },
    {
      type: 'article',
      icon: <Newspaper className="w-6 h-6" />,
      title: 'La révolution digitale africaine',
      platform: 'Le Monde Afrique',
      date: '1 Septembre 2025',
      link: '#'
    }
  ];

  // Événements - Sanity ou fallback
  const upcomingEvents = (sanityUpcomingEvents && sanityUpcomingEvents.length > 0) ? sanityUpcomingEvents.map(event => ({
    date: new Date(event.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: event.title[currentLanguage as 'fr' | 'en'] || event.title.fr,
    location: event.location,
    role: event.role[currentLanguage as 'fr' | 'en'] || event.role.fr,
    link: event.link
  })) : [
    {
      date: '25 Novembre 2025',
      title: 'Digital Africa Summit',
      location: 'Kigali, Rwanda',
      role: 'Keynote Speaker',
      link: undefined
    },
    {
      date: '10 Décembre 2025',
      title: 'Tech Innovation Forum',
      location: 'Abidjan, Côte d\'Ivoire',
      role: 'Panel Moderator',
      link: undefined
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
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
                {t('mediaPage.hero.title')}
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                {t('mediaPage.hero.subtitle')}
              </p>
              <a 
                href="#apparitions-mediatiques"
                className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 inline-flex items-center group"
              >
                <span className="text-black group-hover:text-black group-hover:font-bold">
                  {t('mediaPage.hero.cta')}
                </span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('mediaPage.pressReleases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('mediaPage.pressReleases.subtitle')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {pressReleases.map((press, index) => (
                <div key={index} className="mb-8 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{press.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{press.title}</h3>
                      <p className="text-gray-600">{press.source}</p>
                    </div>
                    <a href={press.link} className="text-yellow-500 hover:text-yellow-600">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Appearances Section */}
        <section id="apparitions-mediatiques" className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('mediaPage.mediaAppearances.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('mediaPage.mediaAppearances.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaAppearances.map((media, index) => {
                const MediaCard = (
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        {media.icon}
                      </div>
                      <span className="text-xs font-semibold text-gray-500 uppercase px-3 py-1 bg-gray-100 rounded-full">
                        {media.type === 'video' ? t('mediaPage.mediaAppearances.types.video') : media.type === 'podcast' ? t('mediaPage.mediaAppearances.types.podcast') : t('mediaPage.mediaAppearances.types.article')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{media.title}</h3>
                    <p className="text-gray-600 mb-3">{media.platform}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {media.date}
                    </div>
                    {media.link && media.link !== '#' && (
                      <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        {t('mediaPage.mediaAppearances.seeMore')}
                      </div>
                    )}
                  </div>
                );

                return (media.link && media.link !== '#') ? (
                  <a 
                    key={index} 
                    href={media.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block transform hover:scale-105 transition-transform"
                  >
                    {MediaCard}
                  </a>
                ) : (
                  <div key={index}>
                    {MediaCard}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('mediaPage.upcomingEvents.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('mediaPage.upcomingEvents.subtitle')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => {
                const EventCard = (
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="flex items-center text-yellow-500 mb-4">
                      <Calendar className="w-6 h-6 mr-2" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.location}</p>
                    <p className="text-sm font-medium text-yellow-600">{event.role}</p>
                    {event.link && (
                      <div className="mt-4 flex items-center text-blue-600 text-sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        {t('mediaPage.upcomingEvents.learnMore')}
                      </div>
                    )}
                  </div>
                );

                return event.link ? (
                  <a 
                    key={index} 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block transform hover:scale-105 transition-transform"
                  >
                    {EventCard}
                  </a>
                ) : (
                  <div key={index}>
                    {EventCard}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Media;