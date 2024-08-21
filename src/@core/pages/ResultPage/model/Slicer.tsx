import { create } from 'zustand'

const ResultStore = create(set => ({
  allorgs: [],
  setAllorgs: (data: any) => set({ allorgs: data })
}))

export const useResultSlicer = () => {
  const { allorgs, setAllorgs } = ResultStore((state: any) => state)

  return {
    allorgs,
    setAllorgs
  }
}
