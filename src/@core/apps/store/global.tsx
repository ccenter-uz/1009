'use client'
import { getUserInfo } from '@/@core/shared/api'
import { create } from 'zustand'

const GlobalStore = create(set => ({
  userInfo: null,
  // SETTER
  setUserInfo: (val: any) => set({ userInfo: val }),
  // GETTER
  getUser: async () => {
    const res = await getUserInfo()

    if (!res) return null

    if (res?.status === 200) set({ userInfo: res?.data })
  }
}))

export const useGlobalStore = () => {
  const { userInfo, setUserInfo, getUser } = GlobalStore((state: any) => state)

  return { userInfo, setUserInfo, getUser }
}
