
'use client'
import { IconArrowRight, IconEye, IconEyeOff, IconLock, IconMail, IconUser } from "@tabler/icons-react"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { useFormState } from "react-dom"

 

export default function Home() {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState("signin")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
   
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md">
        {/* Tabs */}
        <div className="mb-6 grid w-full grid-cols-2 overflow-hidden rounded-lg bg-white p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("signin")}
            className={`py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === "signin"
                ? "rounded-md bg-blue-500 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === "signup"
                ? "rounded-md bg-blue-500 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Cadastrar
          </button>
        </div>
 
        {activeTab === "signin" && (
          <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="space-y-1 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Bem-vindo de volta</h2>
                <p className="text-sm text-gray-500">Entre com seu email e senha para acessar sua conta</p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <IconMail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      placeholder="seu@email.com"
                      type="email"
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Senha
                    </label>
                    <Link href="#" className="text-xs text-blue-500 hover:text-blue-600 transition-colors">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <div className="relative">
                    <IconLock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                onClick={() => {signIn('credentials', {
                  username,
                  password,
                  callbackUrl: '/dashboard/users',
                  redirect: true,
                })}}
              >
                Entrar <IconArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div> 
          </div>
        )}

        {/* Sign Up Form */}
        {activeTab === "signup" && (
          <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="space-y-1 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Criar uma conta</h2>
                <p className="text-sm text-gray-500">Preencha os dados abaixo para se cadastrar</p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome completo
                  </label>
                  <div className="relative">
                    <IconUser className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="name"
                      placeholder="Seu nome completo"
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <IconMail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="signup-email"
                      placeholder="seu@email.com"
                      type="email"
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <div className="relative">
                    <IconLock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirmar senha
                  </label>
                  <div className="relative">
                    <IconLock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="text-xs text-gray-500">
                      Eu concordo com os{" "}
                      <Link href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                        Termos de Serviço
                      </Link>{" "}
                      e{" "}
                      <Link href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                        Política de Privacidade
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                
              >
                Cadastrar <IconArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
