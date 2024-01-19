import { Box, FormControl, FormLabel, HStack, PinInput, PinInputField, Text, useColorMode } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'
import ButtonGen from '../../reusable/Button'
import { scssVariables } from '@/@core/utils/scss-variables'
import { api } from '@/@core/utils/api'

const CheckNumber: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()
  const [pin, setPin] = useState<number | string>()

  const handleComplete = async () => {
    console.log(pin, 'values')
  }

  // handleReSend
  const handleReSend = async () => {
    try {
      const body = sessionStorage.getItem('user')
      const res = await api.post('example/', body)
      console.log(res, 'res')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form id='checkNumber'>
      <FormControl>
        <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-check-number')}</FormLabel>
        <HStack>
          <PinInput size='md' onComplete={value => setPin(value)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </FormControl>
      <ButtonGen
        onClick={handleComplete}
        form='form-regis'
        width={'100%'}
        radius={'5px'}
        height={'35px'}
        my={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }}
        fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}
        fontWeight={500}
        type='submit'
      >
        {t('auth-submit')}
      </ButtonGen>
      <Box>
        <Text color={colorMode === 'light' ? 'grey' : '#fff'} fontSize={'14px'}>
          {t('auth-not-recieved-code')}
        </Text>
        <Text
          onClick={handleReSend}
          cursor={'pointer'}
          _hover={{ opacity: '0.7' }}
          color={scssVariables.primary}
          fontSize={'14px'}
        >
          {t('auth-rerecieve-code')}
        </Text>
      </Box>
    </form>
  )
}

export default CheckNumber
