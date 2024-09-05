'use client'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Icon,
  Image,
  Img,
  Text,
  Tooltip,
  useColorMode
} from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Link } from '@/navigation'
import Rate from '../../shared/UI/Rate'
import { useLang } from '@/@core/shared/hooks/useLang'
import { BookmarkOrgsAsync, DeleteOrgAsync } from '@/@core/feature'
import { Circle, Eye } from 'react-feather'
import { api } from '@/@core/apps/utils/api'
import { setColorbyStatus } from '@/@core/apps/utils/fn'

type IDataType = {
  data?: any
  href: string
  mycard?: boolean
  id?: number | string
}

const OrgCard: FC<IDataType> = ({ data, href, mycard, id }) => {
  const { colorMode } = useColorMode()
  const { t } = useLang()

  // CHECK STATUS
  const checkStatusOrgs: { [key: string]: string } = useMemo(() => {
    return { '-1': t('deleted'), '0': t('waiting_for_approval'), '1': t('accepted'), '2': t('rejected') }
  }, [])

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
              <Image
                src={api.defaults.baseURL + data?.pictures[0]?.image_link}
                w={'29px'}
                h={'29px'}
                bg={'lightgray'}
                borderRadius={'50%'}
                alt='avatar'
              />
              <Text fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}>
                {data?.organization_name || 'Театр в Ташкенте'}{' '}
              </Text>
            </Box>
            <Flex align={'center'} gap={'8px'}>
              {mycard && (
                <Flex align={'center'} gap={'4px'}>
                  <Circle
                    color={setColorbyStatus(data?.status)}
                    fill={setColorbyStatus(data?.status)}
                    width={'8px'}
                    height={'8px'}
                  />
                  <Text
                    color={setColorbyStatus(data?.status)}
                    fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
                  >
                    {checkStatusOrgs[data?.status]}
                  </Text>
                </Flex>
              )}
              <Text color={'grey'} fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}>
                {(data?.create_data && new Intl.DateTimeFormat('ru').format(new Date(data?.create_data))) ||
                  '02.02.2024'}
              </Text>
            </Flex>
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
            {data?.comment ||
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.`}
          </Text>
          <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'} gap={'2px'}>
            <img width={'15px'} height={'15px'} src='/eye-fill.svg' alt='eye-fill' />
            <Text color={'grey'} fontSize={{ base: '8px', sm: '8px', md: '11px', xl: '11px' }}>
              {t('seen')} - {String(data?.number_of_raters) || '2345'}
            </Text>
          </Box>
        </CardBody>
        <CardFooter
          p={{ base: '8px 10px', sm: '8px 10px', md: '10px 16px ', xl: '10px 16px ' }}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Rate
            disabled
            maxStars={5}
            initialValue={data?.common_rate}
            onRatingChange={val => console.log(val, 'value')}
          />
          <Box display={'flex'} alignItems={'center'} gap={'6px'}>
            {mycard ? (
              <Box display={'flex'} alignItems={'flex-start'} gap={'6px'}>
                <Tooltip label={t('edit')}>
                  <Link href={`/addorg?id=${data?.id}`}>
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
                <DeleteOrgAsync id={data?.id} />
                <Tooltip label={t('show')}>
                  <Link href={href}>
                    <Icon
                      as={Eye}
                      cursor={'pointer'}
                      color={'#64748B'}
                      _hover={{ opacity: '0.8' }}
                      w={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
                      h={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
                    />
                  </Link>
                </Tooltip>
              </Box>
            ) : (
              <BookmarkOrgsAsync data={data} />
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
