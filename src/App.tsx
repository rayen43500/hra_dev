import { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AuthSection from './components/AuthSection'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useScrollAnimation } from './utils/animations'
import Account from './pages/Account'

const Home = () => {
  return (
    <>
      <Hero />
      <AuthSection />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

const SiteLayout = () => {
  const location = useLocation()
  const isAccountRoute = location.pathname.startsWith('/account')

  // Utiliser l'animation de défilement
  useScrollAnimation();

  // Effet pour les animations au chargement
  useEffect(() => {
    // Ajouter une classe au body pour les animations globales
    document.body.classList.add('loaded');
    
    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  // Handle /#hash navigation (ex: from /account back to /#contact)
  useEffect(() => {
    const hash = location.hash
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      return
    }

    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return

    // Wait a tick to ensure the DOM is painted
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {!isAccountRoute && <Footer />}
      {!isAccountRoute && <ScrollToTop />}
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  )
}

export default App 