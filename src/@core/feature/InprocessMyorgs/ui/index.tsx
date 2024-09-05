'use client'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useDisclosure } from '@/@core/shared/hooks/useDisclosure'
import { useLang } from '@/@core/shared/hooks/useLang'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex
} from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import { useInProcessMyorgs } from '../model/Slicer'
import { InProcessCard } from '@/@core/entities/InProcessCard'

export const InProcessMyorgs: FC = () => {
  const { t } = useLang()
  const { onOpen, isOpen, onClose } = useDisclosure()
  const { GET, inprocessMyorgsData } = useInProcessMyorgs()

  //   LOAD
  useEffect(() => {
    inprocessMyorgsData.length === 0 && GET()
  }, [])

  return (
    <Box className='fade-in' w={'100%'}>
      <Flex justify={'flex-end'} align={'center'}>
        <Button
          variant={'outline'}
          color={'teal.400'}
          fontWeight={400}
          w={{ base: '100%', sm: '100%', md: '150px', xl: '150px' }}
          h={{ base: '30px', sm: '30px', md: '35px', xl: '35px' }}
          fontSize={scssVariables.fonts.paragraph}
          onClick={onOpen}
        >
          {t('in-process')}
        </Button>
      </Flex>

      {/* DRAWER */}
      <Drawer isOpen={isOpen} onClose={onClose} placement={'right'} size={'md'} blockScrollOnMount>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody p={'8px 16px'}>
            <Flex flexDirection={'column'} gap={'10px'}>
              {inprocessMyorgsData?.map(
                (item: {
                  id: string
                  organization_name: string
                  address: string
                  status: string
                  update_date: string
                  organization_id: { id: string }
                }) => (
                  <InProcessCard
                    key={item?.id}
                    title={item?.organization_name}
                    address={item?.address}
                    status={item?.status}
                    updated_date={item?.update_date}
                    id={item?.organization_id?.id}
                  />
                )
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
