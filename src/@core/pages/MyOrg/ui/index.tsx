import OrgCard from '@/@core/entities/OrgCard'
import { usePagination } from '@/@core/shared/hooks/usePaginate'
import Pagination from '@/@core/shared/UI/Pagination'
import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import { useMyorgSlicer } from '../model/Slicer'
import { useSearchParams } from 'next/navigation'
import MentionText from '@/@core/shared/UI/MentionText'
import { useLang } from '@/@core/shared/hooks/useLang'
import { InProcessMyorgsAsync } from '@/@core/feature'

export const MyOrg: FC = () => {
  const { current, pageSize, total, setTotal, handlePageChange, handlePageSizeChange } = usePagination()
  const { myOrgData, getMyOrgData } = useMyorgSlicer()
  const searchParams = useSearchParams()
  const { t } = useLang()

  //  GET
  useEffect(() => {
    getMyOrgData(current, pageSize).then((res: { totalItems: number }) => {
      setTotal(res?.totalItems)
    })
  }, [searchParams])

  return (
    <Box className='fade-in'>
      <MentionText text={t('description_myOrg')} />
      {/* IN-PROCESS-ORGS */}
      <Flex>
        <InProcessMyorgsAsync />
      </Flex>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 2 }} gap={{ base: '0 0', sm: '0 0', md: '0 2em', xl: '0 2em' }}>
        {myOrgData?.map((card: any) => (
          <OrgCard key={card.id} href={`/results/${card.id}`} id={card.id} mycard data={card} />
        ))}
      </SimpleGrid>
      {/* PAGINATION */}
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
