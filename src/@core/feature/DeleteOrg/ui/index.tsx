import { deleteOrganization } from '@/@core/shared/api'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Img, Tooltip } from '@chakra-ui/react'
import { FC } from 'react'
import { toast } from 'react-toastify'

type Props = {
  id: string
}

export const DeleteOrg: FC<Props> = props => {
  const { id } = props
  const { t } = useLang()

  const onDelete = async () => {
    const res = await deleteOrganization(id)

    if (!res) return null

    if (res.status === 204) {
      toast.success(t('deleted'), { position: 'bottom-right' })
    }
  }

  return (
    <Tooltip label={t('delete')}>
      <Img
        onClick={onDelete}
        cursor={'pointer'}
        _hover={{ opacity: '0.8' }}
        src='/delete.svg'
        alt='delete'
        w={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
        h={{ base: '20px', sm: '20px', md: '22px', xl: '22px' }}
      />
    </Tooltip>
  )
}
