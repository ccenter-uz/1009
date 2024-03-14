import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack
} from '@chakra-ui/react'
import { Field } from 'formik'
import { FC } from 'react'
import { IErrors, ITouched } from '../../types-interfaces'

type ProductServiceAccordionType = {
  errors: IErrors
  touched: ITouched
}

const ProductServiceAccordion: FC<ProductServiceAccordionType> = ({ errors, touched }) => {
  return (
    <Accordion
      allowToggle
      w='100%'
      border={`${
        (!!errors.sectionPS && touched.sectionPS) || (!!errors.subsectionPS && touched.subsectionPS)
          ? '2px solid #E53E3E'
          : '1px solid #e2e8f0'
      }`}
      rounded='md'
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Товары/услуги
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.sectionPS && touched.sectionPS}>
              {/* <FormLabel htmlFor='sectionPS'>Раздел Т/У</FormLabel> */}
              <Field
                as={Input}
                id='sectionPS'
                name='sectionPS'
                type='sectionPS'
                variant='filled'
                placeholder='Раздел Т/У'
              />
              <FormErrorMessage>{errors.sectionPS}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.subsectionPS && touched.subsectionPS}>
              {/* <FormLabel htmlFor='sectionPS'>Раздел Т/У</FormLabel> */}
              <Field
                as={Input}
                id='subsectionPS'
                name='subsectionPS'
                type='subsectionPS'
                variant='filled'
                placeholder='Подраздел Т/У'
              />
              <FormErrorMessage>{errors.subsectionPS}</FormErrorMessage>
            </FormControl>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default ProductServiceAccordion
