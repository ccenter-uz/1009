// export GETTERS
export {
  getRazdel,
  getPodrazdel,
  getServiceType,
  getPodrazdelByRazdel,
  getOneOrganization,
  getSavedOrganizations,
  getMyOrganizations,
  getUserInfo,
  getAllOrganizations
} from './getters'

// export POSTS
export { postLogin, postRegis, postVerifyUserCode, postCreateOrg, postComment, postSavedOrg } from './posts'

// export DELETES
export { deleteSavedOrg, deleteOrganization } from './deletes'

// export PATCHES
export { patchChangeSettingData, patchChangeSettingPhone, patchPhoneChangeVerify, patchResendCode } from './patches'
