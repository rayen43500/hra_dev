import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, ServerIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { fadeIn, staggerContainer } from '../utils/animations';

const Services = () => {
  const services = [
    {
      icon: <CodeBracketIcon className="w-8 h-8 text-primary" />,
      title: 'Développement Web',
      description: 'Sites vitrines, applications web complexes et e-commerce avec les technologies les plus modernes et performantes.',
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS'],
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-secondary" />,
      title: 'Applications Mobiles',
      description: 'Applications mobiles natives et cross-platform pour iOS et Android avec des interfaces utilisateur intuitives et performantes.',
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
      color: 'from-secondary-500 to-secondary-700'
    },
    {
      icon: <ServerIcon className="w-8 h-8 text-primary" />,
      title: 'Backend & API',
      description: 'Architectures backend robustes, APIs RESTful et GraphQL, bases de données optimisées et systèmes scalables.',
      technologies: ['Node.js', 'Express', 'Django', 'Laravel', 'MongoDB', 'PostgreSQL'],
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: <CpuChipIcon className="w-8 h-8 text-secondary" />,
      title: 'Intelligence Artificielle',
      description: 'Intégration de solutions IA, chatbots intelligents, systèmes de recommandation et analyse de données avancée.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Machine Learning'],
      color: 'from-secondary-500 to-secondary-700'
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-primary" />,
      title: 'Pack Startup',
      description: 'Solution complète pour lancer votre startup rapidement: identité visuelle, site web, applications et stratégie digitale.',
      technologies: ['Branding', 'UI/UX Design', 'MVP', 'Déploiement Cloud'],
      color: 'from-primary-500 to-primary-700'
    }
  ];

  return (
    <section id="services" className="section py-16 sm:py-20 bg-gray-50">
      <div className="container">
        <div className="section-title-container">
          <motion.h2 
            className="section-title"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Nos Services
          </motion.h2>
        </div>
        
        <motion.p 
          className="text-center text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-16 px-2"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Nous proposons une gamme complète de services de développement digital pour transformer vos idées en solutions technologiques innovantes et performantes.
        </motion.p>
        
        <motion.div 
          className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card card-hover bg-white h-full flex flex-col"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
            >
              <div className={`h-2 w-full rounded-t-2xl bg-gradient-to-r ${service.color}`}></div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="bg-gray-50 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="badge badge-primary text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="#contact" 
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Discuter de votre projet
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 