'use client'
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
  Image,
  Text,
  Input
} from '@chakra-ui/react'
import { scssVariables } from '@/@core/utils/scss-variables'
import { usePathname } from 'next/navigation'
import { getUrl } from '@/@core/utils/fn'
import { createContent, updateContent } from '@/app/[locale]/opportunities/[id]/action'
import { toast } from 'react-toastify'

const EditableTable = ({ isOpen, record, setRecord, onClose, setGetAgain }) => {
  const { colorMode } = useColorMode()
  const row = (record && [record[0].header.map(item => ({ value: item.title })), ...record[0].rows]) || [[]]
  const pathname = usePathname()
  const lastLink = pathname.replaceAll('/', ' ').split(' ').slice(-1).join()
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
  const handleSave = async e => {
    e.preventDefault()
    const current = e.currentTarget
    const formData = new FormData(current)
    let body
    lastLink === 'entertainment'
      ? (body = {
          category_id: JSON.parse(sessionStorage.getItem('catId')),
          title: formData.get('title'),
          type: 'table',
          warning: formData.get('warning'),
          mention: formData.get('mention'),
          table_arr: {
            header: data[0],
            row: data.slice(1)
          }
        })
      : (body = {
          title: formData.get('title'),
          type: 'table',
          warning: formData.get('warning'),
          mention: formData.get('mention'),
          table_arr: {
            header: data[0],
            row: data.slice(1)
          }
        })
    if (!record) {
      const res = await createContent(`${getUrl(lastLink)}`, body)
      if (res?.status === 'success') {
        toast.success(res.message, { position: 'bottom-right' })
        setGetAgain(prev => !prev)
        handleCloseModal()
      }
    } else {
      const res = await updateContent(`${getUrl(lastLink)}`, body, record[0]?.id)
      if (res?.status === 'success') {
        toast.success(res.message, { position: 'bottom-right' })
        setGetAgain(prev => !prev)
        handleCloseModal()
      }
    }
  }

  // modal
  const handleCloseModal = () => {
    startTransition(() => {
      setData([[]])
      onClose(false)
      setRecord(null)
    })
  }

  return (
    <Modal size={'full'} isOpen={isOpen} aria-modal onClose={handleCloseModal}>
      <ModalContent padding={'1em'}>
        <ModalHeader fontSize={{ base: '14px', sm: '14px', md: '20px', xl: '20px' }}>Create or Edit Table</ModalHeader>
        <Divider mb={'1em'} />
        <ModalCloseButton />
        <form id='table-modal-form' onSubmit={handleSave}>
          <FormControl isRequired>
            <FormLabel htmlFor='title' fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}>
              Title of section:
            </FormLabel>
            <Input
              _focus={{ border: `none`, boxShadow: '0 0 0px 2px teal' }}
              defaultValue={record && record[0].title}
              name='title'
              id='title'
              mb={'8px'}
              placeholder='example'
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
              color='#FF7C7C'
              htmlFor='warning-text'
            >
              Warning information:
            </FormLabel>
            <Textarea
              _focus={{ border: `none`, boxShadow: '0 0 0px 2px teal' }}
              defaultValue={record && record[0].warning}
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
              name='warning'
              id='warning-text'
              size={'sm'}
              resize={'vertical'}
              placeholder='Type for warnings!'
              mb={'8px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
              color={'#4493bd'}
              htmlFor='mention-text'
            >
              Mention information:
            </FormLabel>
            <Textarea
              _focus={{ border: `none`, boxShadow: '0 0 0px 2px teal' }}
              defaultValue={record && record[0].mention}
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
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
                <Spreadsheet data={data} onChange={setData} columnLabels={[]} />
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
                        <Text>{col.value}</Text>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                          <Image
                            _hover={{ opacity: '0.8' }}
                            role='button'
                            aria-label='delete-col-button'
                            onClick={() => handleDeleteColumn(colIndex)}
                            loading='lazy'
                            src='/delete.svg'
                            alt={`delete-${colIndex}`}
                          />
                        </Box>
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
                          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Image
                              _hover={{ opacity: '0.8' }}
                              role='button'
                              aria-label='delete-row-button'
                              onClick={() => handleDeleteRow(rowIndex)}
                              loading='lazy'
                              src='/delete.svg'
                              alt={`delete-row`}
                            />
                          </Box>
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
