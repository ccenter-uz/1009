import { FC } from 'react'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'

type Props = {}

const Communal: FC<Props> = props => {
  const breadcrumblinks = [
    { id: 1, title: 'Коммунальные услуги' },
    { id: 2, title: 'Общие' }
  ]

  return (
    <main id='communal' aria-current='page'>
      <BreadCrumb item={breadcrumblinks} />
    </main>
  )
}
export default Communal
