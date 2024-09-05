'use client'
import TabListMonitoring from '@/@core/pages/Monitoring/UI/TabList'
import TabPanelMonitoring from '@/@core/pages/Monitoring/UI/TabPanel'
import { useLang } from '@/@core/shared/hooks/useLang'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import MentionText from '@/@core/shared/UI/MentionText'
import { Box, Tabs } from '@chakra-ui/react'
import { FC } from 'react'

const Monitoring: FC = () => {
  const { t } = useLang()
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
      <MentionText text={t('description_monitoring')} />
      <Tabs>
        <TabListMonitoring />
        <TabPanelMonitoring />
      </Tabs>
    </Box>
  )
}

export default Monitoring
