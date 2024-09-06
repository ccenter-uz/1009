import { create } from 'zustand'

const ResultStore = create(set => ({
  // VARS
  allorgs: [],
  allData: [],
  loading: true,
  // SETTERS
  setAllData: (data: any) => set({ allData: data }),
  setAllorgs: (data: any) => set({ allorgs: data }),
  setLoading: (data: any) => set({ loading: data })
}))

export const useResultSlicer = () => {
  const { allorgs, allData, setAllData, setAllorgs, setLoading, loading } = ResultStore((state: any) => state)

  return {
    allorgs,
    setAllorgs,
    allData,
    setAllData,
    loading,
    setLoading
  }
}
