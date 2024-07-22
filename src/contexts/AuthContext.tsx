import React, { createContext, useContext, useState } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  register: (email: string, username: string, password: string) => void
}
interface Props {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  register: () => {},
})
export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (email: string, password: string) => {
    setIsAuthenticated(true)
  }

  const register = (email: string, username: string, password: string) => {
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register }}>
      {children}
    </AuthContext.Provider>
  )
}
