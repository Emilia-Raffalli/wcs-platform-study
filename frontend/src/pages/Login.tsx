import LoginForm from "../components/LoginForm"

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-10">
        <div className="mb-10">
          <div className="text-2xl font-bold text-indigo-600">🎓 EduPlatform</div>
        </div>

        <LoginForm/>

      </div>

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
