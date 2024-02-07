'use client'
import { FC, startTransition, useState } from 'react'
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

type Props = {}

const Communal: FC<Props> = props => {
  const breadcrumblinks = [
    { id: 1, title: 'Коммунальные услуги' },
    { id: 2, title: 'Общие' }
  ]
  const { colorMode } = useColorMode()
  const [isExcelTableOpen, setIsExcelTableOpen] = useState<boolean>(false)
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false)
  const [record, setRecord] = useState<any>(null)

  const exampleData = [
    {
      id: 1,
      title: 'Table title',
      type: 'table',
      warning:
        'Таким образом, за счёт дополнительных нерабочих дней и переноса субботы в период празднования Нового года узбекистанцы отдохнут четыре дня подряд (с 31 декабря 2022 года по 3 января 2023 года).. ',
      mention:
        'В связи с тем, что 1 октября (День учителя и наставника) выпадает на воскресенье, нерабочий день в 2023 году переносится на 2 октября (понедельник) в соответствии с новой редакцией Трудового кодекса',
      rows: [
        [{ value: '1' }, { value: '2' }, { value: '3' }],
        [{ value: '1' }, { value: '2' }, { value: '3' }],
        [{ value: '1' }, { value: '2' }, { value: '3' }]
      ],
      header: [
        { id: 1, title: 'Column 1' },
        { id: 2, title: 'Column 2' },
        { id: 3, title: 'Column 3' }
      ]
    },
    {
      id: 2,
      title: 'Editor title',
      type: 'text',
      warning:
        'Таким образом, за счёт дополнительных нерабочих дней и переноса субботы в период празднования Нового года узбекистанцы отдохнут четыре дня подряд (с 31 декабря 2022 года по 3 января 2023 года).. ',
      mention:
        'В связи с тем, что 1 октября (День учителя и наставника) выпадает на воскресенье, нерабочий день в 2023 году переносится на 2 октября (понедельник) в соответствии с новой редакцией Трудового кодекса',
      content: '<p>HELLO WORLD</p>'
    }
  ]

  // handleDelete
  const handleDelete = (id: any) => {
    const sectionItem = exampleData.filter(item => item.id === id)[0].id.toString()

    console.log(sectionItem, 'sectionID')
  }

  return (
    <main id='communal' aria-current='page'>
      <BreadCrumb item={breadcrumblinks} />
      <Box display={'flex'} alignItems={'center'} gap={'0 8px'}>
        <Button
          leftIcon={<img src='/add.svg' alt='add-circle-table' />}
          aria-label='create-table'
          fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
          h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
          onClick={() => setIsExcelTableOpen(prev => !prev)}
        >
          Create table
        </Button>
        <Button
          leftIcon={<img src='/add.svg' alt='add-circle-editor' />}
          aria-label='create-text'
          fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
          h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
          onClick={() => setIsEditorOpen(prev => !prev)}
        >
          Create Editor
        </Button>
      </Box>
      {/* Accordion renders from API data */}
      {exampleData?.map(data => (
        <Accordion  key={data.id} allowMultiple my={{ base: '8px', sm: '8px', md: '1em', xl: '1em' }}>
          <AccordionItem
            borderTop={'none'}
            borderBottom={'none'}
            style={{ borderBottom: '0.5px solid #d3d3d373' }}
            boxShadow={scssVariables.boxShadowPartnerBox}
          >
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

            <AccordionPanel bg={colorMode === 'dark' ? scssVariables.darkBg : '#F8FFFF'}>
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
                        ? (setRecord(exampleData.filter(item => item.id === data.id)), setIsEditorOpen(true))
                        : (setRecord(exampleData.filter(item => item.id === data.id)), setIsExcelTableOpen(true))
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
              <MentionText text={data.mention} />
              <WarningText text={data.warning} />
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
        <EditableTable record={record} setRecord={setRecord} isOpen={isExcelTableOpen} onClose={setIsExcelTableOpen} />
      )}
      {/* richEditor */}
      {isEditorOpen && (
        <RichEditor record={record} setRecord={setRecord} isOpen={isEditorOpen} onClose={setIsEditorOpen} />
      )}
    </main>
  )
}
export default Communal
