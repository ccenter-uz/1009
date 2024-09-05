import { setColorbyStatus } from '@/@core/apps/utils/fn'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import { Circle, Clock, Map, MapPin } from 'react-feather'
import dayjs from 'dayjs'
import { Link } from '@/navigation'

type Props = {
  title: string
  address: string
  status: string
  updated_date: string
  id: string
}

export const InProcessCard: FC<Props> = props => {
  const { title, address, status, updated_date, id } = props
  const { t } = useLang()

  // CHECK STATUS
  const checkStatusOrgs: { [key: string]: string } = useMemo(() => {
    return { '-1': t('deleted'), '0': t('waiting_for_approval'), '1': t('accepted'), '2': t('rejected') }
  }, [])

  return (
    <Card>
      <CardHeader p={'8px 16px'} pb={'0'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Heading flex={1} fontSize={scssVariables.fonts.paragraph}>
          {title}
        </Heading>
        <Text
          as={Flex}
          gap={'5px'}
          alignItems={'center'}
          color={setColorbyStatus(status)}
          textAlign={'end'}
          fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
        >
          <Circle color={setColorbyStatus(status)} fill={setColorbyStatus(status)} width={'8px'} height={'8px'} />
          {checkStatusOrgs[status]}
        </Text>
      </CardHeader>
      <CardBody p={{ base: '8px 5px', sm: '8px 16px', md: '8px 16px', xl: '8px 16px' }}>
        <Text
          as={Flex}
          gap={'5px'}
          alignItems={{ base: 'flex-start', md: 'center', xl: 'center' }}
          fontSize={scssVariables.fonts.span}
          color={scssVariables.textGreyColor}
        >
          <MapPin width={'16px'} height={'16px'} />
          {address}
        </Text>
      </CardBody>
      <CardFooter
        p={{ base: '8px 5px', sm: '8px 16px', md: '8px 16px', xl: '8px 16px' }}
        borderTop={'1px solid rgba(0,0,0,0.10)'}
      >
        <Flex w={'100%'} align={'center'} justify={'space-between'}>
          <Text
            as={Flex}
            gap={'5px'}
            alignItems={'center'}
            fontSize={scssVariables.fonts.span}
            color={scssVariables.textGreyColor}
          >
            <Clock width={'15px'} height={'15px'} />
            {dayjs(updated_date).format('DD.MM.YYYY HH:mm')}
          </Text>
          <Flex align={'center'} gap={'10px'}>
            <Button
              as={Link}
              href={`/addorg?id=${id}`}
              variant={'link'}
              fontWeight={400}
              fontSize={scssVariables.fonts.span}
            >
              {t('edit')}
            </Button>
            <Button
              as={Link}
              href={`/results/${id}`}
              variant={'link'}
              fontWeight={400}
              color={'blue.300'}
              fontSize={scssVariables.fonts.span}
            >
              {t('show')}
            </Button>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  )
}
