import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import {
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Modal,
  ModalContent,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
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
            <Link href={`/results?nameorg=${value}`}>
              <img role='button' onClick={onClick} src='/search-line.svg' alt='search' aria-label='search-icon' />
            </Link>
          </InputRightElement>
        </InputGroup>

        {value.length > 2 && (
          <List display={'flex'} flexDirection={'column'} h={'300px'} overflowY={'scroll'}>
            <ListItem
              transition={'all 0.5s ease'}
              color={'rgba(100, 116, 139, 1)'}
              _hover={{ background: scssVariables.blockBgColor }}
              p={{ base: '5px 10px', sm: '5px 10px', md: '8px 16px', xl: '8px 16px' }}
              borderBottom={'1px solid lightgrey'}
              as={Link}
              href={`/results/id`}
            >
              <Text as={'span'} display={'block'} fontSize={{ base: '9px', sm: '9px', md: '11px', xl: '11px' }}>
                Tashkent,Uzbekistan
              </Text>
              <Text fontSize={{ base: '13px', sm: '13px', md: '16px', xl: '16px' }}>{value}</Text>
            </ListItem>
            <ListItem
              transition={'all 0.5s ease'}
              color={'rgba(100, 116, 139, 1)'}
              _hover={{ background: scssVariables.blockBgColor }}
              p={{ base: '5px 10px', sm: '5px 10px', md: '8px 16px', xl: '8px 16px' }}
              borderBottom={'1px solid lightgrey'}
              as={Link}
              href={`/results/id`}
            >
              <Text as={'span'} display={'block'} fontSize={{ base: '9px', sm: '9px', md: '11px', xl: '11px' }}>
                Tashkent,Uzbekistan
              </Text>
              <Text fontSize={{ base: '13px', sm: '13px', md: '16px', xl: '16px' }}>{value}</Text>
            </ListItem>
            <ListItem
              transition={'all 0.5s ease'}
              color={'rgba(100, 116, 139, 1)'}
              _hover={{ background: scssVariables.blockBgColor }}
              p={{ base: '5px 10px', sm: '5px 10px', md: '8px 16px', xl: '8px 16px' }}
              borderBottom={'1px solid lightgrey'}
              as={Link}
              href={`/results/id`}
            >
              <Text as={'span'} display={'block'} fontSize={{ base: '9px', sm: '9px', md: '11px', xl: '11px' }}>
                Tashkent,Uzbekistan
              </Text>
              <Text fontSize={{ base: '13px', sm: '13px', md: '16px', xl: '16px' }}>{value}</Text>
            </ListItem>
          </List>
        )}
      </ModalContent>
    </Modal>
  )
}

export default SearchModal
