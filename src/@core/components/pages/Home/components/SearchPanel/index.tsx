'use client'
import InputGen from '@/@core/components/reusable/Input'
import { Box, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'
import ButtonGen from '@/@core/components/reusable/Button'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'

const SearchPanel: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()

  return (
    <Box
      className='wrapper'
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      minH={{ base: 'max-content', sm: 'max-content', md: '250px', xl: '250px' }}
      bg={colorMode === 'dark' ? scssVariables.gradientColor : scssVariables.blockBgColor}
    >
      <Box w={'100%'} m={'15px 0'} display={'flex'} alignItems={'center'} justifyContent={'center'} className='wrapper'>
        <InputGen
          boxShadow={scssVariables.boxShadowPartnerBox}
          fontSize={{ base: '12px', sm: '12px', md: '18px', xl: '24px' }}
          p={{ base: '4px 10px', sm: '4px 10px', md: '25px', xl: '30px' }}
          placeholder={t('search-placeholder')}
          width={{ base: '387px', sm: '100%', md: '1164px', xl: '1164px' }}
          h={{ base: '32px', sm: '32px', md: '85px', xl: '92px' }}
          rightWidth={{ base: '0', sm: '0', md: '234px', xl: '234px' }}
          borderRadius={'51px'}
          bg={'#fff'}
          alignItems={'center'}
          button={
            <ButtonGen display={{ base: 'none', sm: 'none', md: 'flex', xl: 'flex' }} width='90%' height='80%'>
              {t('search-btn')}
            </ButtonGen>
          }
        />
      </Box>
      <ButtonGen
        display={{ base: 'block', sm: 'block', md: 'none', xl: 'none' }}
        width='114px'
        mb={'15px'}
        height='27px'
        fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '16px' }}
      >
        {t('search-btn')}
      </ButtonGen>
    </Box>
  )
}

export default SearchPanel
