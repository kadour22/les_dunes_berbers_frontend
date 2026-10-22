import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BASE_URL = "http://127.0.0.1:8000";

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      navigate('/reservation')
    }
  }, [])

  const HandleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/token/`)
      localStorage.setItem('access_token', res.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)
      navigate('/reservation')
    } catch (error) {
      console.log("eeror")
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-[-180px] left-[-180px] w-[400px] h-[400px] bg-lime-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-180px] right-[-180px] w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />

      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 text-lime-400/20 text-6xl font-serif">
        ⵣ
      </div>

      <div className="absolute bottom-10 right-10 text-lime-400/20 text-6xl font-serif">
        ⵣ
      </div>

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-[#141414] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-10">

        {/* LEFT SIDE */}
        <div className="hidden md:flex relative flex-col justify-between p-12 bg-gradient-to-br from-[#191919] to-[#0f0f0f]">

          <div>
            <div className="flex items-center gap-3 mb-16">
              <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center">
                <span className="text-black text-2xl font-bold">ⵣ</span>
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-widest">
                  LES DUNES
                </h1>
                <p className="text-xs tracking-[0.35em] text-lime-400">
                  BERBERS
                </p>
              </div>
            </div>

            <p className="text-lime-400 text-sm tracking-[0.3em] uppercase mb-4">
              Admin Portal
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Welcome back
              <span className="text-lime-400">.</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-sm leading-relaxed">
              Manage your café, reservations and menu from one elegant
              dashboard.
            </p>
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-lime-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Since 2026
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 sm:p-12 md:p-14 flex flex-col justify-center">

          {/* Mobile Logo */}
          <div className="md:hidden flex items-center gap-3 mb-12">
            <div className="w-11 h-11 rounded-full bg-lime-400 flex items-center justify-center">
              <span className="text-black text-xl font-bold">ⵣ</span>
            </div>

            <div>
              <h1 className="font-bold tracking-widest">
                LES DUNES
              </h1>
              <p className="text-xs tracking-[0.3em] text-lime-400">
                BERBERS
              </p>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-gray-500 text-sm mb-2">
              Admin access
            </p>

            <h2 className="text-3xl font-bold">
              Sign in
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Enter your credentials to continue.
            </p>
          </div>

          <form
            className="flex flex-col gap-5"
            onSubmit={HandleLogin}
          >

            {/* Username */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                className="w-full bg-[#1b1b1b] border border-white/10 text-white px-5 py-4 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/10"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-[#1b1b1b] border border-white/10 text-white px-5 py-4 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/10"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="bg-lime-400 hover:bg-lime-300 text-black py-4 rounded-xl font-bold mt-3 flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] disabled:opacity-70"
              onClick={HandleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>

                  Logging in...
                </>
              ) : (
                <>
                  Log in
                  <span className="text-lg">→</span>
                </>
              )}
            </button>

          </form>

          <div className="mt-10 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-600">
              Les Dunes Berbers · Admin Portal
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
