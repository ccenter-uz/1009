import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack
} from '@chakra-ui/react'
import { Field } from 'formik'
import { IErrors, ITouched } from '../../types/types-interfaces'
import { FC } from 'react'

type PhoneNumberAccordionType = {
  errors: IErrors
  touched: ITouched
}

const AddressAccordion: FC<PhoneNumberAccordionType> = ({ errors, touched }) => {
  return (
    <Accordion allowToggle w='100%' border='1px solid #e2e8f0' rounded='md'>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Адрес
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack spacing={4}>
            <Select variant='outline' placeholder='Область'>
              <option value='option1'>город Ташкент</option>
              <option value='option2'>Ташкентская область</option>
              <option value='option3'>Ферганская область</option>
            </Select>
            <Select variant='outline' placeholder='Район'>
              <option value='option1'>Юнусабадский район</option>
              <option value='option2'>Сергелийский район</option>
              <option value='option3'>Мирабадский район</option>
            </Select>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddressAccordion
