import { createContext, useContext, useState } from 'react'

export const OpportunitiesContext = createContext()

export const Opportunity = ({ children }) => {
  const [record, setRecord] = useState(null)

  return <OpportunitiesContext.Provider value={[record, setRecord]}>{children}</OpportunitiesContext.Provider>
}

export const useOpportunityRecord = () => {
  const [record, setRecord] = useContext(OpportunitiesContext)

  return {
    record,
    setRecord
  }
}
