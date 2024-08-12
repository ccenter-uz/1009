import OrgCard from '@/@core/entities/OrgCard'
import { getSavedOrganizations } from '@/@core/shared/api'
import { usePagination } from '@/@core/shared/hooks/usePaginate'
import Pagination from '@/@core/shared/UI/Pagination'
import { SimpleGrid } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import { useSavedOrgSlicer } from '../model/Slicer'

export const SavedOrgs: FC = () => {
  const { current, pageSize, total, handlePageChange, handlePageSizeChange } = usePagination()
  const { savedOrgData, setSavedOrgData } = useSavedOrgSlicer()

  //   GET
  const get = async () => {
    const res = await getSavedOrganizations()

    if (!res) return null
    if (res?.status === 200) {
      setSavedOrgData(res.data)
    }
  }

  useEffect(() => {
    savedOrgData.length === 0 && get()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 2 }} gap={{ base: '0 0', sm: '0 0', md: '0 2em', xl: '0 2em' }}>
        {savedOrgData?.map((card: { id: number | string }) => (
          <OrgCard key={card.id} href={`/results/${card.id}`} data={savedOrgData} />
        ))}
      </SimpleGrid>
      <Pagination
        total={total}
        current={current}
        pageSize={pageSize}
        onChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </>
  )
}
