import TabListMonitoring from '@/@core/components/pages/Monitoring/components/TabList'
import TabPanelMonitoring from '@/@core/components/pages/Monitoring/components/TabPanel'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
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
    <Box
      minH={'100dvh'}
      aria-label='section'
      id='monitoring'
      className='wrapper fade-in'
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
