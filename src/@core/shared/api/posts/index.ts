import { api } from '@/@core/apps/utils/api'
import { Ilogin, Ipin, Iuser } from '@/@core/feature/Auth/types'
import Cookies from 'js-cookie'

enum ENDPOINTS {
  login = '/Auth/user/sign-in',
  regis = '/Auth/user/register',
  postCreateOrg = '/organization/create',
  postComment = '/CommentAndRate/create',
  postSavedOrg = '/SavedOrganization/create',
  verifyUserCode = '/Auth/user/verify-sms-code'
}
// SIGN-IN
export const postLogin = async (values: Ilogin) => {
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
export const postRegis = async ({ full_name, number, password }: Iuser) => {
  try {
    const body = {
      full_name,
      role: 'user',
      number,
      password
    }
    const res = await api.post(`${ENDPOINTS.regis}`, body)

    if (!res) return null

    return res
  } catch (err) {
    console.log(err)
  }
}

// CHECK-NUMBER
export const postVerifyUserCode = async ({ pin, userId }: Ipin) => {
  try {
    const body = {
      smsCode: String(pin),
      userId
    }
    const res = await api.post(`${ENDPOINTS.verifyUserCode}`, body)

    if (!res) return null

    return res
  } catch (err) {
    console.log(err)
  }
}

// CREATE-ORG
export const postCreateOrg = async (data: any) => {
  try {
    const response = await api.post(`${ENDPOINTS.postCreateOrg}`, data)

    return response
  } catch (err) {
    console.log(err)
  }
}

// COMMENT
export const postComment = async (data: { rate: number | string; organization_id: string; comment: string }) => {
  try {
    const response = await api.post(`${ENDPOINTS.postComment}`, data)

    return response
  } catch (err) {
    console.log(err)
  }
}

// CREATE-SAVED
export const postSavedOrg = async (data: { organization_id: string }) => {
  try {
    const response = await api.post(`${ENDPOINTS.postSavedOrg}`, data)

    return response
  } catch (err) {
    console.log(err)
  }
}
