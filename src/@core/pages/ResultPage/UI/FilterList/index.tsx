import { scssVariables } from '@/@core/apps/utils/scss-variables'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text
} from '@chakra-ui/react'
import { FC } from 'react'

type Props = {}

const lists = [
  {
    id: 1,
    title: 'Раздел 1',
    found: 40,
    link: 'all',
    active: false,
    subMenu: [
      {
        id: 11,
        title: 'Подраздел',
        found: 15,
        link: 'podrazdel',
        active: false
      },
      {
        id: 12,
        title: 'Подраздел',
        found: 20,
        link: 'podrazdel',
        active: false
      },
      {
        id: 13,
        title: 'Подраздел',
        found: 12,
        link: 'podrazdel',
        active: false
      }
    ]
  },
  {
    id: 2,
    title: 'Раздел 2',
    found: 15,
    link: 'razdel',
    active: false,
    subMenu: [
      {
        id: 12,
        title: 'Подраздел',
        found: 20,
        link: 'podrazdel',
        active: false
      }
    ]
  },
  {
    id: 3,
    title: 'Раздел 3',
    found: 25,
    link: 'razdel',
    active: false,
    subMenu: [
      {
        id: 13,
        title: 'Подраздел',
        found: 20,
        link: 'podrazdel',
        active: false
      }
    ]
  }
]

export const FilterList: FC<Props> = props => {
  return (
    <Box
      w={{ base: '100%', sm: '100%', md: '540px', xl: '540px' }}
      h={{ base: '100%', sm: '100%', md: '400px', xl: '400px' }}
      bg={scssVariables.blockBgColor}
      borderRadius={'4px'}
      p={{ base: '5px', sm: '5px', md: '8px 10px', xl: '8px 10px' }}
      boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}
      mt={'1em'}
      overflowY={'scroll'}
      sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
    >
      <Accordion allowToggle>
        {lists.map(list => (
          <AccordionItem key={list.id} border={'none'}>
            <AccordionButton
              _hover={{ bg: 'none', color: scssVariables.mainColor }}
              p={{ base: '5px 16px', sm: '5px 16px', md: '8px 16px', xl: '5px 16px' }}
            >
              <Box flex={'1'} textAlign={'left'}>
                <Text fontSize={scssVariables.fonts.paragraph} color={'#454545'} fontWeight={500}>
                  {list.title}
                </Text>
              </Box>
              <AccordionIcon color={'#454545'} />
            </AccordionButton>
            <AccordionPanel p={{ base: '5px 16px', sm: '5px 16px', md: '8px 16px', xl: '5px 16px' }}>
              {list.subMenu.map(subMenu => (
                <Flex
                  key={subMenu.id}
                  alignItems={'center'}
                  gap={'8px'}
                  my={'8px'}
                  w={'100%'}
                  color={'#454545'}
                  _hover={{ color: scssVariables.mainColor }}
                >
                  <Text transition={'color 0.3s linear'} cursor={'pointer'} fontSize={scssVariables.fonts.span}>
                    {subMenu.title}
                  </Text>
                  <Text
                    fontSize={{ base: '10px', sm: '10px', md: '12px', xl: '12px' }}
                    bg={'#F8F8F8'}
                    p={'2px 6px'}
                    borderRadius={'50%'}
                    textAlign={'center'}
                  >
                    {subMenu.found}
                  </Text>
                </Flex>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}
