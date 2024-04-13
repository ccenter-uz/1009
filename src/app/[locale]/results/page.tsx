'use client'
import { Box, Button, SimpleGrid, TableContainer, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import { useRouter, useSearchParams } from 'next/navigation'
import SearchFilter from './_components/Filter'
import OrgCard from '@/@core/entities/OrgCard'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import Pagination from '@/@core/shared/UI/Pagination'
import { usePagination } from '@/@core/shared/hooks/usePaginate'

const linkButtons = [
  {
    id: 1,
    title: 'Все',
    value: 'all',
    found: '40'
  },
  {
    id: 2,
    title: 'Раздел',
    value: 'razdel',
    found: '15'
  },
  {
    id: 3,
    title: 'Подраздел',
    value: 'podazdel',
    found: '25'
  }
]

const cards = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  }
]
const Results: FC = () => {
  const searchParams = useSearchParams()
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
  const [activeBtn, setActiveBtn] = useState<string>('')

  // PAGINATION
  const handlePageChange = (page: number) => {
    const params = searchParams
    if (params.size > 3) {
      router.push(
        `?razdel=${params.get('razdel')}&podrazdel=${params.get('podrazdel')}&region=${params.get(
          'region'
        )}&razdel-tu=${params.get('razdel-tu')}&podrazdel-tu=${params.get('podrazdel-tu')}&poselok=${params.get(
          'poselok'
        )}&view=${params.get('view')}&orientir=${params.get('orientir')}&nameorg=${params.get(
          'nameorg'
        )}&mainorg=${params.get('mainorg')}&kvartal=${params.get('kvartal')}&kv=${params.get('kv')}&house=${params.get(
          'house'
        )}&district=${params.get('district')}&city=${params.get('city')}&page=${page}&pageSize=${params.get(
          'pageSize'
        )}`
      )
    } else {
      router.push(`?nameorg=${params.get('nameorg')}&page=${page}&pageSize=${params.get('pageSize') || 10}`)
    }
  }
  const handlePageSizeChange = (pageSize: number) => {
    const params = searchParams
    if (params.size > 3) {
      router.push(
        `?razdel=${params.get('razdel')}&podrazdel=${params.get('podrazdel')}&region=${params.get(
          'region'
        )}&razdel-tu=${params.get('razdel-tu')}&podrazdel-tu=${params.get('podrazdel-tu')}&poselok=${params.get(
          'poselok'
        )}&view=${params.get('view')}&orientir=${params.get('orientir')}&nameorg=${params.get(
          'nameorg'
        )}&mainorg=${params.get('mainorg')}&kvartal=${params.get('kvartal')}&kv=${params.get('kv')}&house=${params.get(
          'house'
        )}&district=${params.get('district')}&city=${params.get('city')}&page=${1}&pageSize=${pageSize}`
      )
    } else {
      router.push(`?nameorg=${params.get('nameorg')}&page=1&pageSize=${pageSize}`)
    }
  }

  return (
    <Box id='results' className='wrapper fade-in' minH={'100dvh'}>
      <BreadCrumb item={breadcrumblink} />
      <SearchFilter />
      <Box mt={{ base: '1em', sm: '1em', md: '3em', xl: '4em' }}>
        <TableContainer
          my={'4px'}
          display={'flex'}
          alignItems={'center'}
          gap={{ base: '5px', sm: '5px', md: '10px', xl: '10px' }}
        >
          {!searchParams.has('razdel') &&
            linkButtons.map(button => {
              return (
                <Button
                  className='fade-in'
                  key={button.id}
                  isActive={activeBtn === button.value}
                  _active={{ bg: 'teal', color: '#fff' }}
                  onClick={() => setActiveBtn(button.value)}
                  fontSize={scssVariables.fonts.paragraph}
                  fontWeight={400}
                  h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
                >
                  {button.title}: {button.found}
                </Button>
              )
            })}
        </TableContainer>
        <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }} color={'grey'}>
          Найдено:46
        </Text>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, xl: 2 }}
          gap={{ base: '0 0', sm: '0 0', md: '0 2em', xl: '0 2em' }}
        >
          {cards.map(card => {
            return (
              <Box key={card.id}>
                <OrgCard
                  href={`/results/${card.id}?razdel=${searchParams.get('razdel')}&podrazdel=${searchParams.get(
                    'podrazdel'
                  )}&region=${searchParams.get('region')}`}
                />
              </Box>
            )
          })}
        </SimpleGrid>
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
