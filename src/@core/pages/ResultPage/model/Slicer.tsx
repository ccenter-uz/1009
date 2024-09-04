import { create } from 'zustand'

const ResultStore = create(set => ({
  // VARS
  allorgs: [],
  allData: [],
  // SETTERS
  setAllData: (data: any) => set({ allData: data }),
  setAllorgs: (data: any) => set({ allorgs: data })
}))

export const useResultSlicer = () => {
  const { allorgs, allData, setAllData, setAllorgs } = ResultStore((state: any) => state)

  return {
    allorgs,
    setAllorgs,
    allData,
    setAllData
  }
}
