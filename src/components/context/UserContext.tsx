'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'

interface UserContextType {
  user: any
  setUser: (user: any) => void
  logout: () => void
}

// Explicitly define the type for children
interface UserProviderProps {
  children: ReactNode
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Load user data from local storage
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    // Add additional logout logic here, such as clearing cookies or tokens
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  // console.log(context)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
