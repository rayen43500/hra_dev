import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

type AuthMode = 'login' | 'signup'

type StoredUser = {
  name: string
  email: string
  password: string
}

type SessionUser = {
  name: string
  email: string
}

const STORAGE_USER_KEY = 'hra_auth_user'
const STORAGE_SESSION_KEY = 'hra_auth_session'

function readJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function writeJson(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getSessionUser(): SessionUser | null {
  return readJson<SessionUser>(STORAGE_SESSION_KEY)
}

export function clearSessionUser() {
  localStorage.removeItem(STORAGE_SESSION_KEY)
}

type AuthModalProps = {
  isOpen: boolean
  onClose: () => void
  initialMode?: AuthMode
  onAuthChange?: (user: SessionUser | null) => void
  redirectTo?: string | null
}

const AuthModal = (
  { isOpen, onClose, initialMode = 'login', onAuthChange, redirectTo = '/account' }: AuthModalProps,
) => {
  const navigate = useNavigate()
  const [mode, setMode] = useState<AuthMode>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const storedUser = useMemo(() => readJson<StoredUser>(STORAGE_USER_KEY), [])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return
    setError(null)
    setSuccess(null)
    setMode(initialMode)
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }, [isOpen, initialMode])

  const validateEmail = (value: string) => /.+@.+\..+/.test(value)

  const postAuthSuccess = (message: string, delayMs: number) => {
    setSuccess(message)
    document.dispatchEvent(new CustomEvent('hra:auth-changed'))
    setTimeout(() => {
      onClose()
      if (redirectTo) navigate(redirectTo)
    }, delayMs)
  }

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!validateEmail(email)) {
      setError('Email invalide.')
      return
    }

    const user = readJson<StoredUser>(STORAGE_USER_KEY)
    if (!user) {
      setError('Aucun compte trouvé. Créez un compte d’abord.')
      setMode('signup')
      return
    }

    if (user.email.toLowerCase() !== email.toLowerCase() || user.password !== password) {
      setError('Email ou mot de passe incorrect.')
      return
    }

    const session: SessionUser = { name: user.name, email: user.email }
    writeJson(STORAGE_SESSION_KEY, session)
    onAuthChange?.(session)
    postAuthSuccess('Connexion réussie.', 700)
  }

  const handleSignup = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (name.trim().length < 2) {
      setError('Nom trop court.')
      return
    }

    if (!validateEmail(email)) {
      setError('Email invalide.')
      return
    }

    if (password.length < 6) {
      setError('Mot de passe: 6 caractères minimum.')
      return
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.')
      return
    }

    const user: StoredUser = { name: name.trim(), email: email.trim(), password }
    writeJson(STORAGE_USER_KEY, user)

    const session: SessionUser = { name: user.name, email: user.email }
    writeJson(STORAGE_SESSION_KEY, session)
    onAuthChange?.(session)

    postAuthSuccess('Compte créé. Bienvenue !', 900)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={mode === 'login' ? 'Connexion' : 'Créer un compte'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 w-[min(92vw,480px)] -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: 'spring', bounce: 0.15, duration: 0.45 }}
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
              {/* Cute header */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50" />
              <div className="absolute -top-20 -right-24 h-56 w-56 rounded-full bg-secondary-200/50 blur-3xl" />
              <div className="absolute -bottom-20 -left-24 h-56 w-56 rounded-full bg-primary-200/40 blur-3xl" />

              <div className="relative p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                      {mode === 'login' ? 'Se connecter' : 'Créer un compte'}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {mode === 'login'
                        ? 'Accédez à votre espace en quelques secondes.'
                        : 'Créez votre compte et démarrez.'}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-2xl hover:bg-black/5 transition"
                    aria-label="Fermer"
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-700" />
                  </button>
                </div>

                {/* Tabs */}
                <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-white/70 p-1 border border-gray-100">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login')
                      setError(null)
                      setSuccess(null)
                    }}
                    className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                      mode === 'login'
                        ? 'bg-white shadow-sm text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Connexion
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup')
                      setError(null)
                      setSuccess(null)
                    }}
                    className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                      mode === 'signup'
                        ? 'bg-white shadow-sm text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Créer un compte
                  </button>
                </div>

                {/* Form */}
                <form className="mt-5 space-y-4" onSubmit={mode === 'login' ? handleLogin : handleSignup}>
                  {mode === 'signup' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700" htmlFor="auth-name">
                        Nom
                      </label>
                      <input
                        id="auth-name"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        autoComplete="name"
                        className="mt-2 w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-500"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="auth-email">
                      Email
                    </label>
                    <input
                      id="auth-email"
                      type="email"
                      value={email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      placeholder="nom@exemple.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="auth-password">
                      Mot de passe
                    </label>
                    <input
                      id="auth-password"
                      type="password"
                      value={password}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                      autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  {mode === 'signup' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700" htmlFor="auth-confirm">
                        Confirmer le mot de passe
                      </label>
                      <input
                        id="auth-confirm"
                        type="password"
                        value={confirmPassword}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                        autoComplete="new-password"
                        className="mt-2 w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-500"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  )}

                  {error && (
                    <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800 border border-red-100">
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-800 border border-green-100">
                      {success}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-secondary-500/25 hover:shadow-secondary-500/40 hover:from-secondary-600 hover:to-secondary-700 transition"
                  >
                    {mode === 'login' ? (
                      <>
                        <ArrowRightOnRectangleIcon className="h-5 w-5" />
                        Connexion
                      </>
                    ) : (
                      <>
                        <UserPlusIcon className="h-5 w-5" />
                        Créer mon compte
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    Mode démo: les identifiants sont enregistrés dans votre navigateur.
                    {storedUser ? ' (Un compte existe déjà sur cet appareil.)' : ''}
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AuthModal
