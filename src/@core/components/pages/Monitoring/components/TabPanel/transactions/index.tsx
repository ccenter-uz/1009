import BoxGen from '@/@core/components/reusable/Box'
import Pagination from '@/@core/components/reusable/Pagination'
import TableGen from '@/@core/components/reusable/Table'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Button, Text } from '@chakra-ui/react'
import { FC } from 'react'

const styleTabpanel = {
  p: { base: '0.5em', sm: '0.5em', md: '1em', xl: '1em' },
  boxShadow: scssVariables.boxShadow
}

const TransactionsPanel: FC = () => {
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

  return (
    <BoxGen {...styleTabpanel}>
      <Box mb={'0.5em'} display='flex' alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={scssVariables.fonts.paragraph}>Отчет о транзакции:</Text>
        <Button
          h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
          fontSize={scssVariables.fonts.paragraph}
          colorScheme={'teal'}
        >
          Excel
        </Button>
      </Box>
      <TableGen columns={columns} dataSource={data} />
      <Pagination pageLimiter={true} />
    </BoxGen>
  )
}
export default TransactionsPanel
