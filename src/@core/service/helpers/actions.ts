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
