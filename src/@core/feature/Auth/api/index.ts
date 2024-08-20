import { api } from "@/@core/apps/utils/api";
import { Ilogin, Ipin, Iuser } from "../types";
import Cookies from 'js-cookie'

enum ENDPOINTS {
  checkNumber = '/Auth/user/verify-sms-code',
  login = '/Auth/user/sign-in',
  regis = '/Auth/user/register',
  resendChecknumber = '/Auth/resend-sms-code'
}

// CHECK-NUMBER
export const CheckNumberSend = async ({ pin, userId}: Ipin) => {
  try {
    const body = {
      smsCode: String(pin),
      userId
    }
    const res = await api.post(`${ENDPOINTS.checkNumber}`, body);

    if (!res) return null


    return res
  } catch (err) {
    console.log(err)

  }
}

// RESEND
export const ResendChecknumber = async (id:number|string) => {
  try {
    const res = await api.patch(`${ENDPOINTS.resendChecknumber}/${id}`)
    if (!res) return null
   
    return res
  } catch (err) {
    console.log(err)
  }
}

// SIGN-IN
export const Login = async (values: Ilogin) => {
  try {
    const body = values
    const res = await api.post(`${ENDPOINTS.login}`, body)
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

// SIGN-UP
export const Regis = async ({full_name, number, password}: Iuser) => {
  try {
    const body = {
      full_name,
      role:"user",
      number,
      password,
    }
    const res = await api.post(`${ENDPOINTS.regis}`, body)

    if (!res) return null

    return res
  } catch (err) {
    console.log(err)

  }
}