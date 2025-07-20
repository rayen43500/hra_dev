import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';
import { 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  ServerIcon 
} from '@heroicons/react/24/outline';
import { useState } from 'react';

type ProjectCategory = 'web' | 'mobile' | 'ai' | 'iot' | 'security';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

interface Category {
  id: ProjectCategory;
  name: string;
  icon: JSX.Element;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('web');

  const categories: Category[] = [
    { id: 'web', name: 'Projets Web', icon: <GlobeAltIcon className="w-5 h-5" /> },
    { id: 'mobile', name: 'Applications Mobiles', icon: <DevicePhoneMobileIcon className="w-5 h-5" /> },
    { id: 'ai', name: 'Projets IA', icon: <CpuChipIcon className="w-5 h-5" /> },
    { id: 'iot', name: 'Projets IoT', icon: <ServerIcon className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersécurité', icon: <ShieldCheckIcon className="w-5 h-5" /> },
  ];

  const projectsByCategory: Record<ProjectCategory, Project[]> = {
    web: [
      {
        id: 1,
        title: "E-Commerce Multi-Vendeur",
        description: "Plateforme avec panneau admin & paiement sécurisé",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        color: "from-blue-500 to-cyan-600",
      },
      {
        id: 2,
        title: "Plateforme de Formation en Ligne",
        description: "Système complet avec suivi de progrès",
        tags: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
        color: "from-green-500 to-teal-600",
      },
      {
        id: 3,
        title: "Site de Réservation de Salles",
        description: "Gestion d'événements en temps réel",
        tags: ["Angular", "Firebase", "Express", "Socket.io"],
        color: "from-purple-500 to-indigo-600",
      },
      {
        id: 4,
        title: "Portail RH",
        description: "Gestion des congés, paies et évaluations",
        tags: ["React", "Django", "PostgreSQL", "Redux"],
        color: "from-red-500 to-orange-600",
      },
      {
        id: 5,
        title: "Blog IA",
        description: "Générateur de contenu automatique",
        tags: ["Next.js", "OpenAI API", "MongoDB", "Vercel"],
        color: "from-yellow-500 to-amber-600",
      }
    ],
    mobile: [
      {
        id: 6,
        title: "App d'Orientation ATFP",
        description: "Orientation & inscription pour centres ATFP",
        tags: ["Flutter", "Firebase", "GetX", "Maps API"],
        color: "from-blue-500 to-cyan-600",
      },
      {
        id: 7,
        title: "Application Parapharmacie",
        description: "Paiement en ligne et notifications",
        tags: ["Flutter", "Node.js", "MongoDB", "FCM"],
        color: "from-green-500 to-teal-600",
      },
      {
        id: 8,
        title: "App de Coaching Personnel",
        description: "IA intégrée pour coaching personnalisé",
        tags: ["Flutter", "TensorFlow", "Firebase", "Hive"],
        color: "from-purple-500 to-indigo-600",
      },
      {
        id: 9,
        title: "Marketplace Mobile",
        description: "Suivi des commandes et chat en direct",
        tags: ["Flutter", "GraphQL", "Firebase", "Algolia"],
        color: "from-red-500 to-orange-600",
      },
      {
        id: 10,
        title: "App de Cours Vidéo",
        description: "Mode hors ligne & quiz interactifs",
        tags: ["Flutter", "Bloc", "SQLite", "ExoPlayer"],
        color: "from-yellow-500 to-amber-600",
      }
    ],
    ai: [
      {
        id: 11,
        title: "Chatbot IA pour Support Client",
        description: "Connecté à OpenAI / HuggingFace",
        tags: ["Python", "OpenAI", "FastAPI", "Redis"],
        color: "from-blue-500 to-cyan-600",
      },
      {
        id: 12,
        title: "Détection d'Émotions",
        description: "Analyse à partir de texte ou voix",
        tags: ["TensorFlow", "PyTorch", "NLP", "Flask"],
        color: "from-green-500 to-teal-600",
      },
      {
        id: 13,
        title: "Système de Recommandation",
        description: "Films, produits, formations...",
        tags: ["Python", "Scikit-learn", "Django", "Redis"],
        color: "from-purple-500 to-indigo-600",
      },
      {
        id: 14,
        title: "Générateur de Résumés",
        description: "Résumés automatiques pour documents",
        tags: ["BERT", "Transformers", "FastAPI", "React"],
        color: "from-red-500 to-orange-600",
      },
      {
        id: 15,
        title: "Moteur de Recherche Sémantique",
        description: "IA personnalisée pour recherche avancée",
        tags: ["Elasticsearch", "BERT", "Python", "Node.js"],
        color: "from-yellow-500 to-amber-600",
      }
    ],
    iot: [
      {
        id: 16,
        title: "Dashboard IoT",
        description: "Surveillance température & capteurs en temps réel",
        tags: ["React", "MQTT", "Node.js", "InfluxDB"],
        color: "from-blue-500 to-cyan-600",
      },
      {
        id: 17,
        title: "Système Domotique",
        description: "Contrôle lumière, porte, alarme via app mobile",
        tags: ["ESP32", "MQTT", "Flutter", "Node-RED"],
        color: "from-green-500 to-teal-600",
      },
      {
        id: 18,
        title: "App Mobile pour Contrôle IoT",
        description: "Contrôle à distance d'un réseau IoT",
        tags: ["Flutter", "MQTT", "Firebase", "Arduino"],
        color: "from-purple-500 to-indigo-600",
      },
      {
        id: 19,
        title: "Monitoring de Consommation",
        description: "Suivi électrique avec alertes IA",
        tags: ["Raspberry Pi", "Python", "TensorFlow", "MQTT"],
        color: "from-red-500 to-orange-600",
      },
      {
        id: 20,
        title: "Suivi de Géolocalisation",
        description: "Capteurs GPS et alertes SMS",
        tags: ["ESP32", "GPRS", "Node.js", "MongoDB"],
        color: "from-yellow-500 to-amber-600",
      }
    ],
    security: [
      {
        id: 21,
        title: "Pare-Feu Local",
        description: "Interface web de surveillance",
        tags: ["Python", "Flask", "iptables", "Vue.js"],
        color: "from-blue-500 to-cyan-600",
      },
      {
        id: 22,
        title: "Système de Sécurité des Accès",
        description: "Journalisation & analyse",
        tags: ["Node.js", "Express", "JWT", "ELK Stack"],
        color: "from-green-500 to-teal-600",
      },
      {
        id: 23,
        title: "Scanner de Vulnérabilité Web",
        description: "Analyse automatisée de sécurité",
        tags: ["Python", "OWASP", "Docker", "Redis"],
        color: "from-purple-500 to-indigo-600",
      },
      {
        id: 24,
        title: "Authentification 2FA",
        description: "Double facteur pour API REST",
        tags: ["Node.js", "OTP", "QR Code", "JWT"],
        color: "from-red-500 to-orange-600",
      },
      {
        id: 25,
        title: "Dashboard de Sécurité Réseau",
        description: "Logs et alertes en temps réel",
        tags: ["React", "Grafana", "Python", "Kafka"],
        color: "from-yellow-500 to-amber-600",
      }
    ]
  };

  const currentProjects = projectsByCategory[activeCategory];

  return (
    <section id="portfolio" className="section py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-pattern"></div>
      
      <div className="container relative z-10">
        <motion.div
          className="section-title-container"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
            Découvrez nos réalisations les plus récentes et innovantes qui démontrent notre expertise et notre créativité.
          </p>
        </motion.div>
        
        {/* Catégories */}
        <div className="flex flex-wrap justify-center mt-10 mb-12 gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                activeCategory === category.id 
                  ? 'bg-secondary-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={activeCategory} // Force re-render animation when category changes
        >
          {currentProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="card card-hover bg-white h-full flex flex-col overflow-hidden"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-1">{project.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <span 
                        key={tagIndex} 
                        className="badge badge-primary text-xs"
                      >
                        {tag}
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

export default Portfolio; 