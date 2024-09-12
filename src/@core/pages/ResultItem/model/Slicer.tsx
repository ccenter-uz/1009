import { create } from 'zustand'

const ResultItemSlicer = create(set => ({
  // VARS
  resultItemData: [],
  loading: true,
  // SETTERS
  setResultItemData: (data: any) => set({ resultItemData: data }),
  setLoading: (data: boolean) => set({ loading: data })
}))

export const useResultItemSlicer = () => {
  const { resultItemData, setResultItemData, loading, setLoading } = ResultItemSlicer((state: any) => state)

  return {
    resultItemData,
    setResultItemData,
    loading,
    setLoading
  }
}
