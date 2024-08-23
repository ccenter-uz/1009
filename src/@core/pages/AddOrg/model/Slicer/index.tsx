import { getOneOrganization, getPodrazdel, getRazdel, getServiceType } from '@/@core/shared/api'
import { create } from 'zustand'

const AddOrgSlicer = create(set => ({
  // VARS
  razdel: [],
  serviceType: [],
  podrazdel: [],
  photos: [],
  pictures_delete: [],
  pictures_create: [],
  phones: [{ id: 1, value: '', type: '' }],
  coordinates: [41.311151, 69.279737],
  // SETTERS
  setPictures_delete: (pictures_delete: any) => set({ pictures_delete }),
  setPictures_create: (pictures_create: any) => set({ pictures_create }),
  setServiceType: (serviceType: any) => set({ serviceType }),
  setRazdel: (razdel: any) => set({ razdel }),
  setPodrazdel: (podrazdel: any) => set({ podrazdel }),
  setPhotos: (photos: any) => set({ photos }),
  setPhones: (phones: { id: number; value: string; type: string }[]) => set({ phones }),
  setCoordinates: (coordinates: number[]) => set({ coordinates }),
  // GETTERS
  GET: async () => {
    const res = await Promise.all([getRazdel(), getPodrazdel(), getServiceType()])

    if (res[0]?.status !== 200 || res[1]?.status !== 200 || res[2]?.status !== 200) return

    const razdel = res[0]?.data
    const podrazdel = res[1]?.data
    const serviceType = res[2]?.data

    if (podrazdel) set({ podrazdel })
    if (serviceType) set({ serviceType })
    if (razdel) set({ razdel })
  },

  GET_FOR_EDIT: async (id: string) => {
    const res = await getOneOrganization(id)

    if (!res) return

    if (res?.status === 200) {
      set({
        phones: res?.data[0]?.phones?.map((item: any) => ({
          id: item?.id,
          value: item?.number,
          type: item?.type_number
        }))
      })
      set({ photos: res?.data[0]?.pictures })
      set({
        coordinates: [
          parseFloat(res?.data[0]?.location.coordinates?.lat),
          parseFloat(res?.data[0]?.location.coordinates?.lon)
        ]
      })

      return res?.data
    }
  }
}))

export const useAddorgSlicer = () => {
  const {
    razdel,
    setRazdel,
    podrazdel,
    setPodrazdel,
    phones,
    photos,
    setPhones,
    setPhotos,
    coordinates,
    setCoordinates,
    serviceType,
    setServiceType,
    GET,
    GET_FOR_EDIT,
    pictures_delete,
    setPictures_delete,
    setPictures_create,
    pictures_create
  } = AddOrgSlicer((state: any) => state)

  return {
    razdel,
    setRazdel,
    podrazdel,
    setPodrazdel,
    phones,
    photos,
    setPhones,
    setPhotos,
    coordinates,
    setCoordinates,
    serviceType,
    setServiceType,
    GET,
    GET_FOR_EDIT,
    pictures_delete,
    setPictures_delete,
    setPictures_create,
    pictures_create
  }
}
