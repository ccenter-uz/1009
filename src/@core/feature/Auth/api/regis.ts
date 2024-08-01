'use server'
import { api } from '@/@core/apps/utils/api'
import { Iuser } from '../types'

// Registration
export const Regis = async (values: Iuser) => {
  try {
    return {
      status: 200,
      message: 'Success'
    }
    // const body = values
    // // const res = await api.post('example/', body)
    // if (res.status === 200)
    //   return {
    //     status: 200,
    //     message: 'Success'
    //   }
  } catch (err) {
    console.log(err)

    return { status: 400, message: err }
  }
}
