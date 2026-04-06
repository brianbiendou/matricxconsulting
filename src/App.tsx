import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'

// Lazy loaded components
const NewsletterPopup = lazy(() => import('./components/NewsletterPopup'))
const CookieConsent = lazy(() => import('./components/CookieConsent'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Advisory = lazy(() => import('./pages/services/Advisory'))
const Survey = lazy(() => import('./pages/services/Survey'))
const Technology = lazy(() => import('./pages/services/Technology'))
const Training = lazy(() => import('./pages/services/Training'))

// Training Portal Pages
const TrainingHome = lazy(() => import('./pages/services/training/TrainingHome'))
const EspaceClient = lazy(() => import('./pages/services/training/EspaceClient'))
const ContactTraining = lazy(() => import('./pages/services/training/ContactTraining'))

const Company = lazy(() => import('./pages/about/Company'))
const Careers = lazy(() => import('./pages/about/Careers'))
const Experience = lazy(() => import('./pages/about/Experience'))
const Media = lazy(() => import('./pages/about/Media'))
const Partners = lazy(() => import('./pages/about/Partners'))
const Sustainability = lazy(() => import('./pages/about/Sustainability'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={null}>
        <NewsletterPopup delay={5000} />
        <CookieConsent />
      </Suspense>
      <div className="App">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/company" element={<Company />} />
            <Route path="/about/careers" element={<Careers />} />
            <Route path="/about/experience" element={<Experience />} />
            <Route path="/about/media" element={<Media />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/about/sustainability" element={<Sustainability />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/advisory" element={<Advisory />} />
            <Route path="/services/survey" element={<Survey />} />
            <Route path="/services/technology" element={<Technology />} />
            <Route path="/services/training" element={<TrainingHome />} />
            <Route path="/services/training/espace-client" element={<EspaceClient />} />
            <Route path="/services/training/contact" element={<ContactTraining />} />
            <Route path="/services/training/*" element={<TrainingHome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
