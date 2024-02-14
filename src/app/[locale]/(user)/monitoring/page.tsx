import TabListMonitoring from '@/@core/components/pages/Monitoring/components/TabList'
import TabPanelMonitoring from '@/@core/components/pages/Monitoring/components/TabPanel'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Box, Tabs } from '@chakra-ui/react'
import { FC } from 'react'
import './style.scss'

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
    <Box
      minH={{ base: '100%', sm: '100%', md: '768px', xl: '768px' }}
      aria-label='section'
      id='monitoring'
      className='wrapper'
    >
      <BreadCrumb item={breadcrumblinks} />
      <Tabs>
        <TabListMonitoring />
        <TabPanelMonitoring />
      </Tabs>
    </Box>
  )
}

export default Monitoring
