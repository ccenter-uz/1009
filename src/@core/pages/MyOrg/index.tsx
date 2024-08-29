import LoaderUI from '@/@core/shared/UI/LoadingUI'
import dynamic from 'next/dynamic'

export const MyOrgsAsync = dynamic(() => import('./ui').then(res => res.MyOrg), {
  loading: () => <LoaderUI />
})
