import dynamic from 'next/dynamic'

export const AddOrgAsync = dynamic(() => import('./ui'))
export { useAddorgSlicer } from './model/hook/useAddorgSlicer'
