'use client'
import { createContext } from 'react'

export const Main = createContext()

const MainContext = ({ children }) => {
  return <Main.Provider value={[]}>{children}</Main.Provider>
}

export { MainContext }
