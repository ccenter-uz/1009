import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Box, Divider, Flex, List, ListItem, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { useResultItemSlicer } from '../../model/Slicer'

export const Details: FC = () => {
  const { t } = useLang()
  const { resultItemData } = useResultItemSlicer()

  return (
    <Flex
      mt={5}
      align={'flex-start'}
      justifyContent={'space-between'}
      direction={{ base: 'column', sm: 'column', md: 'row', xl: 'row' }}
      gap={{ base: 5, sm: 5, md: 5, xl: 5 }}
    >
      <Box className='payment_type' w={'100%'} p={5} boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}>
        <Text fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '20px' }} color={'grey'} mb={2}>
          {t('payment-methods')}
        </Text>
        <Divider mb={2} borderColor={'lightgrey'} />
        <List>
          <ListItem gap={2} display={'flex'} alignItems={'center'} fontSize={scssVariables.fonts.span}>
            <Text>{t('cash')}:</Text>
            <Text>{t(`${resultItemData[0]?.payment_type?.cash || 'false'}`)}</Text>
          </ListItem>
          <ListItem gap={2} display={'flex'} alignItems={'center'} fontSize={scssVariables.fonts.span}>
            <Text>{t('terminal')}:</Text>
            <Text>{t(`${resultItemData[0]?.payment_type?.terminal || 'false'}`)}</Text>
          </ListItem>
          <ListItem gap={2} display={'flex'} alignItems={'center'} fontSize={scssVariables.fonts.span}>
            <Text>{t('transfer')}:</Text>
            <Text>{t(`${resultItemData[0]?.payment_type?.transfer || 'false'}`)}</Text>
          </ListItem>
        </List>
      </Box>
      <Box className='work_time' w={'100%'} p={5} boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}>
        <Text fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '20px' }} color={'grey'} mb={2}>
          {t('work-time')}
        </Text>
        <Divider mb={2} borderColor={'lightgrey'} />
        <List>
          <ListItem gap={2} display={'flex'} alignItems={'center'} fontSize={scssVariables.fonts.span}>
            <Text>{t('workly-time')}:</Text>
            <Text>
              {resultItemData[0]?.scheduler.worktime_from} - {resultItemData[0]?.scheduler.worktime_to}
            </Text>
          </ListItem>
          <ListItem gap={2} display={'flex'} alignItems={'center'} fontSize={scssVariables.fonts.span}>
            <Text>{t('breakfast-time')}:</Text>
            <Text>
              {resultItemData[0]?.scheduler?.breakfast_from} - {resultItemData[0]?.scheduler?.breakfast_to}
            </Text>
          </ListItem>
          <ListItem gap={2} display={'flex'} alignItems={'center'} fontSize={scssVariables.fonts.span}>
            <Text>{t('dayoffs')}:</Text>
            <Text>{resultItemData[0]?.scheduler?.dayoffs}</Text>
          </ListItem>
        </List>
      </Box>
      <Box className='how_to_get' w={'100%'} p={5} boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}>
        <Text fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '20px' }} color={'grey'} mb={2}>
          {t('how-to-get')}
        </Text>
        <Divider mb={2} borderColor={'lightgrey'} />
        <List>
          <ListItem gap={2} display={'flex'} alignItems={'center'} fontSize={scssVariables.fonts.span}>
            <Text>{t('autobus')}:</Text>
            <Text>{resultItemData[0]?.transport?.bus}</Text>
          </ListItem>
          <ListItem gap={2} display={'flex'} alignItems={'center'} fontSize={scssVariables.fonts.span}>
            <Text>{t('marshrut')}:</Text>
            <Text>{resultItemData[0]?.transport?.gazelle}</Text>
          </ListItem>
          <ListItem gap={2} display={'flex'} alignItems={'center'} fontSize={scssVariables.fonts.span}>
            <Text>{t('metro_station')}:</Text>
            <Text>{resultItemData[0]?.transport?.metro_station}</Text>
          </ListItem>
        </List>
      </Box>
    </Flex>
  )
}
