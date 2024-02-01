import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { FC } from 'react'

type Props = {}

const InfoTashkent: FC<Props> = props => {
  const breadcrumblinks = [
    { id: 0, title: 'Возможности' },
    { id: 1, title: 'Информация о г. Ташкент' },
  ]

  return (
    <main id='info-tashkent' aria-current='page'>
       <BreadCrumb item={breadcrumblinks} />
    </main>
  )
}
export default InfoTashkent
