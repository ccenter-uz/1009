import { TabPanel, TabPanels } from '@chakra-ui/react'
import { FC } from 'react'
import TransactionsPanel from './transactions'

const TabPanelMonitoring: FC = () => {
  return (
    <TabPanels>
      <TabPanel p={0}>
        <TransactionsPanel />
      </TabPanel>
    </TabPanels>
  )
}
export default TabPanelMonitoring
