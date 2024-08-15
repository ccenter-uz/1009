import OrgCard from '@/@core/entities/OrgCard'
import { getMyOrganizations } from '@/@core/shared/api'
import { usePagination } from '@/@core/shared/hooks/usePaginate'
import Pagination from '@/@core/shared/UI/Pagination'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import { useMyorgSlicer } from '../model/Slicer'
import { useSearchParams } from 'next/navigation'

export const MyOrg: FC = () => {
  const { current, pageSize, total, setTotal, handlePageChange, handlePageSizeChange } = usePagination()
  const { myOrgData, getMyOrgData } = useMyorgSlicer()
  const searchParams = useSearchParams()

  //  GET
  useEffect(() => {
    getMyOrgData(current, pageSize).then((res: { totalItems: number }) => {
      setTotal(res?.totalItems)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 2 }} gap={{ base: '0 0', sm: '0 0', md: '0 2em', xl: '0 2em' }}>
        {myOrgData?.map((card: any) => (
          <OrgCard key={card.id} href={`/results/${card.id}`} id={card.id} mycard data={card} />
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
