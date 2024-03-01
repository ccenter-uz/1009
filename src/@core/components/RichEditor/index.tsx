'use client'
import Loading from '@/app/[locale]/loading'
import dynamic from 'next/dynamic'
import { FC, FormEvent, memo, startTransition } from 'react'
import 'react-quill/dist/quill.snow.css'
import { formats } from './formats'
import { modules } from './modules'
import { Button, Divider, Modal, ModalCloseButton, ModalContent, ModalHeader } from '@chakra-ui/react'
import { IRichEditor } from '@/@core/service/types/types'
import { createContent, updateContent } from '@/app/[locale]/opportunities/[id]/action'
import { getUrl } from '@/@core/utils/fn'
import { usePathname } from 'next/navigation'
import { toast } from 'react-toastify'
import { useOpportunityRecord } from '@/@core/service/context/opportunitiesRecord'
// dynamic import Quill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false, loading: () => <Loading /> })

const RichEditor: FC<IRichEditor> = ({ isOpen, onClose, setGetAgain, value, setValue }) => {
  const pathname = usePathname()
  const lastLink = pathname.replaceAll('/', ' ').split(' ').slice(-1).join()
  const { record } = useOpportunityRecord()

  // CLOSE
  const handleClose = () => {
    startTransition(() => {
      onClose((prev: boolean) => !prev)
    })
  }

  // SAVE
  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const current = e.currentTarget
    const formData = new FormData(current)
    let body
    lastLink === 'entertainment'
      ? (body = {
          category_id: JSON.parse(sessionStorage.getItem('catId')),
          title: formData.get('title'),
          type: 'text',
          warning: formData.get('warning'),
          mention: formData.get('mention'),
          text: value
        })
      : (body = {
          title: formData.get('title'),
          type: 'text',
          warning: formData.get('warning'),
          mention: formData.get('mention'),
          text: value
        })

    if (!record) {
      const res = await createContent(`${getUrl(lastLink)}`, body)
      if (res?.status === 'success') {
        toast.success(res.message, { position: 'bottom-right' })
        setGetAgain((prev: boolean) => !prev)
        handleClose()
      }
    } else {
      const res = await updateContent(`${getUrl(lastLink)}`, body, record[0]?.id)
      if (res?.status === 'success') {
        toast.success(res.message, { position: 'bottom-right' })
        setGetAgain((prev: boolean) => !prev)
        handleClose()
      }
    }
  }

  return (
    <Modal size={'full'} aria-modal isOpen={isOpen} onClose={handleClose}>
      <ModalContent p={{ base: '8px', sm: '', md: '1em', xl: '1em' }}>
        <ModalHeader
          p={{ base: '8px', sm: '', md: '1em', xl: '1em' }}
          fontSize={{ base: '14px', sm: '14px', md: '20px', xl: '20px' }}
        >
          Create text editor
        </ModalHeader>
        <Divider mb={'1em'} />
        <ModalCloseButton />
        <ReactQuill theme='snow' value={value} formats={formats} modules={modules} onChange={setValue} />
        <Button
          aria-disabled={value.length > 3 ? false : true}
          isDisabled={value.length > 3 ? false : true}
          aria-label='button-save'
          colorScheme='teal'
          fontSize={{ base: '12px', sm: '12px', md: '13px', xl: '14px' }}
          h={{ base: '30px', sm: '30px', md: '35px', xl: '35px' }}
          form='editor-modal-form'
          my={'8px'}
          type='submit'
        >
          Save
        </Button>
      </ModalContent>
    </Modal>
  )
}

export default memo(RichEditor)
