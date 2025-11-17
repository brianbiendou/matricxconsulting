import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Newspaper, Video, Mic, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const Media: React.FC = () => {
  const pressReleases = [
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

  const mediaAppearances = [
    {
      type: 'video',
      icon: <Video className="w-6 h-6" />,
      title: 'L\'avenir du digital en Afrique',
      platform: 'Africa Business Channel',
      date: '5 Octobre 2025'
    },
    {
      type: 'podcast',
      icon: <Mic className="w-6 h-6" />,
      title: 'Innovation et Leadership',
      platform: 'Tech Africa Podcast',
      date: '20 Septembre 2025'
    },
    {
      type: 'article',
      icon: <Newspaper className="w-6 h-6" />,
      title: 'La révolution digitale africaine',
      platform: 'Le Monde Afrique',
      date: '1 Septembre 2025'
    }
  ];

  const upcomingEvents = [
    {
      date: '25 Novembre 2025',
      title: 'Digital Africa Summit',
      location: 'Kigali, Rwanda',
      role: 'Keynote Speaker'
    },
    {
      date: '10 Décembre 2025',
      title: 'Tech Innovation Forum',
      location: 'Abidjan, Côte d\'Ivoire',
      role: 'Panel Moderator'
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
                MatriCx dans les Médias
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                Découvrez nos dernières actualités et apparitions médiatiques
              </p>
              <a 
                href="#apparitions-mediatiques"
                className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 inline-flex items-center group"
              >
                <span className="text-black group-hover:text-black group-hover:font-bold">
                  Contact Presse
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
                Communiqués de Presse
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos dernières annonces et actualités
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
                Apparitions Médiatiques
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Interviews, podcasts et articles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaAppearances.map((media, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                    {media.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{media.title}</h3>
                  <p className="text-gray-600 mb-4">{media.platform}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {media.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Prochains Événements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Retrouvez-nous lors des événements à venir
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center text-yellow-500 mb-4">
                    <Calendar className="w-6 h-6 mr-2" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.location}</p>
                  <p className="text-sm font-medium text-yellow-600">{event.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Media;