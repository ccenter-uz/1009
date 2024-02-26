'use client'
import { Box, Card, CardBody, CardFooter, CardHeader, Divider, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'
import ButtonGen from '../Button'
import { scssVariables } from '@/@core/utils/scss-variables'

type IDataType = {
  data?: {
    title: string
    img: string
    date: string
    rate: string | number
    paragraph: string
    watched: string
  }
}

const OrgCard: FC<IDataType> = ({ data }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Card my={'20px'} boxShadow={scssVariables.boxShadow} borderRadius={'16px'}>
        <CardHeader
          p={{ base: '10px', sm: '10px', md: '20px', xl: '20px' }}
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
        </CardHeader>
        <Divider color={'lightgray'} />
        <CardBody p={{ base: '10px', sm: '10px', md: '20px', xl: '20px' }}>
          <Box display={'flex'} alignItems={'center'} gap={'8px'}>
            <img width={'20px'} height={'20px'} src='/star-fill.svg' alt='rating' />
            <img width={'20px'} height={'20px'} src='/star-fill.svg' alt='rating' />
            <img width={'20px'} height={'20px'} src='/star-fill.svg' alt='rating' />
            <img width={'20px'} height={'20px'} src='/star-emty.svg' alt='rating' />
          </Box>
          <Text
            my={'17px'}
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
              Просмотрено - {data?.watched || '2345'}
            </Text>
          </Box>
        </CardBody>
        <CardFooter
          p={{ base: '0 20px 20px 20px', sm: '0 20px 20px 20px', md: '0 20px 20px 20px', xl: '0 20px 20px 20px' }}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Text
            fontSize={{ base: '11px', sm: '11px', md: '14px', xl: '14px' }}
            color={colorMode !== 'dark' ? 'rgba(100, 116, 139, 1)' : 'whitesmoke'}
          >
            Оставить коментарии
          </Text>
          <Box display={'flex'} alignItems={'center'} gap={'6px'}>
            <img width={'24px'} height={'24px'} src='/bookmark-fill.svg' alt='bookmark' />
            <ButtonGen
              width={{ base: '100px', sm: '100px', md: '165px', xl: '165px' }}
              height={{ base: '30px', sm: '30px', md: '35px', xl: '37px' }}
              radius={'8px'}
              fontWeight={500}
              fontSize={{ base: '11px', sm: '11px', md: '14px', xl: '14px' }}
            >
              Подробнее
            </ButtonGen>
          </Box>
        </CardFooter>
      </Card>
    </>
  )
}

export default OrgCard
