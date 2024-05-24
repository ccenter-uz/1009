'use client'
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  PinInput,
  PinInputField,
  SimpleGrid,
  StyleFunctionProps,
  Text
} from '@chakra-ui/react'
import { FC, startTransition, useCallback, useState } from 'react'
import CountDown from '@/@core/shared/UI/CountDown'
import { useForm } from 'react-hook-form'
import { useLang } from '@/@core/shared/hooks/useLang'
import { useFormStatus } from 'react-dom'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { toast } from 'react-toastify'
import { api } from '@/@core/apps/utils/api'
import { UserSettingPhoneAction } from '../../api/changePhone'

const SettingChangePhone: FC<Partial<StyleFunctionProps>> = ({ styles }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm()
  const { t } = useLang()
  const { pending } = useFormStatus()
  const [code, setCode] = useState<boolean>(false)
  const [resendButton, setResendButton] = useState<boolean>(true)
  const [initialTime, setInitialTime] = useState<number[]>([60])
  const [pin, setPin] = useState<string>('')

  // handlePhoneFinish
  const handlePhoneFinish = async (values: any) => {
    if (values !== 'undefined' || values !== '') {
      const res = await UserSettingPhoneAction(values)
      if (!res) return
      if (res.status === 200) {
        console.log(res.message, 'res')
        setTimeout(() => {
          setCode(prevState => !prevState)
        }, 2500)
      }
    }
  }

  // handleFinishTime
  const handleFinishTime = useCallback(() => {
    startTransition(() => {
      setResendButton(false)
    })
  }, [])

  // handleResendCode
  const handleResendCode = async () => {
    const res = await UserSettingPhoneAction(getValues('phone_number'))
    if (!res) return
    if (res.status === 200) {
      console.log(res.message, 'res')
      setResendButton(true)
      setInitialTime(prevState => [...prevState])
    }
  }

  // handleSendCode
  const handleSendCode = async () => {
    if (pin === 'undefined' || (pin === '' && pin.length < 5))
      return toast.warn('Pin must not be empty and must containt minimum 6 letters', { position: 'bottom-right' })

    const res = await api.post('/example.com', { pin })
    if (!res) return
    if (res.status === 200) {
      console.log('send-code-api-finished')
    }
  }

  return (
    <form id='phone-number-form' onSubmit={handleSubmit(handlePhoneFinish)}>
      <Divider style={{ color: 'lightgrey' }} my={{ base: '0.5em', sm: '0.5em', md: '1.5em', xl: '1.5em' }} />
      <Text {...styles.textStyle}>Изменить номер телефона пользователя</Text>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 2 }} gap={{ base: '0', sm: '0', md: '24px', xl: '24px' }}>
        <FormControl {...styles.formControlStyle}>
          <FormLabel {...styles.labelStyle} htmlFor='phone-setting'>
            Номер телефона:
          </FormLabel>
          <Input
            {...styles.inputStyle}
            {...register('phone_number', { minLength: 12 })}
            type='number'
            aria-label='phone_number'
            aria-invalid={errors.phone_number ? 'true' : 'false'}
            id='phone-setting'
            isDisabled={pending}
          />
          {errors.phone_number && (
            <Text color={'red'} fontSize={'12px'}>
              This field must contain minimum 12 letters
            </Text>
          )}
        </FormControl>
        {code && (
          <FormControl
            {...styles.formControlStyle}
            w={{ base: '100%', sm: '100%', md: 'fit-content', xl: 'fit-content' }}
          >
            <FormLabel {...styles.labelStyle} htmlFor='code-setting'>
              Введите смс код:
            </FormLabel>
            <HStack>
              <PinInput aria-label='pin' size='sm' onComplete={value => setPin(value)}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            {errors.confirm_code && (
              <Text color={'red'} fontSize={'12px'}>
                This field must contain minimum 6 letters
              </Text>
            )}
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
              Изменить номер
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
              Отправить код
            </Button>
          </FormControl>
        )}
      </SimpleGrid>
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
          Сохранить
        </Button>
      </Box>
    </form>
  )
}

export default SettingChangePhone
