import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden"
    >
      {/* Fond avec gradient amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      
      {/* Motif de fond animé */}
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>
      
      {/* Cercles décoratifs */}
      <motion.div 
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-secondary-500 opacity-10 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-primary-300 opacity-5 blur-xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-white drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-secondary-300">HRA DEV</span> – Innovative Digital Solutions
          </motion.h1>
          
          <motion.div
            className="mb-10 text-xl md:text-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="inline-block mx-2 font-semibold text-secondary-300 after:content-['•'] after:ml-4 after:opacity-50 after:text-sm after:align-middle">Code</span>
            <span className="inline-block mx-2 font-semibold text-secondary-300 after:content-['•'] after:ml-4 after:opacity-50 after:text-sm after:align-middle">Design</span>
            <span className="inline-block mx-2 font-semibold text-secondary-300 after:content-['•'] after:ml-4 after:opacity-50 after:text-sm after:align-middle">Launch</span>
            <span className="inline-block mx-2 font-semibold text-secondary-300">Scale</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-5 md:flex-row"
          >
            <a 
              href="#services" 
              className="btn bg-secondary hover:bg-secondary-600 text-white shadow-xl shadow-secondary-500/20 hover:shadow-secondary-500/40 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
            >
              Nos Services
            </a>
            <a 
              href="#contact" 
              className="btn border-2 border-white/70 text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
            >
              Contactez-nous
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Indicateur de défilement amélioré */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-white group"
        >
          <span className="mb-2 text-sm font-light tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
            DÉCOUVRIR
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-secondary/50 transition-all"
          >
            <ChevronDownIcon className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero 