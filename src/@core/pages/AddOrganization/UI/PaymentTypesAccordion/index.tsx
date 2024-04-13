import { scssVariables } from '@/@core/apps/utils/scss-variables'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Field } from 'formik'
import React, { FC } from 'react'

const PaymentTypesAccordion: FC = () => {
  return (
    <Accordion allowToggle w='100%' border='1px solid #e2e8f0' rounded='md'>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Виды оплаты
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <CheckboxGroup colorScheme='blue'>
            <Stack spacing={[1, 5]} direction={['column']}>
              <FormControl display='flex' alignItems='center' justifyContent='space-between'>
                <FormLabel border='1px solid #E2E8F0' padding={1} width='100%' rounded='md'>
                  Перечесление
                </FormLabel>
                <Field as={Checkbox} value='transfer' id='typesPayment.transfer' name='typesPayment.transfer' />
              </FormControl>

              <FormControl display='flex' alignItems='center' justifyContent='space-between'>
                <FormLabel border='1px solid #E2E8F0' padding={1} width='100%' rounded='md'>
                  Терминал
                </FormLabel>
                <Field as={Checkbox} value='terminal' id='typesPayment.terminal' name='typesPayment.terminal' />
              </FormControl>

              <FormControl display='flex' alignItems='center' justifyContent='space-between'>
                <FormLabel border='1px solid #E2E8F0' padding={1} width='100%' rounded='md'>
                  Наличные
                </FormLabel>
                <Field as={Checkbox} value='cash' id='typesPayment.cash' name='typesPayment.cash' />
              </FormControl>
            </Stack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default PaymentTypesAccordion
