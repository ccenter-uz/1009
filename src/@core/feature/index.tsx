import dynamic from 'next/dynamic'

// BOOKMARK
export const BookmarkOrgsAsync = dynamic(() => import('./BookmarkOrgs/ui').then(res => res.BookmarkOrgs))

// DELETEORG
export const DeleteOrgAsync = dynamic(() => import('./DeleteOrg/ui').then(res => res.DeleteOrg))
