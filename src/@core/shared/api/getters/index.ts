import { api } from '@/@core/apps/utils/api'


enum ENDPOINTS {
  me = '/Users/get-my-data',
  razdelAll = '/OrganizationCategories/all',
  podrazdelAll='/SubCategoryOrganization/all',
  podrazdelOneByRazdel = '/OrganizationCategories/one',
  serviceType ="/Section/all",
  organizationById = '/organization/one',
  savedOrgAll = '/SavedOrganization/all',
  myorgsAll = '/organization/my-organization',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

// USER-INFO
export const getUserInfo = async () => {
  try {
    const response = await api.get(`${ENDPOINTS.me}`)

    return response
  } catch (err) {
    console.log(err)
  }
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

// GET-SAVED-ORGANIZATIONS
export const getSavedOrganizations = async (page:number,pageSize:number) => {
  try {
    const response = await api.get(`${ENDPOINTS.savedOrgAll}`, {
      params: {
        page,
        pageSize
      }
    })

    return response
  } catch (err) {
    console.log(err)
  }
}

// GET-MY-ORGANIZATIONS
export const getMyOrganizations = async (page:number,pageSize:number) => {
  try {
    const response = await api.get(`${ENDPOINTS.myorgsAll}`,{
      params: {
        page,
        pageSize
      }
    })

    return response
  } catch (err) {
    console.log(err)
  }
}