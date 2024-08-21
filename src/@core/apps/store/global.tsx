'use client'
import { getUserInfo } from '@/@core/shared/api'
import { useEffect } from 'react'
import { create } from 'zustand'

const GlobalStore = create(set => ({
  userInfo: null,
  // SETTER
  setUserInfo: (val: any) => set({ userInfo: val }),
  // GETTER
  getUser: async () => {
    const res = await getUserInfo()

    if (!res) return null

    if (res?.status === 200) set({ userInfo: res?.data }), sessionStorage.setItem('userInfo', JSON.stringify(res?.data))
  }
}))

export const useGlobalStore = () => {
  const { userInfo, setUserInfo, getUser } = GlobalStore((state: any) => state)

  // SET-INITIAL-VALUES
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserInfo(sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo') as string) : null)
    }
  }, [])

  return { userInfo, setUserInfo, getUser }
}
