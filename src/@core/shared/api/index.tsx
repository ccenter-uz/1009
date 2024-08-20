// export GETTERS
export {
  getRazdel,
  getPodrazdel,
  getServiceType,
  getPodrazdelByRazdel,
  getOneOrganization,
  getSavedOrganizations,
  getMyOrganizations,
  getUserInfo
} from './getters'

// export POSTS
export { postCreateOrg, postComment, postSavedOrg } from './posts'

// export DELETES
export { deleteSavedOrg, deleteOrganization } from './deletes'

// export PATCHES
export { postChangeSettingData, postChangeSettingPhone } from './patches'
