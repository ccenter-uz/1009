import OrgCard from '@/@core/entities/OrgCard'
import { getMyOrganizations } from '@/@core/shared/api'
import { usePagination } from '@/@core/shared/hooks/usePaginate'
import Pagination from '@/@core/shared/UI/Pagination'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import { useMyorgSlicer } from '../model/Slicer'

export const MyOrg: FC = () => {
  const { current, pageSize, total, handlePageChange, handlePageSizeChange } = usePagination()
  const { myOrgData, setMyOrgData } = useMyorgSlicer()

  //   GET
  const get = async () => {
    const res = await getMyOrganizations()

    if (!res) return null
    if (res?.status === 200) {
      setMyOrgData(res?.data?.my_organization)
    }
  }

  useEffect(() => {
    get()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
