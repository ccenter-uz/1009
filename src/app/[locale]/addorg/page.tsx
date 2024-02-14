import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Box, Card, Heading } from '@chakra-ui/react'
import { FC } from 'react'

const Addorganization: FC = () => {
  const breadcrumblink = [
    {
      id: 1,
      title: 'Добавить организации'
    }
  ]

  return (
    <Box className='wrapper' id='addorg' aria-label='section'>
      <BreadCrumb item={breadcrumblink} />

      <Card minH={'fit-content'} h={{base:'80dvh',sm:'80dvh',md:'80dvh',xl:'80dvh'}} p={{base:'0.5em',sm:'0.5em',md:'1.5em',xl:'1.5em'}}>
        <Heading textAlign={'center'}>Add organization</Heading>
      </Card>
    </Box>
  )
}

export default Addorganization
