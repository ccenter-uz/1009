'use client'
import { getUserInfo } from '@/@core/shared/api'
import { useEffect } from 'react'
import { create } from 'zustand'
import Cookies from 'js-cookie'

const GlobalStore = create(set => ({
  userInfo: null,
  // SETTER
  setUserInfo: (val: any) => set({ userInfo: val }),
  // GETTER
  getUser: async () => {
    const res = await getUserInfo()

    if (!res) return null

    if (res?.status === 200) set({ userInfo: res?.data }), Cookies.set('userInfo', JSON.stringify(res?.data))
  }
}))

export const useGlobalStore = () => {
  const { userInfo, setUserInfo, getUser } = GlobalStore((state: any) => state)

  // SET-INITIAL-VALUES
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (Cookies.get('userInfo')) {
        setUserInfo(JSON.parse(Cookies.get('userInfo') as string))
      } else {
        Cookies.remove('userInfo'), setUserInfo(null), Cookies.remove('access_token')
      }
    }
  }, [])

  return { userInfo, setUserInfo, getUser }
}
