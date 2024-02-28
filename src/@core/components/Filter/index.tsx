'use client'
import { FC } from 'react'
import { Box, Button, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { scssVariables } from '@/@core/utils/scss-variables'
import BreadCrumb from '../reusable/Breadcrumb'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'

type IFiltertype = {
  handleFilter: (arg0: any) => void
  disabled: boolean
}

const Filter: FC<IFiltertype> = ({ handleFilter, disabled }) => {
  const breadcrumbLinks = [
    {
      id: 1,
      title: 'Пользователи'
    },
    {
      id: 2,
      title: 'Общие'
    }
  ]
  const params =useSearchParams()
  const { register, handleSubmit } = useForm({
    defaultValues:{
      search:params.get('search') 
    }
  })

  return (
    <>
      <BreadCrumb item={breadcrumbLinks} />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        h={{ base: '80px', sm: '80px', md: '100px', xl: '100px' }}
        bg={scssVariables.blockBgColor}
        borderRadius={'8px'}
        p={'0 2em'}
        mb={{ base: '1em', sm: '1em', md: '2em', xl: '2em' }}
      >
        <form
          onSubmit={handleSubmit(handleFilter)}
          id='filter-user'
          style={{ width: '100%', display: 'flex', alignItems: 'flex-end' }}
        >
          <FormControl>
            <InputGroup>
              <Input
                {...register('search')}
                isDisabled={disabled}
                name='search'
                height={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
                type='text'
                fontSize={scssVariables.fonts.paragraph}
                placeholder='Search'
                border='none'
                bg={'#fff'}
                _focus={{ boxShadow: 'none' }}
              />
              <InputRightElement
                isLoading={disabled}
                type='submit'
                form='filter-user'
                w={{ base: '40px', sm: '40px', md: '55px', xl: '55px' }}
                height={'100%'}
                as={Button}
                bg={'transparent'}
                variant={'unstyled'}
                _hover={{ transform: 'scale(1.2)' }}
              >
                <img src='/search-line.svg' alt='search' width={'20px'} height={'20px'} />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </form>
      </Box>
    </>
  )
}

export default Filter
