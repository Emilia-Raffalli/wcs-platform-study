
const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Partie gauche : formulaire */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-10">
        <div className="mb-10">
          <div className="text-2xl font-bold text-indigo-600">🎓 EduPlatform</div>
        </div>
        <form className="w-full max-w-sm">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Mot de passe</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Se connecter
          </button>
        </form>
      </div>

      {/* Partie droite : image / visuel */}
      <div className="w-1/2 bg-indigo-50 flex items-center justify-center">
        <div className="text-indigo-400 text-xl font-semibold">
          {/* Visuel temporaire */}
          <p>📚 Bienvenue sur votre plateforme étudiante</p>
        </div>
      </div>
    </div>
  )
}

export default Login
