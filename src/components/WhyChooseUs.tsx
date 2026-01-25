import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, UserGroupIcon, SparklesIcon, ShieldCheckIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { fadeIn, fadeInLeft, fadeInRight } from '../utils/animations';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'Livraison rapide',
      description: 'Nous respectons les délais et livrons des solutions de qualité dans les temps impartis.'
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: 'Équipe expérimentée',
      description: 'Notre équipe est composée de développeurs et designers passionnés avec une expertise avérée.'
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: 'Solutions innovantes',
      description: 'Nous utilisons les technologies les plus récentes pour créer des solutions modernes et performantes.'
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: 'Sécurité garantie',
      description: 'La sécurité de vos données et de vos applications est notre priorité absolue.'
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6" />,
      title: 'Support continu',
      description: 'Nous vous accompagnons après le lancement avec un support technique réactif et efficace.'
    },
    {
      icon: <TrophyIcon className="w-6 h-6" />,
      title: 'Résultats prouvés',
      description: 'Nos réalisations témoignent de notre capacité à délivrer des projets de qualité qui répondent aux attentes.'
    }
  ];

  return (
    <section id="why-choose-us" className="section py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-pattern"></div>
      <div className="absolute top-10 sm:top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary-300 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 sm:-bottom-48 -left-40 sm:-left-48 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-secondary-300 opacity-10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="section-title-container">
          <motion.h2 
            className="section-title"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Pourquoi nous choisir ?
          </motion.h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-10 sm:mt-16">
          {/* Colonne de gauche - Image */}
          <motion.div 
            className="lg:w-1/2 flex items-center justify-center"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-xl">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1170&q=80" 
                    alt="Notre équipe au travail" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((_, index) => (
                        <div key={index} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 opacity-80"></div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-medium">+10 experts</p>
                      <p className="text-xs text-gray-500">à votre service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Colonne de droite - Raisons */}
          <motion.div 
            className="lg:w-1/2"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 rounded-lg bg-primary-50 text-primary-600">
                      {reason.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{reason.title}</h3>
                  </div>
                  <p className="text-gray-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 