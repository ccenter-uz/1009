import Swal from 'sweetalert2'
import { deleteContent } from '../api/actions'
import { getUrl } from '@/@core/apps/utils/fn'
import { toast } from 'react-toastify'
import { revalidatePath } from 'next/cache'

// DELETE
export const handleDelete = async (id: string | number, lastLink: string): Promise<string | any> => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'if you delete, content inside also will be removed and you won`t be able to revert it!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async result => {
    if (result.isConfirmed) {
      const res = await deleteContent(`${getUrl(lastLink)}`, id)
      if (res?.status === 'success') {
        toast.success(res.message, { position: 'bottom-right' })

        setTimeout(() => window.location.reload(), 1500)
      }
    }
  })
}
