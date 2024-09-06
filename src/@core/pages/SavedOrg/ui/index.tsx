import { FC, useEffect } from 'react'
import OrgCard from '@/@core/entities/OrgCard'
import { usePagination } from '@/@core/shared/hooks/usePaginate'
import Pagination from '@/@core/shared/UI/Pagination'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { useSavedOrgSlicer } from '../model/Slicer'
import { useSearchParams } from 'next/navigation'
import MentionText from '@/@core/shared/UI/MentionText'
import { useLang } from '@/@core/shared/hooks/useLang'
import { LayoutLoading } from '@/@core/shared/UI/LayoutLoding'

export const SavedOrgs: FC = () => {
  const { current, pageSize, total, setTotal, handlePageChange, handlePageSizeChange } = usePagination()
  const { savedOrgData, getSavedOrgData, loading } = useSavedOrgSlicer()
  const searchParams = useSearchParams()
  const { t } = useLang()

  //  GET
  useEffect(() => {
    getSavedOrgData(current, pageSize).then((res: { totalItems: number }) => {
      setTotal(res?.totalItems)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  return (
    <LayoutLoading loading={loading} data={savedOrgData}>
      <Box className='fade-in'>
        <MentionText text={t('description_savedOrgs')} />
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, xl: 2 }}
          gap={{ base: '0 0', sm: '0 0', md: '0 2em', xl: '0 2em' }}
        >
          {savedOrgData?.map((card: any, index: number) => (
            <OrgCard key={index} href={`/results/${card?.id}`} data={card} />
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
    </LayoutLoading>
  )
}
