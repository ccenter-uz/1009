// 'use server'

import { api } from '@/@core/utils/api'
import { IfilterType } from './[id]/_components/TransactionPanel'

export const getUserForModerator = async (query: {
  search?: string | null
  current: string | number
  pageSize: number | string
}) => {
  try {
    const res = await api.get('users/all', { params: query })

    return res.data
  } catch (err) {
    console.log(err, 'err')
  } finally {
    return {
      status: 200
    }
  }
}

export const getUserTransactions = async (id: string, query: IfilterType) => {
  try {
    const res = await api.get(`user/transactions/${id}`, { params: query })

    return res.data
  } catch (err) {
    console.log(err, 'err')
  } finally {
    return {
      status: 200
    }
  }
}
