// 'use server'

import { api } from '@/@core/utils/api'

export const getUserForOperator = async (query: {
  search?: string | null
  current: string | number
  pageSize: number | string
}) => {
  try {
    const res = await api.get('users/all', { params:query })

    return res.data
  } catch (err) {
    console.log(err, 'err')
  }finally{
    return{
      status:200
    }
  }
}
