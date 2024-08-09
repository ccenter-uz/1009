import { create } from 'zustand'

const AddOrgSlicer = create(set => ({
  razdel: [],
  serviceType: [],
  setServiceType: (serviceType: any) => set({ serviceType }),
  setRazdel: (razdel: any) => set({ razdel }),
  podrazdel: [],
  setPodrazdel: (podrazdel: any) => set({ podrazdel }),
  photos: [],
  setPhotos: (photos: any) => set({ photos }),
  phones: [{ id: 1, value: '', type: '' }],
  setPhones: (phones: { id: number; value: string; type: string }[]) => set({ phones }),
  coordinates: [41.311151, 69.279737],
  setCoordinates: (coordinates: number[]) => set({ coordinates })
}))

export const useAddorgSlicer = () => {
  const phones = AddOrgSlicer((state: any) => state.phones)
  const photos = AddOrgSlicer((state: any) => state.photos)
  const setPhones = AddOrgSlicer((state: any) => state.setPhones)
  const setPhotos = AddOrgSlicer((state: any) => state.setPhotos)
  const coordinates = AddOrgSlicer((state: any) => state.coordinates)
  const setCoordinates = AddOrgSlicer((state: any) => state.setCoordinates)
  const razdel = AddOrgSlicer((state: any) => state.razdel)
  const setRazdel = AddOrgSlicer((state: any) => state.setRazdel)
  const podrazdel = AddOrgSlicer((state: any) => state.podrazdel)
  const setPodrazdel = AddOrgSlicer((state: any) => state.setPodrazdel)
  const serviceType = AddOrgSlicer((state: any) => state.serviceType)
  const setServiceType = AddOrgSlicer((state: any) => state.setServiceType)

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
    setServiceType
  }
}
