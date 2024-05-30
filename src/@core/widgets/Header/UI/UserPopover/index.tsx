import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useDisclosure } from '@/@core/shared/hooks/useDisclosure'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Link } from '@/navigation'
import {
  Box,
  Button,
  Img,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text
} from '@chakra-ui/react'
import { FC } from 'react'
import { logOut } from '../../api'

type Props = {}

export const UserPopOver: FC<Props> = props => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { t } = useLang()

  return (
    <Popover placement='bottom-end' isOpen={isOpen} onOpen={onOpen} onClose={onClose} closeOnBlur={false}>
      <PopoverTrigger>
        <Img cursor={'pointer'} src='/header/user.svg' alt='user' _hover={{ opacity: '0.8' }} />
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          shadow={'0 0 5px rgba(0, 0, 0, 0.1)'}
          borderRadius={'16px'}
          p={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
          w={{ base: '250px', sm: '250px', md: '300px', xl: '300px' }}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            <Box display={'flex'} alignItems={'center'} gap={'8px'}>
              <Img
                src='/header/user.svg'
                alt='user'
                w={{ base: '43px', sm: '43px', md: '53px', xl: '53px' }}
                h={{ base: '43px', sm: '43px', md: '53px', xl: '53px' }}
              />
              <Box>
                <Text fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }} fontWeight={500}>
                  John Doe
                </Text>
                <Text fontSize={'12px'} color={'grey'}>
                  Admin
                </Text>
              </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mt={{ base: '1em' }}>
              <Text
                display={'flex'}
                alignItems={'center'}
                gap={'8px'}
                fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
              >
                <Img
                  src='/header/wallet.svg'
                  alt='balance'
                  w={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                  h={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                />{' '}
                {t('balance')}
              </Text>

              <Text
                color={scssVariables.mainColor}
                fontWeight={500}
                fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
              >
                30.000 UZS
              </Text>
            </Box>
          </PopoverHeader>
          <PopoverBody>
            <Button
              h={'fit-content'}
              p={0}
              ml={'auto'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-end'}
              fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
              fontWeight={400}
              color={'rgba(35, 101, 231, 1)'}
              variant={'none'}
              leftIcon={<Img src='/header/deposit.svg' alt='deposit' w={'20px'} h={'20px'} />}
            >
              {t('deposit')}
            </Button>
            <List spacing={'8px'} mt={'0.5em'}>
              <ListItem
                as={Link}
                href={'/savedorg'}
                display={'flex'}
                alignItems={'center'}
                gap={'8px'}
                _hover={{ opacity: '0.8', cursor: 'pointer' }}
                fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
              >
                <Img
                  src='/header/saved.svg'
                  alt='saved'
                  w={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                  h={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                />{' '}
                {t('savedorgs')}
              </ListItem>
              <ListItem
                as={Link}
                href={'/paidorg'}
                display={'flex'}
                alignItems={'center'}
                gap={'8px'}
                _hover={{ opacity: '0.8', cursor: 'pointer' }}
                fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
              >
                <Img
                  src='/header/paid.svg'
                  alt='saved'
                  w={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                  h={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                />{' '}
                {t('paidorgs')}
              </ListItem>
              <ListItem
                as={Link}
                href={'/monitoring'}
                display={'flex'}
                alignItems={'center'}
                gap={'8px'}
                _hover={{ opacity: '0.8', cursor: 'pointer' }}
                fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
              >
                <Img
                  src='/header/monitoring.svg'
                  alt='saved'
                  w={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                  h={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                />{' '}
                {t('monitoring')}
              </ListItem>
              <ListItem
                as={Link}
                href={'/myorg'}
                display={'flex'}
                alignItems={'center'}
                gap={'8px'}
                _hover={{ opacity: '0.8', cursor: 'pointer' }}
                fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
              >
                <Img
                  src='/header/myorgs.svg'
                  alt='saved'
                  w={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                  h={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                />{' '}
                {t('myorgs')}
              </ListItem>
              <ListItem
                as={Link}
                href={'/settings'}
                display={'flex'}
                alignItems={'center'}
                gap={'8px'}
                _hover={{ opacity: '0.8', cursor: 'pointer' }}
                fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
              >
                <Img
                  src='/header/settings.svg'
                  alt='saved'
                  w={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                  h={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                />{' '}
                {t('settings')}
              </ListItem>
              <ListItem
                onClick={() => logOut()}
                display={'flex'}
                alignItems={'center'}
                gap={'8px'}
                _hover={{ opacity: '0.8', cursor: 'pointer' }}
                fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
                color={'rgba(218, 85, 85, 1)'}
              >
                <Img
                  src='/header/logout.svg'
                  alt='saved'
                  w={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                  h={{ base: '20px', sm: '20px', md: '24px', xl: '24px' }}
                />
                {t('logout')}
              </ListItem>
            </List>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
