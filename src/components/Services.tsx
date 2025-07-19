import { motion } from 'framer-motion'
import { 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  LockClosedIcon, 
  PaintBrushIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: <GlobeAltIcon className="w-10 h-10" />,
    title: 'Responsive websites',
    description: 'Sites web modernes et adaptés à tous les appareils, avec des interfaces intuitives et performantes.',
    color: 'bg-blue-50 text-blue-600',
    shadowColor: 'shadow-blue-200/50'
  },
  {
    icon: <DevicePhoneMobileIcon className="w-10 h-10" />,
    title: 'Mobile apps',
    description: 'Applications mobiles natives et cross-platform développées avec Flutter et React Native.',
    color: 'bg-green-50 text-green-600',
    shadowColor: 'shadow-green-200/50'
  },
  {
    icon: <LockClosedIcon className="w-10 h-10" />,
    title: 'Backend & REST APIs',
    description: 'Services backend robustes et sécurisés avec Node.js et Django pour des applications évolutives.',
    color: 'bg-purple-50 text-purple-600',
    shadowColor: 'shadow-purple-200/50'
  },
  {
    icon: <PaintBrushIcon className="w-10 h-10" />,
    title: 'Modern UI/UX design',
    description: 'Conception d\'interfaces utilisateur esthétiques et fonctionnelles qui améliorent l\'expérience utilisateur.',
    color: 'bg-pink-50 text-pink-600',
    shadowColor: 'shadow-pink-200/50'
  },
  {
    icon: <CpuChipIcon className="w-10 h-10" />,
    title: 'AI integration & automation',
    description: 'Intégration de solutions d\'intelligence artificielle et d\'automatisation pour optimiser vos processus.',
    color: 'bg-amber-50 text-amber-600',
    shadowColor: 'shadow-amber-200/50'
  },
]

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary opacity-5 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary opacity-5 translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Services
          </motion.h2>
          
          <motion.div
            className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-8 transition-all duration-300 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 ${service.shadowColor}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`flex items-center justify-center w-20 h-20 mb-6 rounded-xl ${service.color} bg-opacity-20`}>
                  <span className={service.color}>{service.icon}</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white transition-all rounded-xl bg-primary hover:bg-opacity-90 hover:-translate-y-1 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              Discuter de votre projet
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 