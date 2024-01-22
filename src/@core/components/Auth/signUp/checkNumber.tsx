import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  PinInput,
  PinInputField,
  Text,
  useColorMode
} from '@chakra-ui/react'
import { FC, startTransition, useCallback, useState } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'
import ButtonGen from '../../reusable/Button'
import { scssVariables } from '@/@core/utils/scss-variables'
import { api } from '@/@core/utils/api'
import CountdownTimer from '../../CountDown'
import { Iuser } from '@/@core/service/types/types'

const CheckNumber: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()
  const [pin, setPin] = useState<number | string>()
  const [resendDisable, setResendDisable] = useState<boolean>(true)
  const [initialSecond, setInitialSecond] = useState<number[]>([60])
  const user: Iuser = JSON.parse(sessionStorage.getItem('user') || '')

  const handleComplete = async () => {
    console.log(pin, 'values')
  }

  // handleReSend
  const handleReSend = async () => {
    try {
      const body = user
      const res = await api.post('example/', body)
      console.log(res, 'res')
    } catch (err) {
      console.log(err)
    } finally {
      startTransition(() => {
        setInitialSecond(prev => [...prev])
        setResendDisable(true)
      })
    }
  }

  // handleFinishTime
  const handleFinishTime = useCallback(async () => {
    setResendDisable(false)
  }, [])

  // changeToStar
  const changeToStar = useCallback(() => {
    const phone = user.phone.split('')
    for (let i = 0; i < phone.length - 4; i++) {
      phone[i] = '*'
    }

    return phone
  }, [user])

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
      <Box my={'16px'} w={{ base: '', sm: '', md: '', xl: '264px' }}>
        <Text
          mb={'12px'}
          textAlign={'center'}
          color={scssVariables.textGreyColor}
          fontSize={{ base: '14px', sm: '14px', md: '14px', xl: '16px' }}
        >
          {changeToStar()}
        </Text>
        <Text mb={'14px'} color={scssVariables.textGreyColor} fontSize={'12px'}>
          {t('notificaton-number')}
        </Text>
        <CountdownTimer initialTime={initialSecond} onFinish={handleFinishTime} />
      </Box>
      <ButtonGen
        onClick={handleComplete}
        form='form-regis'
        width={'100%'}
        radius={'5px'}
        height={'35px'}
        mb={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }}
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
        <Button
          variant='link'
          isDisabled={resendDisable}
          onClick={handleReSend}
          cursor={'pointer'}
          color={scssVariables.primary}
          fontSize={'14px'}
        >
          {t('auth-rerecieve-code')}
        </Button>
      </Box>
    </form>
  )
}

export default CheckNumber
