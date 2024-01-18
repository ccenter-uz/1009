'use client'
import ButtonGen from '@/@core/components/reusable/Button'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Heading, Image, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const AddOrganization: FC = () => {
  const { colorMode } = useColorMode()
  const { t } = useLang()

  return (
    <Box
      className='wrapper'
      display={'flex'}
      flexDirection={{ base: 'column', sm: 'column', md: 'column', xl: 'row' }}
      alignItems={'center'}
      position={'relative'}
      h={{ base: 'max-content', sm: 'max-content', md: 'max-content', xl: '469px' }}
      p={'16px 18px'}
      mt={{ base: '48px', sm: '48px', md: '', xl: '207px' }}
      bg={colorMode === 'dark' ? scssVariables.darkBg : scssVariables.mainColor}
      gap={{ base: '26px 0', sm: '26px 0', md: '50px 0', xl: '0 244px' }}
    >
      <Box
        w={'100%'}
        maxW={{ md: '100%', xl: '735px' }}
        h={'100%'}
        display={{ base: 'none', sm: 'none', md: 'none', xl: 'block' }}
      >
        <Image
          src='/addOrganization/img.png'
          alt='girl-laptop'
          position={'absolute'}
          top={{ md: '0', xl: '-7.3rem' }}
          bottom={0}
          left={0}
        />
      </Box>
      <Box
        w={'100%'}
        maxW={{ base: '100%', sm: '100%', md: '80%', xl: '620px' }}
        h={'100%'}
        p={{ base: '', sm: '', md: '', xl: '40px 0' }}
        display={'flex'}
        flexDirection={'column'}
      >
        <Heading
          fontSize={{ base: '20px', sm: '20px', md: '32px', xl: '32px' }}
          textAlign={{ base: 'center', sm: 'center', md: 'left', xl: 'left' }}
          fontWeight={600}
          color={'white'}
        >
          {t('add-organization')}
        </Heading>
        <Text
          m={{ base: '24px 0', sm: '24px auto', md: '24px 0 59px 0', xl: '24px 0 59px 0' }}
          fontSize={{ base: '13px', sm: '13px', md: '20px', xl: '20px' }}
          fontWeight={400}
          color={'white'}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
        </Text>
        <ButtonGen
          width={{ base: '285px', sm: '285px', md: '400px', xl: '420px' }}
          height={{ base: '40px', sm: '40px', md: '60px', xl: '67px' }}
          bgImage={'linear-gradient(176.62deg, #67FFE4 -30.13%, #0DC4B8 118.94%)'}
          radius={{ base: '9px', sm: '9px', md: '20px', xl: '21px' }}
          fontSize={{ base: '16px', sm: '16px', md: '18px', xl: '20px' }}
          fontWeight={'500'}
          m={{ base: 'auto', sm: 'auto', md: '0', xl: '0' }}
        >
          {t('add-organization')}
        </ButtonGen>
      </Box>
      <Box w={'100%'} display={{ base: 'block', sm: 'block', md: 'block', xl: 'none' }}>
        <Image
          h={'100%'}
          src='/addOrganization/picture-small.png'
          alt='girl-laptop'
          position={'relative'}
          bottom={'-1rem'}
          left={0}
        />
      </Box>
    </Box>
  )
}

export default AddOrganization
