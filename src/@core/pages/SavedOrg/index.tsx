import dynamic from 'next/dynamic'

export const SavedOrgsAsync = dynamic(() => import('./ui').then(res => res.SavedOrgs))
export { useSavedOrgSlicer } from './model/Slicer'
