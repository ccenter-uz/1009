import { Box, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import PaymentTypesAccordion from '../PaymentTypesAccordion'
import OperatingModeAccordion from '../OperatingModeAccordion'
import { IErrors, ITouched } from '../../types/types-interfaces'
import TransportAccordion from '../TransportAccordion'

type ThirdColumnType = {
  errors: IErrors
  touched: ITouched
}

const ThirdColumn: FC<ThirdColumnType> = ({ errors, touched }) => {
  return (
    <Box w='30%'>
      <VStack spacing={4}>
        <PaymentTypesAccordion />
        <OperatingModeAccordion />
        <TransportAccordion />
      </VStack>
    </Box>
  )
}

export default ThirdColumn
