import { create } from 'zustand'

const SearchPanelSlicer = create(set => ({
  // VARS
  searchedData: null,

  // SETTERS
  setSearchedData: (data: any) => set({ searchedData: data })
}))

export const useSearchPanelSlicer = () => {
  const { setSearchedData, searchedData } = SearchPanelSlicer((state: any) => state)

  return {
    setSearchedData,
    searchedData
  }
}
