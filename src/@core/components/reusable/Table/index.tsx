'use client'
import { ItableType } from '@/@core/service/types/types'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorMode } from '@chakra-ui/react'
import { FC, Fragment } from 'react'
import Pagination from '../Pagination'

const TableGen: FC<ItableType> = ({ columns, dataSource, border = false, RowBg, ColBg, pagination = false }) => {
  const { colorMode } = useColorMode()

  return (
    <Fragment>
      <TableContainer borderRadius={'4px'} border={border ? '1px solid #E2E8F0' : 'none'}>
        <Table aria-label='table'>
          <Thead>
            <Tr
              style={
                colorMode === 'dark' ? { background: '#484a4a' } : { background: ColBg || scssVariables.blockBgColor }
              }
            >
              {columns.map(col => (
                <Th
                  fontWeight={600}
                  textTransform={'capitalize'}
                  fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
                  p={{ base: '8px 10px', sm: '8px 10px', md: '16px 24px', xl: '16px 24px' }}
                  borderRight={border ? '1px solid #E2E8F0' : 'none'}
                  textAlign={col.align}
                  w={col.width}
                  key={col.key}
                >
                  {col.title}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {dataSource.map((row, rowIndex) => (
              <Tr
                _even={
                  colorMode === 'dark' ? { background: '#484a4a' } : { background: RowBg || scssVariables.blockBgColor }
                }
                key={rowIndex}
              >
                {columns.map(column => (
                  <Td
                    fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
                    p={{ base: '8px 10px', sm: '8px 10px', md: '16px 24px', xl: '16px 24px' }}
                    borderRight={border ? '1px solid #E2E8F0' : 'none'}
                    textAlign={column.align}
                    key={column.key}
                  >
                    {row[column.dataIndex]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {pagination && <Pagination />}
    </Fragment>
  )
}

export default TableGen
