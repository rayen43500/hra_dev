import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
  Bars3Icon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logoHraDev from '../assets/images/logo.png'
import AuthModal, { clearSessionUser, getSessionUser } from './AuthModal'

const MotionLink = motion(Link)

const Navbar = () => {
  const location = useLocation()
  const isAccountRoute = location.pathname.startsWith('/account')
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authInitialMode, setAuthInitialMode] = useState<'login' | 'signup'>('login')
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [sessionUser, setSessionUser] = useState(() => getSessionUser())

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

  // Lock scroll + close on ESC when mobile menu is open
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  // Open auth modal from anywhere (ex: AuthSection)
  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<{ mode?: 'login' | 'signup' }>
      setAuthInitialMode(custom.detail?.mode ?? 'login')
      setIsAuthOpen(true)
    }

    document.addEventListener('hra:open-auth', handler)
    return () => document.removeEventListener('hra:open-auth', handler)
  }, [])

  // Sync session state (ex: Account page logout)
  useEffect(() => {
    const handler = () => setSessionUser(getSessionUser())
    document.addEventListener('hra:auth-changed', handler)
    return () => document.removeEventListener('hra:auth-changed', handler)
  }, [])

  // Fermer le menu mobile lors du clic sur un lien
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    clearSessionUser()
    setSessionUser(null)
    document.dispatchEvent(new CustomEvent('hra:auth-changed'))
  }

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <nav
        className={`container flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-[height] duration-300 ${
          scrolled ? 'h-[52px] sm:h-[60px] lg:h-[72px]' : 'h-[60px] sm:h-[72px] lg:h-[88px]'
        }`}
      >
        {/* Logo */}
        <Link to="/#hero" className="flex items-center group" onClick={handleLinkClick}>
          <img 
            src={logoHraDev} 
            alt="HRA DEV Logo" 
            className={`w-auto transition-transform duration-300 group-hover:scale-105 ${
              scrolled ? 'h-7 sm:h-8 lg:h-9' : 'h-8 sm:h-9 lg:h-11'
            }`}
          />
        </Link>

        {/* Navigation desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {!isAccountRoute ? (
            <ul className="flex items-center gap-5 xl:gap-7">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={`/${link.href}`}
                    className={`relative py-3 px-2 text-sm xl:text-base font-medium transition-all duration-300 mobile-optimized whitespace-nowrap ${
                      scrolled
                        ? activeSection === link.href.substring(1)
                          ? 'text-primary-600'
                          : 'text-gray-800 hover:text-primary-600'
                        : activeSection === link.href.substring(1)
                          ? 'text-white'
                          : 'text-white/90 hover:text-white'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        className={`absolute bottom-0 left-0 h-0.5 w-full ${
                          scrolled ? 'bg-primary-600' : 'bg-white'
                        }`}
                        layoutId="navbar-indicator"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Link
              to="/#hero"
              className={`rounded-2xl px-4 py-2.5 text-sm font-bold transition whitespace-nowrap ${
                scrolled
                  ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  : 'bg-white/10 text-white hover:bg-white/15 border border-white/15'
              }`}
            >
              Retour au site
            </Link>
          )}

          {/* Auth CTA */}
          {sessionUser ? (
            <div className="flex items-center gap-3">
              <Link
                to="/account"
                className={`hidden xl:flex items-center gap-2 rounded-full px-3 py-2 border transition ${
                  scrolled
                    ? 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100'
                    : 'bg-white/10 border-white/15 text-white hover:bg-white/15'
                }`}
                aria-label="Mon compte"
              >
                <UserCircleIcon className="w-5 h-5" />
                <span className="text-sm font-semibold max-w-[160px] truncate">{sessionUser.name}</span>
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition whitespace-nowrap ${
                  scrolled
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-white/10 text-white hover:bg-white/15 border border-white/15'
                }`}
                aria-label="Se déconnecter"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                Déconnexion
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                setAuthInitialMode('login')
                setIsAuthOpen(true)
              }}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition whitespace-nowrap ${
                scrolled
                  ? 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-lg shadow-secondary-500/20'
                  : 'bg-white/10 text-white hover:bg-white/15 border border-white/15'
              }`}
            >
              <UserCircleIcon className="w-5 h-5" />
              Se connecter
            </button>
          )}
        </div>

        {/* Bouton menu mobile */}
        <button 
          className="block lg:hidden text-2xl mobile-optimized"
          onClick={() => setIsOpen(true)}
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-haspopup="dialog"
        >
          <Bars3Icon className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`} />
        </button>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.aside
                id="mobile-menu"
                className="absolute inset-y-0 right-0 w-full sm:max-w-sm bg-primary-900/98 backdrop-blur-lg flex flex-col"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header du menu mobile */}
                <div className="pt-[env(safe-area-inset-top)] border-b border-white/10">
                  <div className="container flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
                    <Link to="/#hero" className="flex items-center group" onClick={handleLinkClick}>
                      <img 
                        src={logoHraDev} 
                        alt="HRA DEV Logo" 
                        className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
                      />
                    </Link>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="text-white mobile-optimized p-2 rounded-xl hover:bg-white/10 transition-colors duration-300"
                      aria-label="Fermer le menu"
                    >
                      <XMarkIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                  </div>
                </div>
                
                {/* Navigation mobile */}
                <div className="flex flex-col items-center justify-center flex-1 gap-3 sm:gap-4 px-4 sm:px-6">
                  {!isAccountRoute ? (
                    navLinks.map((link, index) => (
                      <MotionLink
                        key={index}
                        to={`/${link.href}`}
                        className="w-full text-center text-xl sm:text-2xl font-bold text-white hover:text-secondary-300 transition-all duration-300 mobile-optimized py-3 px-4 rounded-2xl hover:bg-white/5"
                        onClick={handleLinkClick}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06 }}
                      >
                        {link.name}
                      </MotionLink>
                    ))
                  ) : (
                    <MotionLink
                      to="/#hero"
                      className="w-full text-center text-xl sm:text-2xl font-bold text-white hover:text-secondary-300 transition-all duration-300 mobile-optimized py-3 px-4 rounded-2xl hover:bg-white/5"
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 }}
                    >
                      Retour au site
                    </MotionLink>
                  )}

                  {/* Auth mobile */}
                  <motion.div
                    className="w-full pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {sessionUser ? (
                      <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-white">
                          <UserCircleIcon className="w-6 h-6" />
                          <div className="min-w-0">
                            <p className="font-bold truncate">{sessionUser.name}</p>
                            <p className="text-white/70 text-sm truncate">{sessionUser.email}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            handleLogout()
                            setIsOpen(false)
                          }}
                          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-3 font-bold text-white transition"
                        >
                          <ArrowRightOnRectangleIcon className="w-5 h-5" />
                          Déconnexion
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setAuthInitialMode('login')
                          setIsAuthOpen(true)
                          setIsOpen(false)
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 px-4 py-3 font-bold text-white shadow-lg shadow-secondary-500/25 transition"
                      >
                        <UserCircleIcon className="w-5 h-5" />
                        Se connecter / Créer un compte
                      </button>
                    )}
                  </motion.div>
                </div>
                
                {/* Footer du menu mobile */}
                <div className="pb-[env(safe-area-inset-bottom)] border-t border-white/10">
                  <div className="container px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center text-white/70 text-sm">
                      <p>HRA DEV - Agence de développement digital</p>
                      <p className="mt-1">Transformez vos idées en solutions digitales</p>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authInitialMode}
        onAuthChange={(user) => setSessionUser(user)}
      />
    </header>
  )
}

export default Navbar 