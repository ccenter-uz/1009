import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Heading } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {}

const InfoTashVillage: FC<Props> = props => {
  const breadcrumblinks = [
    { id: 0, title: 'Возможности' },
    { id: 1, title: 'Информация о в. Ташкент' },
  ]

  return (
    <main id='info-tash-village' aria-current='page'>
     <BreadCrumb item={breadcrumblinks} />
    </main>
  )
}
export default InfoTashVillage
