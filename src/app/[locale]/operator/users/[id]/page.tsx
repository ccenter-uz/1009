'use client'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Box } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { FC } from 'react'

const UserTransactions: FC = () => {
  const query = useParams()
  const breadcrumbLinks = [
    {
      id: 1,
      title: 'Пользователи'
    },
    {
      id: 2,
      title: query.id.toString()
    }
  ]

  return (
    <Box className='wrapper fade-in' minH={'100dvh'}>
      <BreadCrumb item={breadcrumbLinks} />

      <Box>USER {query.id}</Box>
    </Box>
  )
}

export default UserTransactions
