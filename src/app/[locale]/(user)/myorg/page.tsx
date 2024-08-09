'use client'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import OrgCard from '@/@core/entities/OrgCard'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { FC } from 'react'
import Pagination from '@/@core/shared/UI/Pagination'
import { usePagination } from '@/@core/shared/hooks/usePaginate'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Badge } from '@/@core/shared/UI/Badge'

const cards = [
  { id: '45438b87-40e1-40e0-b8bb-004c17c3765d' },
  { id: 'c69e78ae-e9f0-4caf-b28b-78cc92058e3d' },
  { id: '24cb5e1a-0e45-438a-9517-c20aa61c08c4' }
]

const MyOrganizations: FC = () => {
  const { t } = useLang()
  const breadcrumblinks = [
    {
      id: 1,
      title: t('myorgs')
    },
    {
      id: 2,
      title: t('all')
    }
  ]
  const { current, pageSize, total, handlePageChange, handlePageSizeChange } = usePagination()

  return (
    <Box minH={'100dvh'} id='myorg' className='wrapper fade-in' aria-label='section'>
      <BreadCrumb item={breadcrumblinks} />
      <Badge title={t('myorgs')} />
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 2 }} gap={{ base: '0 0', sm: '0 0', md: '0 2em', xl: '0 2em' }}>
        {cards.map(card => (
          <OrgCard key={card.id} href={`/results/${card.id}`} id={card.id} mycard />
        ))}
      </SimpleGrid>

      <Pagination
        total={total}
        current={current}
        pageSize={pageSize}
        onChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </Box>
  )
}

export default MyOrganizations
