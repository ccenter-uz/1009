import InputGen from '@/@core/components/reusable/Input'
import { createCat, updateCat } from '@/app/[locale]/opportunities/[id]/action'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { useForm } from 'react-hook-form'

type IDialogTypes = {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
  editInfo?: { title: string; id: number }
  getCategories: () => void
}

const DialogEntertainmentLinks: FC<IDialogTypes> = ({ isOpen = false, onClose, editInfo, getCategories }) => {
  const { pending } = useFormStatus()
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  //   handleClose
  const handleClose = () => {
    onClose(prevState => (prevState = false))
    reset({ title: '' })
  }

  //   actionSubmit
  const actionSubmit = async (e: any) => {
    if (editInfo) {
      await updateCat(editInfo.id, e)
      handleClose()
      router.replace('/opportunities/entertainment')
      getCategories()
    } else {
      await createCat(e)
      handleClose()
      getCategories()
    }
  }

  useEffect(() => {
    editInfo && reset({ title: editInfo.title })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editInfo])

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent p={'1em'}>
        <ModalHeader p={'0'}>Добавить линк</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(actionSubmit)} style={{ margin: '1em 0' }} id='link-entertainment-form'>
          <FormControl>
            <FormLabel htmlFor='add-link'>Добавить:</FormLabel>
            <InputGen isDisabled={pending} id='add-link' {...register('title')} />
          </FormControl>
          <Box display={'flex'} justifyContent={'flex-end'}>
            <Button
              isLoading={pending}
              type='submit'
              form='link-entertainment-form'
              w={{ base: '100%', sm: '100%', md: 'fit-content', xl: 'fit-content' }}
              mt={'1em'}
              colorScheme='teal'
            >
              Сохранить
            </Button>
          </Box>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default DialogEntertainmentLinks
