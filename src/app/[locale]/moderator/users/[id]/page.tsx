'use client'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Box, TabPanels, Tabs } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { FC } from 'react'
import TabListUser from './_components/Tabs'
import TransactionPanel from './_components/TransactionPanel'

const UserTransactions: FC = () => {
  const query = useParams()
  const breadcrumbLinks = [
    {
      id: 1,
      title: 'Пользователи',
      href:'/moderator/users'
    },
    {
      id: 2,
      title: query.id.toString()
    }
  ]

  return (
    <Box className='wrapper fade-in' minH={'100dvh'} aria-label='section'>
      <BreadCrumb item={breadcrumbLinks} />

      <Tabs>
        <TabListUser />
        <TabPanels>
          <TransactionPanel />
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default UserTransactions
