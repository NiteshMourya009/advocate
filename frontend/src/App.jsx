import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/layout/FloatingWhatsApp'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdvocatesPage from './pages/AdvocatesPage'
import PracticeAreasPage from './pages/PracticeAreasPage'
import ContactPage from './pages/ContactPage'
import DisclaimerPage from './pages/DisclaimerPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

// Automatically scrolls to top on route change or to hash element
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#292929] font-sans selection:bg-[#B89B5E] selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/advocates" element={<AdvocatesPage />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  )
}
