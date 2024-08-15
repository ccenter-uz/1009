import { deleteSavedOrg, postSavedOrg } from '@/@core/shared/api'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Icon } from '@chakra-ui/react'
import { FC } from 'react'
import { Bookmark } from 'react-feather'
import { toast } from 'react-toastify'

type Props = {
  data: any
}

export const BookmarkOrgs: FC<Props> = props => {
  const { data } = props
  const { t } = useLang()

  // CREATE-OR-DELETE-SAVED
  const handleSavedorg = async () => {
    if (!!data?.saved_organization?.length) {
      const res = await deleteSavedOrg(data?.saved_organization[0]?.id)

      if (!res) return null

      if (res.status === 204) {
        toast.success(t(`deleted`), { position: 'bottom-right' })
      }
    } else {
      const body = {
        organization_id: data.id as string
      }
      const res = await postSavedOrg(body)

      if (!res) return null

      if (res.status === 201) {
        toast.success(t(`success`), { position: 'bottom-right' })
      }
    }
  }

  return (
    <Icon
      as={Bookmark}
      color={'#6B7280'}
      fill={!!data?.saved_organization?.length ? '#6B7280' : 'white'}
      role='button'
      _hover={{ fill: !!data?.saved_organization?.length ? 'white' : '#6B7280' }}
      aria-label='bookmarked'
      onClick={handleSavedorg}
      width={'20px'}
      height={'20px'}
    />
  )
}
