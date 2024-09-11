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
  myorgsInprocess='/organization/my-organization/delete-or-update',
  allOrgs ='/organization/all',
 segments ='/segment/all'
}

export const getAllOrganizations=async(params:any)=>{
  try {
    const response = await api.get(`${ENDPOINTS.allOrgs}`,{params})
    if(!response) return null;

    return response
  } catch (err) {
    console.error(err)
  }
}

// USER-INFO
export const getUserInfo = async () => {
  try {
    const response = await api.get(`${ENDPOINTS.me}`)

    return response
  } catch (err) {
    console.error(err)
  }
}

// RAZDEL
export const getRazdel = async (params:{all:boolean} | {page:number,pageSize:number,search:string}) => {
  try {
    const response = await api.get(`${ENDPOINTS.razdelAll}`,{params})

    return response
  } catch (err) {
    console.error(err)
  }
}

// PODRAZDEL
export const getPodrazdel =async(params:{all:boolean} | {page:number,pageSize:number,search:string})=>{
  try {
    const response = await api.get(`${ENDPOINTS.podrazdelAll}`,{params})

    return response
  } catch (err) {
    console.error(err)
  }
}

// PODRAZDEL-BY-RAZDEL
export const getPodrazdelByRazdel = async (id: string) => {
  try {
    const response = await api.get(`${ENDPOINTS.podrazdelOneByRazdel}/${id}`)

    return response
  } catch (err) {
    console.error(err)
  }
}

// SERVICE-TYPE 
export const getServiceType = async (params:{all:boolean} | {page:number,pageSize:number,search:string}) => {
  try {
    const response = await api.get(`${ENDPOINTS.serviceType}`,{params})

    return response
  } catch (err) {
    console.error(err)
  }
}

// GET-ONE-ORGANIZATION
export const getOneOrganization = async (id: string) => {
  try {
    const response = await api.get(`${ENDPOINTS.organizationById}/${id}`)

    return response
  } catch (err) {
    console.error(err)
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
    console.error(err)
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
    console.error(err)
  }
}

// GET-MY-ORGS-IN-PROCESS
export const getMyOrgsInProcess = async () => {
  try {
    const response = await api.get(`${ENDPOINTS.myorgsInprocess}`)

    return response
  } catch (err) {
    console.error(err)
  }
}

// GET-SEGMENTS
export const getSegments = async (params:{all:boolean} | {page:number,pageSize:number,search:string}) => {
  try {
    const response = await api.get(`${ENDPOINTS.segments}`,{params}) 

    return response
  } catch (err) {
    console.error(err)
  }
}