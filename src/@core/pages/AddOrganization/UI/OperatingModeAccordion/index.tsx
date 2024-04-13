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
  Select,
  VStack
} from '@chakra-ui/react'
import { Field } from 'formik'
import React, { FC } from 'react'

const OperatingModeAccordion: FC = () => {
  return (
    <Accordion allowToggle w='100%' border='1px solid #e2e8f0' rounded='md'>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Режим работы
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Часы работы</FormLabel>
              <Field as={Input} id='time' name='time' type='time' variant='filled' placeholder='Часы работы' />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Время обеда</FormLabel>

              <Field as={Input} id='email' name='email' type='time' variant='filled' placeholder='Часы работы' />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <Field as={Input} id='weekend' name='weekend' type='text' variant='filled' placeholder='Выходные' />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default OperatingModeAccordion
