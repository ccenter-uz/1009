'use client'

import { Box, Button, VStack } from '@chakra-ui/react'
import { Formik } from 'formik'
import { FC } from 'react'
import * as Yup from 'yup'
import FirstColumn from '../FirstColumn'
import SecondColum from '../SecondColumn'
import ThirdColumn from '../ThirdColumn'

const AddOrgFormSchema = Yup.object().shape({
  section: Yup.string().required('Объязательное поле'),
  subsection: Yup.string().required('Объязательное поле'),
  sectionPS: Yup.string().required('Объязательное поле'),
  subsectionPS: Yup.string().required('Объязательное поле'),
  title: Yup.string().required('Объязательное поле')
})

export const initialValues = {
  section: '',
  subsection: '',
  sectionPS: '',
  subsectionPS: '',
  title: '',
  phoneNumbers: [{ id: 'number1', number: '' }],
  email: ''
  
}

const Form: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddOrgFormSchema}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Box display='flex' justifyContent='space-between' border='1px solid red'>
            <FirstColumn errors={errors} touched={touched} />
            <SecondColum errors={errors} touched={touched} />
            <ThirdColumn errors={errors} touched={touched} />
          </Box>
          <Button type='submit' colorScheme='purple'>
            Добавить организацию
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default Form
