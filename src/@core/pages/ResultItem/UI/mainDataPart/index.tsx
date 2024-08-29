import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Box, FormControl, FormLabel, SimpleGrid, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'
import { useResultItemSlicer } from '../../model/Slicer'

const MainDataPart: FC = () => {
  const { colorMode } = useColorMode()
  const { t } = useLang()
  const { resultItemData } = useResultItemSlicer()
  const inputs = [
    { id: 1, label: t('razdel'), value: resultItemData[0]?.sub_category_org?.category_org?.title },
    { id: 2, label: t('podrazdel'), value: resultItemData[0]?.sub_category_org?.title },
    { id: 3, label: t('org_name'), value: resultItemData[0]?.organization_name },
    { id: 4, label: t('section'), value: resultItemData[0]?.sectionId?.title },
    { id: 6, label: t('main_org'), value: resultItemData[0]?.main_organization },
    { id: 7, label: t('address'), value: resultItemData[0]?.address },
    { id: 8, label: t('email'), value: resultItemData[0]?.email },
    { id: 9, label: t('segment'), value: resultItemData[0]?.segment },
    { id: 10, label: t('account'), value: resultItemData[0]?.account },
    { id: 11, label: t('inn'), value: resultItemData[0]?.inn },
    { id: 12, label: t('bank_account'), value: resultItemData[0]?.bank_account },
    { id: 13, label: t('manager'), value: resultItemData[0]?.manager }
  ]

  return (
    <Box
      display={'flex'}
      flexDirection={{ base: 'column', sm: 'column', md: 'row', xl: 'row' }}
      alignItems={'flex-start'}
      gap={{ base: '8px', sm: '8px', md: '44px', xl: '54px' }}
    >
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, xl: 2 }}
        w={'100%'}
        flex={1.5}
        mt={{ base: '16px', sm: '16px', md: '20px', xl: '24px' }}
        gap={{ base: '8px 0px', sm: '8px 0px', md: '15px 34px', xl: '20px 44px' }}
      >
        {inputs?.map(input => {
          return (
            <FormControl key={input.id}>
              <FormLabel mb={'5px'} fontSize={scssVariables.fonts.paragraph}>
                {input.label}
              </FormLabel>
              <Box
                userSelect={'none'}
                wordBreak={'break-word'}
                display={'flex'}
                alignItems={'center'}
                minH={{ base: '35px', sm: '35px', md: '40px', xl: '42px' }}
                p={'0 16px'}
                borderRadius={'6px'}
                boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}
                border={`1px solid ${colorMode === 'dark' ? '#454545' : 'rgba(217, 217, 217, 1)'}`}
                fontSize={{ base: '12px', sm: '12px', md: '13px', xl: '14px' }}
                color={colorMode === 'dark' ? 'whitesmoke' : 'rgba(100, 116, 139, 1)'}
              >
                {input.value}
              </Box>
            </FormControl>
          )
        })}
      </SimpleGrid>
      <Box flex={1} mt={'24px'} w={'100%'}>
        <Text fontSize={scssVariables.fonts.paragraph} color={'grey'} mb={'16px'}>
          {t('show-on-map')}
        </Text>
        <Box
          w={'100%'}
          h={{ base: '300px', sm: '300px', md: '400px', xl: '459px' }}
          bg={'lightgrey'}
          borderRadius={'8px'}
        >
          {resultItemData[0]?.location?.coordinates?.lon && resultItemData[0]?.location?.coordinates?.lat ? (
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${resultItemData[0]?.location?.coordinates?.lon},${resultItemData[0]?.location?.coordinates?.lat}&layer=mapnik&marker=${resultItemData[0]?.location?.coordinates?.lat},${resultItemData[0]?.location?.coordinates?.lon}`}
              style={{ height: '100%', width: '100%' }}
              loading='lazy'
              sandbox='allow-scripts'
              referrerPolicy='no-referrer'
            />
          ) : null}
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={{ base: '1px', sm: '1px', md: '5px', xl: '5px' }}
          mt={'8px'}
        >
          {resultItemData[0]?.phones?.map((item: { number: string; type_number: string; id: string | number }) => (
            <Box
              key={item.id}
              display={'flex'}
              alignItems={'center'}
              gap={{ base: '8px', sm: '8px', md: '14px', xl: '16px' }}
            >
              <img width={'20px'} height={'20px'} src='/phone-fill.svg' alt='phone' />
              <Text fontSize={scssVariables.fonts.paragraph}>{item?.number}</Text>-
              <Text fontSize={scssVariables.fonts.paragraph}>{t(`${item?.type_number}`)}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default MainDataPart
