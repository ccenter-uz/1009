'use client'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Img,
  Text,
  Tooltip,
  useColorMode
} from '@chakra-ui/react'
import { FC } from 'react'
import ButtonGen from '../../shared/UI/Button'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Link } from '@/navigation'
import Rate from '../../shared/UI/Rate'
import { useLang } from '@/@core/shared/hooks/useLang'
import { useRouter } from 'next/navigation'

type IDataType = {
  data?: {
    title: string
    img: string
    date: string
    rate: number
    paragraph: string
    watched: string
    address: string
  }
  href: string
  mycard?: boolean
  id?: number | string
}

const OrgCard: FC<IDataType> = ({ data, href, mycard, id }) => {
  const { colorMode } = useColorMode()
  const router = useRouter()
  const { t } = useLang()

  return (
    <>
      <Card
        my={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
        boxShadow={scssVariables.boxShadow}
        borderRadius={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
      >
        <CardHeader p={0}>
          <Box
            p={{ base: '10px 10px 0 10px', sm: '10px 10px 0 10px', md: '16px 16px 0 16px', xl: '16px 16px 0 16px' }}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'} alignItems={'center'} gap={'8px'}>
              <Box w={'29px'} h={'29px'} bg={'lightgray'} borderRadius={'50%'}></Box>
              <Text fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}>
                {data?.title || 'Театр в Ташкенте'}{' '}
              </Text>
            </Box>
            <Text fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}>{data?.date || '02.02.2024'}</Text>
          </Box>
          <Divider m={'4px 0 8px 0'} color={'whitesmoke'} />
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={'8px'}
            p={{ base: '0 8px 8px 8px', sm: '0 8px 8px 8px', md: '0 16px 16px 16px', xl: '0 16px 16px 16px' }}
          >
            <img src='/location.svg' alt='location' width={'13px'} height={'13px'} />
            <Text fontSize={{ base: '10px', sm: '10px', md: '12px', xl: '12px' }} color={'grey'}>
              {data?.address || 'Мукумий, Дом-5'}
            </Text>
          </Box>
        </CardHeader>
        <CardBody
          bg={'rgb(177 185 197 / 20%)'}
          p={{ base: '8px 0.5em', sm: '8px 0.5em', md: '8px 1em', xl: '8px 1em' }}
        >
          <Text
            fontSize={{ base: '11px', sm: '11px', md: '14px', xl: '14px' }}
            color={colorMode !== 'dark' ? 'rgba(100, 116, 139, 1)' : 'whitesmoke'}
          >
            {data?.paragraph ||
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.`}
          </Text>
          <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'} gap={'2px'}>
            <img width={'15px'} height={'15px'} src='/eye-fill.svg' alt='eye-fill' />
            <Text color={'grey'} fontSize={{ base: '8px', sm: '8px', md: '11px', xl: '11px' }}>
              {t('seen')} - {data?.watched || '2345'}
            </Text>
          </Box>
        </CardBody>
        <CardFooter
          p={{ base: '8px 10px', sm: '8px 10px', md: '10px 16px ', xl: '10px 16px ' }}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Rate disabled maxStars={5} initialValue={4} onRatingChange={val => console.log(val, 'value')} />
          <Box display={'flex'} alignItems={'center'} gap={'6px'}>
            {mycard ? (
              <Box display={'flex'} alignItems={'center'} gap={'6px'}>
                <Tooltip label={t('edit')}>
                  <Link href={`/addorg?id=${id}`}>
                    <Img
                      cursor={'pointer'}
                      _hover={{ opacity: '0.8' }}
                      src='/pencil.svg'
                      alt='edit'
                      w={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
                      h={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
                    />
                  </Link>
                </Tooltip>
                <Tooltip label={t('delete')}>
                  <Img
                    cursor={'pointer'}
                    _hover={{ opacity: '0.8' }}
                    src='/delete.svg'
                    alt='delete'
                    w={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
                    h={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
                  />
                </Tooltip>
                <Tooltip label={t('show')}>
                  <Link href={href}>
                    <Img
                      cursor={'pointer'}
                      _hover={{ opacity: '0.8' }}
                      src='/eye-fill.svg'
                      alt='edit'
                      w={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
                      h={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
                    />
                  </Link>
                </Tooltip>
              </Box>
            ) : (
              <img
                src='/bookmark-fill.svg'
                alt='bookmark-fill'
                role='button'
                aria-label='bookmarked'
                width={'20px'}
                height={'20px'}
              />
            )}
            <Link href={href}>
              {!mycard && (
                <Button
                  variant={'unstyled'}
                  _hover={{ opacity: '0.8' }}
                  bg={colorMode === 'dark' ? '#526199' : scssVariables.gradientColor}
                  width={{ base: '100px', sm: '100px', md: '165px', xl: '165px' }}
                  height={{ base: '30px', sm: '30px', md: '35px', xl: '37px' }}
                  borderRadius={'8px'}
                  fontWeight={500}
                  color={'#fff'}
                  fontSize={{ base: '11px', sm: '11px', md: '14px', xl: '14px' }}
                >
                  {t('more')}
                </Button>
              )}
            </Link>
          </Box>
        </CardFooter>
      </Card>
    </>
  )
}

export default OrgCard
