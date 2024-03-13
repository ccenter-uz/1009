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
  IconButton,
  Input,
  Select,
  Text,
  VStack
} from '@chakra-ui/react'
import { Field } from 'formik'
import React, { FC, useState } from 'react'
import { IErrors, INumbers, ITouched } from '../../types-interfaces'
import XmarkIcon from '@/@core/components/Xmark'
import { getUniqueId } from '@/@core/utils/getUniqueId'

type PhoneNumberAccordionType = {
  errors: IErrors
  touched: ITouched
}

const PhoneNumberAccordion: FC<PhoneNumberAccordionType> = ({ errors, touched }) => {
  const [inputs, setInputs] = useState<INumbers[]>([])

  const handleAddInput = () => {
    const newInput: INumbers = {
      id: `${getUniqueId()}`
    }

    setInputs([...inputs, newInput])
  }

  const handleDeleteClick = (id: string) => {
    setInputs(inputs.filter(item => item?.id !== id))
  }

  return (
    <Accordion allowToggle w='100%' border='1px solid #e2e8f0' rounded='md'>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Телефоные номера
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack spacing={4}>
            {inputs?.map(item => {
              return (
                <FormControl key={item?.id} display='flex' justifyContent='space-between' gap={2}>
                  <Field
                    as={Input}
                    id={item?.id}
                    name={item?.id}
                    type='number'
                    variant='filled'
                    placeholder='Номер телефона'
                  />
                  <Select variant='outline' placeholder='Тип номера'>
                    <option value='option1'>Мобильный номер</option>
                    <option value='option2'>Домашный номер</option>
                    <option value='option3'>Диспетчер</option>
                  </Select>
                  <IconButton
                    variant='outline'
                    aria-label='Send email'
                    icon={<XmarkIcon />}
                    onClick={() => handleDeleteClick(item?.id)}
                  />
                </FormControl>
              )
            })}
            <Button variant='outline' fontWeight='400' onClick={handleAddInput}>
              {inputs.length ? 'Добавить еще один номер' : 'Добавить номер'}
            </Button>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default PhoneNumberAccordion
