'use client'
import ButtonGen from '@/@core/components/reusable/Button'
import InputGen from '@/@core/components/reusable/Input'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Heading, Image, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const Questionier: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()

  return (
    <Box
      height={{ base: '328px', sm: '328px', md: '827px', xl: '827px' }}
      bg={colorMode !== 'dark' ? scssVariables.questionBg : scssVariables.darkBg}
    >
      <Box className='wrapper'>
        <Heading
          p={{ base: '16px 0', sm: '16px 0', md: '62px 0 40px', xl: '72px 0 45px' }}
          fontSize={scssVariables.fonts.titleSize}
          fontWeight={600}
          color={scssVariables.mainColor}
          textAlign={'center'}
        >
          {t('question-title')}
        </Heading>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} gap={'0 34px'}>
          <Image
            w={{ base: '131px', sm: '131px', md: 'auto', xl: 'auto' }}
            h={{ base: '257px', sm: '257px', md: 'auto', xl: 'auto' }}
            src='/question/Mobile.png'
            alt='mobile'
            transition={'all 0.3s ease'}
            _hover={{ transform: 'rotate(-5deg) scale(1.1)' }}
          />
          <Box width={{ base: 'auto', sm: 'auto', md: 'auto', xl: '502px' }} height={'100%'}>
            <Heading fontWeight={700} fontSize={{ base: '18px', sm: '18px', md: '35px', xl: '40px' }}>
              {t('question-callback')}
            </Heading>
            <Text
              display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }}
              py={{ base: '10px', sm: '10px', md: '24px', xl: '24px' }}
            >
              {t('question-p')}
            </Text>
            <Text
              fontSize={{ base: '13px', sm: '13px', md: '20px', xl: '20px' }}
              fontWeight={600}
              color={scssVariables.mainColor}
              py={{ base: '10px', sm: '10px', md: '24px', xl: '24px' }}
            >
              {t('question-leed')}
            </Text>
            <InputGen
              height={{ base: '35px', sm: '35px', md: '60px', xl: '78px' }}
              fontSize={{ base: '10px', sm: '10px', md: '14px', xl: '14px' }}
              borderRadius={'37px'}
              border={'none'}
              boxShadow={scssVariables.boxShadow}
              p={{ base: '15px', sm: '15px', md: '', xl: '28px 37px' }}
              id='email'
              bg={'#fff'}
              placeholder={t('question-input-placeholder')}
              rightWidth={{ base: '0', sm: '0', md: '176px', xl: '176px' }}
              button={
                <ButtonGen
                  display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }}
                  width={'95%'}
                  height={'85%'}
                >
                  {t('send-btn')}
                </ButtonGen>
              }
            />
            <ButtonGen
              display={{ base: 'block', sm: 'block', md: 'none', xl: 'none' }}
              height={'28px'}
              width={'91px'}
              fontSize={'10px'}
              m={'10px auto'}
            >
              {t('send-btn')}
            </ButtonGen>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Questionier
