import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import NewsletterPopup from './components/NewsletterPopup'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Advisory from './pages/services/Advisory'
import Survey from './pages/services/Survey'
import Technology from './pages/services/Technology'
import Training from './pages/services/Training'

// Training Portal Pages
import TrainingHome from './pages/services/training/TrainingHome'
import EspaceClient from './pages/services/training/EspaceClient'
import ContactTraining from './pages/services/training/ContactTraining'

import Company from './pages/about/Company'
import Careers from './pages/about/Careers'
import Experience from './pages/about/Experience'
import Media from './pages/about/Media'
import Partners from './pages/about/Partners'
import Sustainability from './pages/about/Sustainability'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NewsletterPopup delay={5000} />
      <div className="App">
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
        </Routes>
      </div>
    </Router>
  )
}

export default App
