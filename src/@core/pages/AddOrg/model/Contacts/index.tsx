import { FC, useState } from 'react'
import { MODEL_FORM_INCOME } from '../../types'
import { Box, Button, IconButton, Img, Input, Select } from '@chakra-ui/react'
import { AddorgAccordionInputs } from '@/@core/entities/AddorgAccordionInputs'
import { useLang } from '@/@core/shared/hooks/useLang'
import XmarkIcon from '@/@core/shared/UI/Xmark'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { AddorgFormInput } from '@/@core/entities/AddorgFormInput'
import { Maps } from '@/@core/shared/UI/Map'

export const AddOrgContacts: FC<MODEL_FORM_INCOME> = props => {
  const { register, errors } = props
  const { t } = useLang()
  const [numbers, setNumbers] = useState([{ id: 1, value: '' }])

  // ADD-NUMBER
  const addNumber = () => {
    setNumbers([...numbers, { id: Date.now(), value: '' }])
  }

  // DELETE
  const handleDelete = (id: number) => {
    setNumbers(numbers.filter((number: any) => number.id !== id))
  }

  return (
    <Box>
      <AddorgAccordionInputs label={t('auth-phone')}>
        <Box mb={{ base: '10px', sm: '10px', md: '16px', xl: '16px' }}>
          {numbers.map(number => (
            <Box key={number.id} mb={'8px'} display={'flex'} alignItems={'center'} gap={'8px'}>
              <Input
                _focus={{ border: '1px solid teal', boxShadow: `0 0 2px ${scssVariables.blockBgColor}` }}
                type='text'
                h={{ base: '30px', sm: '30', md: '40px', xl: '40px' }}
                fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}
                p={{ base: '5px 10px', sm: '5px 10px', md: '10px 16px', xl: '10px 16px' }}
              />
              <Select
                _focus={{ border: '1px solid teal', boxShadow: `0 0 2px ${scssVariables.blockBgColor}` }}
                variant='outline'
                h={{ base: '30px', sm: '30', md: '40px', xl: '40px' }}
                fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}
              >
                <option value='mobile'>{t('mobile-phone')}</option>
                <option value='home'>{t('home-phone')}</option>
              </Select>
              <IconButton
                onClick={() => handleDelete(number.id)}
                aria-label='delete'
                icon={<XmarkIcon />}
                h={{ base: '30px', sm: '30', md: '40px', xl: '40px' }}
              />
            </Box>
          ))}
        </Box>
        <Button
          onClick={addNumber}
          w={'100%'}
          variant={'outline'}
          leftIcon={
            <Img
              src='/add.svg'
              alt='add'
              w={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }}
              h={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }}
            />
          }
          h={{ base: '30px', sm: '30', md: '40px', xl: '40px' }}
          fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}
        >
          {t('add-number')}
        </Button>
      </AddorgAccordionInputs>

      <AddorgFormInput
        register={register}
        errors={errors}
        value='email'
        placeholder={'bahor@gmail.com'}
        minLength={3}
        maxLength={100}
        required
        label={t('email')}
        errortext={t('required-field')}
      />
      <AddorgFormInput register={register} errors={errors} value='index' placeholder={'10000'} label={t('index')} />

      <AddorgAccordionInputs
        register={register}
        errors={errors}
        label={t('address')}
        inputs={[
          {
            id: 1,
            value: 'region',
            placeholder: t('region')
          },
          {
            id: 2,
            value: 'city',
            placeholder: t('city'),
            required: true,
            minLength: 3,
            maxLength: 100,
            errortext: t('required-field')
          },
          {
            id: 3,
            value: 'area',
            placeholder: t('area')
          },
          {
            id: 4,
            value: 'house',
            placeholder: t('house')
          },
          {
            id: 5,
            value: 'block',
            placeholder: t('block')
          },
          {
            id: 6,
            value: 'apartment',
            placeholder: t('apartment')
          }
        ]}
      />
      <Maps />
    </Box>
  )
}
