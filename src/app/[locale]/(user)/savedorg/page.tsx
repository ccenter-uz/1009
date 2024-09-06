'use client'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { Badge } from '@/@core/shared/UI/Badge'
import { useLang } from '@/@core/shared/hooks/useLang'
import { SavedOrgsAsync } from '@/@core/pages/SavedOrg'

const SavedOrganizations: FC = () => {
  const { t } = useLang()
  const breadcrumblinks = [
    {
      id: 1,
      title: t('savedorgs')
    },
    {
      id: 2,
      title: t('all')
    }
  ]

  return (
    <Box aria-label='section' id='savedorg' className='wrapper fade-in'>
      <BreadCrumb item={breadcrumblinks} />
      <Badge title={t('savedorgs')} />
      <SavedOrgsAsync />
    </Box>
  )
}

export default SavedOrganizations
