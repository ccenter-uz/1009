'use client'
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  PinInput,
  PinInputField,
  SimpleGrid,
  StyleFunctionProps,
  Text
} from '@chakra-ui/react'
import { ChangeEvent, FC, startTransition, useCallback, useState } from 'react'
import CountDown from '@/@core/shared/UI/CountDown'
import { useForm } from 'react-hook-form'
import { useLang } from '@/@core/shared/hooks/useLang'
import { useFormStatus } from 'react-dom'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { toast } from 'react-toastify'
import { patchChangeSettingPhone, patchPhoneChangeVerify, patchResendCode } from '@/@core/shared/api'
import ReactInputMask from 'react-input-mask'
import Cookies from 'js-cookie'
import { useGlobalStore } from '@/@core/apps/store/global'

const SettingChangePhone: FC<Partial<StyleFunctionProps>> = ({ styles }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm()
  const { t } = useLang()
  const { pending } = useFormStatus()
  const { userInfo } = useGlobalStore()
  const [code, setCode] = useState<boolean>(false)
  const [resendButton, setResendButton] = useState<boolean>(true)
  const [initialTime, setInitialTime] = useState<number[]>([60])
  const [pin, setPin] = useState<string>('')

  // FINISH
  const handlePhoneFinish = async (values: any) => {
    const res = await patchChangeSettingPhone(values)

    res?.status === 200 && setCode(true)
  }

  // TIME'S-UP
  const handleFinishTime = useCallback(() => {
    startTransition(() => {
      setResendButton(false)
    })
  }, [])

  // RESEND-CODE
  const handleResendCode = async () => {
    const res = await patchResendCode(userInfo?.id)
    res?.status === 200 && (setResendButton(true), setInitialTime(prevState => [...prevState]))
  }

  // SEND-CODE
  const handleSendCode = async (e: ChangeEvent<HTMLButtonElement>) => {
    if (pin === 'undefined' || (pin === '' && pin.length < 5)) {
      return toast.warn('Pin must not be empty and must containt minimum 6 letters', { position: 'bottom-right' })
    } else {
      e.stopPropagation()
      const res = await patchPhoneChangeVerify({ number: getValues('number'), smsCode: pin })

      res?.status === 200 &&
        (setCode(false),
        Cookies.set('access_token', res?.data?.token, { secure: true }),
        toast.success(t('success'), { position: 'bottom-right' }))
    }
  }

  return (
    <>
      <form id='phone-number-form' onSubmit={handleSubmit(handlePhoneFinish)}>
        <Divider style={{ color: 'lightgrey' }} my={{ base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1.5em' }} />
        <Text {...styles.textStyle}>{t('change-setting-phone')}</Text>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 2 }} gap={{ base: '0', sm: '0', md: '24px', xl: '24px' }}>
          <FormControl {...styles.formControlStyle} isInvalid={!!errors.number}>
            <FormLabel {...styles.labelStyle} htmlFor='phone-setting'>
              {t('phone')}:
            </FormLabel>
            <Input
              as={ReactInputMask}
              mask='+(998)99 999-99-99'
              {...styles.inputStyle}
              {...register('number', { required: true, minLength: 12 })}
              aria-label='number'
              aria-invalid={errors.number ? 'true' : 'false'}
              id='phone-setting'
              isDisabled={pending}
            />
            <FormErrorMessage color={'red'} fontSize={'12px'}>
              {t('error-number')}
            </FormErrorMessage>
          </FormControl>
          {code && (
            <FormControl
              {...styles.formControlStyle}
              w={{ base: '100%', sm: '100%', md: 'fit-content', xl: 'fit-content' }}
              isInvalid={!!errors.confirm_code}
            >
              <FormLabel {...styles.labelStyle} htmlFor='code-setting'>
                {t('code')}:
              </FormLabel>
              <HStack>
                <PinInput aria-label='pin' size='sm' onComplete={value => setPin(value)}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              <FormErrorMessage color={'red'} fontSize={'12px'}>
                {t('error-code')}
              </FormErrorMessage>
              <CountDown initialTime={initialTime} onFinish={handleFinishTime} />
              <Button
                display={'block'}
                aria-label={t('auth-rerecieve-code')}
                variant='link'
                isDisabled={resendButton}
                cursor={'pointer'}
                color={scssVariables.primary}
                onClick={handleResendCode}
                fontSize={'14px'}
                fontWeight={400}
              >
                {t('auth-rerecieve-code')}
              </Button>
              <Button
                display={'block'}
                variant='link'
                aria-label={'change-number'}
                cursor={'pointer'}
                color={'gray'}
                onClick={() => setCode(false)}
                fontSize={'14px'}
                fontWeight={400}
              >
                {t('change-phone')}
              </Button>
            </FormControl>
          )}
          {!code && (
            <FormControl
              display={'flex'}
              alignItems={'flex-end'}
              {...styles.formControlStyle}
              w={{ base: '100%', sm: '100%', md: '200px', xl: '200px' }}
            >
              <Button
                w={{ base: '100%', sm: '100%', md: '200px', xl: '200px' }}
                {...styles.buttonStyle}
                isLoading={pending}
                type='submit'
                form='phone-number-form'
              >
                {t('send-code')}
              </Button>
            </FormControl>
          )}
        </SimpleGrid>
      </form>
      <Box
        {...styles.buttonBoxStyle}
        style={
          code
            ? { opacity: 1, transition: 'all 0.3s linear', visibility: 'visible' }
            : { opacity: 0, transition: 'all 0.3s linear', visibility: 'hidden' }
        }
        aria-label='submit'
      >
        <Button {...styles.buttonStyle} isLoading={pending} onClick={handleSendCode}>
          {t('save')}
        </Button>
      </Box>
    </>
  )
}

export default SettingChangePhone
