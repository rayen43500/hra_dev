import { motion } from 'framer-motion'
import {
  AdjustmentsHorizontalIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: <AdjustmentsHorizontalIcon className="w-6 h-6" />,
    title: "Flexible",
    description: "Solutions adaptées"
  },
  {
    icon: <BoltIcon className="w-6 h-6" />,
    title: "Rapide",
    description: "Performance optimale"
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    title: "Sécurisé",
    description: "Protection des données"
  },
  {
    icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />,
    title: "Support",
    description: "Assistance continue"
  }
]

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="about" className="section bg-gray-50 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Cercle décoratif */}
          <div className="absolute -left-64 -top-64 w-96 h-96 rounded-full bg-primary opacity-5"></div>
          
          <motion.h2 
            className="section-title relative z-10"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            À propos
          </motion.h2>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p 
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              HRA DEV is a passionate team of web & mobile developers crafting custom digital solutions for startups, businesses, and entrepreneurs.
            </motion.p>
            
            <motion.div
              className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="p-6 text-center rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-xl bg-primary bg-opacity-10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-16 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-600 italic">
                "Notre mission est de transformer vos idées en solutions digitales performantes et élégantes."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 