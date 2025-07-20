import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { fadeIn, staggerContainer } from '../utils/animations';

const FAQ = () => {
  const faqs = [
    {
      question: "Quel est votre processus de développement ?",
      answer: "Notre processus de développement comprend plusieurs étapes : analyse des besoins, conception, développement, tests, déploiement et maintenance. Nous utilisons une approche agile pour nous adapter rapidement aux changements et livrer des solutions de qualité dans les délais impartis."
    },
    {
      question: "Combien coûte le développement d'une application web ou mobile ?",
      answer: "Le coût dépend de la complexité du projet, des fonctionnalités requises et du délai de livraison. Nous proposons des devis personnalisés après une analyse détaillée de vos besoins. Notre objectif est de vous offrir le meilleur rapport qualité-prix pour votre projet."
    },
    {
      question: "Combien de temps faut-il pour développer une application ?",
      answer: "La durée de développement varie selon la complexité et l'envergure du projet. Un site web simple peut prendre 2-4 semaines, tandis qu'une application complexe peut nécessiter 3-6 mois. Nous établissons un calendrier précis lors de la phase de planification."
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer: "Nous utilisons les technologies les plus modernes et adaptées à chaque projet : React, Next.js, Vue.js pour le frontend; Node.js, Django, Laravel pour le backend; Flutter et React Native pour les applications mobiles; et des outils d'IA comme TensorFlow et OpenAI API pour les solutions d'intelligence artificielle."
    },
    {
      question: "Offrez-vous un support après le lancement ?",
      answer: "Absolument ! Nous proposons des contrats de maintenance et de support pour assurer le bon fonctionnement de votre application. Notre équipe reste disponible pour résoudre les problèmes, effectuer des mises à jour et implémenter de nouvelles fonctionnalités selon vos besoins."
    },
    {
      question: "Comment protégez-vous la sécurité et la confidentialité des données ?",
      answer: "La sécurité est notre priorité. Nous implémentons les meilleures pratiques de sécurité, utilisons le chiffrement des données, effectuons des tests de pénétration réguliers et respectons les réglementations en matière de protection des données (RGPD). Tous nos projets incluent des mesures de sécurité robustes."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section py-20 bg-gray-50 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-pattern"></div>
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary-300 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary-300 opacity-10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <motion.div
          className="section-title-container"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
            Trouvez les réponses aux questions les plus courantes concernant nos services et notre processus de développement.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-12 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? 'shadow-lg border-primary-200 bg-white' 
                    : 'border-gray-200 bg-white/80'
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-primary-600 transition-transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="mb-6 text-gray-600">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter.
          </p>
          <a 
            href="#contact" 
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Contactez-nous
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 