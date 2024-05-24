'use server'
import { api } from '@/@core/apps/utils/api'
import { Ilogin } from '../types'
import { cookies } from 'next/headers'

// Login
export const Login = async (values: Ilogin) => {
  try {
    const body = values
    const res = await api.post('/Auth/user/signIn', body)
    if (res.status === 200) {
      cookies().set('access_token', res.data.token, { secure: true })

      return {
        status: 200,
        message: res.data.message
      }
    }
  } catch (err) {
    console.log(err)
  }
}
