import { api } from '@/@core/utils/api'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import {
  Box,
  Button,

  Switch,
  TableContainer,
  Text,
  Tooltip,
  useColorMode
} from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { FC,  useLayoutEffect, useState } from 'react'
import DialogEntertainmentLinks from './dialog'

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
  const [linkDialog, setLinkDialog] = useState<boolean>(false)
  const [editLinks, setEditLinks] = useState<boolean>(false)

  useLayoutEffect(() => {
    // try {
    //   const res = api.get('entertainment', { params: { page: selectedPage } })
    // } catch (err) {
    //   console.log(err,'err')
    // }

    console.log(selectedPage, 'slecet')
  }, [selectedPage])

  // handleChangeSwitch
  const handleChangeSwitch = () => {
    setEditLinks(prevState => !prevState)
  }

  return (
    <>
      <Box display={'flex'} alignItems={'center'} gap={'5px'} justifyContent={'flex-end'} mb={'0.2em'}>
        <label aria-label='label-edit-switch' htmlFor='label-edit-switch'>
          <img width={'18px'} height={'18px'} src='/pencil.svg' alt='edit' />
        </label>
        <Switch id='label-edit-switch' colorScheme='teal' onChange={handleChangeSwitch} />
      </Box>
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
                rightIcon={
                  editLinks ? (
                    <Text
                      as={'span'}
                      role='button'
                      aria-label='delete-enter-links'
                      onClick={e => {
                        e.preventDefault()
                        console.log(link.id, 'clicked')
                      }}
                      fontSize={scssVariables.fonts.paragraph}
                      style={{
                        position: 'absolute',
                        top: '-0.5em',
                        right: '-0.5em',
                        width: '15px',
                        height: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        background: '#e53e3e',
                        color: 'white',
                        fontSize: '10px',
                        zIndex: 99
                      }}
                    >
                      X
                    </Text>
                  ) : undefined
                }
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
        {editLinks && (
          <Tooltip label={`Добавить`}>
            <img
              role='button'
              aria-label='add-link'
              onClick={() => setLinkDialog(prevState => (prevState = true))}
              style={{ cursor: 'pointer' }}
              width={'20px'}
              height={'20px'}
              src='/add.svg'
              alt='add-link'
            />
          </Tooltip>
        )}
      </TableContainer>
      <DialogEntertainmentLinks isOpen={linkDialog} onClose={setLinkDialog} />
    </>
  )
}

export default EntertainmentLinks
