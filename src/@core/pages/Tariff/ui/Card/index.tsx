import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useLang } from '@/@core/shared/hooks/useLang'
import BoxGen from '@/@core/shared/UI/Box'
import ButtonGen from '@/@core/shared/UI/Button'
import { Box, Heading, Img, SimpleGrid, Text, useColorMode } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props = {
  title: string
  subtitle: string
  price: string
  active?: boolean
  options?: {
    title: string
    id: string | number
  }[]
}

type ITarifCard = {
  card: Props
}

const TarifCard: FC<ITarifCard> = props => {
  const { card } = props
  const { colorMode } = useColorMode()
  const { t } = useLang()

  return (
    <BoxGen
      display={'flex'}
      flexDirection={{ base: 'column', sm: 'column', md: 'row', xl: 'row' }}
      boxShadow='0px 20px 50px 0px rgba(0, 0, 0, 0.10)'
      borderRadius='16px'
    >
      <Box
        width={{ base: '100%', sm: '100%', md: '350px', xl: '350px' }}
        p={{ base: '10px', sm: '10px', md: '24px', xl: '24px' }}
        background={
          card.active
            ? colorMode === 'dark'
              ? scssVariables.mainColor
              : scssVariables.gradientColor
            : colorMode === 'dark'
            ? '#fff'
            : 'rgba(194, 229, 229, 1)'
        }
        color={card.active ? '#fff' : scssVariables.mainColor}
        borderRadius={{ base: '8px', sm: '8px', lg: '10px 0 0 10px', xl: '10px 0 0 10px' }}
        textAlign={'center'}
        display={'flex'}
        flexDirection='column'
        justifyContent='center'
      >
        <Heading fontSize={{ base: '18px', sm: '18px', md: '24px', xl: '24px' }} fontWeight={'600'}>
          {card.title}
        </Heading>
        <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }} fontWeight={'400'} mt={'10px'}>
          {card.subtitle}
        </Text>
        <Heading fontSize='4xl' marginTop={'8px'} fontWeight={600}>
          $ {new Intl.NumberFormat('en-IN').format(parseFloat(card.price))}
        </Heading>
      </Box>
      <Box
        width={{ base: '100%', sm: '100%', md: 'calc(100% - 350px)', xl: 'calc(100% - 350px)' }}
        display={'flex'}
        flexDirection={'column'}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, xl: 3 }}
          p={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }}
          gap={'16px'}
        >
          {/* MAPPING OPTIONS */}
          {card.options?.map(option => (
            <Box
              key={option.id}
              display={'flex'}
              gap={'8px'}
              justifyContent={{ base: 'center', sm: 'center', md: 'flex-start', xl: 'flex-start' }}
            >
              <Img src='/check.svg' alt='Check icon' width={{ base: '16px', sm: '16px', md: '20px', xl: '20px' }} />
              <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}>{option.title}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Box
          className='button-part'
          borderTop={'1px solid rgba(0, 0, 0, 0.1)'}
          p={{ base: '10px', sm: '10px', md: '16px', xl: '16px' }}
          display={'flex'}
          alignItems={'center'}
          justifyContent={{ base: 'center', sm: 'center', md: 'flex-end', xl: 'flex-end' }}
        >
          <ButtonGen radius='8px' height='40px' fontSize={scssVariables.fonts.paragraph}>
            {t('buy-button')}
          </ButtonGen>
        </Box>
      </Box>
    </BoxGen>
  )
}
export default TarifCard
