'use client'
import { createContext } from 'react'
import { Opportunity } from './opportunitiesRecord'

const Main = createContext()

const MainContext = ({ children }) => {
  return (
    <Main.Provider value={[]}>
      <Opportunity>{children}</Opportunity>
    </Main.Provider>
  )
}

export { MainContext }
