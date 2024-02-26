'use client'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import OrgCard from '@/@core/components/reusable/OrgCard'
import { Box } from '@chakra-ui/react'
import { FC, useCallback, useState } from 'react'
import './style.scss'
import { IPaginationItems } from '@/@core/service/types/types'
import { useSearchParams } from 'next/navigation'
import Pagination from '@/@core/components/reusable/Pagination'

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
  const params = useSearchParams()
  const [pagination, setPagination] = useState<IPaginationItems>({
    current: Number(params.get('page') ? params.get('page') : 1),
    pageSize: Number(params.get('pageSize') ? params.get('pageSize') : 10),
    total: 100
  })

  // Pagination
  const handlePagination = useCallback((page: number) => {
    setPagination(prevState => ({ ...prevState, current: page }))
  }, [])

  // pageSizeChange
  const handlePageSizeChange = useCallback((pageSize: number) => {
    setPagination(prevState => ({ ...prevState, pageSize: pageSize }))
  }, [])

  return (
    <Box minH={'100dvh'} aria-label='section' id='savedorg' className='wrapper'>
      <BreadCrumb item={breadcrumblinks} />
      <OrgCard />
      <OrgCard />

      <Pagination
        total={pagination.total}
        current={pagination.current}
        pageSize={pagination.pageSize}
        onChange={handlePagination}
        onPageSizeChange={handlePageSizeChange}
      />
    </Box>
  )
}

export default SavedOrganizations
