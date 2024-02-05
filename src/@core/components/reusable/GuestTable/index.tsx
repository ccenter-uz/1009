'use client'
import { IGuestTable } from '@/@core/service/types/types'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

/* 
row={[
    [{ value: '1' }, { value: '2' }],
    [{ value: '3' }, { value: '4' }],
    [{ value: '5' }, { value: '6' }],
    [{ value: '7' }, { value: '8' }],
  ]}
  columns={[
    { id: 1, title: 'Column 1' },
    { id: 2, title: 'Column 2' },    
  ]} 
  */

const GuestTable: FC<IGuestTable> = ({ row = [[]], columns = [] }) => {
  const { colorMode } = useColorMode()

  return (
    <TableContainer borderRadius={'4px'} border={'1px solid #E2E8F0'}>
      <Table aria-label='table'>
        <Thead>
          <Tr>
            {columns.map((col, colIndex) => (
              <Th
                bg={colorMode === 'dark' ? '#484a4a' : scssVariables.blockBgColor}
                key={colIndex}
                textAlign='center'
                fontWeight={600}
                textTransform={'capitalize'}
                fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
                p={{ base: '8px 10px', sm: '8px 10px', md: '16px 24px', xl: '16px 24px' }}
                borderRight={'1px solid #E2E8F0'}
              >
                {col.title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {row.map((row, rowIndex) => (
            <Tr
              key={rowIndex}
              _even={colorMode === 'dark' ? { background: '#484a4a' } : { background: scssVariables.blockBgColor }}
            >
              {row.map((cell, columnIndex) => (
                <Td
                  fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
                  p={{ base: '8px 10px', sm: '8px 10px', md: '16px 24px', xl: '16px 24px' }}
                  borderRight={'1px solid #E2E8F0'}
                  textAlign='center'
                  key={columnIndex}
                >
                  {cell.value}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default GuestTable
