import { getOneOrganization, getPodrazdel, getRazdel, getSegments, getServiceType } from '@/@core/shared/api'
import { create } from 'zustand'

const AddOrgSlicer = create(set => ({
  // VARS
  loading: false,
  razdel: [],
  serviceType: [],
  podrazdel: [],
  photos: [],
  pictures_delete: { delete: [] },
  pictures_create: [],
  segments: [],
  phones: [{ id: 1, value: '', type: '', action: '' }],
  coordinates: ['41.311081', '69.240562'],
  // SETTERS
  setPictures_delete: (pictures_delete: any) => set({ pictures_delete }),
  setPictures_create: (pictures_create: any) => set({ pictures_create }),
  setServiceType: (serviceType: any) => set({ serviceType }),
  setRazdel: (razdel: any) => set({ razdel }),
  setPodrazdel: (podrazdel: any) => set({ podrazdel }),
  setPhotos: (photos: any) => set({ photos }),
  setPhones: (phones: { id: number; value: string; type: string }[]) => set({ phones }),
  setCoordinates: (coordinates: number[]) => set({ coordinates }),
  setLoading: (loading: boolean) => set({ loading }),
  // GETTERS
  GET: async () => {
    set({ loading: true })
    const res = await Promise.all([
      getRazdel({ all: true }),
      getPodrazdel({ all: true }),
      getServiceType({ all: true }),
      getSegments({ all: true })
    ])

    if (res[0]?.status !== 200 || res[1]?.status !== 200 || res[2]?.status !== 200) return set({ loading: false })

    const razdel = res[0]?.data?.result
    const podrazdel = res[1]?.data?.result
    const serviceType = res[2]?.data?.result
    const segments = res[3]?.data?.result

    set({ loading: false })

    if (podrazdel) set({ podrazdel })
    if (serviceType) set({ serviceType })
    if (razdel) set({ razdel })
    if (segments) set({ segments })
  },

  GET_FOR_EDIT: async (id: string) => {
    set({ loading: true })
    const res = await getOneOrganization(id)

    if (!res) return set({ loading: false })

    if (res?.status === 200) {
      set({
        phones: res?.data[0]?.phones?.map((item: any) => ({
          id: item?.id,
          value: item?.number,
          type: item?.type_number,
          action: 'update'
        }))
      })
      set({ photos: res?.data[0]?.pictures })
      if (res?.data[0]?.location?.coordinates?.lat && res?.data[0]?.location?.coordinates?.lon) {
        set({
          coordinates: [
            parseFloat(res?.data[0]?.location.coordinates?.lat),
            parseFloat(res?.data[0]?.location.coordinates?.lon)
          ]
        })
      }

      set({ loading: false })

      return res?.data
    }
  }
}))

export const useAddorgSlicer: any = () => {
  const {
    segments,
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
    pictures_create,
    loading,
    setLoading
  } = AddOrgSlicer((state: any) => state)

  return {
    segments,
    loading,
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
    pictures_create,
    setLoading
  }
}
