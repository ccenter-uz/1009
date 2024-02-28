'use client'
import Filter from '@/@core/components/Filter'
import Pagination from '@/@core/components/reusable/Pagination'
import TableGen from '@/@core/components/reusable/Table'
import { Box, Text, Tooltip } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC, useCallback, useLayoutEffect, useState } from 'react'
import { usePagination } from '@/@core/service/hooks/usePaginate'
import { getUserForModerator } from './serverAction'

const UsersForModerator: FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState<boolean>(false)
  const { current, pageSize, total, setTotal } = usePagination()
  const columns = [
    {
      title: 'Column 1',
      key: 'column1',
      dataIndex: 'column1'
    },
    {
      title: 'Column 2',
      key: 'column2',
      dataIndex: 'column2'
    },
    {
      title: 'Column 3',
      key: 'column3',
      dataIndex: 'column3'
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      render: (t, record) => {
        return (
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Tooltip label='Посмотреть' aria-label='tooltip'>
              <img
                onClick={() => router.push(`/moderator/users/${record.id}`)}
                role='button'
                width={'18px'}
                height={'18px'}
                style={{ cursor: 'pointer' }}
                src='/eye-fill.svg'
                alt='eye-open'
              />
            </Tooltip>
          </Box>
        )
      }
    }
  ]
  const data = [
    {
      id: 1,
      column1: 'Row1',
      column2: 'Row2',
      column3: 'Row3'
    },
    {
      id: 2,
      column1: 'Row1',
      column2: 'Row2',
      column3: 'Row3'
    },
    {
      id: 3,
      column1: 'Row1',
      column2: 'Row2',
      column3: 'Row3'
    }
  ]

  // DATA
  const getData = async (search: string | null, page: number | string, limit: number | string) => {
    console.log('fetches data')
    // setLoading(true)
    // const query = {
    //   search: search || null,
    //   current: page,
    //   pageSize: limit
    // }
    // const res = await getUserForModerator(query)
    // if (res.status === 200 && search) {
    //   // setTotal(res.total)
    //   setTimeout(() => {
    //     setLoading(false)
    //   }, 1000)
    //   router.push(`?search=${search}&page=${page}&pageSize=${limit}`)
    // } else {
    //   // setTotal(res.total)
    //   setTimeout(() => {
    //     setLoading(false)
    //   }, 1000)
    //   router.push(`?page=${page}&pageSize=${limit}`)
    // }
  }

  //FILTER
  const handleFilter = async (e: { search: string }) => {
    if (e.search !== '') return getData(e.search, 1, pageSize)

    return getData(null, 1, pageSize)
  }

  // PAGINATION
  const handleChangePage = useCallback(
    (page: number) => {
      searchParams.has('search') ? getData(searchParams.get('search'), page, pageSize) : getData(null, page, pageSize)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  )

  const handleChangePageSize = useCallback(
    (pageSizeValue: number) => {
      searchParams.has('search')
        ? getData(searchParams.get('search'), 1, pageSizeValue)
        : getData(null, 1, pageSizeValue)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  )

  // WATCH-QUERY
  useLayoutEffect(() => {
    getData(searchParams.get('search') || null, current, pageSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box className='wrapper fade-in' id='users' minH={'100dvh'}>
      <Filter handleFilter={handleFilter} disabled={loading} />
      <Text fontSize={{ base: '10px', sm: '10px', md: '14px', xl: '14px' }} color={'grey'}>
        Таблица пользователей:
      </Text>
      <TableGen RowBg='whitesmoke' ColBg='whitesmoke' columns={columns} dataSource={data} />
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={handleChangePage}
        onPageSizeChange={handleChangePageSize}
      />
    </Box>
  )
}

export default UsersForModerator
