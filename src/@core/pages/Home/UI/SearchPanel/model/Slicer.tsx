import { create } from 'zustand'

const SearchPanelSlicer = create(set => ({
  // VARS
  searchedData: null,
  loading: true,

  // SETTERS
  setSearchedData: (data: any) => set({ searchedData: data }),
  setLoading: (loading: boolean) => set({ loading })
}))

export const useSearchPanelSlicer = () => {
  const { setSearchedData, searchedData, setLoading, loading } = SearchPanelSlicer((state: any) => state)

  return {
    setSearchedData,
    searchedData,
    setLoading,
    loading
  }
}
