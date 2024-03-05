'use client'
import { FC, useLayoutEffect, useState } from 'react'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
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
import DOMPurify from 'isomorphic-dompurify'
import SearchPanelOpportunities from '@/@core/components/pages/Opportunities/components/SearchPanel'
import { usePathname, useSearchParams } from 'next/navigation'
import { useLang } from '@/@core/service/hooks/useLang'
import EntertainmentLinks from '@/@core/components/pages/Opportunities/components/EntertainmentLinks'
import { IdataInfo, IdataInfoFromApi } from '@/@core/service/types/types'
import Swal from 'sweetalert2'
import { deleteContent } from './action'
import { getUrl } from '@/@core/utils/fn'
import { toast } from 'react-toastify'
import { getData } from './serverAction'
import CreateAccModal from '@/@core/components/pages/Opportunities/components/CreateAccordion'
import { useOpportunityRecord } from '@/@core/service/context/opportunitiesRecord'

const Opportunities: FC = () => {
  const pathname = usePathname()
  const lastLink = pathname.replaceAll('/', ' ').split(' ').slice(-1).join()
  const searchParams = useSearchParams()
  const { t, locale } = useLang()
  const breadcrumblinks = [
    { id: 1, title: `${t('opportunities')}` },
    { id: 2, title: `${t(`${lastLink}`)}` },
    { id: 3, title: `${searchParams.has('page') ? searchParams.get('page') : t('all')}` }
  ]
  const { colorMode } = useColorMode()
  const [iscreateAccordion, setIsCreateAccordion] = useState<boolean>(false)
  const { setRecord } = useOpportunityRecord()
  const [dataInfo, setData] = useState<IdataInfo[]>([])
  const [getAgain, setGetAgain] = useState<boolean>(false)

  // DELETE
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
          getDataAnother()
        }
      }
    })
  }
  // GET
  const getDataAnother = async () => {
    if (lastLink !== 'entertainment') {
      const res = await getData(`${getUrl(lastLink)}`)
      res &&
        setData(
          res?.map((item: IdataInfoFromApi) => {
            return {
              ...item,
              id: item.id,
              mention: item.mention,
              warning: item.warning,
              title: item?.title,
              content: item.text.content,
              table_arr: item.table_arr
            }
          })
        )
    }
  }
  // REFETCH-DATA
  useLayoutEffect(() => {
    getDataAnother()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAgain])

  return (
    <Box id='opportunities' className='fade-in' aria-current='page' minH={'100dvh'}>
      <BreadCrumb item={breadcrumblinks} />
      <SearchPanelOpportunities options={dataInfo?.map(option => ({ label: option.title, value: option.title }))} />
      {lastLink === 'entertainment' && <EntertainmentLinks getAgain={getAgain} setData={setData} />}
      <Box display={'flex'} alignItems={'center'} gap={'0 8px'}>
        <Button
          leftIcon={<img src='/add.svg' alt='add-circle-editor' width={'20px'} height={'20px'} />}
          aria-label='create-text'
          fontSize={{ base: '12px', sm: '12px', md: '13px', xl: '14px' }}
          h={{ base: '30px', sm: '30px', md: '35px', xl: '35px' }}
          onClick={() => setIsCreateAccordion(prev => (prev = true))}
        >
          Create Accordion
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
                {locale == 'ru' ? data.title_ru : data.title}
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
                    onClick={() => (
                      setRecord(dataInfo.filter(item => item.id === data.id)), setIsCreateAccordion(true)
                    )}
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
              {data.mention && <MentionText text={locale == 'ru' ? data.mention_ru :data.mention} />}
              {data.warning && <WarningText text={locale == 'ru' ? data.warning_ru :data.warning} />}
              {data.table_arr.table &&
                data.table_arr?.table.map(table => {
                  return (
                    <Box key={table.id} my={{ base: '8px', sm: '8px', md: '24px', xl: '24px' }}>
                      <GuestTable rows={table.rows} header={table.header} />
                    </Box>
                  )
                })}
              {data.content && (
                <Box my={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }}>
                  <div
                    style={
                      colorMode === 'dark'
                        ? { background: '#757575', padding: '0.5em 1em', borderRadius: '8px' }
                        : { background: '#f9f9f6', padding: '0.5em 1em', borderRadius: '8px' }
                    }
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content || '') }}
                  />
                </Box>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
      {/* CreateAccordion */}
      {iscreateAccordion && (
        <CreateAccModal open={iscreateAccordion} close={setIsCreateAccordion} setGetAgain={setGetAgain} />
      )}
    </Box>
  )
}
export default Opportunities
