import { scssVariables } from '@/@core/apps/utils/scss-variables'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Props = {
  title: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
}

export const CommentDialog: FC<Props> = props => {
  const { isOpen, onClose, children, footer, title } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={{ base: '90%' }}>
        <ModalHeader
          fontWeight={500}
          fontSize={{ base: '16px', sm: '16px', md: '18px', lg: '18px' }}
          p={{ base: '10px', sm: '10px', md: '14px', lg: '16px' }}
          color={scssVariables.mainColor}
        >
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={{ base: '10px 14px', sm: '10px 14px', md: '14px', lg: '16px' }}>{children}</ModalBody>
        <ModalFooter p={{ base: '10px', sm: '10px', md: '14px', lg: '16px' }}>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  )
}
