import { motion } from 'framer-motion'
import { useParallaxEffect } from '../utils/animations'
import { useEffect } from 'react'

const Hero = () => {
  // Utiliser l'effet de parallaxe
  useParallaxEffect()

  // Effet de particules flottantes responsive
  useEffect(() => {
    const createParticle = () => {
      const heroSection = document.getElementById('hero')
      if (!heroSection) return
      
      // Adapter le nombre de particules selon la taille d'écran
      const screenWidth = window.innerWidth
      const particleCount = screenWidth < 768 ? 0.3 : screenWidth < 1024 ? 0.6 : 1
      
      if (Math.random() > particleCount) return
      
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full pointer-events-none'
      
      // Position responsive
      const x = Math.random() * heroSection.offsetWidth
      const y = Math.random() * heroSection.offsetHeight
      
      // Taille adaptée à l'écran
      const baseSize = screenWidth < 768 ? 2 : screenWidth < 1024 ? 3 : 4
      const size = Math.random() * baseSize + 1
      const opacity = Math.random() * 0.3 + 0.1
      
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.background = `radial-gradient(circle, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,0) 70%)`
      particle.style.filter = 'blur(0.5px)'
      
      // Animation adaptée
      const animationDuration = Math.random() * 3000 + 3000
      const moveDistance = screenWidth < 768 ? Math.random() * 80 + 60 : Math.random() * 120 + 80
      const rotation = Math.random() * 360
      
      particle.animate([
        { 
          transform: 'translateY(0) translateX(0) rotate(0deg)', 
          opacity: opacity,
          filter: 'blur(0.5px)'
        },
        { 
          transform: `translateY(-${moveDistance}px) translateX(${Math.random() * 40 - 20}px) rotate(${rotation}deg)`, 
          opacity: 0,
          filter: 'blur(1px)'
        }
      ], {
        duration: animationDuration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      })
      
      heroSection.appendChild(particle)
      
      setTimeout(() => {
        if (particle.parentNode === heroSection) {
          heroSection.removeChild(particle)
        }
      }, animationDuration + 500)
    }
    
    const createParticles = () => {
      createParticle()
      setTimeout(createParticles, Math.random() * 600 + 300)
    }
    
    createParticles()
    
    return () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const particles = heroSection.querySelectorAll('.absolute.rounded-full')
        particles.forEach(particle => particle.remove())
      }
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Fond dégradé responsive */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      
      {/* Overlay adaptatif */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Effet de lumière responsive */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-secondary-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
      
      {/* Contenu principal ultra-responsive */}
      <div className="container relative z-10 px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="text-center space-y-6 xs:space-y-8 sm:space-y-10 lg:space-y-12 xl:space-y-16 py-12 xs:py-16 sm:py-20 lg:py-24 pb-24 sm:pb-28 lg:pb-32 xl:pb-36">
          
          {/* Badge supérieur ultra-responsive */}
          <motion.div
            className="inline-flex items-center gap-2 xs:gap-3 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-secondary-400 animate-pulse"></div>
            <span className="text-secondary-300 font-medium text-xs xs:text-sm sm:text-base tracking-wide">
              Agence de développement digital
            </span>
          </motion.div>
          
          {/* Titre principal ultra-responsive */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-4 xs:space-y-5 sm:space-y-6 lg:space-y-8"
          >
            {/* Logo/Nom de l'agence responsive */}
            <div className="mb-4 xs:mb-6 sm:mb-8">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.9] xs:leading-[0.85] sm:leading-none">
                <span className="bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-500 bg-clip-text text-transparent filter drop-shadow-lg sm:drop-shadow-2xl">
                  HRA DEV
                </span>
              </h1>
            </div>
            
            {/* Slogan principal responsive */}
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Transformez vos idées
                </span>
              </h2>
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  en{' '}
                  <span className="text-secondary-400 inline-block">solutions digitales</span>
                </span>
              </h3>
            </div>
          </motion.div>
          
          {/* Description ultra-responsive */}
          <motion.div
            className="max-w-xs xs:max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto space-y-3 xs:space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-gray-200 leading-relaxed px-2 xs:px-0">
              Expertise complète en développement web, mobile et IA
            </p>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xs xs:max-w-sm sm:max-w-3xl mx-auto px-2 xs:px-0">
              Nous propulsons votre entreprise vers le succès digital avec des technologies de pointe et un savoir-faire reconnu.
            </p>
          </motion.div>
          
          {/* Badges de technologies ultra-responsive */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 lg:gap-6 max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto px-2 xs:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { name: 'Web', delay: 0.1 },
              { name: 'Mobile', delay: 0.2 },
              { name: 'Backend', delay: 0.3 },
              { name: 'IA', delay: 0.4 }
            ].map((tech) => (
              <motion.div
                key={tech.name}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: tech.delay, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="absolute inset-0 bg-secondary-500/20 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                <span className="relative inline-flex items-center px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs xs:text-sm sm:text-base lg:text-lg font-semibold shadow-lg">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-secondary-400 mr-2 xs:mr-3 animate-pulse"></span>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Boutons d'action redesignés et optimisés */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-0"
          >
            {/* Bouton principal - Découvrir nos services */}
            <motion.a 
              href="#services" 
              className="group relative overflow-hidden flex items-center justify-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-bold text-base sm:text-lg lg:text-xl shadow-2xl shadow-secondary-500/40 hover:shadow-secondary-500/60 transition-all duration-500 w-full sm:w-auto min-w-[280px] sm:min-w-[320px]"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              {/* Icône */}
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              
              <span className="relative z-10 whitespace-nowrap">Découvrir nos services</span>
              
              {/* Particules d'effet */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 right-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-3 left-6 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </motion.a>
            
            {/* Bouton secondaire - Devis gratuit */}
            <motion.a 
              href="#contact" 
              className="group relative overflow-hidden flex items-center justify-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl border-2 border-white/30 hover:border-secondary-400 bg-white/5 hover:bg-secondary-500/10 backdrop-blur-xl text-white hover:text-secondary-300 font-bold text-base sm:text-lg lg:text-xl transition-all duration-500 w-full sm:w-auto min-w-[280px] sm:min-w-[320px]"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Effet de fond animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/0 via-secondary-500/10 to-secondary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icône */}
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              
              <span className="relative z-10 whitespace-nowrap">
                <span className="inline sm:hidden">Devis gratuit</span>
                <span className="hidden sm:inline">Demander un devis gratuit</span>
              </span>
              
              {/* Badge "Gratuit" */}
              <div className="absolute -top-2 -right-2 px-2 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GRATUIT
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Divider de vague parfaitement ancré en bas */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-0 z-20">
        <div className="relative w-full overflow-hidden" style={{ height: 'clamp(64px, 12vw, 160px)' }}>
          <svg 
            className="absolute bottom-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            style={{ 
              transform: 'translateZ(0) scale(1.01)',
              backfaceVisibility: 'hidden',
              filter: 'drop-shadow(0 -4px 8px rgba(0,0,0,0.1))'
            }}
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                <stop offset="25%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                <stop offset="75%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="url(#waveGradient)"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero