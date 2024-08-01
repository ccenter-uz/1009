'use client'
import { create } from 'zustand'

export const useGlobalStore = create(set => ({
  userInfo: null,
  setUserInfo: (val: any) => set({ userInfo: val })
}))
