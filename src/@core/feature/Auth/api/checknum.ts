'use server'
import { api } from '@/@core/apps/utils/api'
import { Ipin } from '../types'

// checkNumber
export const CheckNumberSend = async (values: Ipin) => {
  try {
    const body = values
    const res = await api.post('example/', body)
    if (res.status === 200)
      return {
        status: 200,
        message: 'Success'
      }
  } catch (err) {
    console.log(err)
  } finally {
    return {
      status: 200,
      message: 'Success'
    }
  }
}
