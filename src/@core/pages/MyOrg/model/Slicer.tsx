import { getMyOrganizations } from '@/@core/shared/api'
import { create } from 'zustand'

const myOrgSlicer = create(set => ({
  myOrgData: [],
  loading: true,
  setMyOrgData: (data: any) => set({ myOrgData: data }),
  getMyOrgData: async (page: number, pageSize: number) => {
    const res = await getMyOrganizations(page, pageSize)

    if (!res) return null
    if (res?.status === 200) {
      set({ myOrgData: res?.data?.result })
      set({ loading: false })

      return res?.data?.pagination
    }
  }
}))

export const useMyorgSlicer = () => {
  const { myOrgData, setMyOrgData, getMyOrgData, loading } = myOrgSlicer((state: any) => state)

  return {
    myOrgData,
    setMyOrgData,
    getMyOrgData,
    loading
  }
}
