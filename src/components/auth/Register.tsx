
import React, { ChangeEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

interface LoginProps {
    handleChangeScreen?: (page: string) => void
}

const Login: React.FC<LoginProps> = ({ handleChangeScreen }) => {
  const [formValue, setFormValue] = useState({email:'', username: '', password: ''})
  const { register } = useAuth()
  const history = useHistory()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    register(formValue?.email, formValue?.username, formValue?.password)
    history.push("/posts")
  }
  const handleNavigate = () => {
    history.push("/login")
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevProps) => {
        return {...prevProps,
        [event.target.id]: event.target.value
        }
    })
  }

  return (
    <>
        <h2 className="text-xs text-center font-bold text-stone-400">SIGN UP</h2>
        <h3 className="text-lg text-center font-semibold text-white mb-6">Create an account to continue</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              type="text"
              id="username"
              placeholder="Choose a preferred username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              type="password"
              id="password"
              placeholder="Choose a strong password"
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-200"
            type="submit"
          >
            Continue
          </button>
        </form>
        <div className="mt-4">
          <a className="text-sm text-gray-400 hover:text-white" onClick={handleChangeScreen ? ()=>handleChangeScreen('login') : handleNavigate}>
            Already have an account? <span className="text-blue-500">Login</span>
          </a>
        </div>
        </>
  )
}

export default Login
