'use client'
import FilterTable from '@/@core/components/pages/Monitoring/components/FilterTable'
import BoxGen from '@/@core/components/reusable/Box'
import Pagination from '@/@core/components/reusable/Pagination'
import TableGen from '@/@core/components/reusable/Table'
import { usePagination } from '@/@core/service/hooks/usePaginate'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Button, Text } from '@chakra-ui/react'
import { FC,useState } from 'react'

const styleTabpanel = {
  p: { base: '0.5em', sm: '0.5em', md: '1em', xl: '1em' },
  boxShadow: scssVariables.boxShadow
}

const TransactionsPanel: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { current, pageSize, total,handlePageChange,handlePageSizeChange } = usePagination()
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
  }

  return (
    <BoxGen {...styleTabpanel}>
      <Box mb={'0.5em'} display='flex' alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={scssVariables.fonts.paragraph}>Отчет о транзакции:</Text>
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
            onClick={() => setOpen(prev => !prev)}
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
      <FilterTable open={open} onChange={handleFilter} />
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
