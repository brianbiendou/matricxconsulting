import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from '../hooks/useTranslation'

const PrivacyPolicy: React.FC = () => {
  const { currentLanguage } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm mb-6 inline-block">
              ← {currentLanguage === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
            </Link>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {currentLanguage === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </h1>

            <p className="text-gray-500 mb-8">
              {currentLanguage === 'fr' ? 'Dernière mise à jour : 6 avril 2026' : 'Last updated: April 6, 2026'}
            </p>

            {currentLanguage === 'fr' ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting (« nous », « notre ») s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous visitez notre site web matricxconsulting.com et utilisez nos services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Informations que nous collectons</h2>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Informations fournies volontairement</h3>
                <p className="mb-4 leading-relaxed">Nous collectons les informations que vous nous fournissez directement, notamment :</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Nom et prénom lors de l'utilisation de nos formulaires de contact</li>
                  <li>Adresse e-mail pour la newsletter et les demandes de renseignements</li>
                  <li>Numéro de téléphone si vous le fournissez dans le formulaire de contact</li>
                  <li>Nom de votre entreprise et fonction professionnelle</li>
                  <li>Tout autre information que vous choisissez de partager dans vos messages</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Informations collectées automatiquement</h3>
                <p className="mb-4 leading-relaxed">Lorsque vous naviguez sur notre site, nous pouvons collecter automatiquement :</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Votre adresse IP et informations de géolocalisation approximative</li>
                  <li>Le type de navigateur et le système d'exploitation que vous utilisez</li>
                  <li>Les pages que vous visitez et le temps passé sur chaque page</li>
                  <li>La source de votre visite (moteur de recherche, lien direct, etc.)</li>
                  <li>Des informations sur votre appareil (type, résolution d'écran)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Utilisation des informations</h2>
                <p className="mb-4 leading-relaxed">Nous utilisons vos informations personnelles pour :</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Répondre à vos demandes de contact et de renseignements</li>
                  <li>Vous envoyer notre newsletter si vous y avez souscrit</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Analyser l'utilisation de notre site pour optimiser l'expérience utilisateur</li>
                  <li>Respecter nos obligations légales</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies et technologies de suivi</h2>
                <p className="mb-4 leading-relaxed">
                  Notre site utilise des cookies et technologies similaires pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous permettent de reconnaître votre navigateur et de mémoriser certaines informations.
                </p>
                <p className="mb-4 leading-relaxed">Types de cookies que nous utilisons :</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (préférences de langue, session)</li>
                  <li><strong>Cookies analytiques :</strong> nous aident à comprendre comment les visiteurs utilisent le site (Google Analytics)</li>
                  <li><strong>Cookies publicitaires :</strong> utilisés pour afficher des publicités pertinentes (Google AdSense)</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Vous pouvez contrôler et supprimer les cookies via les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut affecter votre expérience de navigation.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Google AdSense et publicité</h2>
                <p className="mb-4 leading-relaxed">
                  Nous utilisons Google AdSense pour afficher des publicités sur notre site. Google et ses partenaires publicitaires peuvent utiliser des cookies pour diffuser des annonces basées sur vos visites précédentes sur notre site ou d'autres sites web. Vous pouvez désactiver la publicité personnalisée en visitant les <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">paramètres publicitaires de Google</a>.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Partage des informations</h2>
                <p className="mb-4 leading-relaxed">
                  Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter une obligation légale ou répondre à une demande des autorités compétentes</li>
                  <li>Avec nos prestataires de services techniques (hébergement, analyse, envoi d'e-mails) dans le cadre strict de leurs missions</li>
                  <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Sécurité des données</h2>
                <p className="mb-4 leading-relaxed">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction. Ces mesures comprennent le chiffrement SSL/TLS pour la transmission des données et l'accès restreint aux informations personnelles.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Conservation des données</h2>
                <p className="mb-4 leading-relaxed">
                  Nous conservons vos informations personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, sauf si une période de conservation plus longue est requise ou autorisée par la loi. Les données de newsletter sont conservées jusqu'à votre désinscription.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Vos droits</h2>
                <p className="mb-4 leading-relaxed">Conformément à la législation applicable, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                  <li><strong>Droit de rectification :</strong> demander la correction de vos données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données personnelles</li>
                  <li><strong>Droit à la limitation du traitement :</strong> demander la restriction du traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible par machine</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Pour exercer ces droits, veuillez nous contacter à l'adresse : <a href="mailto:contact@matricxconsulting.com" className="text-blue-600 hover:underline">contact@matricxconsulting.com</a>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Liens vers des sites tiers</h2>
                <p className="mb-4 leading-relaxed">
                  Notre site peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites. Nous vous encourageons à lire les politiques de confidentialité de tout site web que vous visitez.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Modifications de cette politique</h2>
                <p className="mb-4 leading-relaxed">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact</h2>
                <p className="mb-4 leading-relaxed">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
                </p>
                <ul className="list-none mb-4 space-y-2">
                  <li><strong>MatriCx Consulting</strong></li>
                  <li>Email : <a href="mailto:contact@matricxconsulting.com" className="text-blue-600 hover:underline">contact@matricxconsulting.com</a></li>
                  <li>Site web : <a href="https://matricxconsulting.com" className="text-blue-600 hover:underline">matricxconsulting.com</a></li>
                </ul>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting ("we", "our") is committed to protecting the privacy of its users. This privacy policy describes how we collect, use, store, and protect your personal information when you visit our website matricxconsulting.com and use our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information Voluntarily Provided</h3>
                <p className="mb-4 leading-relaxed">We collect information that you provide to us directly, including:</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>First and last name when using our contact forms</li>
                  <li>Email address for newsletter and inquiries</li>
                  <li>Phone number if provided in the contact form</li>
                  <li>Company name and professional title</li>
                  <li>Any other information you choose to share in your messages</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Information Collected Automatically</h3>
                <p className="mb-4 leading-relaxed">When you browse our site, we may automatically collect:</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Your IP address and approximate geolocation information</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Source of your visit (search engine, direct link, etc.)</li>
                  <li>Device information (type, screen resolution)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Use of Information</h2>
                <p className="mb-4 leading-relaxed">We use your personal information to:</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Respond to your contact requests and inquiries</li>
                  <li>Send you our newsletter if you have subscribed</li>
                  <li>Improve our website and services</li>
                  <li>Analyze site usage to optimize user experience</li>
                  <li>Comply with our legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="mb-4 leading-relaxed">
                  Our site uses cookies and similar technologies to improve your browsing experience. Cookies are small text files stored on your device that allow us to recognize your browser and remember certain information.
                </p>
                <p className="mb-4 leading-relaxed">Types of cookies we use:</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li><strong>Essential cookies:</strong> necessary for site operation (language preferences, session)</li>
                  <li><strong>Analytical cookies:</strong> help us understand how visitors use the site (Google Analytics)</li>
                  <li><strong>Advertising cookies:</strong> used to display relevant advertisements (Google AdSense)</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect your browsing experience.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Google AdSense and Advertising</h2>
                <p className="mb-4 leading-relaxed">
                  We use Google AdSense to display advertisements on our site. Google and its advertising partners may use cookies to serve ads based on your previous visits to our site or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Settings</a>.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Information Sharing</h2>
                <p className="mb-4 leading-relaxed">
                  We do not sell, rent, or share your personal information with third parties, except in the following cases:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with a legal obligation or respond to a request from competent authorities</li>
                  <li>With our technical service providers (hosting, analytics, email sending) strictly within their mission scope</li>
                  <li>To protect our rights, property, or safety</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Security</h2>
                <p className="mb-4 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, modification, disclosure, or destruction. These measures include SSL/TLS encryption for data transmission and restricted access to personal information.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Retention</h2>
                <p className="mb-4 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law. Newsletter data is retained until you unsubscribe.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Your Rights</h2>
                <p className="mb-4 leading-relaxed">In accordance with applicable legislation, you have the following rights:</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li><strong>Right of access:</strong> obtain confirmation that your data is being processed and obtain a copy</li>
                  <li><strong>Right of rectification:</strong> request correction of inaccurate data</li>
                  <li><strong>Right to erasure:</strong> request deletion of your personal data</li>
                  <li><strong>Right to restriction:</strong> request restriction of processing of your data</li>
                  <li><strong>Right to portability:</strong> receive your data in a structured, machine-readable format</li>
                  <li><strong>Right to object:</strong> object to the processing of your data</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  To exercise these rights, please contact us at: <a href="mailto:contact@matricxconsulting.com" className="text-blue-600 hover:underline">contact@matricxconsulting.com</a>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Third-Party Links</h2>
                <p className="mb-4 leading-relaxed">
                  Our site may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read the privacy policies of any website you visit.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to This Policy</h2>
                <p className="mb-4 leading-relaxed">
                  We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page with the update date. We encourage you to regularly review this page to stay informed of our practices.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact</h2>
                <p className="mb-4 leading-relaxed">
                  For any questions regarding this privacy policy or the processing of your personal data, you can contact us:
                </p>
                <ul className="list-none mb-4 space-y-2">
                  <li><strong>MatriCx Consulting</strong></li>
                  <li>Email: <a href="mailto:contact@matricxconsulting.com" className="text-blue-600 hover:underline">contact@matricxconsulting.com</a></li>
                  <li>Website: <a href="https://matricxconsulting.com" className="text-blue-600 hover:underline">matricxconsulting.com</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
