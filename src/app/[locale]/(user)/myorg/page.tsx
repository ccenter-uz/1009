'use client'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import OrgCard from '@/@core/components/reusable/OrgCard'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { FC } from 'react'
import Pagination from '@/@core/components/reusable/Pagination'
import { usePagination } from '@/@core/service/hooks/usePaginate'

const cards = [{ id: 1 }, { id: 2 }, { id: 3 }]

const MyOrganizations: FC = () => {
  const breadcrumblinks = [
    {
      id: 1,
      title: 'Мои организации'
    },
    {
      id: 2,
      title: 'Общие'
    }
  ]
  const { current, pageSize, total, handlePageChange, handlePageSizeChange } = usePagination()

  return (
    <Box minH={'100dvh'} id='myorg' className='wrapper fade-in' aria-label='section'>
      <BreadCrumb item={breadcrumblinks} />
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 2 }} gap={{ base: '0 0', sm: '0 0', md: '0 2em', xl: '0 2em' }}>
        {cards.map(card => (
          <OrgCard key={card.id} href={`/results/${card.id}`} />
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
