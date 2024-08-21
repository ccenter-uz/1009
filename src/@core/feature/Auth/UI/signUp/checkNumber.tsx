import { Box, Button, FormControl, FormLabel, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react'
import { FC, startTransition, useCallback, useEffect, useState } from 'react'
import { useLang } from '@/@core/shared/hooks/useLang'
import ButtonGen from '@/@core/shared/UI/Button'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import CountdownTimer from '@/@core/shared/UI/CountDown'
import TextGen from '@/@core/shared/UI/Text'
import { toast } from 'react-toastify'
import { Iuser } from '../../types'
import { useRouter } from 'next/navigation'
import { patchResendCode, postVerifyUserCode } from '@/@core/shared/api'

const CheckNumber: FC = () => {
  const { t } = useLang()
  const [pin, setPin] = useState<string>('')
  const [pending, setPending] = useState<boolean>(false)
  const [resendDisable, setResendDisable] = useState<boolean>(true)
  const [initialSecond, setInitialSecond] = useState<number[]>([60])
  const [user, setUser] = useState<Iuser>({} as Iuser)
  const router = useRouter()

  // send Pin to api
  const handleComplete = async () => {
    if (pin === 'undefined' || (pin === '' && pin.length < 3))
      return toast.warn('Pin must not be empty and must containt minimum 6 letters', { position: 'bottom-right' })
    setPending(true)
    const res = await postVerifyUserCode({
      pin,
      userId: user?.userId as string
    })
    if (!res) return setPending(false)

    res.status === 200 && (setPending(false), sessionStorage.clear(), router.push('/signin', { replace: true }))

    return setPending(false)
  }

  // handleReSend
  const handleReSend = async () => {
    const res = await patchResendCode(user?.userId as string)

    if (!res) return null
    res?.status === 200 &&
      startTransition(() => {
        setInitialSecond(prev => [...prev])
        setResendDisable(true)
        setUser(res?.data)
        sessionStorage.setItem('checkNumber', JSON.stringify(res?.data))
      })
  }

  // handleFinishTime
  const handleFinishTime = useCallback(async () => {
    setResendDisable(false)
  }, [])

  // LOAD
  useEffect(() => {
    if (window !== undefined) {
      const user = JSON.parse(sessionStorage.getItem('checkNumber') as string)
      setPin(JSON.parse(sessionStorage.getItem('checkNumber') as string)?.smsCode)
      setUser(user)
    }
  }, [])

  return (
    <form id='checkNumber'>
      <FormControl>
        <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-check-number')}</FormLabel>
        <HStack>
          <PinInput
            isDisabled={pending}
            value={String(pin)}
            aria-label='pin'
            size='md'
            autoFocus
            onComplete={value => setPin(value)}
          >
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </FormControl>
      <Box my={'16px'} w={{ base: '', sm: '', md: '', xl: '264px' }}>
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
