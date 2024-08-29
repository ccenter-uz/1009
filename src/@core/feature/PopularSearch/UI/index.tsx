'use client'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import Cards from './Cards'
import Modal from './Modal'
import { useDisclosure } from '@/@core/shared/hooks/useDisclosure'
import { useLang } from '@/@core/shared/hooks/useLang'
import { useAddorgSlicer } from '@/@core/pages/AddOrg'
import { getPodrazdelByRazdel } from '@/@core/shared/api'

const PopularSearch: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { t } = useLang()
  const { razdel, setPodrazdel, GET } = useAddorgSlicer()

  // CHANGE-RAZDEL
  const handleChangeRazdel = async (id: string) => {
    if (id === '') return
    const res = await getPodrazdelByRazdel(id)
    res?.status === 200 && (setPodrazdel(res?.data?.sub_category_orgs), onOpen())
  }

  // LOAD
  useEffect(() => {
    razdel.length === 0 && GET()
  }, [])

  return (
    <Box className='wrapper' aria-label='popular-section'>
      <Heading
        my={{ base: '16px', sm: '16px', md: '40px', xl: '42px' }}
        fontSize={scssVariables.fonts.titleSize}
        textAlign={'center'}
        color={scssVariables.mainColor}
        fontWeight={500}
      >
        {t('popular-title')}
      </Heading>
      <SimpleGrid
        minH={{ base: 'auto', sm: 'auto', xl: '300px' }}
        alignItems={'center'}
        justifyContent={'center'}
        columns={{ base: 1, sm: 1, md: 2, xl: 3 }}
        gap={{ base: '16px', sm: '16px', md: '20px', xl: '24px' }}
      >
        {razdel?.map((item: { id: string; title: string; img: string; text: string }) => {
          return (
            <Cards
              href={`?razdel=${item.id}`}
              key={item.id}
              img={item.img || '/school-fill.svg'}
              title={String(item.title).toUpperCase()}
              text={item.text}
              onclick={() => handleChangeRazdel(item.id)}
            />
          )
        })}
      </SimpleGrid>

      {isOpen && <Modal open={isOpen} close={onClose} />}
    </Box>
  )
}

export default PopularSearch
