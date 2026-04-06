import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from '../../hooks/useTranslation';
import { Leaf, Globe, Users, TrendingUp, Heart, Lightbulb } from 'lucide-react';

const Sustainability: React.FC = () => {
  const { currentLanguage } = useTranslation();

  const pillars = currentLanguage === 'fr' ? [
    {
      icon: <Globe size={32} className="text-green-500" />,
      title: 'Impact Environnemental',
      description: 'Nous réduisons notre empreinte carbone en privilégiant le travail à distance, les outils numériques et les déplacements responsables. Nos bureaux à Douala adoptent des pratiques éco-responsables au quotidien.',
    },
    {
      icon: <Users size={32} className="text-blue-500" />,
      title: 'Engagement Social',
      description: 'Nous investissons dans le développement des compétences locales en Afrique à travers nos programmes de formation MatriCx Training et nos initiatives de mentorat pour les jeunes professionnels camerounais.',
    },
    {
      icon: <TrendingUp size={32} className="text-yellow-500" />,
      title: 'Croissance Inclusive',
      description: 'Nos méthodologies de conseil intègrent les réalités économiques et sociales des marchés africains pour concevoir des solutions qui bénéficient au plus grand nombre et favorisent une croissance partagée.',
    },
    {
      icon: <Heart size={32} className="text-red-500" />,
      title: 'Bien-être des Collaborateurs',
      description: 'Nous promouvons un environnement de travail sain et équilibré, avec des politiques de flexibilité, de diversité et d\'inclusion qui permettent à chaque membre de notre équipe de s\'épanouir.',
    },
    {
      icon: <Leaf size={32} className="text-emerald-500" />,
      title: 'Conseil Responsable',
      description: 'Nos recommandations stratégiques intègrent systématiquement les critères ESG (Environnementaux, Sociaux et de Gouvernance) pour aider nos clients à construire des modèles d\'affaires durables.',
    },
    {
      icon: <Lightbulb size={32} className="text-orange-500" />,
      title: 'Innovation Durable',
      description: 'Nous investissons dans des technologies et des approches innovantes qui permettent de concilier performance économique et respect de l\'environnement sur le continent africain.',
    },
  ] : [
    {
      icon: <Globe size={32} className="text-green-500" />,
      title: 'Environmental Impact',
      description: 'We reduce our carbon footprint by prioritizing remote work, digital tools, and responsible travel. Our Douala offices adopt eco-friendly practices on a daily basis.',
    },
    {
      icon: <Users size={32} className="text-blue-500" />,
      title: 'Social Commitment',
      description: 'We invest in developing local skills in Africa through our MatriCx Training programs and mentoring initiatives for young Cameroonian professionals.',
    },
    {
      icon: <TrendingUp size={32} className="text-yellow-500" />,
      title: 'Inclusive Growth',
      description: 'Our consulting methodologies incorporate the economic and social realities of African markets to design solutions that benefit the many and foster shared growth.',
    },
    {
      icon: <Heart size={32} className="text-red-500" />,
      title: 'Employee Well-being',
      description: 'We promote a healthy and balanced work environment with flexibility, diversity, and inclusion policies that allow every team member to thrive.',
    },
    {
      icon: <Leaf size={32} className="text-emerald-500" />,
      title: 'Responsible Consulting',
      description: 'Our strategic recommendations systematically integrate ESG (Environmental, Social, and Governance) criteria to help our clients build sustainable business models.',
    },
    {
      icon: <Lightbulb size={32} className="text-orange-500" />,
      title: 'Sustainable Innovation',
      description: 'We invest in innovative technologies and approaches that reconcile economic performance with environmental responsibility across the African continent.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 to-emerald-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
            }}></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <Leaf size={20} className="text-green-300" />
                <span className="text-green-200 font-semibold">
                  {currentLanguage === 'fr' ? 'Notre Engagement' : 'Our Commitment'}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 mt-4">
                {currentLanguage === 'fr' ? 'Durabilité & Responsabilité' : 'Sustainability & Responsibility'}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {currentLanguage === 'fr'
                  ? 'Chez MatriCx Consulting, nous croyons que la performance économique et la responsabilité sociale et environnementale sont indissociables. Notre approche du conseil intègre les principes du développement durable à chaque étape.'
                  : 'At MatriCx Consulting, we believe that economic performance and social and environmental responsibility are inseparable. Our consulting approach integrates sustainable development principles at every stage.'}
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {currentLanguage === 'fr' ? 'Notre Vision de la Durabilité' : 'Our Sustainability Vision'}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {currentLanguage === 'fr'
                  ? 'L\'Afrique est un continent d\'avenir. Nous avons la responsabilité de contribuer à un développement qui respecte les ressources naturelles, valorise le capital humain et crée de la valeur partagée. Nos actions de conseil, de formation et d\'innovation technologique sont guidées par cette conviction.'
                  : 'Africa is a continent of the future. We have a responsibility to contribute to development that respects natural resources, values human capital, and creates shared value. Our consulting, training, and technology innovation activities are guided by this conviction.'}
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="p-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-500 text-sm">
                    {currentLanguage === 'fr' ? 'Bureaux éco-responsables' : 'Eco-friendly offices'}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-500 text-sm">
                    {currentLanguage === 'fr' ? 'Jeunes professionnels formés' : 'Young professionals trained'}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
                  <div className="text-gray-500 text-sm">
                    {currentLanguage === 'fr' ? 'Missions intégrant des critères ESG' : 'Missions integrating ESG criteria'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentLanguage === 'fr' ? 'Nos 6 Piliers de Durabilité' : 'Our 6 Sustainability Pillars'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {currentLanguage === 'fr'
                  ? 'Des engagements concrets qui guident chacune de nos actions.'
                  : 'Concrete commitments that guide each of our actions.'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                {currentLanguage === 'fr'
                  ? 'Construisons ensemble un avenir durable'
                  : 'Let\'s build a sustainable future together'}
              </h2>
              <p className="text-white/90 text-lg mb-8">
                {currentLanguage === 'fr'
                  ? 'Vous souhaitez intégrer les principes de durabilité dans votre stratégie d\'entreprise ? Nos consultants vous accompagnent.'
                  : 'Want to integrate sustainability principles into your business strategy? Our consultants are here to help.'}
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                {currentLanguage === 'fr' ? 'Contactez-nous' : 'Contact Us'}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sustainability;