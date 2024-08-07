import { api } from "@/@core/apps/utils/api"

enum ENDPOINTS {
    postCreateOrg = '/organization/create',
}

export const postCreateOrg = async (data:any) => {
    try {
        const response = await api.post(`${ENDPOINTS.postCreateOrg}`, data)

        return response
    } catch (err) {
        console.log(err)
    }
}