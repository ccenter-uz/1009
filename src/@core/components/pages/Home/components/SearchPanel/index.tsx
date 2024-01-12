'use client'
import InputGen from '@/@core/components/reusable/Input'
import { Box, useColorMode } from '@chakra-ui/react'
import './style.scss'
import { FC } from 'react'
import ButtonGen from '@/@core/components/reusable/Button'
import { useLang } from '@/@core/service/hooks/useLang'

const SearchPanel: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()

  return (
    <Box bg={colorMode === 'dark' ? '#1B1D1C' : '#C2E5E5'}>
      <Box h={'250px'} w={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} className='wrapper'>
        <InputGen
          fontSize={{ base: '24px', sm: '', md: '', xl: '' }}
          p={'30px'}
          placeholder={t('search-placeholder')}
          width={'1134px'}
          h={'92px'}
          rightWidth='234px'
          borderRadius={'51px'}
          bg={'#fff'}
          alignItems={'center'}
          button={
            <ButtonGen width='90%' height='80%'>
              {t('search-btn')}
            </ButtonGen>
          }
        />
      </Box>
    </Box>
  )
}

export default SearchPanel
