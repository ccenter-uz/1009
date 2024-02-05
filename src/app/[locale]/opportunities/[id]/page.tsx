'use client'
import { FC, useState } from 'react'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import EditableTable from '@/@core/components/reusable/ExcelTable'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, AccordionIcon } from '@chakra-ui/react'
import { scssVariables } from '@/@core/utils/scss-variables'
import GuestTable from '@/@core/components/reusable/GuestTable'
import MentionText from '@/@core/components/reusable/MentionText'
import WarningText from '@/@core/components/reusable/WarningText'

type Props = {}

const Communal: FC<Props> = props => {
  const breadcrumblinks = [
    { id: 1, title: 'Коммунальные услуги' },
    { id: 2, title: 'Общие' }
  ]
  const [isExcelTableOpen, setIsExcelTableOpen] = useState<boolean>(false)
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false)

  return (
    <main id='communal' aria-current='page'>
      <BreadCrumb item={breadcrumblinks} />
      <Box display={'flex'} alignItems={'center'} gap={'0 8px'}>
        <Button
          aria-label='create-table'
          fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
          h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
          onClick={() => setIsExcelTableOpen(prev => !prev)}
        >
          Click to create table
        </Button>
        <Button
          aria-label='create-text'
          fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
          h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
          onClick={() => setIsEditorOpen(prev => !prev)}
        >
          Click to create text
        </Button>
      </Box>
      {/* Accordion renders from API data */}
      <Accordion allowMultiple my={{ base: '8px', sm: '8px', md: '1em', xl: '1em' }}>
        <AccordionItem>
          <AccordionButton fontSize={scssVariables.fonts.paragraph}>
            <Box aria-label='title-panel' as='span' flex='1' textAlign='left'>
              Table Accordion
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            {/* panel also may be table or text */}
            <GuestTable
              row={[
                [{ value: '1' }, { value: '2' }, { value: '3' }],
                [{ value: '1' }, { value: '2' }, { value: '3' }],
                [{ value: '1' }, { value: '2' }, { value: '3' }]
              ]}
              columns={[
                { id: 1, title: 'Column 1' },
                { id: 2, title: 'Column 2' },
                { id: 3, title: 'Column 3' }
              ]}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton fontSize={scssVariables.fonts.paragraph}>
            <Box aria-label='title-panel' as='span' flex='1' textAlign='left'>
              Editor Accordion
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            {/* panel also may be table or text */}
            EDITOR Accordion
            {/* mention text */}
            <MentionText text='Таким образом, за счёт дополнительных нерабочих дней и переноса субботы в период празднования Нового года узбекистанцы отдохнут четыре дня подряд (с 31 декабря 2022 года по 3 января 2023 года).. ' />
            {/* warning text */}
            <WarningText text='В связи с тем, что 1 октября (День учителя и наставника) выпадает на воскресенье, нерабочий день в 2023 году переносится на 2 октября (понедельник) в соответствии с новой редакцией Трудового кодекса' />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/* editableTable */}
      <EditableTable isOpen={isExcelTableOpen} onClose={setIsExcelTableOpen} />
    </main>
  )
}
export default Communal
