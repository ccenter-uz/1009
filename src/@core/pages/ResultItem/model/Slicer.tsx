import { create } from 'zustand'

const ResultItemSlicer = create(set => ({
  resultItemData: [],
  setResultItemData: (data: any) => set({ resultItemData: data })
}))

export const useResultItemSlicer = () => {
  const { resultItemData, setResultItemData } = ResultItemSlicer((state: any) => state)

  return {
    resultItemData,
    setResultItemData
  }
}
