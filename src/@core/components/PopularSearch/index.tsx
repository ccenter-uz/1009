'use client'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { FC, useState } from 'react'
import Cards from './utils/cards'
import Modal from './utils/modal'

const defaultData = [
  {
    id: 1,
    title: 'Банк',
    text: 'Микрокредитная организация представительство',
    img: '/school-fill.svg'
  },
  {
    id: 2,
    title: 'Аптека',
    text: 'Номера и адреса',
    img: '/school-fill.svg'
  },
  {
    id: 3,
    title: 'АТС',
    text: 'УЗЕЛ  расчетная группа по организациям ,диспетчер,ремонт телефонных аппаратов',
    img: '/school-fill.svg'
  },
  {
    id: 4,
    title: 'ГАИ',
    text: 'Городское, Управление безопасности дорожного движения,  штрафы с видеорегестраторов',
    img: '/school-fill.svg'
  },
  {
    id: 5,
    title: 'Банк',
    text: 'Микрокредитная организация представительство',
    img: '/school-fill.svg'
  },
  {
    id: 6,
    title: 'Банк',
    text: 'Микрокредитная организация представительство',
    img: '/school-fill.svg'
  },
  {
    id: 7,
    title: 'Автопарк',
    text: 'Махсустранс, автодормехбаза управление',
    img: '/school-fill.svg'
  },
  {
    id: 8,
    title: 'БИРЖА ТРУДА',
    text: 'Микрокредитная организация представительство',
    img: '/school-fill.svg'
  },
  {
    id: 9,
    title: 'Банк',
    text: 'Микрокредитная организация представительство',
    img: '/school-fill.svg'
  },
  {
    id: 10,
    title: 'Банк',
    text: 'Микрокредитная организация представительство',
    img: '/school-fill.svg'
  },
  {
    id: 11,
    title: 'Банк',
    text: 'Микрокредитная организация представительство',
    img: '/school-fill.svg'
  },
  {
    id: 12,
    title: 'Банк',
    text: 'Микрокредитная организация представительство',
    img: '/school-fill.svg'
  }
]

const PopularSearch: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  // MODAL
  const handleOpenModal = () => {
    setOpen(prev => !prev)
  }

  return (
    <Box className='wrapper' aria-label='popular-section'>
      <Heading
        my={{ base: '16px', sm: '16px', md: '40px', xl: '42px' }}
        fontSize={scssVariables.fonts.titleSize}
        textAlign={'center'}
        color={scssVariables.mainColor}
        fontWeight={500}
      >
        Пользователи сейчас ищут
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 3 }} gap={{ base: '16px', sm: '16px', md: '20px', xl: '24px' }}>
        {defaultData.map(item => {
          return <Cards href={`?razdel=${item.title}`}  key={item.id} img={item.img} title={item.title} text={item.text} onclick={handleOpenModal} />
        })}
      </SimpleGrid>

      {open && <Modal open={open} close={setOpen} />}
    </Box>
  )
}

export default PopularSearch
