import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Link } from '@/navigation'
import {
  Flex,
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
import { useRouter } from 'next/navigation'
import { FC, KeyboardEvent, memo } from 'react'

const SearchModal: FC<any> = ({ open, close, onChange, value, data }) => {
  const router = useRouter()
  const { t } = useLang()

  // ONPRESSENTER
  const handleKeyDownSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') return router.push(`/results?name=${value}`)

    return null
  }

  return (
    <Modal isOpen={open} onClose={close}>
      <ModalOverlay />
      <ModalContent w={{ base: '90%', sm: '90%', md: '100%', xl: '100%' }}>
        <InputGroup display={'flex'} alignItems={'center'}>
          <Input
            fontSize={scssVariables.fonts.paragraph}
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDownSearch}
            placeholder='Введите больше 3 буквы для поиска'
            h={{ base: '32px', sm: '32px', md: '45px', xl: '45px' }}
            type='text'
            _focus={{ boxShadow: 'none', border: `none` }}
          />
          <InputRightElement h={{ base: '32px', sm: '32px', md: '45px', xl: '45px' }}>
            <Link href={`/results?name=${value}`}>
              <img role='button' src='/search-line.svg' alt='search' aria-label='search-icon' />
            </Link>
          </InputRightElement>
        </InputGroup>
        {value.length > 2 && data?.length > 0 && (
          <List display={'flex'} flexDirection={'column'} h={'300px'} overflowY={'scroll'}>
            {data?.map((item: { id: string; address: string; organization_name: string }) => (
              <ListItem
                key={item.id}
                transition={'all 0.5s ease'}
                color={'rgba(100, 116, 139, 1)'}
                _hover={{ background: scssVariables.blockBgColor }}
                p={{ base: '5px 10px', sm: '5px 10px', md: '8px 16px', xl: '8px 16px' }}
                borderBottom={'1px solid lightgrey'}
                as={Link}
                href={`/results/${item?.id}`}
              >
                <Text as={'span'} display={'block'} fontSize={{ base: '9px', sm: '9px', md: '11px', xl: '11px' }}>
                  {item.address}
                </Text>
                <Text fontSize={{ base: '13px', sm: '13px', md: '16px', xl: '16px' }}>{item.organization_name}</Text>
              </ListItem>
            ))}
          </List>
        )}
        {value.length > 2 && data?.length === 0 && (
          <Flex justifyContent={'center'} alignItems={'center'} h={'300px'}>
            <Text>{t('no-results')}</Text>
          </Flex>
        )}
      </ModalContent>
    </Modal>
  )
}

export default memo(SearchModal)
