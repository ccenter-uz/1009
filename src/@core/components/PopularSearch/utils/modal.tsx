import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import {
  Box,
  Card,
  CardBody,
  Divider,
  FormControl,
  FormLabel,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'

type IPopularModalType = {
  open: boolean
  close: Dispatch<SetStateAction<boolean>>
}

const options = [
  {
    id: 0,
    title: 'Нет',
    value: 'none',
    disabled: true
  },
  {
    id: 1,
    title: 'Tashkent',
    value: 'tashkent'
  },
  {
    id: 2,
    title: 'Buxoro',
    value: 'buxoro'
  },
  {
    id: 3,
    title: 'Samarqand',
    value: 'samarqand'
  },
  {
    id: 4,
    title: 'Namangan',
    value: 'tashkent'
  }
]

const cards = [
  {
    id: 1,
    img: '1',
    title: 'Uchtepa tumani'
  },
  {
    id: 2,
    img: '2',
    title: 'Chilonzor tumani'
  },
  {
    id: 3,
    img: '3',
    title: 'Mirobod tumani'
  },
  {
    id: 4,
    img: '4',
    title: 'Yakkasaroy tumani'
  }
]

const PopularModal: FC<IPopularModalType> = ({ open, close }) => {
  const [selectVal, setSelectVal] = useState<string | null>(null)
  const searchParams = useSearchParams()
  // CLOSE
  const handleCloseModal = () => {
    close(prev => (prev = false))
  }
  // CHANGE
  const handleChangeValue = (value: ChangeEvent<HTMLSelectElement>) => {
    setSelectVal(value.target.value)
  }

  return (
    <Modal isOpen={open} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent p={'16px'}>
        <ModalHeader
          fontSize={{ base: '16px', sm: '16px', md: '22px', xl: '22px' }}
          p={{ base: '0', sm: '0', md: '10px', xl: '10px' }}
        >
          Поиск
        </ModalHeader>
        <Divider />
        <ModalCloseButton />
        <Box mt={'0.5em'}>
          <FormControl>
            <FormLabel htmlFor='select-podrazdel' fontSize={scssVariables.fonts.paragraph}>
              Выберите город:
            </FormLabel>
            <Select
              onChange={handleChangeValue}
              defaultValue={'none'}
              id='select-podrazdel'
              cursor={'pointer'}
              borderRadius={'4px'}
              h={{ base: '35px', sm: '35px', md: '40px', xl: '40px' }}
              fontSize={scssVariables.fonts.paragraph}
              _focus={{ boxShadow: 'none', border: '1px solid teal' }}
            >
              {options.map(item => {
                return (
                  <option disabled={item.disabled} key={item.id} value={item.value}>
                    {item.title}
                  </option>
                )
              })}
            </Select>
          </FormControl>
          {selectVal && (
            <SimpleGrid columns={1} spacing={'8px'} my={'16px'}>
              <Text color={'grey'} fontSize={scssVariables.fonts.paragraph}>
                Выберите подраздел:
              </Text>
              {cards.map(card => {
                return (
                  <Card
                    as={Link}
                    href={`/results?razdel=${searchParams.get('razdel')}&podrazdel=${card.title}&region=${selectVal}`}
                    key={card.id}
                    _hover={{ cursor: 'pointer', bg: scssVariables.blockBgColor, transition: '0.5s ease' }}
                  >
                    <CardBody
                      p={{ base: '8px', sm: '6px', md: '10px', xl: '16px' }}
                      display={'flex'}
                      alignItems={'center'}
                      gap={'5px'}
                    >
                      <Text fontSize={scssVariables.fonts.paragraph}>{'-'}</Text>
                      <Text fontSize={scssVariables.fonts.paragraph}>{card.title}</Text>
                    </CardBody>
                  </Card>
                )
              })}
            </SimpleGrid>
          )}
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default PopularModal
