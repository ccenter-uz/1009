import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
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
          <Stack spacing={[1, 5]} direction={['column']}>
            <Box display='flex' justifyContent='space-between' alignItems='center' gap={5} width='100%'>
              <Text border='1px solid #e2e8f0' rounded='md' padding={1} width='100%'>
                Перечесление
              </Text>
              <Checkbox size='md' colorScheme='green' />
            </Box>
            <Box display='flex' justifyContent='space-between' alignItems='center' gap={5} width='100%'>
              <Text border='1px solid #e2e8f0' rounded='md' padding={1} width='100%'>
                Терминал
              </Text>
              <Checkbox size='md' colorScheme='green' />
            </Box>
            <Box display='flex' justifyContent='space-between' alignItems='center' gap={5} width='100%'>
              <Text border='1px solid #e2e8f0' rounded='md' padding={1} width='100%'>
                Наличные
              </Text>
              <Checkbox size='md' colorScheme='green' />
            </Box>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default PaymentTypesAccordion
