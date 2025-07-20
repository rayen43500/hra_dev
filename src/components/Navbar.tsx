import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoHraDev from '../assets/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Gérer le scroll à l'intérieur du composant
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Détecter la section active
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id') || ''
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pourquoi nous', href: '#why-choose-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="container flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center">
          <img src={logoHraDev} alt="HRA DEV Logo" className="h-10" />
        </a>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  scrolled 
                    ? activeSection === link.href.substring(1)
                      ? 'text-primary-600' 
                      : 'text-gray-800 hover:text-primary-600'
                    : activeSection === link.href.substring(1)
                      ? 'text-white' 
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 w-full ${scrolled ? 'bg-primary-600' : 'bg-white'}`}
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton menu mobile */}
        <button 
          className="block md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
          aria-label="Menu"
        >
          <Bars3Icon className={`w-8 h-8 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
        </button>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-primary-900/95 z-50 flex flex-col"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
              <div className="container flex justify-between items-center h-20">
                <a href="#hero" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <img src={logoHraDev} alt="HRA DEV Logo" className="h-10" />
                </a>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white"
                  aria-label="Fermer le menu"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-2xl font-bold text-white hover:text-secondary-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar 