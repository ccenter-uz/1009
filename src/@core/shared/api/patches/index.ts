import { api } from "@/@core/apps/utils/api"

enum ENDPOINTS {
  changeData = '/Users/update-user',
  changePhone = '/Auth/update-number'
}


// SETTING-CHANGE-DATA
export const postChangeSettingData = async (id: number | string, body: FormData) => {
  try {
    const res = await api.patch(`${ENDPOINTS.changeData}/${id}`, body)
    
    if(!res) return null;

    return res
  } catch (err) {
    console.log(err)
  }
}

// SETTING-CHANGE-PHONE
export const postChangeSettingPhone = async (values: string) => {
  try {
    const body = values
    const res = await api.patch(`${ENDPOINTS.changePhone}`, body)
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
