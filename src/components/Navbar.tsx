import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import logoHraDev from '../assets/images/logo.png'

interface NavbarProps {
  scrolled: boolean
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled 
          ? 'bg-white/95 shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <motion.a 
          href="#" 
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoHraDev} alt="HRA DEV Logo" className="h-12" />
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
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {link.name}
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
            className="md:hidden fixed inset-0 top-16 bg-white z-40"
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
                      className="block text-xl font-medium text-gray-800 hover:text-primary transition-colors"
                      onClick={handleLinkClick}
                    >
                      {link.name}
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