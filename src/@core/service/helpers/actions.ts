'use server'
import { api } from '@/@core/utils/api'

// Login
/**
 @params (values) formData 
*/
export const Login = async (values: FormData) => {
  try {
    const body = {
      phone: values.get('phone'),
      password: values.get('password')
    }
    const res = await api.post('example/', body)
    res.status === 200 && res
  } catch (err) {
    console.log(err)
  }
}

// Registration
/**
 @params (values) formData 
*/
export const Regis = async (values: FormData) => {
  // try {
  //   const body = {
  //     fio: values.get('fio'),
  //     phone: values.get('phone'),
  //     password: values.get('password')
  //   }
  //   const res = await api.post('example/', body)
  //   if (res.status === 200) return res
  // } catch (err) {
  //   console.log(err)
  // }

  return true
}
