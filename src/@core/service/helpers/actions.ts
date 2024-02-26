'use server'
import { api } from '@/@core/utils/api'
import { Ilogin, Ipin, Iuser } from '../types/types'
import { cookies } from 'next/headers'

// Login
export const Login = async (values: Ilogin) => {
  try {
    const body = values
    const res = await api.post('/Auth/user/signIn', body)
    if (res.status === 200) {
      cookies().set('access_token', res.data.token)

      return {
        status: 200,
        message: res.data.message
      }
    }
  } catch (err) {
    console.log(err)
  }
}

// Registration
export const Regis = async (values: Iuser) => {
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

// User-settings
export const UserSettingAction = async (values: string) => {
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

export const UserSettingPhoneAction = async (values: string) => {
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
