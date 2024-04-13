import { Box, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { IErrors, ITouched } from '../../types/types-interfaces'
import PhoneNumberAccordion from '../PhoneNumberAccordion'
import { Field } from 'formik'
import AddressAccordion from '../AddressAccordion'

type SecondColumnType = {
  errors: IErrors
  touched: ITouched
}

const SecondColum: FC<SecondColumnType> = ({ errors, touched }) => {
  return (
    <Box w='30%'>
      <VStack spacing={4}>
        <FormControl isInvalid={!!errors.email && touched.email}>
          <FormLabel htmlFor='email'>Электронная почта/ E-mail</FormLabel>
          <Field as={Input} id='email' name='email' type='email' variant='filled' placeholder='Email' />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.index && touched.index}>
          <FormLabel htmlFor='index'>Индекс</FormLabel>
          <Field as={Input} id='index' name='index' type='number' variant='filled' placeholder='Например: 568484' />
          <FormErrorMessage>{errors.index}</FormErrorMessage>
        </FormControl>
        <PhoneNumberAccordion errors={errors} touched={touched} />
        <AddressAccordion errors={errors} touched={touched} />
      </VStack>
    </Box>
  )
}

export default SecondColum
