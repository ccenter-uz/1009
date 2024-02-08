import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import { Button, TableContainer, useColorMode } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { FC, useEffect, useLayoutEffect } from 'react'

// links for button
const selectPageLinks = [
  {
    id: 1,
    title: 'Театр',
    index: 'Театр'
  },
  {
    id: 2,
    title: 'Кино',
    index: 'Кино'
  },
  {
    id: 3,
    title: 'Выставки',
    index: 'Выставки'
  }
]

const EntertainmentLinks: FC = () => {
  const { colorMode } = useColorMode()
  const searchParams = useSearchParams()
  const selectedPage = searchParams.get('page') || 'Театр'

  useLayoutEffect(() => {
    console.log(selectedPage, 'slecet')
  }, [selectedPage])

  return (
    <TableContainer
      borderRadius={'4px'}
      h={{ base: '63px', sm: '63px', md: '82px', xl: '82px' }}
      w={'100%'}
      bg={colorMode === 'dark' ? scssVariables.darkBg : scssVariables.blockBgColor}
      display={'flex'}
      gap={{ base: '0 16px', sm: '0 16px', md: '0 18px', xl: '0 18px' }}
      alignItems={'center'}
      px={'20px'}
      mb={'24px'}
    >
      {selectPageLinks.map(link => {
        return (
          <Link key={link.id} href={`?page=${link.index}`} scroll={false}>
            <Button
              className={`${selectedPage?.includes(link.index) && 'active'}`}
              bg={colorMode === 'dark' ? '#444343' : 'white'}
              w={{ base: '99px', sm: '99px', md: '167px', xl: '167px' }}
              h={{ base: '30px', sm: '30px', md: '39px', xl: '39px' }}
              fontSize={scssVariables.fonts.paragraph}
            >
              {link.title}
            </Button>
          </Link>
        )
      })}
    </TableContainer>
  )
}

export default EntertainmentLinks
