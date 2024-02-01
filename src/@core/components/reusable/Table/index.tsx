import { ItableType } from '@/@core/service/types/types'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr,  } from '@chakra-ui/react'
import { FC } from 'react'

const TableGen: FC<ItableType> = ({ columns, dataSource, variant, ColBg }) => {
  return (
    <Table>
      <Thead>
        <Tr style={{ background: ColBg }}>
          {columns.map(col => (
            <Th textAlign={col.align} w={col.width} h={col.height} key={col.key}>
              {col.title}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {dataSource.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {columns.map(column => (
              <Td textAlign={column.align} h={column.height}  key={column.key}>
                {row[column.dataIndex]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default TableGen
