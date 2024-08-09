import { api } from '@/@core/apps/utils/api'


enum ENDPOINTS {
  razdelAll = '/OrganizationCategories/all',
  podrazdelAll='/SubCategoryOrganization/all',
  podrazdelOneByRazdel = '/OrganizationCategories/one',
  serviceType ="/Section/all",
  organizationById = '/organization/one',
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

// PODRAZDEL
export const getPodrazdel =async()=>{
  try {
    const response = await api.get(`${ENDPOINTS.podrazdelAll}`)

    return response
  } catch (err) {
    console.log(err)
  }
}

// PODRAZDEL-BY-RAZDEL
export const getPodrazdelByRazdel = async (id: string) => {
  try {
    const response = await api.get(`${ENDPOINTS.podrazdelOneByRazdel}/${id}`)

    return response
  } catch (err) {
    console.log(err)
  }
}

// SERVICE-TYPE 
export const getServiceType = async () => {
  try {
    const response = await api.get(`${ENDPOINTS.serviceType}`)

    return response
  } catch (err) {
    console.log(err)
  }
}

// GET-ONE-ORGANIZATION
export const getOneOrganization = async (id: string) => {
  try {
    const response = await api.get(`${ENDPOINTS.organizationById}/${id}`)

    return response
  } catch (err) {
    console.log(err)
  }
}