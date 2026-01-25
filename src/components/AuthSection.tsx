import { motion } from 'framer-motion'
import { ArrowRightOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/outline'

const AuthSection = () => {
  const openAuth = (mode: 'login' | 'signup') => {
    document.dispatchEvent(new CustomEvent('hra:open-auth', { detail: { mode } }))
  }

  return (
    <section id="auth" className="section py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary-200/30 blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-xl p-6 sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-secondary-100 text-secondary-800 px-4 py-2 text-sm font-semibold">
                Espace client
                <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
              </p>

              <h2 className="mt-5 text-2xl sm:text-4xl font-extrabold text-gray-900">
                Connexion & création de compte
              </h2>
              <p className="mt-3 text-gray-600 sm:text-lg">
                Un espace simple, rapide et 100% responsive pour vos futurs services.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                type="button"
                onClick={() => openAuth('login')}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 text-white px-6 py-3.5 font-bold shadow-lg shadow-primary-600/15 hover:bg-primary-700 transition"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                Se connecter
              </button>

              <button
                type="button"
                onClick={() => openAuth('signup')}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-3.5 font-bold shadow-lg shadow-secondary-500/25 hover:from-secondary-600 hover:to-secondary-700 transition"
              >
                <UserPlusIcon className="w-5 h-5" />
                Créer un compte
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-gray-500">
              Démo locale (sans serveur): les données sont stockées dans votre navigateur.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AuthSection
