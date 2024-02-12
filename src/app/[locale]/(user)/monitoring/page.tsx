import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'

const Monitoring: FC = () => {
  const breadcrumblinks = [
    {
      id: 1,
      title: 'Мониторинг'
    },
    {
      id: 2,
      title: 'Общие'
    }
  ]

  return (
    <Box aria-label='section' id='monitoring' className='wrapper'>
      <BreadCrumb item={breadcrumblinks}/>
      <Heading style={{ textAlign: 'center' }}>MONITORING</Heading>
    </Box>
  )
}

export default Monitoring
