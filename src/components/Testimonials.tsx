import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { fadeIn } from '../utils/animations';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      position: 'CEO, TechStart',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: "L'équipe de HRA DEV a transformé notre idée en une application mobile exceptionnelle. Leur expertise technique et leur approche créative ont dépassé nos attentes. Je recommande vivement leurs services à toute entreprise cherchant à innover."
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      position: 'Fondateur, E-Commerce Plus',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: "Nous avons fait appel à HRA DEV pour refondre notre site e-commerce et les résultats sont impressionnants. Notre taux de conversion a augmenté de 40% et l'expérience utilisateur est nettement améliorée. Un partenaire de confiance pour votre transformation digitale."
    },
    {
      id: 3,
      name: 'Léa Moreau',
      position: 'Directrice Marketing, InnoGroup',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      text: "La collaboration avec HRA DEV a été un véritable plaisir. Leur équipe est à l'écoute, réactive et propose des solutions innovantes. Notre application web est maintenant plus rapide, plus sécurisée et parfaitement adaptée à nos besoins spécifiques."
    },
    {
      id: 4,
      name: 'Alexandre Petit',
      position: 'CTO, FinTech Solutions',
      image: 'https://randomuser.me/api/portraits/men/12.jpg',
      rating: 5,
      text: "HRA DEV nous a aidés à développer une architecture backend robuste et évolutive pour notre plateforme financière. Leur expertise en sécurité et en performance a été cruciale pour notre succès. Un partenariat que nous comptons maintenir sur le long terme."
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
    <section id="testimonials" className="section py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grain opacity-30"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-secondary opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-primary-300 opacity-5 blur-xl"></div>
      
      {/* Quotes décoratifs */}
      <div className="absolute top-10 left-10 text-9xl text-white opacity-5 font-serif">"</div>
      <div className="absolute bottom-10 right-10 text-9xl text-white opacity-5 font-serif">"</div>
      
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