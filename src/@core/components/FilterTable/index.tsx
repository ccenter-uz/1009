'use client'
import { Box, Button, FormControl, FormLabel, Input, Select, SimpleGrid } from '@chakra-ui/react'
import { FC } from 'react'
import { scssVariables } from '@/@core/utils/scss-variables'
import { IFilterTable } from '@/@core/service/types/types'
import { useForm } from 'react-hook-form'

const FilterTable: FC<IFilterTable> = ({ open, onChange }) => {
  const { register, handleSubmit, reset } = useForm()

  // handleReset
  const handleReset = async () => {
    reset()
  }

  return (
    <>
      <form id='filter-form' onSubmit={handleSubmit(onChange)} className={`filter ${open ? 'open' : 'close'}`}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 3, xl: 3 }} borderRadius={'8px'} gap={'8px 14px'}>
          <FormControl>
            <FormLabel fontWeight={400} m={0} htmlFor='status' fontSize={scssVariables.fonts.paragraph}>
              Статус:
            </FormLabel>
            <Select
              {...register('status')}
              h={{ base: '25px', sm: '25px', md: '35px', xl: '35px' }}
              borderRadius={'4px'}
              border={'1px solid lightgrey'}
              cursor={'pointer'}
              id='status'
              defaultValue={'all'}
              fontSize={scssVariables.fonts.paragraph}
            >
              <option value={'all'}>Все</option>
              <option value={'success'}>Успешно</option>
              <option value={'failed'}>Неуспешный</option>
              <option value={'pending'}>В процессе</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={400} m={0} htmlFor='amount' fontSize={scssVariables.fonts.paragraph}>
              cумма:
            </FormLabel>
            <Input
              {...register('amount')}
              p={{ base: '5px', sm: '5px', md: 'auto', xl: 'auto' }}
              fontSize={scssVariables.fonts.paragraph}
              h={{ base: '25px', sm: '25px', md: '35px', xl: '35px' }}
              borderRadius={'4px'}
              type='text'
              border={'1px solid lightgrey'}
              id='amount'
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={400} m={0} htmlFor='date-from' fontSize={scssVariables.fonts.paragraph}>
              c:
            </FormLabel>
            <Input
              {...register('date_from')}
              p={{ base: '5px', sm: '5px', md: 'auto', xl: 'auto' }}
              fontSize={scssVariables.fonts.paragraph}
              h={{ base: '25px', sm: '25px', md: '35px', xl: '35px' }}
              borderRadius={'4px'}
              type='date'
              border={'1px solid lightgrey'}
              id='date-from'
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={400} m={0} htmlFor='date-to' fontSize={scssVariables.fonts.paragraph}>
              до:
            </FormLabel>
            <Input
              {...register('date_to')}
              p={{ base: '5px', sm: '5px', md: 'auto', xl: 'auto' }}
              fontSize={scssVariables.fonts.paragraph}
              h={{ base: '25px', sm: '25px', md: '35px', xl: '35px' }}
              borderRadius={'4px'}
              type='date'
              border={'1px solid lightgrey'}
              id='date-to'
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={400} m={0} htmlFor='time_from' fontSize={scssVariables.fonts.paragraph}>
              c:
            </FormLabel>
            <Input
              {...register('time_from')}
              p={{ base: '5px', sm: '5px', md: 'auto', xl: 'auto' }}
              fontSize={scssVariables.fonts.paragraph}
              h={{ base: '25px', sm: '25px', md: '35px', xl: '35px' }}
              borderRadius={'4px'}
              type='time'
              border={'1px solid lightgrey'}
              id='time_from'
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={400} m={0} htmlFor='time_to' fontSize={scssVariables.fonts.paragraph}>
              до:
            </FormLabel>
            <Input
              {...register('time_to')}
              p={{ base: '5px', sm: '5px', md: 'auto', xl: 'auto' }}
              fontSize={scssVariables.fonts.paragraph}
              h={{ base: '25px', sm: '25px', md: '35px', xl: '35px' }}
              borderRadius={'4px'}
              type='time'
              border={'1px solid lightgrey'}
              id='time_to'
            />
          </FormControl>
        </SimpleGrid>
        <Box display={'flex'} alignItems={'center'} gap={'8px'} justifyContent={'flex-end'}>
          <Button
            type='submit'
            form='filter-form'
            w={{ base: '85px', sm: '85px', md: 'auto', xl: 'auto' }}
            h={{ base: '28px', sm: '28px', md: '35px', xl: '40px' }}
            fontSize={scssVariables.fonts.paragraph}
            variant='primary'
            bg={'teal'}
            color={'#fff'}
          >
            Пременить
          </Button>
          <Button
            onClick={handleReset}
            w={{ base: '85px', sm: '85px', md: 'auto', xl: 'auto' }}
            h={{ base: '28px', sm: '28px', md: '35px', xl: '40px' }}
            fontSize={scssVariables.fonts.paragraph}
            color={'#252525'}
          >
            Отменить
          </Button>
        </Box>
      </form>
    </>
  )
}

export default FilterTable
