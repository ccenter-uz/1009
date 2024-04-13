import TabListMonitoring from '@/@core/pages/Monitoring/UI/TabList'
import TabPanelMonitoring from '@/@core/pages/Monitoring/UI/TabPanel'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import { Box, Tabs } from '@chakra-ui/react'
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
    <Box minH={'100dvh'} aria-label='section' id='monitoring' className='wrapper fade-in'>
      <BreadCrumb item={breadcrumblinks} />
      <Tabs>
        <TabListMonitoring />
        <TabPanelMonitoring />
      </Tabs>
    </Box>
  )
}

export default Monitoring
