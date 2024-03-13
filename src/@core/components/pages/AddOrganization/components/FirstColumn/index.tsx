import { Box, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react'
import { Field } from 'formik'
import React, { FC } from 'react'
import ProductServiceAccordion from '../ProductServiceAccordion'
import { IErrors, ITouched } from '../../types-interfaces'

type FirstColumnType = {
  
  errors: IErrors
  touched: ITouched
}

const FirstColumn: FC<FirstColumnType> = ({ errors, touched }) => {
  return (
    <Box width='30%'>
      <VStack spacing={4}>
        <FormControl isInvalid={!!errors.section && touched.section}>
          <FormLabel htmlFor='section'>Раздел</FormLabel>
          <Field as={Input} id='section' name='section' type='section' variant='filled' placeholder='Например: ЯША' />
          <FormErrorMessage>{errors.section}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.subsection && touched.subsection}>
          <FormLabel htmlFor='subsection'>Подраздел</FormLabel>
          <Field
            as={Input}
            id='subsection'
            name='subsection'
            type='subsection'
            variant='filled'
            placeholder='Например: Кинотеатр'
          />
          <FormErrorMessage>{errors.subsectionPS}</FormErrorMessage>
        </FormControl>

        <ProductServiceAccordion errors={errors} touched={touched} />

        <FormControl isInvalid={!!errors.title && touched.title}>
          <FormLabel htmlFor='title'>Название Организаций</FormLabel>
          <Field as={Input} id='title' name='title' type='title' variant='filled' placeholder='Например: Кинотеатр' />
          <FormErrorMessage>{errors.title}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.mainOrg && touched.mainOrg}>
          <FormLabel htmlFor='mainOrg'>Головная организация</FormLabel>
          <Field
            as={Input}
            id='mainOrg'
            name='mainOrg'
            type='mainOrg'
            variant='filled'
            placeholder='Например: Министерство экономики и финансов'
          />
          <FormErrorMessage>{errors.mainOrg}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.owner && touched.owner}>
          <FormLabel htmlFor='owner'>Руководитель</FormLabel>
          <Field
            as={Input}
            id='owner'
            name='owner'
            type='owner'
            variant='filled'
            placeholder='Например: Иван Иванович'
          />
          <FormErrorMessage>{errors.owner}</FormErrorMessage>
        </FormControl>
      </VStack>
    </Box>
  )
}

export default FirstColumn
