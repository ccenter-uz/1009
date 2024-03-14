'use client'

import { Box, Button, Divider, Text, Textarea, VStack } from '@chakra-ui/react'
import { Formik } from 'formik'
import { FC } from 'react'
import * as Yup from 'yup'
import FirstColumn from '../FirstColumn'
import SecondColum from '../SecondColumn'
import ThirdColumn from '../ThirdColumn'
import ImageUpload from '../ImgUpload'
import { scssVariables } from '@/@core/utils/scss-variables'
import TextArea from '../TextArea'
import Banner from '../Banner'

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
  mainOrg: '',
  owner: '',
  email: '',
  index: '',
  phoneNumber: '',
  address: '',
  typesPayment: {
    transfer: false,
    terminal: false,
    cash: false
  },
  operatingMode: '',
  transport: {
    bus: '',
    microbus: '',
    minibus: '',
    metro: ''
  },
  textarea: ''
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
          <Banner />
          <Box display='flex' justifyContent='space-between'>
            <FirstColumn errors={errors} touched={touched} />
            <SecondColum errors={errors} touched={touched} />
            <ThirdColumn errors={errors} touched={touched} />
          </Box>

          <Divider mt={5} mb={5} />

          <Box display='flex'>
            <ImageUpload />
            <TextArea />
          </Box>
          <Button type='submit' float='right' mt={5} bgColor={scssVariables?.mainColor} color='white'>
            Добавить организацию
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default Form
