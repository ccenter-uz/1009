'use client'
import { FC, useLayoutEffect, useState } from 'react'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import EditableTable from '@/@core/components/reusable/ExcelTable'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  AccordionIcon,
  Image,
  Tooltip,
  useColorMode
} from '@chakra-ui/react'
import { scssVariables } from '@/@core/utils/scss-variables'
import GuestTable from '@/@core/components/reusable/GuestTable'
import MentionText from '@/@core/components/reusable/MentionText'
import WarningText from '@/@core/components/reusable/WarningText'
import RichEditor from '@/@core/components/RichEditor'
import DOMPurify from 'isomorphic-dompurify'
import SearchPanelOpportunities from '@/@core/components/pages/Opportunities/components/SearchPanel'
import { usePathname, useSearchParams } from 'next/navigation'
import { useLang } from '@/@core/service/hooks/useLang'
import EntertainmentLinks from '@/@core/components/pages/Opportunities/components/EntertainmentLinks'
import './style.scss'
import { IdataInfo, IdataInfoFromApi } from '@/@core/service/types/types'
import Swal from 'sweetalert2'
import { deleteContent, getData } from './action'
import { getUrl } from '@/@core/utils/fn'
import { toast } from 'react-toastify'

const Opportunities: FC = () => {
  const pathname = usePathname()
  const lastLink = pathname.replaceAll('/', ' ').split(' ').slice(-1).join()
  const searchParams = useSearchParams()
  const { t } = useLang()
  const breadcrumblinks = [
    { id: 1, title: `${t('opportunities')}` },
    { id: 2, title: `${t(`${lastLink}`)}` },
    { id: 3, title: `${searchParams.has('page') ? searchParams.get('page') : t('all')}` }
  ]
  const { colorMode } = useColorMode()
  const [isExcelTableOpen, setIsExcelTableOpen] = useState<boolean>(false)
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false)
  const [record, setRecord] = useState<any>(null)
  const [dataInfo, setData] = useState<IdataInfo[]>([])
  const [getAgain, setGetAgain] = useState<boolean>(false)

  // handleDelete
  const handleDelete = (id: string | number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'if you delete, content inside also will be removed and you won`t be able to revert it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await deleteContent(`${getUrl(lastLink)}`, id)
        if (res?.status === 'success') {
          toast.success(res.message, { position: 'bottom-right' })
        }
      }
    })
  }

  // chooseCat
  const chooseCat = (content: 'table' | 'editor') => {
    if (lastLink === 'entertainment' && searchParams.size === 0) {
      Swal.fire({ text: 'Please, choose category first!', icon: 'warning' })
    } else {
      content === 'table' ? setIsExcelTableOpen(prev => !prev) : setIsEditorOpen(prev => !prev)
    }
  }

  // getData
  const getDataAnother = async () => {
    if (lastLink !== 'entertainment') {
      const res = await getData(`${getUrl(lastLink)}`)
      res &&
        setData(
          res?.map((item: IdataInfoFromApi) => {
            if (item?.type === 'text') {
              return {
                id: item.id,
                mention: item.mention,
                warning: item.warning,
                title: item?.title,
                type: 'text',
                content: item.text
              }
            } else {
              return {
                id: item.id,
                mention: item.mention,
                warning: item.warning,
                title: item?.title,
                type: 'table',
                rows: item.table_arr.row,
                header: item.table_arr.header.map((col: { value: string; title: string }) => ({
                  id: col.value,
                  title: col.value
                }))
              }
            }
          })
        )
    }
  }

  useLayoutEffect(() => {
    getDataAnother()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAgain])

  return (
    <Box id='opportunities' aria-current='page' minH={{ base: '100%', sm: '100%', md: '1080px', xl: '1080px' }}>
      <BreadCrumb item={breadcrumblinks} />
      <SearchPanelOpportunities options={dataInfo?.map(option => ({ label: option.title, value: option.title }))} />
      {lastLink === 'entertainment' && <EntertainmentLinks getAgain={getAgain} setData={setData} />}
      <Box display={'flex'} alignItems={'center'} gap={'0 8px'}>
        <Button
          leftIcon={<img src='/add.svg' alt='add-circle-table' />}
          aria-label='create-table'
          fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
          h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
          onClick={() => chooseCat('table')}
        >
          Create table
        </Button>
        <Button
          leftIcon={<img src='/add.svg' alt='add-circle-editor' />}
          aria-label='create-text'
          fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
          h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
          onClick={() => chooseCat('editor')}
        >
          Create Editor
        </Button>
      </Box>
      {/* Accordion renders from API data */}
      {dataInfo?.map(data => (
        <Accordion key={data.id} allowMultiple my={{ base: '8px', sm: '8px', md: '1em', xl: '1em' }}>
          <AccordionItem borderTop={'none'} style={{ borderBottom: '0.5px solid #d3d3d373' }}>
            <AccordionButton
              textTransform={'capitalize'}
              h={{ base: '37px', sm: '37px', md: '45px', xl: '45px' }}
              color={scssVariables.mainColor}
              fontSize={scssVariables.fonts.paragraph}
            >
              <Box aria-label='title-panel' as='span' flex='1' textAlign='left'>
                {data.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              boxShadow={scssVariables.boxShadowPartnerBox}
              mb={{ base: '24px', sm: '24px', md: '48px', xl: '48px' }}
              bg={colorMode === 'dark' ? scssVariables.darkBg : '#F8FFFF'}
            >
              <Box display={'flex'} gap={'8px'} alignItems={'center'} justifyContent={'flex-end'}>
                <Tooltip label='Изменить' aria-label='A tooltip'>
                  <Image
                    width={{ base: '14px', sm: '14px', md: '20px', xl: '22px' }}
                    _hover={{ opacity: '0.8' }}
                    src='/pencil.svg'
                    alt='edit'
                    role='button'
                    aria-label='delete-button'
                    onClick={() =>
                      data.type === 'text'
                        ? (setRecord(dataInfo.filter(item => item.id === data.id)), setIsEditorOpen(true))
                        : (setRecord(dataInfo.filter(item => item.id === data.id)), setIsExcelTableOpen(true))
                    }
                  />
                </Tooltip>
                <Tooltip label='Удалить' aria-label='A tooltip'>
                  <Image
                    width={{ base: '14px', sm: '14px', md: '20px', xl: '22px' }}
                    _hover={{ opacity: '0.8' }}
                    src='/delete.svg'
                    alt='edit'
                    role='button'
                    aria-label='delete-button'
                    onClick={() => handleDelete(data.id)}
                  />
                </Tooltip>
              </Box>
              {data.mention && <MentionText text={data.mention} />}
              {data.warning && <WarningText text={data.warning} />}
              {data.type === 'text' ? (
                <div
                  style={
                    colorMode === 'dark'
                      ? { background: '#757575', padding: '0.5em 1em', borderRadius: '8px' }
                      : { background: '#f9f9f6', padding: '0.5em 1em', borderRadius: '8px' }
                  }
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content || '') }}
                />
              ) : (
                <GuestTable row={data.rows || [[]]} columns={data.header || []} />
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
      {/* editableTable */}
      {isExcelTableOpen && (
        <EditableTable
          setGetAgain={setGetAgain}
          record={record}
          setRecord={setRecord}
          isOpen={isExcelTableOpen}
          onClose={setIsExcelTableOpen}
        />
      )}
      {/* richEditor */}
      {isEditorOpen && (
        <RichEditor
          setGetAgain={setGetAgain}
          record={record}
          setRecord={setRecord}
          isOpen={isEditorOpen}
          onClose={setIsEditorOpen}
        />
      )}
    </Box>
  )
}
export default Opportunities
