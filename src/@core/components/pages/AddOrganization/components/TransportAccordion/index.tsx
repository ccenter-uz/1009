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
  VStack
} from '@chakra-ui/react'
import { Field } from 'formik'
import React, { FC } from 'react'

const TransportAccordion: FC = () => {
  return (
    <Accordion allowToggle w='100%' border='1px solid #e2e8f0' rounded='md'>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Как можно добраться
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack spacing={4}>
            <FormControl>
              <Field as={Input} id='bus' name='bus' type='text' variant='filled' placeholder='Автобус №' />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <Field
                as={Input}
                id='microbus'
                name='microbus'
                type='text'
                variant='filled'
                placeholder='Микро автобус №'
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <Field as={Input} id='minibus' name='minibus' type='text' variant='filled' placeholder='Маршрутка №' />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <Field as={Input} id='metro' name='metro' type='text' variant='filled' placeholder='Станция метро' />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default TransportAccordion
