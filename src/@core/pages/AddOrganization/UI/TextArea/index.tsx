import { Box, Text, Textarea } from '@chakra-ui/react'
import { Field } from 'formik'
import React, { FC } from 'react'

const TextArea: FC = () => {
  return (
    <Box width='50%'>
      <Text fontWeight='500' mb={5}>
        Можно добавить дополнительные сведения о вашей организации
      </Text>
      <Field
        as={Textarea}
        id='textarea'
        name='textarea'
        placeholder='Это поможет вам подробнее рассказать про себя в своим клиентам'
        w='100%'
      />
    </Box>
  )
}

export default TextArea
