'use client'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Badge } from '@/@core/shared/UI/Badge'
import { MyOrgsAsync } from '@/@core/pages/MyOrg'

const MyOrganizations: FC = () => {
  const { t } = useLang()
  const breadcrumblinks = [
    {
      id: 1,
      title: t('myorgs')
    },
    {
      id: 2,
      title: t('all')
    }
  ]

  return (
    <Box id='myorg' className='wrapper fade-in' aria-label='section'>
      <BreadCrumb item={breadcrumblinks} />
      <Badge title={t('myorgs')} />
      <MyOrgsAsync />
    </Box>
  )
}

export default MyOrganizations
