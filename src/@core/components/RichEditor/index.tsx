'use client'
import Loading from '@/app/[locale]/loading'
import dynamic from 'next/dynamic'
import { FC, FormEvent, SetStateAction, memo, startTransition, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import { formats } from './formats'
import { modules } from './modules'
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Textarea
} from '@chakra-ui/react'
import { IRichEditor } from '@/@core/service/types/types'
import { scssVariables } from '@/@core/utils/scss-variables'
// dynamic import Quill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false, loading: () => <Loading /> })

const RichEditor: FC<IRichEditor & { isOpen: boolean; onClose: SetStateAction<any> }> = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('')

  // handleClose
  const handleClose = () => {
    startTransition(() => {
      onClose((prev: boolean) => !prev), setValue('')
    })
  }

  // handleSave
  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const current = e.currentTarget
    const formData = new FormData(current)
    const body = {
      title: formData.get('title'),
      type:"text",
      warning: formData.get('warning'),
      mention: formData.get('mention'),
      content: value
    }
    console.log(body, 'data')
  }

  return (
    <Modal size={'full'} aria-modal isOpen={isOpen} onClose={handleClose}>
      <ModalContent padding={'1em'}>
        <ModalHeader fontSize={{ base: '14px', sm: '14px', md: '20px', xl: '20px' }}>Create text editor</ModalHeader>
        <Divider mb={'1em'} />
        <ModalCloseButton />
        <form id='editor-modal-form' onSubmit={handleSave}>
          <FormControl>
            <FormLabel htmlFor='title' fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}>
              Title of section:
            </FormLabel>
            <Input
              name='title'
              id='title'
              mb={'8px'}
              placeholder='example'
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              color='#FF7C7C'
              htmlFor='warning-text'
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
            >
              Warning information:
            </FormLabel>
            <Textarea
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
              name='warning'
              id='warning-text'
              size={'sm'}
              resize={'vertical'}
              placeholder='Type for warnings!'
              mb={'8px'}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              color={'#4493bd'}
              htmlFor='mention-text'
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
            >
              Mention information:
            </FormLabel>
            <Textarea
              fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
              name='mention'
              id='mention-text'
              size={'sm'}
              resize={'vertical'}
              placeholder='Type for mentions!'
              mb={'8px'}
            />
          </FormControl>
        </form>
        <Box boxShadow={scssVariables.boxShadow} borderRadius={'12px'} my={'2em'} p={'1em'}>
          <ReactQuill theme='snow' value={value} formats={formats} modules={modules} onChange={setValue} />
        </Box>
        <Button
          aria-label='button-save'
          colorScheme='teal'
          fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
          h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
          form='editor-modal-form'
          mb={'8px'}
          type='submit'
        >
          Save
        </Button>
      </ModalContent>
    </Modal>
  )
}

export default memo(RichEditor)
