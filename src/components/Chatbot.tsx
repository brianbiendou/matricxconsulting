import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Bot, User, ArrowLeft, ChevronUp, ChevronDown } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

interface ChatMessage {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface QuickAction {
  id: string
  text: string
  category: string
}

const Chatbot: React.FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentQuickActions, setCurrentQuickActions] = useState<QuickAction[]>([])
  const [questionHistory, setQuestionHistory] = useState<QuickAction[][]>([])
  const [showQuestions, setShowQuestions] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Fonction d'initialisation simple
  const initializeChat = () => {
    if (!isInitialized) {
      setMessages([{
        id: '1',
        text: t('chatbot.welcome'),
        isUser: false,
        timestamp: new Date()
      }])
      setCurrentQuickActions([
        { id: 'services', text: t('chatbot.questions.services'), category: 'general' },
        { id: 'about', text: t('chatbot.questions.about'), category: 'general' },
        { id: 'contact', text: t('chatbot.questions.contact'), category: 'contact' },
        { id: 'experience', text: t('chatbot.questions.experience'), category: 'expertise' }
      ])
      setQuestionHistory([])
      setShowQuestions(true)
      setIsInitialized(true)
    }
  }

  // Fonction pour ouvrir le chatbot
  const openChatbot = () => {
    setIsOpen(true)
    setTimeout(() => {
      initializeChat()
    }, 100)
  }

  // Fonction pour fermer le chatbot et réinitialiser
  const closeChatbot = () => {
    setIsOpen(false)
    setIsInitialized(false)
    setMessages([])
    setCurrentQuickActions([])
    setQuestionHistory([])
    setShowQuestions(true)
  }

  const handleQuickAction = (action: QuickAction) => {
    // Sauvegarder les questions actuelles dans l'historique
    if (currentQuickActions.length > 0) {
      setQuestionHistory(prev => [...prev, currentQuickActions])
    }
    
    // Ajouter le message utilisateur
    const userMessage: ChatMessage = {
      id: Date.now().toString() + '_user',
      text: action.text,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setCurrentQuickActions([])
    
    // Simuler la frappe
    setIsTyping(true)
    
    setTimeout(() => {
      setIsTyping(false)
      
      // Ajouter la réponse - utiliser les traductions directement
      let responseText = ''
      let responseActions: QuickAction[] = []
      
      if (action.id === 'services') {
        responseText = t('chatbot.responses.services')
        responseActions = [
          { id: 'advisory_details', text: t('chatbot.actions.advisoryDetails'), category: 'services' },
          { id: 'survey_details', text: t('chatbot.actions.surveyDetails'), category: 'services' },
          { id: 'technology_details', text: t('chatbot.actions.technologyDetails'), category: 'services' },
          { id: 'training_details', text: t('chatbot.actions.trainingDetails'), category: 'services' }
        ]
      } else if (action.id === 'about') {
        responseText = t('chatbot.responses.about')
        responseActions = [
          { id: 'values', text: t('chatbot.actions.values'), category: 'info' },
          { id: 'team', text: t('chatbot.actions.team'), category: 'info' },
          { id: 'contact', text: t('chatbot.actions.contact'), category: 'contact' }
        ]
      } else if (action.id === 'contact') {
        responseText = "📞 **Comment souhaitez-vous nous contacter ?**\n\n✉️ **Écrire un message** - Décrivez votre projet, nous répondons sous 24h\n\n📅 **Prendre rendez-vous** - Réservez directement un créneau dans mon agenda\n\nChoisissez l'option qui vous convient le mieux :"
        responseActions = [
          { id: 'redirect_contact', text: '✉️ Écrire un message', category: 'redirect' },
          { id: 'take_appointment', text: '📅 Prendre rendez-vous', category: 'appointment' }
        ]
      } else if (action.id === 'experience') {
        responseText = "🎯 **L'Expérience Client (CX), c'est quoi ?**\n\n📍 **Définition :** L'ensemble des émotions, perceptions et interactions qu'un client vit avec votre entreprise, de la découverte à la fidélisation.\n\n🔄 **Les 4 étapes clés :**\n• **Avant-achat** : Recherche, comparaison, premier contact\n• **Achat** : Processus de commande, paiement, livraison\n• **Après-vente** : Support, SAV, utilisation du produit\n• **Fidélisation** : Programmes, renouvellement, recommandation\n\n💡 **Impact business :** +15% CA, -50% coûts acquisition, +300% recommandations"
        responseActions = [
          { id: 'cx_examples', text: 'Exemples concrets de CX', category: 'examples' },
          { id: 'cx_measurement', text: 'Comment mesurer la CX ?', category: 'info' },
          { id: 'redirect_contact', text: 'Améliorer ma CX', category: 'redirect' }
        ]
      } else if (action.id === 'cx_examples') {
        responseText = "🎯 **Exemples d'Expérience Client :**\n\n✅ **Bonne CX - Amazon :**\n• Commande en 1 clic\n• Livraison rapide et tracking\n• Retours faciles, SAV réactif\n\n❌ **Mauvaise CX - Telecom classique :**\n• Attente téléphonique 20 min\n• Transferts multiples entre services\n• Problème non résolu du premier coup\n\n🏆 **CX excellente - Apple Store :**\n• Accueil personnalisé\n• Test produits librement\n• Formation gratuite post-achat"
        responseActions = [
          { id: 'cx_measurement', text: 'Mesurer la CX', category: 'methodology' },
          { id: 'redirect_contact', text: 'Analyser ma CX', category: 'redirect' }
        ]
      } else if (action.id === 'cx_measurement') {
        responseText = "📊 **Comment mesurer l'Expérience Client :**\n\n🎯 **Indicateurs clés (KPI CX) :**\n• **NPS** (Net Promoter Score) : -100 à +100\n• **CSAT** (Satisfaction) : Note /5 ou /10\n• **CES** (Effort Score) : Facilité d'utilisation\n• **Taux de churn** : % clients perdus\n\n🔍 **Méthodes de collecte :**\n• Enquêtes post-achat automatiques\n• Entretiens clients qualitatifs\n• Analyse parcours digitaux\n• Mystery shopping terrain\n\n📈 **Benchmark secteur :** NPS Retail: +30, Banque: +10, Telecom: -5"
        responseActions = [
          { id: 'redirect_contact', text: 'Mesurer ma CX maintenant', category: 'redirect' }
        ]
      } else if (action.id === 'advisory_details') {
        responseText = "🎯 **MatriCx Advisory** propose :\n\n✨ **Stratégie & Finance** - Optimisation financière, business plan, prévisionnel\n\n📈 **Amélioration Continue** - Processus optimisés, KPI performance\n\n🎯 **Stratégie CX** - Design d'expérience client, parcours client, touchpoints\n\n🔍 **Pilotage & Gouvernance** - Tableaux de bord, suivi performance, reporting\n\n💡 **Exemples concrets :** Refonte processus client, mise en place NPS, optimisation parcours d'achat"
        responseActions = [
          { id: 'advisory_examples', text: "Voir des exemples de missions", category: 'examples' },
          { id: 'advisory_pricing', text: "Tarifs & modalités", category: 'pricing' },
          { id: 'redirect_contact', text: t('chatbot.actions.redirectContact'), category: 'redirect' }
        ]
      } else if (action.id === 'survey_details') {
        responseText = "📊 **MatriCx Survey** propose :\n\n🔍 **Études de marché** - Analyse concurrence, positionnement, opportunités\n\n👥 **Connaissance client** - Segmentation, personas, besoins clients\n\n📋 **Enquêtes satisfaction** - NPS, CSAT, questionnaires sur mesure\n\n🎯 **Stratégie de marque** - Image de marque, communication, différenciation\n\n📈 **Analyse comportementale** - Parcours client, points de friction, leviers d'amélioration"
        responseActions = [
          { id: 'survey_examples', text: "Exemples d'études réalisées", category: 'examples' },
          { id: 'survey_methodology', text: "Notre méthodologie", category: 'info' },
          { id: 'redirect_contact', text: t('chatbot.actions.redirectContact'), category: 'redirect' }
        ]
      } else if (action.id === 'survey_examples') {
        responseText = "📊 **Études réalisées par MatriCx :**\n\n🏪 **Retail Cameroun (500 clients)**\n• NPS : 32 → 67 (+35 points)\n• Identification 5 irritants majeurs\n• Plan d'action → +15% fidélisation\n\n🏦 **Banque digitale (1200 répondants)**\n• Segmentation : 4 personas clients\n• UX mobile : 23 recommandations\n• Résultat : +40% usage app\n\n🚗 **Concessionnaire auto (300 clients)**\n• Parcours achat : 8 étapes optimisées\n• SAV : -50% réclamations\n• Recommandation : 78% → 89%"
        responseActions = [
          { id: 'survey_methodology', text: "Notre méthodologie Survey", category: 'methodology' },
          { id: 'redirect_contact', text: "Demander une étude personnalisée", category: 'redirect' }
        ]
      } else if (action.id === 'survey_methodology') {
        responseText = "📋 **Méthodologie MatriCx Survey :**\n\n**Étape 1 - Cadrage (1 sem)**\n• Définition objectifs étude\n• Choix méthodologie (quali/quanti)\n• Conception questionnaire/guide\n\n**Étape 2 - Collecte (2-4 sem)**\n• Enquêtes : web, téléphone, face-à-face\n• Échantillon représentatif\n• Contrôle qualité données\n\n**Étape 3 - Analyse (1-2 sem)**\n• Traitement statistique (SPSS/R)\n• Segmentation & insights\n• Recommandations actionnables\n\n**Livrables :** Rapport exécutif + Présentation + Base de données"
        responseActions = [
          { id: 'redirect_contact', text: "Lancer une étude maintenant", category: 'redirect' }
        ]
      } else if (action.id === 'technology_details') {
        responseText = "⚙️ **MatriCx Technology** propose :\n\n🔧 **Solutions CRM** - Salesforce, HubSpot, CRM sur mesure\n\n🤖 **Chatbots & IA** - Automatisation service client, FAQ intelligentes\n\n📱 **Transformation digitale** - Apps mobiles, sites web, e-commerce\n\n📊 **Social listening** - Veille réseaux sociaux, e-réputation, insights clients\n\n🔄 **Intégrations** - API, connecteurs, synchronisation données"
        responseActions = [
          { id: 'technology_tools', text: "Outils & technologies utilisés", category: 'tools' },
          { id: 'technology_examples', text: "Projets de transformation", category: 'examples' },
          { id: 'technology_methodology', text: "Approche développement", category: 'info' },
          { id: 'redirect_contact', text: t('chatbot.actions.redirectContact'), category: 'redirect' }
        ]
      } else if (action.id === 'technology_examples') {
        responseText = "💻 **Projets Technology réalisés :**\n\n🏥 **Clinique privée - CRM + App**\n• Gestion patients automatisée\n• RDV en ligne + Rappels SMS\n• -50% no-shows, +30% satisfaction\n\n🏭 **PME industrielle - Transformation**\n• ERP connecté + Dashboard temps réel\n• Automatisation commandes\n• ROI : 200% première année\n\n🛒 **Retail - E-commerce + Social**\n• Site + App mobile + Réseaux sociaux\n• Chatbot WhatsApp intégré\n• +150% ventes en ligne"
        responseActions = [
          { id: 'technology_methodology', text: "Notre approche Tech", category: 'methodology' },
          { id: 'redirect_contact', text: "Discuter de votre projet", category: 'redirect' }
        ]
      } else if (action.id === 'technology_methodology') {
        responseText = "⚙️ **Approche MatriCx Technology :**\n\n**Étape 1 - Audit Tech (1-2 sem)**\n• Analyse infrastructure existante\n• Identification gaps & opportunités\n• Roadmap technologique\n\n**Étape 2 - Développement Agile (4-16 sem)**\n• Méthodologie SCRUM\n• Livraisons toutes les 2 semaines\n• Tests automatisés + feedback continu\n\n**Étape 3 - Déploiement & Support**\n• Go-live sécurisé\n• Formation équipes\n• Maintenance évolutive 24/7\n\n**Tech Stack :** React, Node.js, Azure, Salesforce, HubSpot"
        responseActions = [
          { id: 'redirect_contact', text: "Démarrer un projet tech", category: 'redirect' }
        ]
      } else if (action.id === 'training_details') {
        responseText = "🎓 **MatriCx Training** propose :\n\n👨‍🎓 **Formation CX Leader** - Management expérience client, leadership CX\n\n📜 **Certifications CX** - Certifications reconnues, parcours qualifiants\n\n🏢 **Formation sur mesure** - Selon vos besoins spécifiques\n\n🎯 **Culture client** - Sensibilisation équipes, ateliers pratiques\n\n📚 **Modules disponibles :** Design Thinking, Voice of Customer, Journey Mapping, Service Design"
        responseActions = [
          { id: 'training_programs', text: "Voir nos programmes", category: 'programs' },
          { id: 'training_examples', text: "Formations réalisées", category: 'examples' },
          { id: 'training_methodology', text: "Approche pédagogique", category: 'info' },
          { id: 'redirect_contact', text: t('chatbot.actions.redirectContact'), category: 'redirect' }
        ]
      } else if (action.id === 'training_examples') {
        responseText = "🎓 **Formations Training réalisées :**\n\n🏦 **Banque (150 collaborateurs)**\n• Programme CX Manager 3 jours\n• +85% NPS interne formation\n• Résultat : NPS clients +22 points\n\n🏪 **Retail chain (80 managers)**\n• Certification Service Excellence\n• 12h e-learning + 2j présentiel\n• -40% réclamations clients\n\n✈️ **Compagnie aérienne (200 agents)**\n• Journey Mapping & Design Thinking\n• Ateliers pratiques par équipe\n• 15 parcours clients optimisés"
        responseActions = [
          { id: 'training_methodology', text: "Notre méthode Training", category: 'methodology' },
          { id: 'redirect_contact', text: "Organiser une formation", category: 'redirect' }
        ]
      } else if (action.id === 'training_methodology') {
        responseText = "🎓 **Méthode MatriCx Training :**\n\n**Étape 1 - Analyse besoins (1 sem)**\n• Diagnostic compétences actuelles\n• Définition objectifs apprentissage\n• Adaptation contenu & format\n\n**Étape 2 - Formation hybride (2-5 jours)**\n• 70% pratique / 30% théorie\n• E-learning + Présentiel + Coaching\n• Outils concrets & cas réels\n\n**Étape 3 - Accompagnement (3 mois)**\n• Suivi mise en pratique\n• Coaching individuel/collectif\n• Mesure ROI formation\n\n**Formats :** Intra/inter entreprise, e-learning, certifiants"
        responseActions = [
          { id: 'redirect_contact', text: "Planifier une formation", category: 'redirect' }
        ]
      } else if (action.id === 'values') {
        responseText = "🌟 **Nos 3 valeurs fondamentales :**\n\n💎 **Intégrité** - Assurer l'atteinte de vos objectifs en toute circonstance. Transparence et honnêteté dans tous nos échanges.\n\n🤝 **Engagement** - Faire corps avec votre projet : délais respectés, méthodologie rigoureuse, résultats garantis.\n\n✨ **Authenticité** - Votre expérience sera votre clé de différenciation. Le principal élément de votre recommandation client."
        responseActions = [
          { id: 'team', text: t('chatbot.actions.team'), category: 'info' },
          { id: 'redirect_contact', text: t('chatbot.actions.redirectContact'), category: 'redirect' }
        ]
      } else if (action.id === 'team') {
        responseText = "👥 **L'équipe MatriCx :**\n\n🎯 **Experts CX certifiés** avec 15+ ans d'expérience\n🌍 **Spécialistes du marché africain** - Cameroun, Côte d'Ivoire, Sénégal\n📊 **Consultants senior** en transformation digitale\n🎓 **Formateurs agréés** en Customer Experience\n\n🏆 **Notre approche :** Une MatriCx carrée basée sur 4 perspectives de l'expérience client pour une transformation réussie."
        responseActions = [
          { id: 'redirect_contact', text: t('chatbot.actions.redirectContact'), category: 'redirect' }
        ]
      } else if (action.id === 'advisory_examples') {
        responseText = "💼 **Exemples de missions Advisory :**\n\n🏦 **Banque camerounaise** - Refonte parcours client digital (+40% satisfaction)\n\n🛒 **E-commerce** - Optimisation tunnel d'achat (-60% abandon panier)\n\n🏢 **Entreprise B2B** - Mise en place NPS et plan d'action (+25 points NPS)\n\n📞 **Centre d'appels** - Réorganisation processus (-30% temps de traitement)\n\n🎯 **Résultats moyens :** +35% satisfaction client, +20% CA, -40% coûts opérationnels"
        responseActions = [
          { id: 'advisory_methodology', text: "Notre méthodologie Advisory", category: 'methodology' },
          { id: 'advisory_pricing', text: "Tarifs & modalités", category: 'pricing' },
          { id: 'redirect_contact', text: "Demander un devis personnalisé", category: 'redirect' }
        ]
      } else if (action.id === 'advisory_methodology') {
        responseText = "🎯 **Méthodologie MatriCx Advisory :**\n\n**Phase 1 - Diagnostic (2-3 sem)**\n• Audit expérience client actuelle\n• Analyse parcours & points de friction\n• Benchmark concurrentiel\n\n**Phase 2 - Stratégie (1-2 sem)**\n• Définition vision CX cible\n• Roadmap transformation\n• KPI & mesure performance\n\n**Phase 3 - Déploiement (3-6 mois)**\n• Mise en œuvre des solutions\n• Formation des équipes\n• Suivi & ajustements\n\n**Livrables :** Rapport diagnostic + Plan d'action + Tableau de bord"
        responseActions = [
          { id: 'advisory_pricing', text: "Tarifs & modalités", category: 'pricing' },
          { id: 'redirect_contact', text: "Lancer un diagnostic gratuit", category: 'redirect' }
        ]
      } else if (action.id === 'technology_tools') {
        responseText = "🔧 **Technologies que nous maîtrisons :**\n\n🎯 **CRM :** Salesforce, HubSpot, Pipedrive, SugarCRM\n🤖 **Chatbots :** Dialogflow, Microsoft Bot, ChatGPT API\n📱 **Mobile :** React Native, Flutter, PWA\n🌐 **Web :** React, Vue.js, Next.js, Node.js\n📊 **Analytics :** Google Analytics, Hotjar, Mixpanel\n☁️ **Cloud :** Azure, AWS, Google Cloud\n🔗 **Intégrations :** Zapier, APIs REST, GraphQL"
        responseActions = [
          { id: 'technology_examples', text: "Voir des projets réalisés", category: 'examples' },
          { id: 'redirect_contact', text: "Discuter de votre projet tech", category: 'redirect' }
        ]
      } else if (action.id === 'training_programs') {
        responseText = "📚 **Nos programmes de formation :**\n\n🎯 **CX Foundation** (2 jours) - Les bases de l'expérience client\n🏆 **CX Leader** (5 jours) - Management et stratégie CX\n📊 **Voice of Customer** (3 jours) - Écoute et analyse client\n🗺️ **Journey Mapping** (2 jours) - Cartographie parcours client\n🎨 **Design Thinking** (3 jours) - Innovation centrée client\n\n📜 **Certifications :** CCXP, CXA, formations agréées Qualiopi"
        responseActions = [
          { id: 'training_certification', text: "Info sur les certifications", category: 'certification' },
          { id: 'training_planning', text: "Planning des formations", category: 'planning' },
          { id: 'redirect_contact', text: "S'inscrire à une formation", category: 'redirect' }
        ]
      } else {
        responseText = t('chatbot.responses.defaultResponse')
        responseActions = [
          { id: 'redirect_contact', text: t('chatbot.actions.redirectContact'), category: 'redirect' }
        ]
      }
      
      const botMessage: ChatMessage = {
        id: Date.now().toString() + '_bot',
        text: responseText,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setCurrentQuickActions(responseActions)
    }, 1500) // Animation de 1.5 seconde
  }

  // Fonction pour revenir en arrière
  const goBack = () => {
    if (questionHistory.length > 0) {
      const previousQuestions = questionHistory[questionHistory.length - 1]
      setCurrentQuickActions(previousQuestions)
      setQuestionHistory(prev => prev.slice(0, -1))
    }
  }

  const handleSpecialAction = (actionId: string) => {
    if (actionId === 'take_appointment') {
      window.open('https://calendly.com/consultingmatricx/30min', '_blank')
    } else if (actionId === 'redirect_contact') {
      // Fermer le chatbot et rediriger vers la page contact
      setIsOpen(false)
      window.location.href = '/contact'
    }
    // Ajouter d'autres actions spéciales si nécessaire
  }

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.includes('**') ? (
          <div dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/✅|🎯|📊|⚙️|🎓|📞|💬|⏰|📈|🔄|✨|🔍|👥|📝|🗓️|💰|🆓|📋/g, '<span style="font-size: 1.1em;">$&</span>')
          }} />
        ) : (
          <span>{line}</span>
        )}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => isOpen ? closeChatbot() : openChatbot()}
        className={`fixed bottom-[1.5rem] right-[1.5rem] w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-[9999] ${
          isOpen ? 'bg-secondary-600 hover:bg-secondary-700' : 'bg-primary-500 hover:bg-primary-600 animate-pulse'
        }`}
        style={{ position: 'fixed' }}
      >
        {isOpen ? (
          <X className="w-6 md:w-8 h-6 md:h-8 text-white mx-auto" />
        ) : (
          <MessageCircle className="w-6 md:w-8 h-6 md:h-8 text-white mx-auto" />
        )}
      </button>

      {/* Fenêtre de chat - Responsive */}
      {isOpen && (
        <div 
          className="fixed right-[1.5rem] left-4 md:left-auto w-auto md:w-[365px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-[9998]"
          style={{ 
            position: 'fixed',
            bottom: '5.5rem',
            height: 'min(650px, calc(100vh - 8rem))',
            maxHeight: 'calc(100vh - 8rem)'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-t-2xl font-primary">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">{t('chatbot.name')}</h3>
                <p className="text-sm opacity-90">{t('chatbot.status')}</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser ? 'bg-primary-500' : 'bg-accent-100 border border-accent-200'
                  }`}>
                    {message.isUser ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-accent-600" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.isUser 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="text-sm leading-relaxed">
                      {formatMessage(message.text)}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Animation de frappe */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Actions rapides avec navigation améliorée */}
          {currentQuickActions.length > 0 && !isTyping && (
            <div className="border-t border-gray-100">
              {/* Barre de navigation */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-50">
                <div className="flex items-center space-x-2">
                  {/* Bouton retour */}
                  {questionHistory.length > 0 && (
                    <button
                      onClick={goBack}
                      className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-primary-600 hover:bg-white rounded transition-colors duration-200"
                      title="Revenir aux questions précédentes"
                    >
                      <ArrowLeft size={14} />
                      <span>{t('chatbot.back')}</span>
                    </button>
                  )}
                  
                  {/* Indicateur de navigation */}
                  <span className="text-xs text-gray-500">
                    {t('chatbot.suggestions')} {questionHistory.length > 0 && `(${t('chatbot.level')} ${questionHistory.length + 1})`}
                  </span>
                </div>
                
                {/* Bouton replier/déplier */}
                <button
                  onClick={() => setShowQuestions(!showQuestions)}
                  className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-primary-600 hover:bg-white rounded transition-colors duration-200"
                  title={showQuestions ? t('chatbot.hide') + ' les suggestions' : t('chatbot.show') + ' les suggestions'}
                >
                  {showQuestions ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  <span>{showQuestions ? t('chatbot.hide') : t('chatbot.show')}</span>
                </button>
              </div>
              
              {/* Questions (repliables) */}
              {showQuestions && (
                <div className="p-4 space-y-2">
                  {currentQuickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => {
                        if (action.id === 'take_appointment' || action.id === 'redirect_contact') {
                          handleSpecialAction(action.id)
                        } else {
                          handleQuickAction(action)
                        }
                      }}
                      className="w-full text-left px-3 py-2 text-sm bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg transition-colors duration-200 border border-primary-200"
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Chatbot