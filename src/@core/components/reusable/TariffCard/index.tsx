import { FC } from 'react'
import ButtonGen from '../Button'
import { Box, Heading, Img, Text } from '@chakra-ui/react'
import { scssVariables } from '../../../utils/scss-variables'
import { useLang } from '@/@core/service/hooks/useLang'

type IOption = {
  id: number
  value: string
}

type ITarrifCard = {
  title: string
  active?: boolean
  options: IOption[] | []
  price: string
}

const TariffCard: FC<ITarrifCard> = ({ title, active, options, price }) => {
  const { t } = useLang()

  return (
    <Box
      width={'100%'}
      maxW={'433px'}
      borderRadius={'15px'}
      minH={{ base: 'max-content', sm: 'max-content', md: '', xl: '534px' }}
      boxShadow={scssVariables.boxShadow}
      bg={'#fff'}
    >
      <Box
        borderRadius={'10px 10px 0 0'}
        bgImage={active ? scssVariables.gradientColor : ''}
        bg={!active ? scssVariables.blockBgColor : ''}
      >
        <Text
          fontSize={{ base: '16px', sm: '16px', md: '18px', xl: '24px' }}
          fontWeight={600}
          textAlign={'center'}
          padding={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }}
          color={active ? '#fff' : scssVariables?.mainColor}
        >
          {title}
        </Text>
      </Box>
      <Box padding={{ base: '28px 50px', sm: '28px 50px', md: '48px 84px 60px', xl: '48px 84px 76px' }}>
        <Text
          fontSize={{ base: '12px', sm: '12px', md: '12px', xl: '16px' }}
          fontWeight={600}
          textAlign={'center'}
          color={'#64748b'}
        >
          {t('tariffs-pre-title')}
        </Text>

        <Heading
          fontSize={{ base: '34px', sm: '34px', md: '48px', xl: '48px' }}
          fontWeight={700}
          textAlign={'center'}
          color={'#009393'}
        >
          ${price}
        </Heading>
        <Box
          pt={{ base: '20px', sm: '20px', md: '40px', xl: '40px' }}
          mb={{ base: '50px', sm: '50px', md: '80px', xl: '112px' }}
          display={'flex'}
          flexDirection={'column'}
          gap={{ base: '1', sm: '1', md: '2', xl: '2' }}
        >
          {options.map((option: IOption) => {
            return (
              <Box key={option.id}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={{ base: '1', sm: '1', md: '2', xl: '2' }}
                >
                  <Img src='/check.svg' alt='check icon' width={{ base: 15, sm: 15, md: 21, xl: 21 }} height={21} />
                  <Text
                    fontSize={{ base: '12px', sm: '12px', md: '15px', xl: '15px' }}
                    textAlign={'center'}
                    color={'#64748b'}
                  >
                    {option.value}
                  </Text>
                </Box>
              </Box>
            )
          })}
        </Box>
        <ButtonGen
          display={'block'}
          width={{ base: '200px', sm: '200px', md: '', xl: '243px' }}
          height={{ base: '45px', sm: '45px', md: '67px', xl: '67px' }}
          margin={'0 auto'}
          fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '24px' }}
          fontWeight={500}
        >
          {t('tariffs-btn')}
        </ButtonGen>
      </Box>
    </Box>
  )
}

export default TariffCard
