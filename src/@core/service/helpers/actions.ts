'use server'
import { api } from '@/@core/utils/api'
import { Ilogin, Ipin, Iuser } from '../types/types'

// Login
/**
 @params (values) {phone:string,password:string} 
*/
export const Login = async (values: Ilogin) => {
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

// Registration
/**
 @params (values) object {fio:string,phone:string,password:string,confirm_password:string} 
*/
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
/**
 * @parmas (values) string
 */

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


// DialogEntertainmentLinks
/**
 * @parmas (values) string
 */
export const DialogEntertainmentLinksAction =async (values:string)=>{
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
/**
 * @parmas (values) string
 */
export const UserSettingAction =async (values:string)=>{
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

/**
 * @parmas (values) string
 */
export const UserSettingPhoneAction =async (values:string)=>{
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
