'use client'
// EditableTable.js
import { startTransition, useState } from 'react'
import Spreadsheet from 'react-spreadsheet'
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Modal,
  useColorMode,
  Box,
  Button,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Divider,
  Textarea,
  FormControl,
  FormLabel,
  Text
} from '@chakra-ui/react'
import { scssVariables } from '@/@core/utils/scss-variables'

const EditableTable = ({ isOpen, onClose }) => {
  const { colorMode } = useColorMode()
  const row = [[]]
  const columns = []

  const [data, setData] = useState(row)

  const handleAddRow = () => {
    setData(prevData => [...prevData, Array(prevData.length > 0 ? prevData[0].length : prevData).fill({ value: '' })])
  }

  const handleAddColumn = () => {
    setData(prevData => prevData.map((row, rowIndex) => [...row, { value: '' }]))
  }

  const handleDeleteRow = index => {
    setData(prevData => prevData.filter((_, i) => i !== index))
  }

  const handleDeleteColumn = index => {
    setData(prevData => prevData.map(row => row.filter((_, i) => i !== index)))
  }

  const handleSave = e => {
    e.preventDefault()
    const current = e.currentTarget
    const formData = new FormData(current)
    const body = {
      header: data[0],
      rows: data.slice(1),
      warning: formData.get('warning'),
      mention: formData.get('mention')
    }
    console.log(body, 'data')
  }

  // modal
  const handleCloseModal = () => {
    startTransition(() => {
      setData([[]])
      onClose(false)
    })
  }

  return (
    <Modal size={'full'} isOpen={isOpen} aria-modal onClose={handleCloseModal}>
      <ModalContent padding={'1em'}>
        <ModalHeader fontSize={{ base: '14px', sm: '14px', md: '20px', xl: '20px' }}>Create or Edit Table</ModalHeader>
        <Divider mb={'1em'} />
        <ModalCloseButton />
        <form id='table-modal-form' onSubmit={handleSave}>
          <FormControl>
            <FormLabel color='#FF7C7C' htmlFor='warning-text'>
              Warning information:
            </FormLabel>
            <Textarea
              name='warning'
              id='warning-text'
              size={'sm'}
              resize={'vertical'}
              placeholder='Type for warnings!'
              mb={'8px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel color={'#4493bd'} htmlFor='mention-text'>
              Mention information:
            </FormLabel>
            <Textarea
              name='mention'
              id='mention-text'
              size={'sm'}
              resize={'vertical'}
              placeholder='Type for mentions!'
              mb={'8px'}
            />
          </FormControl>
        </form>
        <Box boxShadow={scssVariables.boxShadow} borderRadius={'12px'} my={'2em'} p={'1em'}>
          <Box display='flex' alignItems='center' gap='5px' mb={'8px'}>
            <Button
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
              h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
              onClick={handleAddColumn}
            >
              Add Column
            </Button>
            {/* area for warnings */}
            {data[0].length > 0 && (
              <Button
                fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
                h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
                onClick={handleAddRow}
              >
                Add Row
              </Button>
            )}
          </Box>
          <Box w={'100%'} aria-label='excel-table'>
            {data[0].length > 0 && (
              <TableContainer>
                <Spreadsheet
                  data={data}
                  onChange={setData}
                  columnLabels={columns} // Customize column labels as needed
                />
              </TableContainer>
            )}
          </Box>

          {data[0].length > 0 && (
            <TableContainer borderRadius={'4px'} border={'1px solid #E2E8F0'}>
              <Table aria-label='table'>
                <Thead>
                  <Tr bg={colorMode === 'dark' ? '#484a4a' : scssVariables.blockBgColor}>
                    {data[0].map((col, colIndex) => (
                      <Th
                        key={colIndex}
                        textAlign='center'
                        fontWeight={600}
                        textTransform={'capitalize'}
                        fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
                        p={{ base: '8px 10px', sm: '8px 10px', md: '16px 24px', xl: '16px 24px' }}
                        borderRight={'1px solid #E2E8F0'}
                      >
                        {col.value}
                        <Button
                          aria-label='button-delete-column'
                          fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
                          h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
                          colorScheme='red'
                          ml={'1rem'}
                          onClick={() => handleDeleteColumn(colIndex)}
                        >
                          -
                        </Button>
                      </Th>
                    ))}
                    <Th
                      fontWeight={600}
                      textTransform={'capitalize'}
                      fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
                      p={{ base: '8px 10px', sm: '8px 10px', md: '16px 24px', xl: '16px 24px' }}
                      borderRight={'1px solid #E2E8F0'}
                      textAlign='center'
                    >
                      {data[0].length > 0 ? 'Action' : null}
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.slice(1).map((row, rowIndex) => (
                    <Tr
                      key={rowIndex}
                      _even={
                        colorMode === 'dark' ? { background: '#484a4a' } : { background: scssVariables.blockBgColor }
                      }
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
                      <Td
                        fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
                        p={{ base: '8px 10px', sm: '8px 10px', md: '16px 24px', xl: '16px 24px' }}
                        borderRight={'1px solid #E2E8F0'}
                        textAlign='center'
                      >
                        {row.length > 0 ? (
                          <Button
                            aria-label='button-delete-rowCell'
                            colorScheme='red'
                            fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
                            h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
                            onClick={() => handleDeleteRow(rowIndex)}
                          >
                            -
                          </Button>
                        ) : null}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          )}
        </Box>
        <Box display='flex' alignItems='center' justifyContent='flex-end'>
          {data[0].length > 0 && (
            <Button
              aria-label='button-save'
              colorScheme='teal'
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
              h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
              form='table-modal-form'
              mb={'8px'}
              type='submit'
            >
              Save
            </Button>
          )}
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default EditableTable
