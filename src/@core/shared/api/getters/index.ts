import { api } from '@/@core/apps/utils/api'


enum ENDPOINTS {
  razdelAll = '/OrganizationCategories/all',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

// RAZDEL
export const getRazdel = async () => {
  try {
    const response = await api.get(`${ENDPOINTS.razdelAll}`)

    return response
  } catch (err) {
    console.log(err)
  }
}
