import { Box, Button, FormControl, FormLabel, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react'
import { FC, startTransition, useCallback, useState } from 'react'
import { useLang } from '@/@core/shared/hooks/useLang'
import ButtonGen from '@/@core/shared/UI/Button'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import CountdownTimer from '@/@core/shared/UI/CountDown'
import TextGen from '@/@core/shared/UI/Text'
import { toast } from 'react-toastify'
import { CheckNumberSend } from '../../api/checknum'
import { Iuser } from '../../types'
import { Regis } from '../../api/regis'
import { useRouter } from 'next/navigation'

const CheckNumber: FC = () => {
  const { t } = useLang()
  const [pin, setPin] = useState<string>('')
  const [pending, setPending] = useState<boolean>(false)
  const [resendDisable, setResendDisable] = useState<boolean>(true)
  const [initialSecond, setInitialSecond] = useState<number[]>([60])
  const user: Iuser = JSON.parse(sessionStorage.getItem('user') || '')
  const router = useRouter()

  // send Pin to api
  const handleComplete = async () => {
    if (pin === 'undefined' || (pin === '' && pin.length < 5))
      return toast.warn('Pin must not be empty and must containt minimum 6 letters', { position: 'bottom-right' })
    setPending(true)
    const res = await CheckNumberSend({ pin })
    if (!res) return setPending(false)
    if (res.status === 200) {
      setPending(false)
      console.log(res.message, 'res')
      router.push('/signin', { replace: true })
    }
    if (res.status === 400) return toast.error('Something went wrong', { position: 'bottom-right' }), setPending(false)

    return setPending(false)
  }

  // handleReSend
  const handleReSend = async () => {
    const res = await Regis(user)

    if (!res) return
    if (res.status === 200) {
      console.log('Code has been sent')
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
          <PinInput isDisabled={pending} aria-label='pin' size='md' onComplete={value => setPin(value)}>
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
        <Text aria-label={t('notificaton-number')} mb={'14px'} color={scssVariables.textGreyColor} fontSize={'12px'}>
          {t('notificaton-number')}
        </Text>
        <CountdownTimer initialTime={initialSecond} onFinish={handleFinishTime} />
      </Box>
      <ButtonGen
        isLoading={pending}
        aria-label={t('auth-submit')}
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
        <TextGen fontSize={'14px'}>{t('auth-not-recieved-code')}</TextGen>
        <Button
          aria-label={t('auth-rerecieve-code')}
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
