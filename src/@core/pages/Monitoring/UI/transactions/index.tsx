'use client'
import FilterTable from '@/@core/pages/Monitoring/UI/FilterTable'
import BoxGen from '@/@core/shared/UI/Box'
import Pagination from '@/@core/shared/UI/Pagination'
import TableGen from '@/@core/shared/UI/Table'
import { usePagination } from '@/@core/shared/hooks/usePaginate'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Box, Button, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { useDisclosure } from '@/@core/shared/hooks/useDisclosure'
import { useLang } from '@/@core/shared/hooks/useLang'

const styleTabpanel = {
  p: { base: '0.5em', sm: '0.5em', md: '1em', xl: '1em' },
  boxShadow: scssVariables.boxShadow
}

const TransactionsPanel: FC = () => {
  const { t } = useLang()
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()
  const { current, pageSize, total, handlePageChange, handlePageSizeChange } = usePagination()
  const columns = [
    {
      id: 1,
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      id: 2,
      title: 'Time',
      dataIndex: 'time',
      key: 'time'
    },
    {
      id: 3,
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      id: 4,
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    }
  ]
  const data = [
    {
      amount: '1.300',
      time: '17:00',
      date: '14.02.2024',
      status: 'success'
    },
    {
      amount: '7.300',
      time: '17:10',
      date: '14.02.2024',
      status: 'failed'
    }
  ]

  // handleFilter
  const handleFilter = (values: any) => {
    console.log(values, 'value')
    router.push(`?page=${1}&pageSize=${10}`)
  }

  return (
    <BoxGen {...styleTabpanel}>
      <Box mb={'0.5em'} display='flex' alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={scssVariables.fonts.paragraph}>{t('transactions-report')}</Text>
        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
          <Box
            w={{ base: '16px', sm: '16px', md: '22px', xl: '22px' }}
            h={{ base: '16px', sm: '16px', md: '22px', xl: '22px' }}
            _hover={{ cursor: 'pointer', opacity: '0.7', transition: 'all 0.3s ease' }}
            as='img'
            src='/equalizer-fill.svg'
            alt='equalizer-fill'
            role='img'
            aria-label='filter-icon'
            onClick={onToggle}
          />
          {/* excel */}
          <Button
            h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
            fontSize={scssVariables.fonts.paragraph}
            colorScheme={'teal'}
          >
            Excel
          </Button>
        </Box>
      </Box>
      {/* filter */}
      <FilterTable open={isOpen} onChange={handleFilter} />
      <TableGen columns={columns} dataSource={data} />
      <Pagination
        total={total}
        current={current}
        pageSize={pageSize}
        onChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </BoxGen>
  )
}
export default TransactionsPanel
