import { api } from '@/@core/utils/api'
// ENTERTAINMENT->LINKS

// CREATE-CAT
export const createCat = async (values: string) => {
  try {
    const body = values
    const res = await api.post('EntertainmentCategories/create', body)
    if (!res) return null
    if (res.status === 201) return { status: 'success', message: 'Created' }
  } catch (err) {
    console.log(err)
  }
}

// DELETE-CAT
export const deleteCat = async (id: number) => {
  try {
    const res = await api.delete(`EntertainmentCategories/delete/${id}`)

    if (!res) return null
    if (res.status === 204) return { status: 'success', message: 'Deleted' }
  } catch (err) {
    console.log(err, 'err')
  }
}

// UPDATE-CAT
export const updateCat = async (id: number, value: string) => {
  try {
    const body = value
    const res = await api.patch(`EntertainmentCategories/update/${id}`, body)
    if (!res) return null
    if (res.status === 204) return { status: 'success', message: 'Updated' }
  } catch (err) {
    console.log(err, 'err')
  }
}



// CREATE
export const createContent = async (url: string, body: any) => {
  try {
    const res = await api.post(`${url}/create`, body)
    if (!res) return null
    if (res.status === 201) return { status: 'success', message: 'Created' }
  } catch (err) {
    console.log(err)
  }
}

// UPDATE
export const updateContent = async (url: string, body: any, id: string | number) => {
  try {
    const res = await api.patch(`${url}/update/${id}`, body)

    if (!res) return null
    if (res.status === 204) return { status: 'success', message: 'Updated' }
  } catch (err) {
    console.log(err, 'err')
  }
}

// DELETE
export const deleteContent = async (url: string, id: any) => {
  try {
    const res = await api.delete(`${url}/delete/${id}`)
    if (!res) return null
    if (res.status === 204) return { status: 'success', message: 'Deleted' }
  } catch (err) {
    console.log(err)
  }
}
