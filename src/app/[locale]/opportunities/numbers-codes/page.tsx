import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { FC } from 'react'

type Props = {}

const NumbersCodes: FC<Props> = props => {
  const breadcrumblinks = [
    { id: 0, title: 'Возможности' },
    { id: 1, title: 'Номера и коды' },
  ]

  return (
    <main id='NumbersCodes' aria-current='page'>
      <BreadCrumb item={breadcrumblinks} />
    </main>
  )
}
export default NumbersCodes
