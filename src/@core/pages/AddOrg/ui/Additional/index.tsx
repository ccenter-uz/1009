import { FC } from 'react'
import { MODEL_FORM_INCOME } from '../../model/types'
import { Box, Flex, Input, Stack, Text } from '@chakra-ui/react'
import { AddorgAccordionInputs } from '@/@core/entities/AddorgAccordionInputs'
import { useLang } from '@/@core/shared/hooks/useLang'

export const AddOrgAdditional: FC<MODEL_FORM_INCOME> = props => {
  const { register, errors } = props
  const { t } = useLang()

  return (
    <Box>
      <AddorgAccordionInputs label={t('payment-methods')}>
        <Stack>
          <Flex align={'center'} gap={'10px'}>
            <input type='checkbox' id='cash' {...register('cash', { required: true })} />
            <label style={{ userSelect: 'none' }} htmlFor='cash'>
              {t('cash')}
            </label>
          </Flex>
          <Flex align={'center'} gap={'10px'}>
            <input type='checkbox' id='terminal' {...register('terminal')} />
            <label style={{ userSelect: 'none' }} htmlFor='terminal'>
              {t('terminal')}
            </label>
          </Flex>
          <Flex align={'center'} gap={'10px'}>
            <input type='checkbox' id='transfer' {...register('transfer')} />
            <label style={{ userSelect: 'none' }} htmlFor='transfer'>
              {t('transfer')}
            </label>
          </Flex>
        </Stack>
        {errors.cash && (
          <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }} color={'red'}>
            {t('required-field')}
          </Text>
        )}
      </AddorgAccordionInputs>
      <AddorgAccordionInputs label={t('work-time')}>
        <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={'8px'}>
            <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }} color={'grey'}>
              {t('times')}
            </Text>
            {errors.worktime_to && errors.worktime_from && (
              <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }} color={'red'}>
                {t('required-time')}
              </Text>
            )}
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={'8px'}>
            <Input
              {...register('worktime_from', { required: true })}
              p={{ base: '5px 10px', sm: '5px,10px', md: '12px 16px', xl: '12px 16px' }}
              fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
              h={{ base: '30px', sm: '30px', md: '45px', xl: '45px' }}
              border={'1px solid rgba(0,0,0,0.10)'}
              _hover={{ bg: '#fff' }}
              _focus={{ boxShadow: 'none', border: '1px solid teal' }}
              bg={'#fff'}
              cursor={'pointer'}
              type={'time'}
            />
            <Input
              {...register('worktime_to', { required: true })}
              p={{ base: '5px 10px', sm: '5px,10px', md: '12px 16px', xl: '12px 16px' }}
              fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
              h={{ base: '30px', sm: '30px', md: '45px', xl: '45px' }}
              border={'1px solid rgba(0,0,0,0.10)'}
              _hover={{ bg: '#fff' }}
              _focus={{ boxShadow: 'none', border: '1px solid teal' }}
              bg={'#fff'}
              cursor={'pointer'}
              type={'time'}
            />
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={'8px'}>
            <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }} color={'grey'}>
              {t('breakfast-time')}
            </Text>
            {errors.breakfast_to && errors.breakfast_from && (
              <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }} color={'red'}>
                {t('required-time')}
              </Text>
            )}
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={'8px'}>
            <Input
              {...register('breakfast_from', { required: true })}
              p={{ base: '5px 10px', sm: '5px,10px', md: '12px 16px', xl: '12px 16px' }}
              fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
              h={{ base: '30px', sm: '30px', md: '45px', xl: '45px' }}
              border={'1px solid rgba(0,0,0,0.10)'}
              _hover={{ bg: '#fff' }}
              _focus={{ boxShadow: 'none', border: '1px solid teal' }}
              bg={'#fff'}
              cursor={'pointer'}
              type={'time'}
            />
            <Input
              {...register('breakfast_to', { required: true })}
              p={{ base: '5px 10px', sm: '5px,10px', md: '12px 16px', xl: '12px 16px' }}
              fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
              h={{ base: '30px', sm: '30px', md: '45px', xl: '45px' }}
              border={'1px solid rgba(0,0,0,0.10)'}
              _hover={{ bg: '#fff' }}
              _focus={{ boxShadow: 'none', border: '1px solid teal' }}
              bg={'#fff'}
              cursor={'pointer'}
              type={'time'}
            />
          </Box>

          <Input
            {...register('dayoffs', { required: true })}
            placeholder={t('dayoffs')}
            p={{ base: '5px 10px', sm: '5px,10px', md: '12px 16px', xl: '12px 16px' }}
            fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
            h={{ base: '30px', sm: '30px', md: '45px', xl: '45px' }}
            border={'1px solid rgba(0,0,0,0.10)'}
            _hover={{ bg: '#fff' }}
            _focus={{ boxShadow: 'none', border: '1px solid teal' }}
            bg={'#fff'}
            cursor={'pointer'}
          />
          {errors.dayoffs && (
            <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }} color={'red'}>
              {t('required-field')}
            </Text>
          )}
        </Box>
      </AddorgAccordionInputs>
      <AddorgAccordionInputs
        register={register}
        errors={errors}
        label={t('waytoget')}
        inputs={[
          {
            id: 1,
            value: 'autobus',
            placeholder: t('autobus')
          },
          {
            id: 2,
            value: 'micro-autobus',
            placeholder: t('micro-autobus')
          },
          {
            id: 3,
            value: 'marshrut',
            placeholder: t('marshrut')
          },
          {
            id: 4,
            value: 'metro_station',
            placeholder: t('metro_station')
          }
        ]}
      />
    </Box>
  )
}
