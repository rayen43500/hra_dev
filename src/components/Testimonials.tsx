import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { fadeIn } from '../utils/animations';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Ben Salem',
      position: 'Directeur Général, Tunisie Telecom',
      image: 'https://randomuser.me/api/portraits/men/44.jpg',
      rating: 5,
      text: "HRA DEV a développé notre application mobile de paiement électronique avec une expertise remarquable. Leur équipe a parfaitement compris nos besoins spécifiques au marché tunisien et a livré une solution robuste et sécurisée. Notre satisfaction client a augmenté de 60%."
    },
    {
      id: 2,
      name: 'Fatma Mansouri',
      position: 'Fondatrice, E-Commerce Tunisie',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      text: "Grâce à HRA DEV, notre plateforme e-commerce a connu un succès fulgurant. Leur connaissance du marché local et leur expertise technique ont permis de créer une expérience utilisateur exceptionnelle. Nos ventes ont doublé en seulement 6 mois."
    },
    {
      id: 3,
      name: 'Mohamed Karray',
      position: 'CEO, Banque de Tunisie',
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
      rating: 5,
      text: "La collaboration avec HRA DEV pour notre système bancaire en ligne a été exemplaire. Leur équipe a respecté toutes les normes de sécurité tunisiennes et européennes. Notre plateforme est maintenant plus rapide et plus fiable que jamais."
    },
    {
      id: 4,
      name: 'Sonia Trabelsi',
      position: 'Directrice Marketing, Groupe Poulina',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      rating: 5,
      text: "HRA DEV a transformé notre présence digitale avec une stratégie complète. De la refonte de notre site web à l'optimisation SEO, ils ont boosté notre visibilité en ligne. Notre trafic web a augmenté de 150% et nos leads qualifiés de 80%."
    },
    {
      id: 5,
      name: 'Karim Ben Ali',
      position: 'Fondateur, Startup Tunisie',
      image: 'https://randomuser.me/api/portraits/men/25.jpg',
      rating: 5,
      text: "En tant que startup tunisienne, nous avions besoin d'un partenaire qui comprenne notre écosystème local. HRA DEV a non seulement développé notre MVP mais nous a aussi conseillés sur notre stratégie digitale. Un partenaire de confiance pour l'innovation en Tunisie."
    },
    {
      id: 6,
      name: 'Amina Ben Youssef',
      position: 'Directrice IT, Ministère des Finances',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 5,
      text: "HRA DEV a développé notre système de gestion fiscale avec une précision remarquable. Leur expertise en cybersécurité et leur respect des normes gouvernementales ont été déterminants. Le projet a été livré dans les délais et le budget prévus."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | undefined;
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section py-20 bg-primary-500 text-white relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="section-title-container"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title text-white">Ce que nos clients disent</h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mt-4">
            Découvrez les témoignages de nos clients satisfaits qui ont transformé leurs idées en solutions digitales performantes avec HRA DEV.
          </p>
        </motion.div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            {/* Contrôles */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                aria-label="Témoignage précédent"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <button 
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                aria-label="Témoignage suivant"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
            
            {/* Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <motion.div 
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-glow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                          <p className="text-gray-300">{testimonial.position}</p>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-gray-200 italic">"{testimonial.text}"</blockquote>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicateurs */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-secondary w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Contrôles mobiles */}
            <div className="flex justify-center mt-6 space-x-4 md:hidden">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                aria-label="Témoignage précédent"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                aria-label="Témoignage suivant"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="#contact" 
              className="btn-neon inline-flex items-center gap-2 px-8 py-4"
            >
              Rejoignez nos clients satisfaits
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 