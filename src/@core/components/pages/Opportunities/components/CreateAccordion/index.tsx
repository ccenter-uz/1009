import RichEditor from '@/@core/components/RichEditor'
import EditableTable from '@/@core/components/reusable/ExcelTable'
import GuestTable from '@/@core/components/reusable/GuestTable'
import { useOpportunityRecord } from '@/@core/service/context/opportunitiesRecord'
import { IcreateAccordionType } from '@/@core/service/types/types'
import { getUrl } from '@/@core/utils/fn'
import { createContent, updateContent } from '@/app/[locale]/opportunities/[id]/action'
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Textarea,
  Tooltip,
  useColorMode
} from '@chakra-ui/react'
import DOMPurify from 'dompurify'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

// STYLES
const inputsStyle = {
  _focus: { border: `none`, boxShadow: '0 0 0px 2px teal' },
  fontSize: { base: '12px', sm: '12px', md: '13px', xl: '14px' },
  size: 'sm'
}
const labelStyle = {
  fontSize: { base: '12px', sm: '12px', md: '14px', xl: '14px' },
  mb: '2px',
  color: '#454545'
}

const CreateAccModal: FC<IcreateAccordionType> = ({ open, close, setGetAgain }) => {
  const pathname = usePathname()
  const lastLink = pathname.replaceAll('/', ' ').split(' ').slice(-1).join()
  const { record, setRecord } = useOpportunityRecord()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: record && record[0].title,
      warning: record && record[0].warning,
      mention: record && record[0].mention
    }
  })
  const { colorMode } = useColorMode()
  const [dataTable, setDataTable] = useState([])
  const [editorValue, setEditorValue] = useState<string>(record && record[0]?.content )
  const [isExcelTableOpen, setIsExcelTableOpen] = useState<boolean>(false)
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false)

  // CLOSE
  const handleClose = () => {
    close((prev: boolean) => !prev)
    setRecord(null)
  }

  // SAVE
  const handleSave = async values => {
    console.log(values)
    let body
    lastLink === 'entertainment'
      ? (body = {
          category_id: JSON.parse(sessionStorage.getItem('catId')),
          title: values.title,
          type: 'text or table',
          warning: values.warning,
          mention: values.mention,
          text: editorValue,
          table_arr: {
            header: dataTable[0],
            row: dataTable.slice(1)
          }
        })
      : (body = {
          title: values.title,
          type: 'text',
          warning: values.warning,
          mention: values.mention,
          text: editorValue,
          table_arr: {
            header: dataTable[0],
            row: dataTable.slice(1)
          }
        })

    if (!record) {
      const res = await createContent(`${getUrl(lastLink)}`, body)
      if (res?.status === 'success') {
        toast.success(res.message, { position: 'bottom-right' })
        setGetAgain((prev: boolean) => !prev)
        handleClose()
      }
    } else {
      const res = await updateContent(`${getUrl(lastLink)}`, body, record[0]?.id)
      if (res?.status === 'success') {
        toast.success(res.message, { position: 'bottom-right' })
        setGetAgain((prev: boolean) => !prev)
        handleClose()
      }
    }
  }

  // CHOOSE-CATEGORY
  const chooseCat = (content: 'table' | 'editor') => {
    content === 'table' ? setIsExcelTableOpen(prev => !prev) : setIsEditorOpen(prev => !prev)
  }



  return (
    <Modal size={'full'} aria-modal isOpen={open} onClose={handleClose}>
      <ModalContent p={{ base: '8px', sm: '', md: '1em', xl: '1em' }}>
        <ModalHeader p={'8px'} fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}>
          Create Accordion
        </ModalHeader>
        <Divider mb={'1em'} />
        <ModalCloseButton />
        <form id='create-acc-form' onSubmit={handleSubmit(handleSave)}>
          <FormControl isRequired mb={{ base: '14px', sm: '14px', md: '2em', xl: '2em' }}>
            <FormLabel htmlFor='title' {...labelStyle}>
              Title accordion:
            </FormLabel>
            <Input {...register('title')} {...inputsStyle} id='title' placeholder='Accordion' />
          </FormControl>
          <FormControl mb={{ base: '14px', sm: '14px', md: '14px', xl: '14px' }}>
            <FormLabel htmlFor='warning-text' {...labelStyle}>
              Warning information:
            </FormLabel>
            <Textarea
              {...register('warning')}
              {...inputsStyle}
              id='warning-text'
              placeholder='Type for warnings!'
              resize={'vertical'}
            />
          </FormControl>
          <FormControl mb={{ base: '14px', sm: '14px', md: '2em', xl: '2em' }}>
            <FormLabel htmlFor='mention-text' {...labelStyle}>
              Mention information:
            </FormLabel>
            <Textarea
              {...register('mention')}
              {...inputsStyle}
              id='mention-text'
              placeholder='Type for mentions!'
              resize={'vertical'}
            />
          </FormControl>
        </form>
        <Box display={'flex'} alignItems={'center'} gap={'0 8px'}>
          <Button
            leftIcon={<img src='/add.svg' alt='add-circle-table' width={'20px'} height={'20px'} />}
            aria-label='create-table'
            fontSize={{ base: '12px', sm: '12px', md: '13px', xl: '14px' }}
            h={{ base: '30px', sm: '30px', md: '35px', xl: '35px' }}
            onClick={() => chooseCat('table')}
          >
            Create table
          </Button>
          <Button
            leftIcon={<img src='/add.svg' alt='add-circle-editor' width={'20px'} height={'20px'} />}
            aria-label='create-text'
            fontSize={{ base: '12px', sm: '12px', md: '13px', xl: '14px' }}
            h={{ base: '30px', sm: '30px', md: '35px', xl: '35px' }}
            onClick={() => chooseCat('editor')}
          >
            Create Editor
          </Button>
        </Box>
        {record && record[0]?.table_arr && (
          <Box aria-label='table-section'>
            <Box display={'flex'} gap={'8px'} alignItems={'center'} justifyContent={'flex-end'}>
              <Tooltip label='Изменить' aria-label='A tooltip'>
                <Image
                  width={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
                  _hover={{ opacity: '0.8' }}
                  src='/pencil.svg'
                  alt='edit'
                  role='button'
                  aria-label='edit-button'
                  onClick={() => setIsExcelTableOpen(true)}
                />
              </Tooltip>
              <Tooltip label='Удалить' aria-label='A tooltip'>
                <Image
                  width={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
                  _hover={{ opacity: '0.8' }}
                  src='/delete.svg'
                  alt='delete'
                  role='button'
                  aria-label='delete-button'
                  //   onClick={() => handleDelete(data.id)}
                />
              </Tooltip>
            </Box>
            <GuestTable row={record[0].table_arr.rows || [[]]} columns={record[0].table_arr.header || []} />
          </Box>
        )}
        {record && record[0]?.content && (
          <Box aria-label='editor-section'>
            <Box display={'flex'} gap={'8px'} alignItems={'center'} justifyContent={'flex-end'}>
              <Tooltip label='Изменить' aria-label='A tooltip'>
                <Image
                  width={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
                  _hover={{ opacity: '0.8' }}
                  src='/pencil.svg'
                  alt='edit'
                  role='button'
                  aria-label='edit-button'
                  onClick={() => setIsEditorOpen(true)}
                />
              </Tooltip>
              <Tooltip label='Удалить' aria-label='A tooltip'>
                <Image
                  width={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
                  _hover={{ opacity: '0.8' }}
                  src='/delete.svg'
                  alt='delete'
                  role='button'
                  aria-label='delete-button'
                  //   onClick={() => handleDelete(data.id)}
                />
              </Tooltip>
            </Box>
            <div
              style={
                colorMode === 'dark'
                  ? { background: '#757575', padding: '0.5em 1em', borderRadius: '8px' }
                  : { background: '#f9f9f6', padding: '0.5em 1em', borderRadius: '8px' }
              }
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(record[0]?.content || '') }}
            />
          </Box>
        )}
        <Box display='flex' alignItems='center' justifyContent='flex-end' my={'8px'}>
          <Button
            aria-label='button-save'
            colorScheme='teal'
            fontSize={{ base: '12px', sm: '12px', md: '13px', xl: '14px' }}
            h={{ base: '30px', sm: '30px', md: '35px', xl: '35px' }}
            form='create-acc-form'
            mb={'8px'}
            type='submit'
          >
            Save
          </Button>
        </Box>
        {/* editableTable */}
        {isExcelTableOpen && (
          <EditableTable
            data={dataTable}
            setData={setDataTable}
            setGetAgain={setGetAgain}
            isOpen={isExcelTableOpen}
            onClose={setIsExcelTableOpen}
          />
        )}
        {/* richEditor */}
        {isEditorOpen && (
          <RichEditor
            value={editorValue}
            setValue={setEditorValue}
            setGetAgain={setGetAgain}
            isOpen={isEditorOpen}
            onClose={setIsEditorOpen}
          />
        )}
      </ModalContent>
    </Modal>
  )
}

export default CreateAccModal
