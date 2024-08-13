import dynamic from 'next/dynamic'

// BOOKMARK
export const BookmarkOrgsAsync = dynamic(() => import('./BookmarkOrgs/ui').then(res => res.BookmarkOrgs))
