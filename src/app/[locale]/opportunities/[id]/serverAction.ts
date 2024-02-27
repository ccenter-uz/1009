'use server'

import { api } from '@/@core/utils/api'

// GET-CAT
export const getCat = async () => {
  try {
    const res = await api.get('EntertainmentCategories/all')

    return res.data
  } catch (err) {
    console.log(err, 'err')
  }
}

// GET-DATA-BY-ID
export const getDataByid = async (id: number) => {
  try {
    const res = await api.get(`EntertainmentCategories/one/${id}`)

    return res.data
  } catch (err) {
    console.log(err, 'err')
  }
}

// CONTENT
// GET
export const getData = async (url: string) => {
  try {
    const res = await api.get(`${url}/all`)
    if (!res) return null

    return res.data
  } catch (err) {
    console.log(err, 'err')
  }
}
