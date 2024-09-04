import dynamic from 'next/dynamic'
import LoaderUI from '../shared/UI/LoadingUI'

// BOOKMARK
export const BookmarkOrgsAsync = dynamic(() => import('./BookmarkOrgs/ui').then(res => res.BookmarkOrgs))

// DELETEORG
export const DeleteOrgAsync = dynamic(() => import('./DeleteOrg/ui').then(res => res.DeleteOrg))

// POPULARSEARCH
export const PopularSearchAsync = dynamic(() => import('./PopularSearch/UI'), {
  ssr: false,
  loading: () => <LoaderUI />
})

// ASIDEFILTERPAGE
export const AsideResultPageAsync = dynamic(() => import('./AsideResultPage/ui').then(res => res.AsideResultPage))
