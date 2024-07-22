
import React, { ChangeEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

interface LoginProps {
    handleChangeScreen?: (page: string) => void
}
const Login: React.FC<LoginProps> = ({ handleChangeScreen }) => {
    const [formValue, setFormValue] = useState({ username: '', password: '' })
    const history = useHistory()
    const { login } = useAuth()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        login(formValue?.username, formValue?.password)
        history.push("/posts")
    }
    const handleNavigate = () => {
        history.push("/register")
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormValue((prevProps) => {
            return {
                ...prevProps,
                [event.target.id]: event.target.value
            }
        })
    }
    return (
        <>
            <h6 className="text-xs text-center text-stone-400">WELCOME BACK</h6>
            <h6 className="text-l text-center font-bold text-white mb-5">Log into your account</h6>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-2" htmlFor="username">
                        Email or Username
                    </label>
                    <input
                        className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                        type="text"
                        id="username"
                        placeholder="Enter your email or username"
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
                        placeholder="Enter your password"
                        onChange={handleChange}
                    />
                    <div className="text-right mt-2">
                        <a className="text-sm text-blue-500 hover:underline" href="#">
                            Forgot password?
                        </a>
                    </div>
                </div>
                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-200"
                    type="submit"
                >
                    Login now
                </button>
            </form>
            <div className="mt-4">
                <a className="text-sm text-gray-400 hover:text-white" onClick={handleChangeScreen ? () => handleChangeScreen('register') : handleNavigate}>
                    Not registered yet? <span className="text-blue-500">Register</span>
                </a>
            </div>
        </>
    )
}

export default Login
