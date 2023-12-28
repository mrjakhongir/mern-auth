import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json()
    setLoading(false)
    if (data.success === false) {
      setError(true)
      return
    }
    navigate('/')
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          autoComplete="off"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          autoComplete="off"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <p className="mt-5">
        Do not have an account?
        <Link className="text-blue-500" to="/sign-up">
          Sign Up
        </Link>
      </p>
      <p className="text-red-700 mt-5">{error && 'Something went wrong'}</p>
    </div>
  )
}
