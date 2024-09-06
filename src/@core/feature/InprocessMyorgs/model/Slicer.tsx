import { getMyOrgsInProcess } from '@/@core/shared/api'
import { create } from 'zustand'

const InProcessMyorgsSlicer = create(set => ({
  // VARS
  inprocessMyorgsData: [],
  loading: true,
  // SETTERS
  setInprocessMyorgsData: (inprocessMyorgsData: any) => set({ inprocessMyorgsData }),
  // GETTERS
  GET: async () => {
    const res = await getMyOrgsInProcess()
    if (res?.status === 200) {
      set({ inprocessMyorgsData: res?.data?.result })
      set({ loading: false })
    }
  }
}))

export const useInProcessMyorgs = () => {
  const { inprocessMyorgsData, setInprocessMyorgsData, GET, loading } = InProcessMyorgsSlicer((state: any) => state)

  return { inprocessMyorgsData, setInprocessMyorgsData, GET, loading }
}
