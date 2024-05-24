'use client'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import OrgCard from '@/@core/entities/OrgCard'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { FC } from 'react'
import Pagination from '@/@core/shared/UI/Pagination'
import { usePagination } from '@/@core/shared/hooks/usePaginate'

const cards = [{ id: 1 }, { id: 2 }, { id: 3 }]

const SavedOrganizations: FC = () => {
  const breadcrumblinks = [
    {
      id: 1,
      title: 'Сохраненные организации'
    },
    {
      id: 2,
      title: 'Общие'
    }
  ]
  const { current, pageSize, total, handlePageChange, handlePageSizeChange } = usePagination()

  return (
    <Box minH={'100dvh'} aria-label='section' id='savedorg' className='wrapper fade-in'>
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

export default SavedOrganizations
