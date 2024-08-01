'use client'
import { Box, Button, FormControl, FormLabel, Input, StyleFunctionProps, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useFormStatus } from 'react-dom'
import { UserSettingAction } from '../../api/changeData'
import { useLang } from '@/@core/shared/hooks/useLang'

const SettingChangeData: FC<Partial<StyleFunctionProps>> = ({ styles }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { pending } = useFormStatus()
  const { t } = useLang()

  // handleFinish
  const handleFinish = async (values: any) => {
    const res = await UserSettingAction(values)
    if (!res) return
    if (res.status === 200) {
      console.log(res.message, 'res')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFinish)} id='setting-form'>
      <FormControl {...styles.formControlStyle}>
        <FormLabel {...styles.labelStyle} htmlFor='fio-setting'>
          {t('auth-regis-fio')}
        </FormLabel>
        <Input
          {...styles.inputStyle}
          {...register('full_name', { minLength: 3 })}
          aria-label='full_name'
          aria-invalid={errors.full_name ? 'true' : 'false'}
          id='fio-setting'
          type='text'
          isDisabled={pending}
        />
        {errors.full_name && (
          <Text color={'red'} fontSize={'12px'}>
            {t('auth-regis-fio-error')}
          </Text>
        )}
      </FormControl>
      <FormControl {...styles.formControlStyle}>
        <FormLabel {...styles.labelStyle} htmlFor='oldPassword-setting'>
          {t('old-password')}
        </FormLabel>
        <Input
          {...styles.inputStyle}
          {...register('old_password', { minLength: 3 })}
          autoComplete='off'
          aria-label='old_password'
          aria-invalid={errors.old_password ? 'true' : 'false'}
          id='oldPassword-setting'
          type='password'
          isDisabled={pending}
        />
        {errors.old_password && (
          <Text color={'red'} fontSize={'12px'}>
            {t('auth-password-error')}
          </Text>
        )}
      </FormControl>
      <FormControl {...styles.formControlStyle}>
        <FormLabel {...styles.labelStyle} htmlFor='newPassword-setting'>
          {t('new-password')}
        </FormLabel>
        <Input
          {...styles.inputStyle}
          {...register('new_password', { minLength: 3 })}
          autoComplete='off'
          aria-label='new_password'
          aria-invalid={errors.new_password ? 'true' : 'false'}
          id='newPassword-setting'
          type='password'
          isDisabled={pending}
        />
        {errors.new_password && (
          <Text color={'red'} fontSize={'12px'}>
            {t('auth-password-error')}
          </Text>
        )}
      </FormControl>
      <Box {...styles.buttonBoxStyle} aria-label='submit'>
        <Button {...styles.buttonStyle} isLoading={pending} type='submit' form='setting-form'>
          {t('save')}
        </Button>
      </Box>
    </form>
  )
}

export default SettingChangeData
