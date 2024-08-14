import { api } from "@/@core/apps/utils/api";

enum ENDPOINTS {
    deleteSavedOrg = '/SavedOrganization/delete',
    deleteOrganization = '/organization/delete'
}

// SAVED-ORG
export const deleteSavedOrg = async (id: string) => {
    try {
        const response = await api.delete(`${ENDPOINTS.deleteSavedOrg}/${id}`)

        return response
    } catch (err) {
        console.log(err)
    }
}

// ORGANIZATION-DELETE
export const deleteOrganization = async (id: string) => {
    try {
        const response = await api.delete(`${ENDPOINTS.deleteOrganization}/${id}`)

        return response
    } catch (err) {
        console.log(err)
    }
}