import { create } from 'zustand'

const myOrgSlicer = create(set => ({
  myOrgData: [],
  setMyOrgData: (data: any) => set({ myOrgData: data })
}))

export const useMyorgSlicer = () => {
  const { myOrgData, setMyOrgData } = myOrgSlicer((state: any) => state)

  return {
    myOrgData,
    setMyOrgData
  }
}
