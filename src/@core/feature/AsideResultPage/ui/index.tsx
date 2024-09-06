import { buildUrlParams, checkAndSetValues } from '@/@core/apps/utils/fn'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useLang } from '@/@core/shared/hooks/useLang'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Text
} from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC } from 'react'

type Props = {
  data: any
}

export const AsideResultPage: FC<Props> = props => {
  const { data } = props
  const searchParams = useSearchParams()
  const router = useRouter()
  const { t } = useLang()

  const handleSortByPodrazdel = (catId: string | number, subcatId: string | number) => {
    const query = buildUrlParams(searchParams, { razdel: catId, podrazdel: subcatId, page: 1, pageSize: 10 })

    router.push(query)
  }

  return (
    <Box
      w={{ base: '100%', sm: '100%', md: '240px', xl: '240px' }}
      h={{ base: '100%', sm: '100%', md: '400px', xl: '400px' }}
      bg={scssVariables.blockBgColor}
      borderRadius={'4px'}
      p={{ base: '5px', sm: '5px', md: '8px 10px', xl: '8px 10px' }}
      boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}
      overflowY={'scroll'}
      sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
      position={{ base: 'relative', sm: 'relative', md: 'sticky', xl: 'sticky' }}
      top={0}
    >
      {data?.categories?.length === 0 && (
        <Grid placeItems={'center'} h={'100%'}>
          <Text fontSize={scssVariables.fonts.paragraph}>{t('no-results-razdels')}</Text>
        </Grid>
      )}
      <Accordion allowToggle>
        {data?.categories?.map(
          (
            list: {
              category_id: number
              category: string
              sub_categories: { id: number; name: string; count: number }[]
            },
            index: number
          ) => (
            <AccordionItem key={index} border={'none'}>
              <AccordionButton
                _hover={{ bg: 'none', color: scssVariables.mainColor }}
                p={{ base: '5px 16px', sm: '5px 16px', md: '8px 16px', xl: '5px 16px' }}
              >
                <Box flex={'1'} textAlign={'left'}>
                  <Text fontSize={scssVariables.fonts.paragraph} color={'#454545'} fontWeight={500}>
                    {String(list?.category).toLocaleUpperCase()}
                  </Text>
                </Box>
                <AccordionIcon color={'#454545'} />
              </AccordionButton>
              <AccordionPanel p={{ base: '5px 16px', sm: '5px 16px', md: '8px 16px', xl: '5px 16px' }}>
                {list?.sub_categories?.map((subMenu: { id: number; name: string; count: number }) => (
                  <Flex
                    key={subMenu?.id}
                    alignItems={'center'}
                    gap={'8px'}
                    my={'8px'}
                    w={'100%'}
                    color={
                      checkAndSetValues(searchParams, 'podrazdel') !== subMenu?.id ? '#454545' : scssVariables.mainColor
                    }
                    _hover={{ color: scssVariables.mainColor }}
                    onClick={() => handleSortByPodrazdel(list?.category_id, subMenu?.id)}
                  >
                    <Text transition={'color 0.3s linear'} cursor={'pointer'} fontSize={scssVariables.fonts.span}>
                      {subMenu?.name}
                    </Text>
                    <Text
                      fontSize={{ base: '10px', sm: '10px', md: '12px', xl: '12px' }}
                      bg={'#F8F8F8'}
                      p={'2px 6px'}
                      borderRadius={'50%'}
                      textAlign={'center'}
                    >
                      {subMenu?.count}
                    </Text>
                  </Flex>
                ))}
              </AccordionPanel>
            </AccordionItem>
          )
        )}
      </Accordion>
    </Box>
  )
}
