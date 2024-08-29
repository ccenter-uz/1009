import LoaderUI from '@/@core/shared/UI/LoadingUI'
import dynamic from 'next/dynamic'

export const SavedOrgsAsync = dynamic(() => import('./ui').then(res => res.SavedOrgs), { loading: () => <LoaderUI /> })
export { useSavedOrgSlicer } from './model/Slicer'
