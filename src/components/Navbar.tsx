import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import logoHraDev from '../assets/images/logo.png'

interface NavbarProps {
  scrolled: boolean
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('hero')

  const navLinks = [
    { name: 'Accueil', href: '#hero', id: 'hero' },
    { name: 'À propos', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  // Détecter la section active lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        if (!section) return
        
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile lors du changement de section
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  // Empêcher le défilement lorsque le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 shadow-lg py-2 backdrop-blur-md' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <motion.a 
          href="#" 
          className="text-2xl font-bold relative z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <img src={logoHraDev} alt="HRA DEV Logo" className="h-12" />
            {scrolled && (
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8 }}
              />
            )}
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className={`font-medium transition-all duration-300 relative px-2 py-1 ${
                    scrolled 
                      ? 'text-gray-800 hover:text-primary' 
                      : 'text-white hover:text-gray-200'
                  } ${activeLink === link.id ? 'text-primary font-semibold' : ''}`}
                >
                  {link.name}
                  <motion.span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: activeLink === link.id ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className={`w-7 h-7 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Bars3Icon className={`w-7 h-7 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-6">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className={`block text-xl font-medium transition-colors ${
                        activeLink === link.id 
                          ? 'text-primary font-semibold' 
                          : 'text-gray-800 hover:text-primary'
                      }`}
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center">
                        <span>{link.name}</span>
                        {activeLink === link.id && (
                          <motion.span 
                            className="ml-2 w-2 h-2 rounded-full bg-secondary"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar 