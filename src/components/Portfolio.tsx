import { motion } from 'framer-motion'

const projects = [
  {
    icon: '💊',
    title: 'E-commerce pharmacy',
    tech: 'Angular + Django',
    description: 'Plateforme de vente en ligne pour une pharmacie avec gestion des stocks et des ordonnances.',
    bgColor: 'bg-blue-50',
  },
  {
    icon: '🔥',
    title: 'IoT Firewall with AI chatbot',
    tech: 'React + OpenWRT',
    description: 'Solution de sécurité intelligente pour les appareils IoT avec interface conversationnelle.',
    bgColor: 'bg-red-50',
  },
  {
    icon: '🎭',
    title: 'Admin dashboard for theaters',
    tech: 'Vue.js + Node.js',
    description: 'Tableau de bord pour la gestion des spectacles, réservations et statistiques de théâtres.',
    bgColor: 'bg-green-50',
  },
  {
    icon: '📱',
    title: 'Mobile coding challenge app',
    tech: 'Flutter + Firebase',
    description: 'Application mobile pour participer à des défis de programmation en temps réel.',
    bgColor: 'bg-yellow-50',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Portfolio</h2>
          
          <div className="grid gap-8 mt-12 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 overflow-hidden transition-all rounded-lg shadow-md ${project.bgColor} hover:shadow-lg`}
              >
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-12 h-12 mr-4 text-3xl rounded-full bg-white">
                    {project.icon}
                  </span>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold">{project.title}</h3>
                    <p className="mb-3 text-sm font-medium text-primary">{project.tech}</p>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact" className="btn btn-primary">
              Discuter de votre projet
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 