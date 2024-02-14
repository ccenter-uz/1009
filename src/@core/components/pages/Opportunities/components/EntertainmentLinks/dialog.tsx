import InputGen from '@/@core/components/reusable/Input'
import { DialogEntertainmentLinksAction } from '@/@core/service/helpers/actions'
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
import { Dispatch, FC, SetStateAction } from 'react'
import { useFormStatus } from 'react-dom'
import { useForm } from 'react-hook-form'

type IDialogTypes = {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
}

const DialogEntertainmentLinks: FC<IDialogTypes> = ({ isOpen = false, onClose }) => {
  const { pending } = useFormStatus()
  const { register, handleSubmit } = useForm()
  //   handleClose
  const handleClose = () => {
    onClose(prevState => (prevState = false))
  }

  //   actionSubmit
  const actionSubmit = async (e: any) => {
    const res = await DialogEntertainmentLinksAction(e)

    if (!res) return
    if (res.status === 200) {
      console.log(res.message, 'res')
    }
  }

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
