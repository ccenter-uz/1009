import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import { Box, Button, Switch, TableContainer, Text, Tooltip, useColorMode } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Dispatch, FC, SetStateAction, useEffect, useLayoutEffect, useState } from 'react'
import DialogEntertainmentLinks from './dialog'
import { deleteCat } from '@/app/[locale]/opportunities/[id]/action'
import Loading from '@/app/[locale]/loading'
import { IdataInfoFromApi } from '@/@core/service/types/types'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { getCat, getDataByid } from '@/app/[locale]/opportunities/[id]/serverAction'

type IenterLinks = {
  index: string
  id: number
  title: string
}

type IEnterLinksType = {
  setData: Dispatch<SetStateAction<any>>
  getAgain?: boolean
}

const EntertainmentLinks: FC<IEnterLinksType> = ({ setData, getAgain }) => {
  const { colorMode } = useColorMode()
  const searchParams = useSearchParams()
  const selectedPage = searchParams.get('page')
  const [linkDialog, setLinkDialog] = useState<boolean>(false)
  const [editLinks, setEditLinks] = useState<boolean>(false)
  const [enterLinks, setEnterLinks] = useState<IenterLinks[]>()
  const [editInfo, setEditInfo] = useState<{ title: string; id: number }>()
  const router = useRouter()
  // getDatabyId
  const getDataById = async (id: number) => {
    if (id !== undefined) {
      const res = await getDataByid(id)
      setData(
        res?.entertainments.map((item: IdataInfoFromApi) => {
          if (item?.type === 'text') {
            return {
              id: item.id,
              mention: item.mention,
              warning: item.warning,
              title: item?.title,
              type: 'text',
              content: item.text
            }
          } else {
            return {
              id: item.id,
              mention: item.mention,
              warning: item.warning,
              title: item?.title,
              type: 'table',
              rows: item.table_arr.row,
              header: item.table_arr.header.map((col: { value: string; title: string }) => ({
                id: col.value,
                title: col.value
              }))
            }
          }
        })
      )
    }
  }

  // getCategories
  const getCategories = async () => {
    const res = await getCat()

    if (res) {
      selectedPage && (await getDataById(res?.filter((link: IenterLinks) => link.title === selectedPage)[0]?.id))
      setEnterLinks(res.map((link: IenterLinks) => ({ ...link, index: link.title })))
    }
  }

  // effect for fetch data by query params
  useLayoutEffect(() => {
    getCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAgain])

  // watch selectedPage change
  useEffect(() => {
    if (selectedPage) {
      const filter = enterLinks?.filter((link: IenterLinks) => link.title === selectedPage)
      filter && getDataById(filter[0]?.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPage])

  // handleChangeSwitch
  const handleChangeSwitch = () => {
    setEditLinks(prevState => !prevState)
  }

  // handleDelete
  const handleDelete = (id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'if you delete, content inside also will be removed and you won`t be able to revert it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await deleteCat(id)
        if (res?.status === 'success') {
          toast.success(res.message, { position: 'bottom-right' })
          router.replace('/opportunities/entertainment')
          getCategories()
        }
      }
    })
  }

  return (
    <Box id='enterLinks' aria-label='enter-links'>
      <Box display={'flex'} alignItems={'center'} gap={'5px'} justifyContent={'flex-end'} mb={'0.2em'}>
        <label aria-label='label-edit-switch' htmlFor='label-edit-switch'>
          <img width={'18px'} height={'18px'} src='/pencil.svg' alt='edit' />
        </label>
        <Switch
          id='label-edit-switch'
          aria-disabled={enterLinks ? false : true}
          isDisabled={enterLinks ? false : true}
          colorScheme='teal'
          onChange={handleChangeSwitch}
        />
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
        {!enterLinks ? (
          <Loading />
        ) : (
          enterLinks?.map((link: IenterLinks) => {
            return (
              <Link id='enterlink-btns' className='fade-in' key={link.id} href={`?page=${link.index}`} scroll={false}>
                <Button
                  onClick={() => sessionStorage.setItem('catId', JSON.stringify(link.id))}
                  leftIcon={
                    editLinks ? (
                      <Text
                        as={'span'}
                        role='button'
                        aria-label='delete-enter-links'
                        onClick={e => {
                          e.preventDefault()
                          setEditInfo({ title: link.title, id: link.id })
                          setLinkDialog(prevState => !prevState)
                        }}
                        fontSize={scssVariables.fonts.paragraph}
                        style={{
                          position: 'absolute',
                          top: '-0.5em',
                          left: '-0.5em',
                          width: '15px',
                          height: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          background: 'lightgrey',
                          color: 'white',
                          fontSize: '10px',
                          zIndex: 99
                        }}
                      >
                        <img src='/pencil.svg' alt='pencil' width={'12px'} height={'12px'} />
                      </Text>
                    ) : undefined
                  }
                  rightIcon={
                    editLinks ? (
                      <Text
                        as={'span'}
                        role='button'
                        aria-label='delete-enter-links'
                        onClick={e => {
                          e.preventDefault()
                          handleDelete(link.id)
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
          })
        )}
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
      <DialogEntertainmentLinks
        isOpen={linkDialog}
        onClose={setLinkDialog}
        editInfo={editInfo}
        getCategories={getCategories}
      />
    </Box>
  )
}

export default EntertainmentLinks
