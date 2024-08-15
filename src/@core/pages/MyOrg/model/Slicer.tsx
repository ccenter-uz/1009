import { getMyOrganizations } from '@/@core/shared/api'
import { create } from 'zustand'

const myOrgSlicer = create(set => ({
  myOrgData: [],
  setMyOrgData: (data: any) => set({ myOrgData: data }),
  getMyOrgData: async (page: number, pageSize: number) => {
    const res = await getMyOrganizations(page, pageSize)

    if (!res) return null
    if (res?.status === 200) {
      set({ myOrgData: res?.data?.result })

      return res?.data?.pagination
    }
  }
}))

export const useMyorgSlicer = () => {
  const { myOrgData, setMyOrgData, getMyOrgData } = myOrgSlicer((state: any) => state)

  return {
    myOrgData,
    setMyOrgData,
    getMyOrgData
  }
}
