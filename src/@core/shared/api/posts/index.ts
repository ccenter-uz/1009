import { api } from "@/@core/apps/utils/api"

enum ENDPOINTS {
    postCreateOrg = '/organization/create',
    postComment ='/CommentAndRate/create',
    postSavedOrg='/SavedOrganization/create'
}

// CREATE-ORG
export const postCreateOrg = async (data:any) => {
    try {
        const response = await api.post(`${ENDPOINTS.postCreateOrg}`, data)

        return response
    } catch (err) {
        console.log(err)
    }
}

// COMMENT
export const postComment = async (data:{rate:number |string, organization_id:string,comment:string}) => {
    try {
        const response = await api.post(`${ENDPOINTS.postComment}`, data)

        return response
    } catch (err) {
        console.log(err)
    }
}

// CREATE-SAVED
export const postSavedOrg = async (data:{organization_id:string}) => {
    try {
        const response = await api.post(`${ENDPOINTS.postSavedOrg}`, data)

        return response
    } catch (err) {
        console.log(err)
    }
}