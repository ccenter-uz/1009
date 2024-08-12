import { create } from 'zustand'

const SavedOrgSlicer = create(set => ({
  savedOrgData: [],
  setSavedOrgData: (data: any) => set({ savedOrgData: data })
}))

export const useSavedOrgSlicer = () => {
  const { savedOrgData, setSavedOrgData } = SavedOrgSlicer((state: any) => state)

  return {
    savedOrgData,
    setSavedOrgData
  }
}
