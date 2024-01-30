import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { FC } from 'react'

type Props = {}

const NeedToKnow: FC<Props> = props => {
  const breadcrumblinks = [
    { id: 0, title: 'Возможности' },
    { id: 1, title: 'Это надо знать' },
  ]

  return (
    <main id='need-to-know' aria-current='page'>
      <BreadCrumb item={breadcrumblinks} />
    </main>
  )
}
export default NeedToKnow
