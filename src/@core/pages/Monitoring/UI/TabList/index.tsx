import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Tab, TabList } from '@chakra-ui/react'
import { FC } from 'react'

const styles = {
  tablistStyle: {
    width: '100%',
    my: '2em',
    borderBottom: '0',
    borderRadius: '4px',
    p: '0 0.3em',
    background: '#0093931c'
  },
  tab: {
    w: 'auto',
    _selected: {
      borderBottomColor: scssVariables.mainColor,
      color: scssVariables.mainColor
    }
  }
}

const TabListMonitoring: FC = () => {
  return (
    <TabList {...styles.tablistStyle}>
      <Tab {...styles.tab} fontSize={scssVariables.fonts.paragraph}>
        Транзакция
      </Tab>
    </TabList>
  )
}
export default TabListMonitoring
