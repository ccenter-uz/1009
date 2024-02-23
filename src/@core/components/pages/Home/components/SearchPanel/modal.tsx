import BoxGen from '@/@core/components/reusable/Box'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import { Input, InputGroup, InputRightElement, Modal, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import { FC } from 'react'

const SearchModal: FC<any> = ({ open, close, onChange, value = '', onClick }) => {
  const handleClose = () => {
    close(false)
  }

  return (
    <Modal isOpen={open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent w={{ base: '90%', sm: '90%', md: '100%', xl: '100%' }}>
        <InputGroup display={'flex'} alignItems={'center'}>
          <Input
            fontSize={scssVariables.fonts.paragraph}
            value={value}
            onChange={onChange}
            placeholder='Введите больше 3 буквы для поиска'
            h={{ base: '32px', sm: '32px', md: '45px', xl: '45px' }}
            type='text'
            _focus={{ boxShadow: 'none', border: `none` }}
          />
          <InputRightElement h={{ base: '32px', sm: '32px', md: '45px', xl: '45px' }}>
            <Link href={'/results'}>
              <img role='button' onClick={onClick} src='/search-line.svg' alt='search' aria-label='search-icon' />
            </Link>
          </InputRightElement>
        </InputGroup>
        {value.length > 2 && (
          <BoxGen w={'100%'} h={'300px'}>
            <Text as={Link} href={'/results/id'}>{value}</Text>
          </BoxGen>
        )}
      </ModalContent>
    </Modal>
  )
}

export default SearchModal
