import { postSavedOrg } from '@/@core/shared/api'
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

  // CREATE-SAVED
  const handleSavedorg = async () => {
    console.log(data.id, 'id')
    const body = {
      organization_id: data.id as string
    }
    const res = await postSavedOrg(body)

    if (!res) return null

    if (res.status === 201) {
      toast.success(t(`success`), { position: 'bottom-right' })
    }
  }

  return (
    <Icon
      as={Bookmark}
      color={'grey'}
      fill={'#6B7280'}
      role='button'
      _hover={{ fill: data.saved_organization?.length === 0 ? '#6B7280' : '#fff' }}
      aria-label='bookmarked'
      onClick={handleSavedorg}
      width={'20px'}
      height={'20px'}
    />
  )
}
