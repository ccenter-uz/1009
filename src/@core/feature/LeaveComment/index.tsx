import dynamic from 'next/dynamic'

export const LeaveCommentAsync = dynamic(() => import('./ui').then(m => m.LeaveComment))
export { useCommentSlicer } from './model/Slicer'
