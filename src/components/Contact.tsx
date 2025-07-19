import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'envoi du formulaire
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus(null), 3000)
    }, 500)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Contact</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xl font-medium">Need a project? Let's talk!</p>
            </div>
            
            <div className="grid gap-10 md:grid-cols-2">
              {/* Contact Info */}
              <div>
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold">Contactez-nous</h3>
                  <p className="mb-6 text-gray-600">
                    Nous sommes disponibles pour discuter de vos projets et vous aider à concrétiser vos idées.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-full bg-primary bg-opacity-10">
                        <EnvelopeIcon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-700">📧 hra.dev@gmail.com</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-full bg-primary bg-opacity-10">
                        <PhoneIcon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-700">📱 WhatsApp : +216 XX XXX XXX</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Envoyer
                  </button>
                  
                  {formStatus === 'success' && (
                    <p className="p-3 text-center text-green-800 bg-green-100 rounded">
                      Message envoyé avec succès!
                    </p>
                  )}
                  
                  {formStatus === 'error' && (
                    <p className="p-3 text-center text-red-800 bg-red-100 rounded">
                      Une erreur est survenue. Veuillez réessayer.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 