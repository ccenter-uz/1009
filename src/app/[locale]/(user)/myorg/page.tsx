'use client'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import OrgCard from '@/@core/components/reusable/OrgCard'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import Pagination from '@/@core/components/reusable/Pagination'
import { usePagination } from '@/@core/service/hooks/usePaginate'

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
      <OrgCard />
      <OrgCard />
      <OrgCard />

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
