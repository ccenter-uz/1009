import { scssVariables } from '@/@core/utils/scss-variables'
import {
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import SignIn from './signIn'
import SignUp from './signUp'
import { useLang } from '@/@core/service/hooks/useLang'

type IAuth = {
  isOpen: boolean
  onClose: () => void
}

const Auth: FC<IAuth> = ({ isOpen, onClose }) => {
  const [login, setLogin] = useState<boolean>(false)
  const { t } = useLang()

  return (
    <Modal size={'100%'} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
      <ModalContent
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        w={{ base: '354px', sm: '354px', md: '768px', xl: '768px' }}
        h={'fit-content'}
        minH={'637px'}
        borderRadius={'15px'}
        boxShadow={scssVariables.boxShadow}
      >
        <ModalHeader
          textAlign={'center'}
          fontWeight={500}
          fontSize={{ base: '16px', sm: '16px', md: '22px', xl: '24px' }}
        >
          {login ? t('auth-sign-title') : t('auth-regis-title')}
        </ModalHeader>
        <ModalCloseButton
          border={`1px solid ${scssVariables.mainColor}`}
          borderRadius={'50%'}
          color={scssVariables.mainColor}
        />
        <ModalBody>{login ? <SignIn /> : <SignUp />}</ModalBody>
        <ModalFooter mb={{ base: '26px', sm: '26px', md: '40px', xl: '42px' }}>
          <Text color={'#446AEE'} fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}>
            {t('auth-already-exists')}
            <Link fontWeight={600} m={'10px'} cursor={'pointer'} onClick={() => setLogin(prev => !prev)}>
              {login ? t('auth-regis') : t('auth-login')}
            </Link>
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Auth
