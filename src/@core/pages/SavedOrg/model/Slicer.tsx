import { getSavedOrganizations } from '@/@core/shared/api'
import { create } from 'zustand'

const SavedOrgSlicer = create(set => ({
  savedOrgData: [],
  loading: true,
  setSavedOrgData: (data: any) => set({ savedOrgData: data }),
  getSavedOrgData: async (page: number, pageSize: number) => {
    const res = await getSavedOrganizations(page, pageSize)

    if (!res) return null
    if (res?.status === 200) {
      set({ savedOrgData: res?.data?.result })
      set({ loading: false })

      return res?.data?.pagination
    }
  }
}))

export const useSavedOrgSlicer = () => {
  const { savedOrgData, setSavedOrgData, getSavedOrgData, loading } = SavedOrgSlicer((state: any) => state)

  return {
    savedOrgData,
    setSavedOrgData,
    getSavedOrgData,
    loading
  }
}
