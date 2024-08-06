import Cookies from 'js-cookie'
import { api } from '@/@core/apps/utils/api'
import { Ilogin } from '../types'

// Login
export const Login = async (values: Ilogin) => {
  try {
    const body = values
    const res = await api.post('/Auth/user/sign-in', body)
    if (res.status === 200) {
      Cookies.set('access_token', res.data.token, { secure: true })

      return {
        status: 200,
        message: res.data.message
      }
    }
  } catch (err) {
    console.log(err)
  }
}
