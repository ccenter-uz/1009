import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useAddorgSlicer } from '@/@core/pages/AddOrg'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Link } from '@/navigation'
import {
  Box,
  Card,
  CardBody,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { FC } from 'react'

type IPopularModalType = {
  open: boolean
  close: () => void
}

const PopularModal: FC<IPopularModalType> = ({ open, close }) => {
  const searchParams = useSearchParams()
  const { podrazdel } = useAddorgSlicer()
  const { t } = useLang()

  return (
    <Modal isOpen={open} onClose={close}>
      <ModalOverlay />
      <ModalContent p={'16px'}>
        <ModalCloseButton />
        <Box mt={'0.5em'}>
          <SimpleGrid columns={1} spacing={'8px'} my={'16px'}>
            <Text color={'grey'} fontSize={scssVariables.fonts.paragraph}>
              {t('choose_podrazdel')}
            </Text>
            {podrazdel?.map((card: { id: number; title: string }) => {
              return (
                <Card
                  as={Link}
                  href={`/results?razdel=${searchParams.get('razdel')}&podrazdel=${card.id}`}
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
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default PopularModal
