import { api } from "@/@core/apps/utils/api"

enum ENDPOINTS {
  changeData = '/Users/update-user',
  changePhone = '/Auth/update-number',
  verifyPin='/Auth/update-number/verify-sms-code',
  resendCode ='/Auth/resend-sms-code'
}


// SETTING-CHANGE-DATA
export const patchChangeSettingData = async (id: number | string, body: FormData) => {
  try {
    const res = await api.patch(`${ENDPOINTS.changeData}/${id}`, body)
    
    if(!res) return null;

    return res
  } catch (err) {
    console.error(err)
  }
}

// SETTING-CHANGE-PHONE
export const patchChangeSettingPhone = async (body: string) => {
  try {
    const res = await api.patch(`${ENDPOINTS.changePhone}`, body)
  
    if(!res) return null;

    return res
  } catch (err) {
    console.error(err)
  }
}

// SETTING-CHANGE-PHONE-VERIFY
export const patchPhoneChangeVerify =async(body:{number:string,smsCode:string})=>{
  try{
    const res = await api.patch(`${ENDPOINTS.verifyPin}`, body)
    if(!res) return null;
    
    return res
  }catch(err){
    console.error(err)
  }
}

// RESEND-CODE
export const patchResendCode = async (id: number | string) => {
  try {
    const res = await api.patch(`${ENDPOINTS.resendCode}/${id}`)
    if (!res) return null
 
    return res
  } catch (err) {
    console.log(err)
  }
}