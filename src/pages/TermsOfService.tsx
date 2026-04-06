import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from '../hooks/useTranslation'

const TermsOfService: React.FC = () => {
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
              {currentLanguage === 'fr' ? 'Conditions Générales d\'Utilisation' : 'Terms of Service'}
            </h1>

            <p className="text-gray-500 mb-8">
              {currentLanguage === 'fr' ? 'Dernière mise à jour : 6 avril 2026' : 'Last updated: April 6, 2026'}
            </p>

            {currentLanguage === 'fr' ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Objet</h2>
                <p className="mb-4 leading-relaxed">
                  Les présentes conditions générales d'utilisation (ci-après « CGU ») ont pour objet de définir les modalités d'accès et d'utilisation du site web matricxconsulting.com (ci-après le « Site »), édité par MatriCx Consulting. En accédant au Site, vous acceptez sans réserve les présentes CGU.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Éditeur du Site</h2>
                <p className="mb-4 leading-relaxed">
                  Le Site est édité par MatriCx Consulting, cabinet de conseil en management et transformation spécialisé sur le marché africain.
                </p>
                <ul className="list-none mb-4 space-y-2">
                  <li><strong>Raison sociale :</strong> MatriCx Consulting</li>
                  <li><strong>Email :</strong> contact@matricxconsulting.com</li>
                  <li><strong>Site web :</strong> matricxconsulting.com</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Accès au Site</h2>
                <p className="mb-4 leading-relaxed">
                  Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les coûts liés à l'accès au Site (matériel informatique, connexion Internet, etc.) sont à la charge de l'utilisateur.
                </p>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting se réserve le droit de modifier, suspendre ou interrompre tout ou partie du Site à tout moment, sans préavis et sans engager sa responsabilité.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Propriété intellectuelle</h2>
                <p className="mb-4 leading-relaxed">
                  L'ensemble des éléments du Site (textes, images, graphismes, logo, icônes, vidéos, contenus audio, logiciels, etc.) est protégé par les lois relatives à la propriété intellectuelle. Ces éléments sont la propriété exclusive de MatriCx Consulting ou de ses partenaires.
                </p>
                <p className="mb-4 leading-relaxed">
                  Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de MatriCx Consulting.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contenu du Site</h2>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting s'efforce de fournir des informations aussi précises que possible sur le Site. Cependant, le Site ne saurait être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p className="mb-4 leading-relaxed">
                  Les articles de blog et contenus éditoriaux publiés sur le Site sont fournis à titre informatif uniquement et ne constituent en aucun cas un conseil professionnel personnalisé. Pour toute décision stratégique, nous vous recommandons de consulter nos experts.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Services proposés</h2>
                <p className="mb-4 leading-relaxed">
                  Le Site présente les services proposés par MatriCx Consulting, notamment :
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Conseil stratégique (MatriCx Advisory)</li>
                  <li>Études et recherches de marché (MatriCx Survey)</li>
                  <li>Solutions technologiques CRM (MatriCx Technology)</li>
                  <li>Formation et certification (MatriCx Training)</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Les descriptions des services présentées sur le Site sont indicatives. Les modalités précises de chaque prestation font l'objet d'un accord contractuel distinct entre MatriCx Consulting et le client.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Formulaires et données personnelles</h2>
                <p className="mb-4 leading-relaxed">
                  Le Site propose plusieurs formulaires de contact et d'inscription à la newsletter. En soumettant ces formulaires, vous consentez au traitement de vos données personnelles conformément à notre <Link to="/privacy" className="text-blue-600 hover:underline">Politique de Confidentialité</Link>.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Publicité</h2>
                <p className="mb-4 leading-relaxed">
                  Le Site peut afficher des publicités fournies par des régies publicitaires tierces, notamment Google AdSense. Ces publicités sont clairement identifiées et ne reflètent pas nécessairement les opinions ou recommandations de MatriCx Consulting. L'utilisation des cookies publicitaires est détaillée dans notre <Link to="/privacy" className="text-blue-600 hover:underline">Politique de Confidentialité</Link>.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Liens hypertextes</h2>
                <p className="mb-4 leading-relaxed">
                  Le Site peut contenir des liens hypertextes vers d'autres sites web. MatriCx Consulting n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu, leurs pratiques ou leurs politiques de confidentialité.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Limitation de responsabilité</h2>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation du Site, notamment en cas de :
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Interruption temporaire ou définitive du Site</li>
                  <li>Perte de données ou d'informations</li>
                  <li>Présence de virus ou de logiciels malveillants</li>
                  <li>Inexactitude des informations publiées</li>
                  <li>Utilisation inappropriée du Site par l'utilisateur</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Comportement de l'utilisateur</h2>
                <p className="mb-4 leading-relaxed">
                  L'utilisateur s'engage à utiliser le Site de manière conforme aux lois et règlements en vigueur. Il s'interdit notamment de :
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Diffuser du contenu illicite, diffamatoire, injurieux ou contraire à l'ordre public</li>
                  <li>Porter atteinte aux droits de propriété intellectuelle de MatriCx Consulting</li>
                  <li>Tenter de porter atteinte à la sécurité du Site</li>
                  <li>Collecter des données personnelles d'autres utilisateurs sans leur consentement</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Droit applicable et juridiction</h2>
                <p className="mb-4 leading-relaxed">
                  Les présentes CGU sont régies par le droit applicable au siège social de MatriCx Consulting. Tout litige relatif à l'interprétation ou à l'exécution des présentes sera soumis aux tribunaux compétents.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Modification des CGU</h2>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le Site. L'utilisation continue du Site après publication des modifications vaut acceptation des nouvelles CGU.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact</h2>
                <p className="mb-4 leading-relaxed">
                  Pour toute question relative aux présentes CGU, veuillez nous contacter :
                </p>
                <ul className="list-none mb-4 space-y-2">
                  <li><strong>MatriCx Consulting</strong></li>
                  <li>Email : <a href="mailto:contact@matricxconsulting.com" className="text-blue-600 hover:underline">contact@matricxconsulting.com</a></li>
                  <li>Site web : <a href="https://matricxconsulting.com" className="text-blue-600 hover:underline">matricxconsulting.com</a></li>
                </ul>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Purpose</h2>
                <p className="mb-4 leading-relaxed">
                  These terms of service (hereinafter "Terms") define the conditions for accessing and using the website matricxconsulting.com (hereinafter the "Site"), published by MatriCx Consulting. By accessing the Site, you accept these Terms without reservation.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Site Publisher</h2>
                <p className="mb-4 leading-relaxed">
                  The Site is published by MatriCx Consulting, a management consulting and transformation firm specialized in the African market.
                </p>
                <ul className="list-none mb-4 space-y-2">
                  <li><strong>Company:</strong> MatriCx Consulting</li>
                  <li><strong>Email:</strong> contact@matricxconsulting.com</li>
                  <li><strong>Website:</strong> matricxconsulting.com</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Site Access</h2>
                <p className="mb-4 leading-relaxed">
                  The Site is freely accessible to any user with Internet access. All costs related to accessing the Site (computer equipment, Internet connection, etc.) are borne by the user.
                </p>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting reserves the right to modify, suspend, or discontinue all or part of the Site at any time, without notice and without liability.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
                <p className="mb-4 leading-relaxed">
                  All elements of the Site (texts, images, graphics, logo, icons, videos, audio content, software, etc.) are protected by intellectual property laws. These elements are the exclusive property of MatriCx Consulting or its partners.
                </p>
                <p className="mb-4 leading-relaxed">
                  Any reproduction, representation, modification, publication, adaptation, or exploitation of all or part of the Site elements, whatever the means or process used, is prohibited without the prior written authorization of MatriCx Consulting.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Site Content</h2>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting strives to provide information on the Site that is as accurate as possible. However, the Site cannot be held responsible for omissions, inaccuracies, or deficiencies in updates, whether by its own doing or that of third-party partners who provide this information.
                </p>
                <p className="mb-4 leading-relaxed">
                  Blog articles and editorial content published on the Site are provided for informational purposes only and do not constitute personalized professional advice. For any strategic decision, we recommend consulting our experts.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Services Offered</h2>
                <p className="mb-4 leading-relaxed">
                  The Site presents services offered by MatriCx Consulting, including:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Strategic advisory (MatriCx Advisory)</li>
                  <li>Market research and studies (MatriCx Survey)</li>
                  <li>CRM technology solutions (MatriCx Technology)</li>
                  <li>Training and certification (MatriCx Training)</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Service descriptions presented on the Site are indicative. The specific terms of each service are subject to a separate contractual agreement between MatriCx Consulting and the client.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Forms and Personal Data</h2>
                <p className="mb-4 leading-relaxed">
                  The Site offers several contact forms and newsletter subscription. By submitting these forms, you consent to the processing of your personal data in accordance with our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Advertising</h2>
                <p className="mb-4 leading-relaxed">
                  The Site may display advertisements provided by third-party advertising networks, including Google AdSense. These advertisements are clearly identified and do not necessarily reflect the opinions or recommendations of MatriCx Consulting. The use of advertising cookies is detailed in our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Hyperlinks</h2>
                <p className="mb-4 leading-relaxed">
                  The Site may contain hyperlinks to other websites. MatriCx Consulting exercises no control over the content of these third-party sites and disclaims all responsibility for their content, practices, or privacy policies.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting shall not be held liable for direct or indirect damages resulting from the use of the Site, particularly in case of:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Temporary or permanent interruption of the Site</li>
                  <li>Loss of data or information</li>
                  <li>Presence of viruses or malware</li>
                  <li>Inaccuracy of published information</li>
                  <li>Inappropriate use of the Site by the user</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. User Behavior</h2>
                <p className="mb-4 leading-relaxed">
                  Users agree to use the Site in compliance with applicable laws and regulations. Users are prohibited from:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Distributing illegal, defamatory, abusive, or content contrary to public order</li>
                  <li>Infringing on MatriCx Consulting's intellectual property rights</li>
                  <li>Attempting to compromise the security of the Site</li>
                  <li>Collecting personal data from other users without their consent</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Applicable Law and Jurisdiction</h2>
                <p className="mb-4 leading-relaxed">
                  These Terms are governed by the law applicable to the registered office of MatriCx Consulting. Any dispute relating to the interpretation or execution hereof shall be submitted to the competent courts.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to Terms</h2>
                <p className="mb-4 leading-relaxed">
                  MatriCx Consulting reserves the right to modify these Terms at any time. Changes take effect upon publication on the Site. Continued use of the Site after publication of changes constitutes acceptance of the new Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact</h2>
                <p className="mb-4 leading-relaxed">
                  For any questions regarding these Terms, please contact us:
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

export default TermsOfService
