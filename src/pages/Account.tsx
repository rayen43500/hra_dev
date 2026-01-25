import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { clearSessionUser, getSessionUser } from '../components/AuthModal'

const Account = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(() => getSessionUser())

  useEffect(() => {
    const handler = () => setUser(getSessionUser())
    document.addEventListener('hra:auth-changed', handler)
    return () => document.removeEventListener('hra:auth-changed', handler)
  }, [])

  if (!user) {
    return (
      <section className="container px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl shadow-primary-500/5">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary-600">
                <UserCircleIcon className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Espace client</h1>
                <p className="mt-1 text-gray-600">Connectez-vous pour accéder à votre page.</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-secondary-200 bg-secondary-50 px-4 py-3">
              <p className="text-sm font-semibold text-secondary-900">Espace client — Coming soon</p>
              <p className="mt-1 text-sm text-secondary-800">
                Cette page est en cours de développement. Quelques fonctionnalités arrivent bientôt.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() =>
                  document.dispatchEvent(
                    new CustomEvent('hra:open-auth', { detail: { mode: 'login' } }),
                  )
                }
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-600 px-5 py-3 font-bold text-white shadow-lg shadow-secondary-500/25 hover:from-secondary-600 hover:to-secondary-700 transition"
              >
                Se connecter
              </button>
              <button
                type="button"
                onClick={() =>
                  document.dispatchEvent(
                    new CustomEvent('hra:open-auth', { detail: { mode: 'signup' } }),
                  )
                }
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 font-bold text-gray-900 hover:bg-gray-50 transition"
              >
                Créer un compte
              </button>
              <Link
                to="/#hero"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-bold text-primary-700 hover:text-primary-800 transition"
              >
                Retour à l’accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl shadow-primary-500/5">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50" />
          <div className="relative">
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary-600">
                <UserCircleIcon className="h-7 w-7" />
              </div>
              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 truncate">
                  Bienvenue, {user.name}
                </h1>
                <p className="mt-1 text-gray-700 truncate">{user.email}</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-secondary-200 bg-secondary-50 px-4 py-3">
              <p className="text-sm font-semibold text-secondary-900">Espace client — Coming soon</p>
              <p className="mt-1 text-sm text-secondary-800">
                Votre espace est connecté, mais les fonctionnalités avancées arrivent bientôt.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white/70 p-4">
                <p className="text-sm font-semibold text-gray-800">Statut</p>
                <p className="mt-1 text-gray-600">Connecté (démo localStorage)</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/70 p-4">
                <p className="text-sm font-semibold text-gray-800">Page</p>
                <p className="mt-1 text-gray-600">Votre espace client</p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                'Mes commandes',
                'Mes factures',
                'Mes projets',
                'Support & tickets',
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-dashed border-gray-200 bg-white/50 p-4"
                >
                  <p className="text-sm font-semibold text-gray-800">{label}</p>
                  <p className="mt-1 text-sm text-gray-600">Bientôt disponible</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/#hero"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 px-5 py-3 font-bold text-white hover:bg-primary-700 transition"
              >
                Retour au site
              </Link>
              <button
                type="button"
                onClick={() => {
                  clearSessionUser()
                  document.dispatchEvent(new CustomEvent('hra:auth-changed'))
                  navigate('/#hero')
                }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 font-bold text-gray-900 hover:bg-gray-50 transition"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account
