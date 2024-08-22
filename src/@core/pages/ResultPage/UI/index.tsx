'use client'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import { useRouter, useSearchParams } from 'next/navigation'
import { SearchFilter } from '@/@core/feature/ResultPageFilter'
import OrgCard from '@/@core/entities/OrgCard'
import Pagination from '@/@core/shared/UI/Pagination'
import { usePagination } from '@/@core/shared/hooks/usePaginate'
import { FilterList } from './FilterList'
import { useLang } from '@/@core/shared/hooks/useLang'
import { getAllOrganizations } from '@/@core/shared/api'
import { useResultSlicer } from '../model/Slicer'
import { buildNewUrlParams, buildUrlParams } from '@/@core/apps/utils/fn'

const Results: FC = () => {
  const searchParams = useSearchParams()
  const { t } = useLang()
  const { current, pageSize, total, setTotal } = usePagination()
  const router = useRouter()
  const breadcrumblink = [
    {
      id: 1,
      title: '<- Назад ',
      href: '/'
    },
    {
      id: 2,
      title: 'Поиск'
    },
    {
      id: 3,
      title: 'Организации'
    }
  ]
  const { allorgs, setAllorgs } = useResultSlicer()

  // PAGE-CHANGE
  const handlePageChange = (page: number) => {
    const params = searchParams
    if (params.size > 3) {
      const query = buildUrlParams(searchParams, { page: page })
      router.push(query)
    } else {
      const query = buildNewUrlParams({ nameorg: params.get('nameorg'), page, pageSize: params.get('pageSize') || 10 })
      router.push(query)
    }
  }
  // PAGESIZE-CHANGE
  const handlePageSizeChange = (pageSize: number) => {
    const params = searchParams
    if (params.size > 3) {
      const query = buildUrlParams(searchParams, { pageSize: pageSize })
      router.push(query)
    } else {
      const query = buildNewUrlParams({ nameorg: params.get('nameorg'), page: 1, pageSize })
      router.push(query)
    }
  }

  // LOAD
  useEffect(() => {
    getAllOrganizations({ page: current, pageSize }).then(res => {
      setTotal(res?.data?.pagination?.totalItems)
      setAllorgs(res?.data?.result)
    })
  }, [searchParams])

  return (
    <Box id='results' className='wrapper fade-in' minH={'100dvh'}>
      <BreadCrumb item={breadcrumblink} />
      {/* FILTER */}
      <SearchFilter />
      <Box mt={{ base: '1em', sm: '1em', md: '3em', xl: '3em' }}>
        <Flex
          direction={{ base: 'column', sm: 'column', md: 'row', xl: 'row' }}
          gap={{ base: '8px', sm: '8px', md: '1em', xl: '2em' }}
          alignItems={'flex-start'}
        >
          {/* SORT-FILTER */}
          <FilterList />
          <Box flex={1} w={'100%'}>
            <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }} color={'grey'}>
              {t('found')}: {total}
            </Text>
            <SimpleGrid
              columns={{ base: 1, sm: 1, md: 1, xl: 2 }}
              gap={{ base: '0 0', sm: '0 0', md: '0 2em', xl: '0 2em' }}
            >
              {allorgs?.map((card: any) => {
                return (
                  <Box key={card.id}>
                    <OrgCard
                      data={card}
                      href={`/results/${card.id}?razdel=${searchParams.get('razdel')}&podrazdel=${searchParams.get(
                        'podrazdel'
                      )}&region=${searchParams.get('region')}`}
                    />
                  </Box>
                )
              })}
            </SimpleGrid>
          </Box>
        </Flex>
        <Pagination
          total={total}
          current={current}
          pageSize={pageSize}
          onChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </Box>
    </Box>
  )
}

export default Results
